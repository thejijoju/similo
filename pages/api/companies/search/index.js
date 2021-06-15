import convertRevenueRanges from '@/helpers/convertRevenueRanges';
import convertSizeRanges from '@/helpers/convertSizeRanges';

const { QueryTypes } = require('sequelize');
// const { Company } = require('../../../../models');
const sequelize = require('../../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const searchTerm = req.query.term;
  const { page } = req.query || 0;
  const { perPage } = req.query || 8;

  let companySize = req.query.companySize || '';
  companySize = companySize.split(',|');
  const sizeRanges = convertSizeRanges(companySize);

  let expertise = req.query.expertise || '';
  expertise = expertise.split(',');

  let companyType = req.query.companyType || '';
  companyType = companyType.split(',');

  let revenue = req.query.revenue || '';
  revenue = revenue.split(',|');
  const revenueRanges = convertRevenueRanges(revenue);

  /* const companySizeQuery = '';
     if (companySize[0] !== '') {
    companySizeQuery = `AND \n(`;
    companySize.forEach((size, index) => {
      if (index !== companySize.length - 1) {
        companySizeQuery += ` "size" LIKE '%${size}%' OR`;
      } else {
        companySizeQuery += ` "size" LIKE '%${size}%' )`;
      }
    });
  }
 */
  let expertiseQuery = '';
  if (expertise[0] !== '') {
    expertiseQuery = `AND \n(`;
    expertise.forEach((tag, index) => {
      if (index !== expertise.length - 1) {
        expertiseQuery += ` "expertise" LIKE '%${tag}%' OR`;
      } else {
        expertiseQuery += ` "expertise" LIKE '%${tag}%' )`;
      }
    });
  }

  let companyTypeQuery = '';
  if (companyType[0] !== '') {
    companyTypeQuery = `AND \n(`;
    companyType.forEach((type, index) => {
      if (index !== companyType.length - 1) {
        companyTypeQuery += ` "type" LIKE '%${type}%' OR`;
      } else {
        companyTypeQuery += ` "type" LIKE '%${type}%' )`;
      }
    });
  }

  let companyRevenueQuery = '';
  if (revenueRanges) {
    companyRevenueQuery = `AND \n(`;
    revenueRanges.forEach((range, index) => {
      if (index !== revenueRanges.length - 1) {
        companyRevenueQuery += ` "revenue" BETWEEN ${range[0]} AND ${range[1]} OR`;
      } else {
        companyRevenueQuery += ` "revenue" BETWEEN ${range[0]} AND ${range[1]} )`;
      }
    });
  }

  let companySizeQuery = '';
  if (sizeRanges) {
    companySizeQuery = `AND \n(`;
    sizeRanges.forEach((range, index) => {
      if (index !== sizeRanges.length - 1) {
        companySizeQuery += ` "employeesCount" BETWEEN ${range[0]} AND ${range[1]} OR`;
      } else {
        companySizeQuery += ` "employeesCount" BETWEEN ${range[0]} AND ${range[1]} )`;
      }
    });
  }

  // console.log(expertiseQuery);

  const query = `SELECT * FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;

  const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}`;

  const rows = await sequelize.query(query, { type: QueryTypes.SELECT });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT,
  });

  /* const totalCompaniesCount = await Company.count({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchTerm}%` } },
        { HQLocation: { [Op.iLike]: `%${searchTerm}%` } },
        { locations: { [Op.iLike]: `%${searchTerm}%` } },
        { country: { [Op.iLike]: `%${searchTerm}%` } },
        { expertise: { [Op.iLike]: `%${searchTerm}%` } },
        { industry: { [Op.iLike]: `%${searchTerm}%` } },
      ],
    },
  });

  const companies = await Company.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchTerm}%` } },
        { HQLocation: { [Op.iLike]: `%${searchTerm}%` } },
        { locations: { [Op.iLike]: `%${searchTerm}%` } },
        { country: { [Op.iLike]: `%${searchTerm}%` } },
        { expertise: { [Op.iLike]: `%${searchTerm}%` } },
        { industry: { [Op.iLike]: `%${searchTerm}%` } },
      ],
    },
    limit: perPage,
    offset: page * perPage,
  }); */
  return res.json({
    status: 'success',
    count: rows.length,
    totalCount: +totalCompaniesCount[0].count,
    data: { companies: rows },
  });

  /*   return res.json({
    status: 'success',
    count: 0,
    totalCount: 0,
    data: { companies: [] },
  }); */
}
