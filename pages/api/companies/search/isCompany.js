/* eslint-disable consistent-return */
const { QueryTypes } = require('sequelize');

const sequelize = require('../../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const searchTerm = req.query.term || '';

  try {
    const company = await sequelize.query(
      `SELECT * FROM "Companies" WHERE LOWER(name) = '${searchTerm.toLowerCase()}'
      LIMIT 1`,
      {
        type: QueryTypes.SELECT,
      }
    );
    if (company.length) {
      res.json({
        status: 'success',
        data: { isCompany: true, name: company[0].name },
      });
    } else {
      res.json({
        status: 'success',
        data: { isCompany: false },
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 'fail',
      data: { message: error.message },
    });
  }
}
