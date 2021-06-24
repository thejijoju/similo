const { Company } = require('../../../models');
const { Location } = require('../../../models');

export default async function handler(req, res) {
  const locationsStrings = [];
  const locationsSet = new Set();
  const companies = await Company.findAll({});

  await Location.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });

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
    if (!city && !country) {
      return;
    }
    promises.push(Location.create({ city, country }));
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
