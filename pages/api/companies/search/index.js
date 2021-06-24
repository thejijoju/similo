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

  let searchTerm = req.query.term || '';

  let searchTermArray = decodeURI(searchTerm).split(' ');
  searchTermArray = searchTermArray.map((term) => {
    return `${term}:*`;
  });
  if (searchTermArray.length === 1) {
    searchTerm = searchTermArray.join('');
  } else {
    searchTerm = searchTermArray.join(' | ');
  }

  let { page } = req.query;
  if (!page) {
    page = 0;
  }

  let { perPage } = req.query;
  if (!perPage) {
    perPage = 8;
  }

  let { sort } = req.query;
  if (!sort) {
    sort = 'relevant';
  }

  const companySize = (req.query.companySize || '').split(',|');
  const sizeRanges = convertSizeRanges(companySize);

  const expertise = (req.query.expertise || '').split(',');

  const companyType = (req.query.companyType || '').split(',');

  const revenue = (req.query.revenue || '').split(',|');
  const revenueRanges = convertRevenueRanges(revenue);

  const locations = (req.query.locations || '').split(',');

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

  /* let locationsQuery = '';
  if (locations[0] !== '') {
    locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      if (index !== locations.length - 1) {
        locationsQuery += ` "locations" LIKE '%${location}%' OR`;
      } else {
        locationsQuery += ` "locations" LIKE '%${location}%' )`;
      }
    });
  } */

  let locationsQuery = '';
  if (locations[0] !== '') {
    locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      if (index !== locations.length - 1) {
        locationsQuery += ` l.country = '${location}' OR`;
      } else {
        locationsQuery += ` l.country = '${location}' )`;
      }
    });
  }

  /* const sortQuery =
    sort === 'relevant'
      ? `ORDER BY ts_rank("searchVector", to_tsquery('english', '${searchTerm}')) DESC, name`
      : `ORDER BY "createdAt" DESC, name`;

  const query = `SELECT * FROM "Companies" WHERE "searchVector" @@ to_tsquery('english', '${searchTerm}')
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  ${locationsQuery}
  ${sortQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`; */

  const sortQuery =
    sort === 'relevant'
      ? `ORDER BY ts_rank("searchVector", to_tsquery('english', '${searchTerm}')) DESC, name`
      : `ORDER BY "creationDate" DESC, name`;

  const query = `SELECT *
  FROM (SELECT DISTINCT ON(name) *, c."createdAt" as "creationDate", c.id as "companyId" 
  FROM "Companies" c
  FULL JOIN "CompanyLocations" cl ON cl."companyId" = c.id
  FULL JOIN "Locations" l ON l.id = cl."locationId"
  WHERE "searchVector" @@ to_tsquery('english', '${searchTerm}')
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  ${locationsQuery}) p
  ${sortQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;

  /* const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE "searchVector" @@ to_tsquery('english', '${searchTerm}')
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  ${locationsQuery}`; */

  const countQuery = `SELECT COUNT (*)
  FROM (SELECT DISTINCT ON(name) *, c."createdAt" as "creationDate" 
  FROM "Companies" c
  FULL JOIN "CompanyLocations" cl ON cl."companyId" = c.id
  FULL JOIN "Locations" l ON l.id = cl."locationId"
  WHERE "searchVector" @@ to_tsquery('english', '${searchTerm}')
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  ${locationsQuery}) p`;

  const rows = await sequelize.query(query, { type: QueryTypes.SELECT });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT,
  });

  console.log(rows.length);

  return res.json({
    status: 'success',
    count: rows.length,
    totalCount: +totalCompaniesCount[0].count,
    page,
    data: { companies: rows },
  });
}
