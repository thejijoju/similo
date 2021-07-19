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

  let suggestion = req.query.suggestLocation;
  if (suggestion) {
    suggestion = suggestion.toLowerCase();
  }

  if (req.query.suggestLocation) {
    queryString = `SELECT DISTINCT ON(country) country, * FROM "Locations"
                    WHERE LOWER(country) LIKE ?
                    OR LOWER(city) LIKE ? 
                    LIMIT 3`;
  } else {
    queryString = `SELECT DISTINCT(country) FROM "Locations"`;
  }

  const locations = await sequelize.query(queryString, {
    type: QueryTypes.SELECT,
    replacements: [`%${suggestion}%`, `%${suggestion}%`],
  });

  const locationsArray = locations.map((location) => location.country);

  return res.json({
    status: 'success',
    data: { locations: req.query.suggestLocation ? locations : locationsArray },
  });
}
