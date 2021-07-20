const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const { Op, literal } = require('sequelize');
const passport = require('passport');
const nc = require('next-connect')();

const { Location, CompanyLocation } = require('../../../../models');
const { locationCrud } = require('../../../../helpers/cruds');

const findAndCountAllLocations = ({ q, filter = {}, limit, offset, order }) =>
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
    where: {
      ...filter,
      ...(q
        ? {
            [Op.or]: ['city', 'country'].map((fieldName) => ({
              [fieldName]: { [Op.iLike]: `%${q}%` },
            })),
          }
        : {}),
    },
    subQuery: false,
    group: [literal('"Location".id')],
  }).catch((e) => console.error(e));

nc.all('*', passport.authenticate('jwt'));
nc.get(
  '*',
  getMany(findAndCountAllLocations, (q, limit) =>
    findAndCountAllLocations({ q, limit })
  )
);
nc.post('*', create(locationCrud.create));

export default nc;
