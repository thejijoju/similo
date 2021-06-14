const fs = require('fs');
const path = require('path');
const sequelize = require('../config/db');

const models = {};

console.log(path.join(process.cwd(), 'models'));

fs.readdirSync(path.join(process.cwd(), 'models'))
  .filter((fileName) => /\.js$/.test(fileName) && fileName !== 'index.js')
  .forEach((fileName) => {
    const model = sequelize.import(
      path.join(process.cwd(), 'models', fileName)
    );
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
