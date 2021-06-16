const { QueryTypes } = require('sequelize');
const sequelize = require('../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const queryString = `SELECT locations FROM "Companies"`;

  const locations = await sequelize.query(queryString, {
    type: QueryTypes.SELECT,
  });

  const locationsSet = new Set();

  locations.forEach((elem) => {
    if (elem.locations) {
      const locationsArray = elem.locations.split(';');
      locationsArray.forEach((location) => {
        if (location.trim() === '') {
          return;
        }
        locationsSet.add(location.trim().split(' -- ')[0]);
      });
    }
  });

  return res.json({
    status: 'success',
    data: { locations: Array.from(locationsSet) },
  });
}
