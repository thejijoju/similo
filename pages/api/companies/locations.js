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
    /* queryString = `SELECT DISTINCT ON(country) country, * FROM "Locations"
                    WHERE LOWER(country) LIKE ?
                    OR LOWER(city) LIKE ? 
                    LIMIT 3`; */

    queryString = `SELECT * FROM "Locations"
                    WHERE (LOWER(country) LIKE ?
                    OR LOWER(city) LIKE ? OR LOWER(region) LIKE ?) AND region IS NOT NULL
                    LIMIT 1`;
  } else {
    // queryString = `SELECT DISTINCT(country) FROM "Locations"`;
    queryString = `SELECT l.country, l.city, l.region, COUNT(c.id) as count FROM "Locations" l 
                   JOIN "CompanyLocations" cl ON cl."locationId" = l.id
                   JOIN "Companies" c ON cl."companyId" = c.id
                   WHERE l.region IS NOT NULL
                   GROUP BY l.country, l.city, l.region
                   ORDER BY count DESC LIMIT 4`;
  }

  const locations = await sequelize.query(queryString, {
    type: QueryTypes.SELECT,
    replacements: [`${suggestion}%`, `${suggestion}%`, `${suggestion}%`],
  });

  const locationsArray = locations.map(
    (location) =>
      `${location.city}, ${location.region}, ${location.country}, ${location.count}`
  );

  return res.json({
    status: 'success',
    data: { locations: req.query.suggestLocation ? locations : locationsArray },
  });
}
