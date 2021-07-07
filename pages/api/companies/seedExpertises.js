const { Company } = require('../../../models');
const { Expertise } = require('../../../models');

export default async function handler(req, res) {
  const expertisesStrings = [];
  const expertisesSet = new Set();
  const companies = await Company.findAll({});

  await Expertise.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });

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
    promises.push(Expertise.create({ expertiseName: expertise }));
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
