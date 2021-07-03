const { getOne } = require('express-sequelize-crud/lib/getOne');
const { update } = require('express-sequelize-crud/lib/update');
const { destroy } = require('express-sequelize-crud/lib/delete');
const passport = require('passport');
const nc = require('next-connect')();

const { companyCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.all('*', (req, res, next) => {
  req.params.id = req.query.id;
  next();
});
nc.get('*', getOne(companyCrud.getOne));
nc.put('*', update(companyCrud.update, companyCrud.getOne));
nc.delete('*', destroy(companyCrud.destroy));

export default nc;
