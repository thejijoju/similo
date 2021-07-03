const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const passport = require('passport');
const nc = require('next-connect')();

const { companyCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.get('*', getMany(companyCrud.getList));
nc.post('*', create(companyCrud.create));

export default nc;
