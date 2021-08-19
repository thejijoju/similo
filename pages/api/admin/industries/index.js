const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { Industry, CompanyIndustry } = require('../../../../models');
const { industryCrud } = require('../../../../helpers/cruds');

/* const findAndCountAllIndustries = ({ q, filter = {}, limit, offset, order }) =>
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
  }).catch((e) => console.error(e)); */

const findAndCountAllIndustries = ({
  q,
  filter = {},
  limit,
  offset,
  order,
}) => {
  const newFilter = { ...filter };

  if (newFilter.id) {
    newFilter.id = { [Op.or]: [...newFilter.id] };
  }
  return Industry.findAndCountAll({
    attributes: {
      include: [[literal('COUNT("CompanyIndustries".id)'), 'companiesCount']],
    },
    include: [
      {
        model: CompanyIndustry,
        attributes: [],
      },
    ],
    limit,
    offset,
    order:
      order && order[0][0] === 'companiesCount'
        ? [[literal('COUNT("CompanyIndustry".id)'), order[0][1]]]
        : order,
    where: {
      ...newFilter,
      ...(q ? { industryName: { [Op.iLike]: `%${q}%` } } : {}),
    },
    subQuery: false,
    group: [literal('"Industry".id')],
  }).catch((e) => console.error(e));
};

nc.all('*', passport.authenticate('jwt'));
nc.get(
  '*',
  getMany(findAndCountAllIndustries, (q, filter, limit) =>
    findAndCountAllIndustries({ q, filter, limit })
  )
);
nc.post('*', create(industryCrud.create));

export default nc;
