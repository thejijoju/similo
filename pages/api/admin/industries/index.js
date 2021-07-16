const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();
const { Industry, Company } = require('../../../../models');

const { industryCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.get('*', getMany(industryCrud.getList));
nc.get(
  '*',
  getMany(({ filter, limit, offset, order }) =>
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
      where: filter,
      subQuery: false,
      group: [literal('"Industry".id')],
    }).catch((e) => console.log(e))
  )
);
nc.post('*', create(industryCrud.create));

export default nc;
