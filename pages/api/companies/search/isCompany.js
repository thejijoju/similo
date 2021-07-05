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
      `SELECT * FROM "Companies" WHERE LOWER(name) = ?
      LIMIT 1`,
      {
        type: QueryTypes.SELECT,
        replacements: [`${searchTerm.toLowerCase()}`],
      }
    );
    if (company.length) {
      res.json({
        status: 'success',
        data: { isCompany: true, name: company[0].name, isIndustry: false },
      });
    } else {
      const industry = await sequelize.query(
        `SELECT * FROM "Companies" WHERE LOWER(industry) = ?
      LIMIT 1`,
        {
          type: QueryTypes.SELECT,
          replacements: [`${searchTerm.toLowerCase()}`],
        }
      );
      if (industry.length) {
        res.json({
          status: 'success',
          data: {
            isCompany: false,
            isIndustry: true,
            name: industry[0].industry,
          },
        });
      } else {
        res.json({
          status: 'success',
          data: { isCompany: false, isIndustry: false },
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 'fail',
      data: { message: error.message },
    });
  }
}
