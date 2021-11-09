import convertRevenueRanges from '@/helpers/convertRevenueRanges';
import convertSizeRanges from '@/helpers/convertSizeRanges';

const { QueryTypes } = require('sequelize');
const { Company } = require('../../../../models');
const sequelize = require('../../../../config/db');
const createFilterQueries = require('../../../../helpers/createFilterQueries');

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

  const diversity = (req.query.diversity || '').split(',');

  const companyType = (req.query.companyType || '').split(',');

  const revenue = (req.query.revenue || '').split(',|');
  const revenueRanges = convertRevenueRanges(revenue);

  const locations = (req.query.locations || '').split(',');

  const sort = req.query.sort || 'relevant';

  const csr = (req.query.csr || '').split(',');

  const companyHQ = req.query.companyHQ || '';

  const foundationYear = req.query.foundationYear || '';

  const parentOrganisation = req.query.parentOrganisation || '';

  let company;
  let query;
  let countQuery;

  const replacements = [];

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
      const sortQuery =
        sort === 'relevant'
          ? `ORDER BY "order"`
          : `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;
      const companyRowNumber = await sequelize.query(
        `SELECT rnum FROM 
  (SELECT *, row_number() OVER (${sortQuery}) as rnum FROM "Companies" WHERE industry = ? ${queries.expertiseQuery}
  ${queries.companyTypeQuery}
  ${queries.companyRevenueQuery}
  ${queries.companySizeQuery}
  ${queries.diversityQuery}
  ${queries.csrQuery}
  ${queries.companyHQQuery}
  ${queries.foundationYear}
  ${queries.parentOrganisation}
  ${queries.locationsQuery}) a
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

      page = companyRowNumber[0]
        ? Math.floor((companyRowNumber[0].rnum - 0.1) / perPage)
        : 0;
      console.log('PAGE', page);
    }
  } else if (suggestionType === 'industry') {
    if (!page) {
      page = 0;
    }
  }

  const sortQuery =
    sort === 'relevant'
      ? `ORDER BY "order" NULLS LAST`
      : `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;

  if (suggestionType === 'company') {
    query = `SELECT * FROM "Companies" WHERE (industry='${company.industry}')
    ${queries.expertiseQuery}
    ${queries.companyTypeQuery}
    ${queries.companyRevenueQuery}
    ${queries.companySizeQuery}
    ${queries.diversityQuery}
    ${queries.csrQuery}
    ${queries.companyHQQuery}
    ${queries.foundationYear}
    ${queries.parentOrganisation}
    ${queries.locationsQuery}
    ${sortQuery}
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry='${company.industry}')
    ${queries.expertiseQuery}
    ${queries.companyTypeQuery}
    ${queries.companyRevenueQuery}
    ${queries.companySizeQuery}
    ${queries.diversityQuery}
    ${queries.csrQuery}
    ${queries.companyHQQuery}
    ${queries.foundationYear}
    ${queries.parentOrganisation}
    ${queries.locationsQuery}`;
  } else if (suggestionType === 'industry') {
    replacements.unshift(`${searchTerm}`);
    /* query = `SELECT * FROM "Companies" WHERE (industry = ?)
    ${expertiseQuery}
    ${companyTypeQuery}
    ${companyRevenueQuery}
    ${companySizeQuery}
    ${locationsQuery}
    ORDER by ${sort === 'relevant' ? 'name' : '"createdAt"'} ASC
    LIMIT ${perPage} OFFSET ${page * perPage}`; */

    query = `SELECT * FROM "Companies" WHERE (industry = ?)
    ${queries.expertiseQuery}
    ${queries.companyTypeQuery}
    ${queries.companyRevenueQuery}
    ${queries.companySizeQuery}
    ${queries.diversityQuery}
    ${queries.csrQuery}
    ${queries.companyHQQuery}
    ${queries.foundationYear}
    ${queries.parentOrganisation}
    ${queries.locationsQuery}
    ${sortQuery}
    LIMIT ${perPage} OFFSET ${page * perPage}`;

    countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (industry = ?)
    ${queries.expertiseQuery}
    ${queries.companyTypeQuery}
    ${queries.companyRevenueQuery}
    ${queries.companySizeQuery}
    ${queries.diversityQuery}
    ${queries.csrQuery}
    ${queries.companyHQQuery}
    ${queries.foundationYear}
    ${queries.parentOrganisation}
    ${queries.locationsQuery}`;
  }

  const rows = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements,
  });

  /* if (suggestionType === 'company') {
    if (!rows.some((elem) => elem.name === company.name)) {
      rows.push(company);
    }
  } */

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
