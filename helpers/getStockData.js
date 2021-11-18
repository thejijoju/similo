const axios = require('axios');
const { YAHOO_FINANCE_API_KEY } = require('../constants/index');

// eslint-disable-next-line consistent-return
module.exports = async function getStockData(symbols = []) {
  if (!symbols.length) {
    return {};
  }
  const options = {
    method: 'GET',
    url: `https://yfapi.net/v6/finance/quote?symbols=${symbols.join(',')}`,
    params: { modules: 'defaultKeyStatistics,assetProfile' },
    headers: {
      'x-api-key': YAHOO_FINANCE_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    const result = {};
    response.data.quoteResponse.result.forEach((companyData) => {
      result[companyData.symbol] = {
        marketCap: companyData.marketCap,
        stockPrice: companyData.regularMarketPrice,
        stockPriceChange: companyData.regularMarketChange,
        regularMarketChangePercent: companyData.regularMarketChangePercent,
        volume: companyData.regularMarketVolume,
        priceEps: companyData.priceEpsCurrentYear,
        open: companyData.regularMarketOpen,
        currency: companyData.financialCurrency,
        exchange: companyData.exchange,
        symbol: companyData.symbol,
        createdAt: new Date(),
      };
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
