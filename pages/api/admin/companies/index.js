import { CompanyLocation } from '../../../../models';

const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { Company } = require('../../../../models');
const { companyCrud } = require('../../../../helpers/cruds');
const getSearchVectorTerm = require('../../../../helpers/getSearchVectorTerm');

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
nc.post('*', create(companyCrud.create));

export default nc;
