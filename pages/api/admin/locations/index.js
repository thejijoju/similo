const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();

const { Location, CompanyLocation } = require('../../../../models');
const { locationCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.get(
  '*',
  getMany(({ filter, limit, offset, order }) =>
    Location.findAndCountAll({
      attributes: {
        include: [[literal('COUNT("CompanyLocations".id)'), 'companiesCount']],
      },
      include: [
        {
          model: CompanyLocation,
          attributes: [],
        },
      ],
      limit,
      offset,
      order:
        order && order[0][0] === 'companiesCount'
          ? [[literal('COUNT("CompanyLocations".id)'), order[0][1]]]
          : order,
      where: filter,
      subQuery: false,
      group: [literal('"Location".id')],
    }).catch((e) => console.log(e))
  )
);
nc.post('*', create(locationCrud.create));

export default nc;
