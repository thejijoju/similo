const { QueryTypes } = require('sequelize');

const { CSR, Company, Industry } = require('../../../models/index');
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

      const query = `SELECT DISTINCT s."csrName" FROM (SELECT * FROM "Companies" c
        JOIN "CompanyCSRs" cc ON cc."companyId" = c.id
        JOIN "CSRs" cs ON cc."csrId" = cs."id"
        WHERE c.industry = '${industry}') s
        ORDER BY s."csrName" ASC`;
      const csrs = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return res.json({
        status: 'success',
        data: { csr: csrs.map((csr) => csr.csrName) },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const csrs = await CSR.findAll({
    attributes: ['csrName'],
    order: [['csrName', 'ASC']],
  });

  const csrsArray = csrs.map((csr) => csr.csrName);

  return res.json({
    status: 'success',
    data: { csr: csrsArray },
  });
}
