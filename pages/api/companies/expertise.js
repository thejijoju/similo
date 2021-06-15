const { QueryTypes } = require('sequelize');
const sequelize = require('../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const queryString = `SELECT expertise FROM "Companies"`;

  const expertise = await sequelize.query(queryString, {
    type: QueryTypes.SELECT,
  });

  const tagsSet = new Set();

  expertise.forEach((elem) => {
    if (elem.expertise) {
      const tagsArray = elem.expertise.split(',');
      tagsArray.forEach((tag) => {
        if (tag === '') {
          return;
        }
        tagsSet.add(tag.trim());
      });
    }
  });

  return res.json({
    status: 'success',
    data: { expertise: Array.from(tagsSet) },
  });
}
