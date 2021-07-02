const { crud, sequelizeCrud } = require('express-sequelize-crud');
const passport = require('passport');
const nc = require('next-connect')();

const { Company } = require('../../../../models');

nc.all('*', passport.authenticate('jwt'));
nc.use(crud('*', sequelizeCrud(Company)));

export const config = {
  api: {
    externalResolver: true,
  },
};

export default nc;
