/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');

const fsExtra = require('fs-extra');
const { QueryTypes } = require('sequelize');

const { Company } = require('../../../models');
const sequelize = require('../../../config/db');
const importLogo = require('../../../helpers/importLogo');
const { UPLOADS_PATH, LOGOS_PATH } = require('../../../constants/index');

function convertRevenueToNumber(revenue) {
  let multiplier = 1000;
  const stringMultiplier = revenue.trim().split(' ')[1];
  if (stringMultiplier === 'million') {
    multiplier = 1000000;
  } else if (stringMultiplier === 'billion') {
    multiplier = 1000000000;
  }

  let value = revenue.split(' ')[0];
  value = value.replace(/€/g, '');
  value = parseFloat(value);
  return value * multiplier;
}

export default async function handler(req, res) {
  if (req.query.addVector) {
    return sequelize
      .query(
        `UPDATE "Companies" SET "searchVector" = to_tsvector(name || ' ' || coalesce("HQLocation", '') 
    || ' ' || coalesce(locations, '') || ' ' 
    || coalesce(expertise, '') || ' ' || coalesce(industry, ''))`,
        { type: QueryTypes.UPDATE }
      )
      .then(() => {
        res.json({ status: 'success' });
      })
      .catch((error) => {
        console.log(error);
        res.json({ status: 'fail', message: error.message });
      });
  }

  await Company.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });

  fsExtra.emptyDirSync(path.join(UPLOADS_PATH, LOGOS_PATH));

  const promises = [];
  const data = JSON.parse(
    fs.readFileSync(`${process.cwd()}/pages/api/companies/output.json`, 'utf8')
  );
  data.forEach(async (company) => {
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
      if (key === 'logoPath' && companyData[key] !== null) {
        // eslint-disable-next-line no-await-in-loop
        companyData.logoLocalPath = await importLogo(companyData.logoPath);
      }
    }
    promises.push(Company.create(companyData));
  });
  Promise.all(promises)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: 'fail', message: error.message });
    });
}
