import { CompanyLocation } from '../../../../models';

const { getMany } = require('express-sequelize-crud/lib/getList');
// const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { QueryTypes } = require('sequelize');
const { Company, CompanyIndustry, Industry } = require('../../../../models');
// const { companyCrud } = require('../../../../helpers/cruds');
const getSearchVectorTerm = require('../../../../helpers/getSearchVectorTerm');
const sequelize = require('../../../../config/db');

const searchCompanies = ({ q, filter = {}, limit, offset, order = [] }) => {
  const query = {
    limit,
    offset,
    where: {
      ...filter,
      [Op.and]: [],
    },
    replacements: {},
    order,
  };

  if (filter.locationId) {
    delete query.where.locationId;
    query.include = [
      {
        model: CompanyLocation,
        attributes: [],
        required: true,
        where: {
          locationId: filter.locationId,
        },
      },
    ];
  }

  if (filter.industryId) {
    delete query.where.industryId;
    query.include = [
      {
        model: CompanyIndustry,
        attributes: [],
        required: true,
        where: {
          industryId: filter.industryId,
        },
      },
    ];
  }

  if (q && q.length >= 2) {
    query.where[Op.and].push(
      literal(
        '"Company"."searchVector" @@ to_tsquery(\'english\', :searchVectorTerm)'
      )
    );
    query.order.unshift(
      literal(
        'ts_rank("Company"."searchVector", to_tsquery(\'english\', :searchVectorTerm)) DESC'
      )
    );
    query.replacements.searchVectorTerm = getSearchVectorTerm(q);
  }

  return Company.findAndCountAll(query).catch((e) => console.error(e));
};

nc.all('*', passport.authenticate('jwt'));
nc.get(
  '*',
  getMany(searchCompanies, (q, limit) => searchCompanies({ q, limit }))
);
nc.post('*', async (req, res) => {
  const companyProps = { ...req.body };
  delete companyProps.industriesIds;

  if (req.body.industriesIds) {
    const industries = await Industry.findAll({
      where: { id: req.body.industriesIds },
    });
    const industriesNames = industries.map((industry) => industry.industryName);
    companyProps.industry = industriesNames.join(', ');
  }

  try {
    const company = await Company.create({ ...companyProps });
    if (req.body.industriesIds) {
      const industriesPromises = [];
      req.body.industriesIds.forEach((industry) => {
        industriesPromises.push(
          CompanyIndustry.create({
            companyId: company.id,
            industryId: industry,
          })
        );
      });
      await Promise.allSettled(industriesPromises);
    }

    await sequelize.query(
      `UPDATE "Companies" SET "searchVector" = to_tsvector(name || ' ' || coalesce("HQLocation", '') 
      || ' ' || coalesce(locations, '') || ' ' 
      || coalesce(expertise, '') || ' ' || coalesce(industry, '') || ' ' || coalesce("keyPeople", '') || ' ' || coalesce("areaServed", '')) 
      WHERE id = '${company.id}'`,
      { type: QueryTypes.UPDATE }
    );

    res.json({ ...company });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default nc;
