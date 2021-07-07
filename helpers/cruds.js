const { sequelizeCrud } = require('express-sequelize-crud');
const { Company, Location } = require('../models');

export const companyCrud = sequelizeCrud(Company);
export const locationCrud = sequelizeCrud(Location);
