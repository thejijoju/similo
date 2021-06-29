import convertRevenueRanges from '@/helpers/convertRevenueRanges';
import convertSizeRanges from '@/helpers/convertSizeRanges';

const { QueryTypes } = require('sequelize');
const { Company } = require('../../../../models');
const sequelize = require('../../../../config/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const searchTerm = decodeURI(req.query.term) || '';

  let { page } = req.query;
  const perPage = req.query.perPage || 8;

  const suggestionType = req.query.suggestionType || 'company';

  const companySize = (req.query.companySize || '').split(',|');
  const sizeRanges = convertSizeRanges(companySize);

  const expertise = (req.query.expertise || '').split(',');

  const companyType = (req.query.companyType || '').split(',');

  const revenue = (req.query.revenue || '').split(',|');
  const revenueRanges = convertRevenueRanges(revenue);

  const locations = (req.query.locations || '').split(',');

  const sort = req.query.sort || 'relevant';

  let company;
  let query;
  let countQuery;

  if (suggestionType === 'company') {
    try {
      company = await Company.findOne({ where: { name: searchTerm } });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'No such company exists' });
    }

    if (!company) {
      return res.status(400).json({
        status: 'fail',
        message: 'No such company exists',
      });
    }

    if (!company.industry) {
      return res.json({
        status: 'success',
        data: { companies: company },
      });
    }

    if (!page) {
      const companyRowNumber = await sequelize.query(
        `SELECT rnum FROM 
  (SELECT *, row_number() OVER (ORDER BY name) as rnum FROM "Companies" WHERE industry='${company.industry}') a
  WHERE a.name='${company.name}'`,
        {
          type: QueryTypes.SELECT,
        }
      );

      page = Math.floor((companyRowNumber[0].rnum - 0.1) / perPage);
    }
  } else if (suggestionType === 'industry') {
    if (!page) {
      page = 0;
    }
  }

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

  let locationsQuery = '';
  if (locations[0] !== '') {
    locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      if (index !== locations.length - 1) {
        locationsQuery += ` "locations" LIKE '%${location}%' OR`;
      } else {
        locationsQuery += ` "locations" LIKE '%${location}%' )`;
      }
    });
  }

  if (suggestionType === 'company') {
    const sortQuery =
      sort === 'relevant'
        ? `ORDER BY name`
        : `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;

    query = `SELECT * FROM "Companies" WHERE (industry='${company.industry}')
    ${companySizeQuery}
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${locationsQuery}
    ${sortQuery}
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry='${company.industry}')
    ${companySizeQuery}
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${locationsQuery}`;
  } else if (suggestionType === 'industry') {
    query = `SELECT * FROM "Companies" WHERE (industry='${searchTerm}')
    ${companySizeQuery}
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${locationsQuery}
    ORDER by ${sort === 'relevant' ? 'name' : '"createdAt"'} ASC
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry='${searchTerm}')
    ${companySizeQuery}
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${locationsQuery}`;
  }

  const rows = await sequelize.query(query, { type: QueryTypes.SELECT });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT,
  });

  return res.json({
    status: 'success',
    count: rows.length,
    page,
    totalCount: +totalCompaniesCount[0].count,
    data: { companies: rows },
  });
}
