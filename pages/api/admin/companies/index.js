const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { Company } = require('../../../../models');
const { companyCrud } = require('../../../../helpers/cruds');
const getSearchVectorTerm = require('../../../../helpers/getSearchVectorTerm');

const searchCompanies = (q, limit) =>
  Company.findAndCountAll({
    limit,
    ...(q && q.length >= 2
      ? {
          where: {
            [Op.and]: [
              literal(
                '"Company"."searchVector" @@ to_tsquery(\'english\', :searchVectorTerm)'
              ),
            ],
          },
          order: [
            literal(
              'ts_rank("Company"."searchVector", to_tsquery(\'english\', :searchVectorTerm)) DESC'
            ),
            'name',
          ],
          replacements: {
            searchVectorTerm: getSearchVectorTerm(q),
          },
        }
      : {}),
  }).catch((e) => console.error(e));

nc.all('*', passport.authenticate('jwt'));
nc.get('*', getMany(companyCrud.getList, searchCompanies));
nc.post('*', create(companyCrud.create));

export default nc;
