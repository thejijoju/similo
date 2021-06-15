/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const { Company } = require('../../../models');

function convertRevenueToNumber(revenue) {
  let multiplier = 1000;
  const stringMultiplier = revenue.split(' ')[1];
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

export default function handler() {
  const data = JSON.parse(
    fs.readFileSync(`${process.cwd()}/pages/api/companies/output.json`, 'utf8')
  );
  data.forEach((company) => {
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
    }
    Company.create(companyData);
  });
}
