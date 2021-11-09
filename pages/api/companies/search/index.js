import convertRevenueRanges from '@/helpers/convertRevenueRanges';
import convertSizeRanges from '@/helpers/convertSizeRanges';

const { QueryTypes } = require('sequelize');
// const { Company } = require('../../../../models');
const sequelize = require('../../../../config/db');
const createFilterQueries = require('../../../../helpers/createFilterQueries');

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

  const diversity = (req.query.diversity || '').split(',');

  const companyType = (req.query.companyType || '').split(',');

  const revenue = (req.query.revenue || '').split(',|');
  const revenueRanges = convertRevenueRanges(revenue);

  const locations = (req.query.locations || '').split(',');

  const csr = (req.query.csr || '').split(',');

  const companyHQ = req.query.companyHQ || '';

  const foundationYear = req.query.foundationYear || '';

  const parentOrganisation = req.query.parentOrganisation || '';

  const replacements = [`${searchTerm}`];

  const queries = createFilterQueries(
    expertise,
    companyType,
    revenueRanges,
    sizeRanges,
    locations,
    diversity,
    csr,
    companyHQ,
    foundationYear,
    parentOrganisation,
    replacements
  );

  /* let locationsQuery = '';
  if (locations[0] !== '') {
    locationsQuery = `AND \n(`;
    locations.forEach((location, index) => {
      if (index !== locations.length - 1) {
        locationsQuery += ` l.country = ? OR`;
      } else {
        locationsQuery += ` l.country = ? )`;
      }
      replacements.push(`${location}`);
    });
  } */

  replacements.push(`${searchTerm}`);

  const sortQuery =
    sort === 'relevant'
      ? `ORDER BY ts_rank("searchVector", to_tsquery('english', ?)) DESC, name`
      : `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;

  const query = `SELECT *
  FROM (SELECT DISTINCT ON(name) *, c."createdAt" as "creationDate", c.id as "companyId" 
  FROM "Companies" c
  FULL JOIN "CompanyLocations" cl ON cl."companyId" = c.id
  FULL JOIN "Locations" l ON l.id = cl."locationId"
  WHERE "searchVector" @@ to_tsquery('english', ?)
  ${queries.expertiseQuery}
  ${queries.companyTypeQuery}
  ${queries.companyRevenueQuery}
  ${queries.companySizeQuery}
  ${queries.diversityQuery}
  ${queries.csrQuery}
  ${queries.companyHQQuery}
  ${queries.foundationYear}
  ${queries.parentOrganisation}
  ${queries.locationsQuery}) p
  ${sortQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;

  const countQuery = `SELECT COUNT (*)
  FROM (SELECT DISTINCT ON(name) *, c."createdAt" as "creationDate" 
  FROM "Companies" c
  FULL JOIN "CompanyLocations" cl ON cl."companyId" = c.id
  FULL JOIN "Locations" l ON l.id = cl."locationId"
  WHERE "searchVector" @@ to_tsquery('english', ?)
  ${queries.companyTypeQuery}
  ${queries.companyRevenueQuery}
  ${queries.companySizeQuery}
  ${queries.expertiseQuery}
  ${queries.diversityQuery}
  ${queries.csrQuery}
  ${queries.companyHQQuery}
  ${queries.foundationYear}
  ${queries.parentOrganisation}
  ${queries.locationsQuery}) p`;

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
    totalCount: +totalCompaniesCount[0].count,
    page,
    data: { companies: rows },
  });
}
