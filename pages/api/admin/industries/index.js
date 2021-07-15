const { getMany } = require('express-sequelize-crud/lib/getList');
const { create } = require('express-sequelize-crud/lib/create');
const passport = require('passport');
const nc = require('next-connect')();

const { industryCrud } = require('../../../../helpers/cruds');

nc.all('*', passport.authenticate('jwt'));
nc.get('*', getMany(industryCrud.getList));
nc.post('*', create(industryCrud.create));

export default nc;
