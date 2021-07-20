const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { Industry, Company } = require('../../../../models');
const { industryCrud } = require('../../../../helpers/cruds');

const findAndCountAllIndustries = ({ q, filter = {}, limit, offset, order }) =>
  Industry.findAndCountAll({
    attributes: {
      include: [[literal('COUNT("Companies".id)'), 'companiesCount']],
    },
    include: [
      {
        model: Company,
        attributes: [],
      },
    ],
    limit,
    offset,
    order:
      order && order[0][0] === 'companiesCount'
        ? [[literal('COUNT("Companies".id)'), order[0][1]]]
        : order,
    where: {
      ...filter,
      ...(q ? { industryName: { [Op.iLike]: `%${q}%` } } : {}),
    },
    subQuery: false,
    group: [literal('"Industry".id')],
  }).catch((e) => console.error(e));

nc.all('*', passport.authenticate('jwt'));
nc.get(
  '*',
  getMany(findAndCountAllIndustries, (q, limit) =>
    findAndCountAllIndustries({ q, limit })
  )
);
nc.post('*', create(industryCrud.create));

export default nc;
