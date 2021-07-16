const { sequelizeCrud } = require('express-sequelize-crud');
const { Company, Location, Industry } = require('../models');

export const companyCrud = sequelizeCrud(Company);
export const locationCrud = sequelizeCrud(Location);
export const industryCrud = sequelizeCrud(Industry);
