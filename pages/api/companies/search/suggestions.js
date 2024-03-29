const { Op, QueryTypes } = require('sequelize');
const { Company } = require('../../../../models');

const sequelize = require('../../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const searchTerm = req.query.term;

  let suggestions =
    (await Company.findAll({
      where: { name: { [Op.iLike]: `%${searchTerm}%` } },
      attributes: ['name', 'industry', 'logoPath'],
      limit: 6,
    })) || [];

  const industries = await sequelize.query(
    `SELECT "industryName" as industry FROM "Industries"
       WHERE LOWER("industryName") LIKE LOWER(?)`,
    {
      replacements: [`%${searchTerm}%`],
      type: QueryTypes.SELECT,
    }
  );

  suggestions = suggestions.concat(
    industries.map((industry) => {
      return { name: industry.industry, type: 'industry' };
    })
  );

  /* return res.json({
      status: 'success',
      count: companies.length,
      data: {
        companies: industries.map((industry) => {
          return { name: industry.industry, type: 'industry' };
        }),
      },
    }); */

  return res.json({
    status: 'success',
    count: suggestions.length,
    data: { companies: suggestions },
  });
}
