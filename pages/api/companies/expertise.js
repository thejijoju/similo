const { QueryTypes } = require('sequelize');

const { Expertise, Company, Industry } = require('../../../models/index');
const sequelize = require('../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  if (req.query.company || req.query.industry) {
    try {
      let industry = '';

      if (req.query.company) {
        const company = await Company.findOne({
          where: { name: req.query.company },
        });
        industry = company.industry;
      } else if (req.query.industry) {
        const industryFromDB = await Industry.findOne({
          where: { industryName: req.query.industry },
        });
        industry = industryFromDB.industryName;
      }

      const query = `SELECT DISTINCT s."expertiseName" FROM (SELECT * FROM "Companies" c
        JOIN "CompanyExpertises" ce ON ce."companyId" = c.id
        JOIN "Expertises" e ON ce."expertiseId" = e.id
        WHERE c.industry = '${industry}') s
        ORDER BY s."expertiseName" ASC`;
      const expertises = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return res.json({
        status: 'success',
        data: { expertise: expertises.map((tag) => tag.expertiseName) },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const expertise = await Expertise.findAll({
    attributes: ['expertiseName'],
    order: [['expertiseName', 'ASC']],
  });

  const expertiseArray = expertise.map((tag) => tag.expertiseName);

  return res.json({
    status: 'success',
    data: { expertise: expertiseArray },
  });
}
