const { Company, Industry } = require('../../../models');

export default async function handler(req, res) {
  const companies = await Company.findAll({});
  const industriesSet = new Set();

  companies.forEach((company) => {
    if (company.industry) {
      industriesSet.add(company.industry);
    }
  });

  const industriesArray = [];

  industriesSet.forEach((industry) => {
    industriesArray.push({ industryName: industry.trim() });
  });

  try {
    await Industry.bulkCreate(industriesArray);

    const promises = [];

    companies.forEach(async (company) => {
      if (company.industry) {
        const industry = await Industry.findOne({
          where: { industryName: company.industry },
        });
        promises.push(company.update({ industryId: industry.id }));
      }
    });

    Promise.all(promises)
      .then(() => {
        res.json({ status: 'success' });
      })
      .catch((error) => res.json({ status: 'fail', message: error.message }));
  } catch (error) {
    console.log(error);
    res.json({ status: 'fail', message: error.message });
  }
}
