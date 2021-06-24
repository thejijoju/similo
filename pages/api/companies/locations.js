const { QueryTypes } = require('sequelize');
const sequelize = require('../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  let queryString;

  if (req.query.suggestLocation) {
    const suggestion = req.query.suggestLocation;
    queryString = `SELECT * FROM "Locations"
                    WHERE LOWER(country) LIKE '%${suggestion}%'
                    OR LOWER(city) LIKE '%${suggestion}%'
                    LIMIT 3`;
  } else {
    queryString = `SELECT DISTINCT(country) FROM "Locations"`;
  }

  const locations = await sequelize.query(queryString, {
    type: QueryTypes.SELECT,
  });

  const locationsArray = locations.map((location) => location.country);

  return res.json({
    status: 'success',
    data: { locations: req.query.suggestLocation ? locations : locationsArray },
  });
}
