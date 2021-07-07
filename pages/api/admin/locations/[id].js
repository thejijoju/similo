const { getOne } = require('express-sequelize-crud/lib/getOne');
const { update } = require('express-sequelize-crud/lib/update');
const { destroy } = require('express-sequelize-crud/lib/delete');
const passport = require('passport');
const nc = require('next-connect')();

const { locationCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.all('*', (req, res, next) => {
  req.params.id = req.query.id;
  next();
});
nc.get('*', getOne(locationCrud.getOne));
nc.put('*', update(locationCrud.update, locationCrud.getOne));
nc.delete('*', destroy(locationCrud.destroy));

export default nc;
