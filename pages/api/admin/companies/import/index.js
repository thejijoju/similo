/* eslint-disable no-param-reassign */
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
  CSR,
  CompanyCSR,
  CSRLink,
  ExpertiseLink,
} = require('../../../../../models');
const sequelize = require('../../../../../config/db');

const importLogo = require('../../../../../helpers/importLogo');
const convertRevenueToNumber = require('../../../../../helpers/convertRevenueToNumber');
const getStockData = require('../../../../../helpers/getStockData');
const getCompanyInfo = require('../../../../../helpers/getCompanyInfo');

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
    companyString = companyString.replace(
      /Diversity \(Underrepresented minorities\)/g,
      'hasUderrepresentedMinorities'
    );
    companyString = companyString.replace(
      /Diversity \(Female CEO\)/g,
      'hasFemaleCEO'
    );
    companyString = companyString.replace(/CSR/g, 'csr');
    companyString = companyString.replace(/expertise Links/g, 'expertiseLinks');
    companyString = companyString.replace(/Stock symbol/g, 'stockSymbol');
    companyString = companyString.replace(/About/g, 'about');

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

      if (key === 'hasUderrepresentedMinorities' || key === 'hasFemaleCEO') {
        if (companyData[key] === 'Yes') {
          companyData[key] = true;
        } else {
          companyData[key] = false;
        }
      }

      if (key === 'csr' && companyData[key] !== null) {
        const csrTags = companyData[key].split(',');
        const csrArray = [];
        const csrLinksArray = [];
        for (const tag of csrTags) {
          const csrTagSpliited = tag.split(' -- ');
          csrArray.push(csrTagSpliited[0]);
          csrLinksArray.push({
            companyName: companyData.name,
            csrName: csrTagSpliited[0],
            url: csrTagSpliited[1],
          });
        }
        companyData.csrLink = csrLinksArray;
        companyData[key] = csrArray.join(',');
      }

      if (key === 'expertiseLinks' && companyData[key] !== null) {
        const expertiseLinks = companyData[key].split(',');
        const expertiseLinksArray = [];
        for (const tag of expertiseLinks) {
          const expertiseLinkSpliited = tag.split(' -- ');
          expertiseLinksArray.push({
            companyName: companyData.name,
            expertiseName: expertiseLinkSpliited[0],
            url: expertiseLinkSpliited[1],
          });
        }
        companyData.expertiseLinks = expertiseLinksArray;
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
      || coalesce(expertise, '') || ' ' || coalesce(industry, '') || ' ' || coalesce("keyPeople", '') || ' ' || coalesce("areaServed", '') || ' ' || coalesce("csr", '')) 
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

async function addCSR(companies) {
  const csrStrings = [];
  const csrSet = new Set();

  companies.forEach((company) => {
    if (company.csr) {
      csrStrings.push(company.csr);
    }
  });

  csrStrings.forEach((csrTag) => {
    const expertisesArray = csrTag.split(',');
    expertisesArray.forEach((csrTag2) => {
      if (csrTag2 === '') {
        return;
      }
      csrSet.add(csrTag2.trim());
    });
  });

  const promises = [];

  csrSet.forEach((csrTag) => {
    promises.push(CSR.findOrCreate({ where: { csrName: csrTag } }));
  });

  return Promise.all(promises);
}

async function addCompanyCSR(companies) {
  const promises = [];
  companies.forEach((company) => {
    if (!company.csr) {
      return;
    }
    const csrTags = company.csr.split(',');
    csrTags.forEach(async (csr) => {
      const csrFromDB = await CSR.findOne({
        where: { csrName: csr.trim() },
      });

      if (csrFromDB) {
        promises.push(
          CompanyCSR.findOrCreate({
            where: { companyId: company.id, csrId: csrFromDB.id },
          })
        );
      }
    });
  });

  return Promise.all(promises);
}

async function addCSRLinks(companies) {
  const promises = [];
  console.log(companies[0]);
  companies.forEach(async (company) => {
    if (!company.csrLink) {
      return;
    }

    const companyFromDB = await Company.findOne({
      where: { name: company.name },
    });
    if (companyFromDB) {
      company.csrLink.forEach((link) => {
        promises.push(
          CSRLink.findOrCreate({
            where: {
              companyId: companyFromDB.id,
              csrName: link.csrName.trim(),
              url: link.url,
            },
          })
        );
      });
    }
  });

  return Promise.all(promises);
}

async function addExpertiseLinks(companies) {
  const promises = [];
  companies.forEach(async (company) => {
    if (!company.expertiseLinks) {
      return;
    }

    const companyFromDB = await Company.findOne({
      where: { name: company.name },
    });
    if (companyFromDB) {
      company.expertiseLinks.forEach((link) => {
        promises.push(
          ExpertiseLink.findOrCreate({
            where: {
              companyId: companyFromDB.id,
              expertiseName: link.expertiseName.trim(),
              url: link.url,
            },
          })
        );
      });
    }
  });

  return Promise.all(promises);
}

function importLogos(companies) {
  const promises = [];
  companies.forEach((company) => promises.push(importLogo(company)));
  return Promise.all(promises);
}

function addStockData(formattedCompanies) {
  const stockSymbols = formattedCompanies.map((company) => company.stockSymbol);
  return getStockData(stockSymbols).then((stockData) => {
    formattedCompanies.forEach((company) => {
      if (!stockData[company.stockSymbol]) {
        return;
      }
      company.stockData = JSON.stringify(stockData[company.stockSymbol]);
      company.marketCap = stockData[company.stockSymbol].marketCap;
      company.stockPrice = stockData[company.stockSymbol].stockPrice;
      company.volume = stockData[company.stockSymbol].volume;
      company.open = stockData[company.stockSymbol].open;
      company.priceEps = stockData[company.stockSymbol].priceEps;
    });
  });
}

function addCompanyInfo(formattedCompanies) {
  const stockSymbols = formattedCompanies.map((company) => company.stockSymbol);
  return getCompanyInfo(stockSymbols).then((companyInfoEl) => {
    formattedCompanies.forEach((company) => {
      if (!companyInfoEl[company.stockSymbol]) {
        return;
      }
      company.about = companyInfoEl[company.stockSymbol].about;
      company.keyPeople = companyInfoEl[company.stockSymbol].keyPeople;
    });
  });
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
      await addStockData(companies);
      await addCompanyInfo(companies);
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
      await addCSR(createdOrUpdatedCompanies);
      await addCompanyCSR(createdOrUpdatedCompanies);
      await addCSRLinks(companies);
      await addExpertiseLinks(companies);
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
