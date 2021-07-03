const { sequelizeCrud } = require('express-sequelize-crud');
const { Company } = require('../models');

export const companyCrud = sequelizeCrud(Company);
