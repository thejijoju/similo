/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const fs = require('fs');

const passport = require('passport');
const nc = require('next-connect')();
const csv = require('csv-parser');
const { QueryTypes } = require('sequelize');

const { csvUploader } = require('../../../../../config/multer');
const {
  Company,
  Location,
  CompanyLocation,
  Expertise,
  CompanyExpertise,
  Industry,
  CompanyIndustry,
} = require('../../../../../models');
const sequelize = require('../../../../../config/db');

const importLogo = require('../../../../../helpers/importLogo');
const convertRevenueToNumber = require('../../../../../helpers/convertRevenueToNumber');

function formatCompaniesData(companies) {
  let formattedCompaniesData = [];
  companies.forEach((company, index) => {
    let companyString = JSON.stringify(company);
    companyString = companyString.replace(/Company or Brand name/g, 'name');
    companyString = companyString.replace(/Logo link/g, 'logoPath');
    companyString = companyString.replace(/Website Link/g, 'websiteUrl');
    companyString = companyString.replace(/HQ/g, 'HQLocation');
    companyString = companyString.replace(/Locations/g, 'locations');
    companyString = companyString.replace(
      /Parent Organization/g,
      'parentCompany'
    );
    companyString = companyString.replace(/Founder/g, 'founder');
    companyString = companyString.replace(/Industry & Keyword/g, 'industry');
    // companyString = companyString.replace(/Company Size/g, 'size');
    companyString = companyString.replace(
      /Number of employees/g,
      'employeesCount'
    );
    companyString = companyString.replace(/Revenue/g, 'revenue');
    companyString = companyString.replace(/Founded/g, 'yearOfFoundation');
    companyString = companyString.replace(/Type/g, 'type');
    companyString = companyString.replace(/Expertise/g, 'expertise');
    companyString = companyString.replace(/Subsidiaries/g, 'subsidiaries');
    companyString = companyString.replace(/Key people/g, 'keyPeople');
    companyString = companyString.replace(/Area served/g, 'areaServed');

    const companyObject = JSON.parse(companyString);
    companyObject.order = index + 1;

    formattedCompaniesData.push(companyObject);
  });

  formattedCompaniesData = formattedCompaniesData.map((company) => {
    const companyData = company;
    for (const key in companyData) {
      if (companyData[key] === '') {
        // eslint-disable-next-line no-unused-expressions
        companyData[key] = null;
      }
      if (key === 'yearOfFoundation' && companyData[key] !== null) {
        companyData[key] = +companyData[key];
      }
      if (key === 'revenue' && companyData[key] !== null) {
        companyData[key] = convertRevenueToNumber(companyData[key]);
      }
      if (key === 'employeesCount' && companyData[key] !== null) {
        companyData[key] = parseInt(companyData[key].replace(/,/g, ''), 10);
      }
      if (key === 'expertise' && companyData[key] !== null) {
        const tags = companyData[key]
          .split(',')
          .map((tag) => tag.toLowerCase());
        companyData[key] = tags.join(',');
      }
      if (typeof companyData[key] === 'string') {
        companyData[key] = companyData[key].trim();
      }
    }
    return companyData;
  });

  return formattedCompaniesData;
}

async function addLocations(companies) {
  const locationsStrings = [];
  const locationsSet = new Set();

  companies.forEach((company) => {
    if (company.locations) {
      locationsStrings.push(company.locations);
    }
  });

  locationsStrings.forEach((location) => {
    const locationsArray = location.split(';');
    locationsArray.forEach((location2) => locationsSet.add(location2.trim()));
  });

  const promises = [];

  locationsSet.forEach((location) => {
    const city = location.split(' -- ')[1];
    const country = location.split(' -- ')[0];
    if (!city || !country) {
      return;
    }
    promises.push(Location.findOrCreate({ where: { city, country } }));
  });

  return Promise.all(promises);
}

async function addCompanyLocations(companies) {
  const promises = [];
  companies.forEach((company) => {
    if (!company.locations) {
      return;
    }
    const locations = company.locations.split(';');
    locations.forEach(async (location) => {
      let city = location.split(' -- ')[1];
      let country = location.split(' -- ')[0];

      if (!city) {
        city = null;
      } else {
        city = city.trim();
      }

      if (!country) {
        country = null;
      } else {
        country = country.trim();
      }

      const locationFromDB = await Location.findOne({
        where: { country, city },
      });

      if (locationFromDB) {
        promises.push(
          CompanyLocation.findOrCreate({
            where: {
              companyId: company.id,
              locationId: locationFromDB.id,
            },
          })
        );
      }
    });
  });
  return Promise.all(promises);
}

function addExpertises(companies) {
  const expertisesStrings = [];
  const expertisesSet = new Set();

  companies.forEach((company) => {
    if (company.expertise) {
      expertisesStrings.push(company.expertise);
    }
  });

  expertisesStrings.forEach((expertise) => {
    const expertisesArray = expertise.split(',');
    expertisesArray.forEach((expertise2) => {
      if (expertise2 === '') {
        return;
      }
      expertisesSet.add(expertise2.trim());
    });
  });

  const promises = [];

  expertisesSet.forEach((expertise) => {
    promises.push(
      Expertise.findOrCreate({ where: { expertiseName: expertise } })
    );
  });

  return Promise.all(promises);
}

async function addCompanyExpertises(companies) {
  const promises = [];
  companies.forEach((company) => {
    if (!company.expertise) {
      return;
    }
    const expertises = company.expertise.split(',');
    expertises.forEach(async (expertise) => {
      const expertiseFromDB = await Expertise.findOne({
        where: { expertiseName: expertise.trim() },
      });

      if (expertiseFromDB) {
        promises.push(
          CompanyExpertise.findOrCreate({
            where: { companyId: company.id, expertiseId: expertiseFromDB.id },
          })
        );
      }
    });
  });

  return Promise.all(promises);
}

async function addCompanyIndustries(companies) {
  const promises = [];
  companies.forEach((company) => {
    if (!company.industry) {
      return;
    }
    const industries = company.industry.split(',');
    industries.forEach(async (industry) => {
      const industryFromDB = await Industry.findOne({
        where: { industryName: industry.trim() },
      });

      if (industryFromDB) {
        promises.push(
          CompanyIndustry.findOrCreate({
            where: { companyId: company.id, industryId: industryFromDB.id },
          })
        );
      }
    });
  });

  return Promise.all(promises);
}

function addSearchVector(companies) {
  const companiesNames = companies.map((company) => `'${company.name}'`);

  return sequelize.query(
    `UPDATE "Companies" SET "searchVector" = to_tsvector(name || ' ' || coalesce("HQLocation", '') 
      || ' ' || coalesce(locations, '') || ' ' 
      || coalesce(expertise, '') || ' ' || coalesce(industry, '') || ' ' || coalesce("keyPeople", '') || ' ' || coalesce("areaServed", '')) 
      WHERE name IN (${companiesNames.join(',')})`,
    { type: QueryTypes.UPDATE }
  );
}

async function addIndustries(companies) {
  const industriesSet = new Set();

  companies.forEach((company) => {
    if (company.industry) {
      const industriesArray = company.industry.split(',');
      industriesArray.forEach((industry) => {
        industriesSet.add(industry);
      });
    }
  });

  const industriesArray = [];

  industriesSet.forEach((industry) => {
    industriesArray.push({ industryName: industry.trim() });
  });

  return Industry.bulkCreate(industriesArray, {
    updateOnDuplicate: ['industryName'],
  });
}

function importLogos(companies) {
  const promises = [];
  companies.forEach((company) => promises.push(importLogo(company)));
  return Promise.all(promises);
}

nc.all('*', passport.authenticate('jwt'));
nc.post('*', csvUploader.single('file'));

nc.post('*', (req, res) => {
  if (!req.file) {
    return res.status(400);
  }
  let companies = [];
  const stream = fs
    .createReadStream(
      `${process.cwd()}/pages/api/admin/companies/import/companies.csv`
    )
    .pipe(csv());
  stream.on('data', (data) => companies.push(data));
  stream.on('end', async () => {
    companies = formatCompaniesData(companies);
    let createdOrUpdatedCompanies = [];
    try {
      createdOrUpdatedCompanies = await Company.bulkCreate(companies, {
        updateOnDuplicate: Object.keys(Company.rawAttributes).filter(
          (field) =>
            field !== 'id' &&
            field !== 'industryId' &&
            field !== 'logoLocalPath'
        ),
        returning: true,
      });
      await addLocations(createdOrUpdatedCompanies);
      await addSearchVector(createdOrUpdatedCompanies);
      await addCompanyLocations(createdOrUpdatedCompanies);
      await addExpertises(createdOrUpdatedCompanies);
      await addCompanyExpertises(createdOrUpdatedCompanies);
      await addIndustries(createdOrUpdatedCompanies);
      await addCompanyIndustries(createdOrUpdatedCompanies);
      await importLogos(createdOrUpdatedCompanies);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 'fail', message: error.message, error });
    }
    res.json({
      status: 'success',
      data: {
        companiesAddedCount: createdOrUpdatedCompanies.length,
        companiesNotAddedCount:
          companies.length - createdOrUpdatedCompanies.length,
        companies: createdOrUpdatedCompanies,
        rawCompanies: companies,
      },
    });
  });
});

export default nc;
