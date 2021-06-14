/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const { Company } = require('../../../models');

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
    }
    Company.create(companyData);
  });
}
