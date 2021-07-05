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

  const replacements = [];

  let expertiseQuery = '';
  if (expertise[0] !== '') {
    expertiseQuery = `AND \n(`;
    expertise.forEach((tag, index) => {
      if (index !== expertise.length - 1) {
        expertiseQuery += ` "expertise" LIKE ? AND`;
      } else {
        expertiseQuery += ` "expertise" LIKE ? )`;
      }
      replacements.push(`%${tag}%`);
    });
  }

  let companyTypeQuery = '';
  if (companyType[0] !== '') {
    companyTypeQuery = `AND \n(`;
    companyType.forEach((type, index) => {
      if (index !== companyType.length - 1) {
        companyTypeQuery += ` "type" LIKE ? OR`;
      } else {
        companyTypeQuery += ` "type" LIKE ? )`;
      }
      replacements.push(`%${type}%`);
    });
  }

  let companyRevenueQuery = '';
  if (revenueRanges) {
    companyRevenueQuery = `AND \n(`;
    revenueRanges.forEach((range, index) => {
      if (index !== revenueRanges.length - 1) {
        companyRevenueQuery += ` "revenue" BETWEEN ? AND ? OR`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      } else {
        companyRevenueQuery += ` "revenue" BETWEEN ? AND ? )`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      }
    });
  }

  let companySizeQuery = '';
  if (sizeRanges) {
    companySizeQuery = `AND \n(`;
    sizeRanges.forEach((range, index) => {
      if (index !== sizeRanges.length - 1) {
        companySizeQuery += ` "employeesCount" BETWEEN ? AND ? OR`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      } else {
        companySizeQuery += ` "employeesCount" BETWEEN ? AND ? )`;
        replacements.push(`${range[0]}`);
        replacements.push(`${range[1]}`);
      }
    });
  }

  let locationsQuery = '';
  if (locations[0] !== '') {
    locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      if (index !== locations.length - 1) {
        locationsQuery += ` "locations" LIKE ? OR`;
      } else {
        locationsQuery += ` "locations" LIKE ? )`;
      }
      replacements.push(`%${location}%`);
    });
  }

  if (suggestionType === 'company') {
    try {
      company = await Company.findOne({
        where: { name: searchTerm[0].toUpperCase() + searchTerm.slice(1) },
      });
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
  (SELECT *, row_number() OVER (ORDER BY name) as rnum FROM "Companies" WHERE industry = ? ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  ${companySizeQuery}
  ${locationsQuery}) a
  WHERE a.name = ?`,
        {
          type: QueryTypes.SELECT,
          replacements: [
            `${company.industry}`,
            ...replacements,
            `${company.name}`,
          ],
        }
      );

      page = Math.floor((companyRowNumber[0].rnum - 0.1) / perPage);
      console.log('PAGE', page);
    }
  } else if (suggestionType === 'industry') {
    if (!page) {
      page = 0;
    }
  }

  if (suggestionType === 'company') {
    const sortQuery =
      sort === 'relevant'
        ? `ORDER BY name`
        : `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;

    query = `SELECT * FROM "Companies" WHERE (industry='${company.industry}')
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${companySizeQuery}
    ${locationsQuery}
    ${sortQuery}
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry='${company.industry}')
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${companySizeQuery}
    ${locationsQuery}`;
  } else if (suggestionType === 'industry') {
    replacements.unshift(`${searchTerm}`);
    query = `SELECT * FROM "Companies" WHERE (industry = ?)
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${companySizeQuery}
    ${locationsQuery}
    ORDER by ${sort === 'relevant' ? 'name' : '"createdAt"'} ASC
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry = ?)
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${companySizeQuery}
    ${locationsQuery}`;
  }

  const rows = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements,
  });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT,
    replacements,
  });

  return res.json({
    status: 'success',
    count: rows.length,
    page,
    totalCount: +totalCompaniesCount[0].count,
    data: { companies: rows },
  });
}
