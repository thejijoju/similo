/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const models = {};

fs.readdirSync(path.join(process.cwd(), 'models'))
  .filter((fileName) => /\.js$/.test(fileName) && fileName !== 'index.js')
  .forEach((fileName) => {
    const model = require(`./${fileName}`)(sequelize, Sequelize.DataTypes);
    console.log(model.name);
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
