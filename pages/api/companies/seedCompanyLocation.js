const { Op } = require('sequelize');
const { Company } = require('../../../models');
const { Location } = require('../../../models');
const { CompanyLocation } = require('../../../models');

export default async function handler(req, res) {
  const companies = await Company.findAll({
    where: {
      locations: {
        [Op.not]: null,
      },
    },
  });

  companies.forEach((company) => {
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
        await CompanyLocation.create({
          companyId: company.id,
          locationId: locationFromDB.id,
        });
      }
    });
  });

  res.json({ message: 'success' });
}
