/* eslint-disable no-param-reassign */
const cron = require('node-cron');

const getStockData = require('./getStockData');
const { Company } = require('../models');

// Run every hour
cron.schedule('* 1 * * *', async () => {
  const companies = await Company.findAll();
  const stockSymbols = [];
  companies.forEach((company) => {
    if (company.stockSymbol) {
      stockSymbols.push(company.stockSymbol);
    }
  });
  const stockData = await getStockData(Array.from(new Set(stockSymbols)));
  Object.keys(stockData).forEach((stockSymbol) => {
    const companiesToUpdate = [];
    companies.forEach((company) => {
      if (company.stockSymbol === stockSymbol) {
        companiesToUpdate.push(company);
      }
    });
    companiesToUpdate.forEach((company) => {
      company.stockData = JSON.stringify(stockData[company.stockSymbol]);
      company.marketCap = stockData[company.stockSymbol].marketCap;
      company.stockPrice = stockData[company.stockSymbol].stockPrice;
      company.volume = stockData[company.stockSymbol].volume;
      company.open = stockData[company.stockSymbol].open;
      company.priceEps = stockData[company.stockSymbol].priceEps;
      company.save();
    });
  });
});
