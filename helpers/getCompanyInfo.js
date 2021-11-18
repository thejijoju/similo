const axios = require('axios');
const { YAHOO_FINANCE_API_KEY } = require('../constants/index');

function createKeyPeopleString(keyPeople) {
  let keyPeopleString = '';
  keyPeople.forEach((officer, index) => {
    keyPeopleString += `${officer.name} (${officer.title})${
      index !== keyPeople.length - 1 && ', '
    }`;
  });
  // Remove double spaces
  keyPeopleString = keyPeopleString.replace(/ +(?= )/g, '');

  return keyPeopleString;
}

// eslint-disable-next-line consistent-return
module.exports = async function getStockData(symbols = []) {
  try {
    const results = await Promise.all(
      symbols.map((symbol) =>
        axios.request({
          method: 'GET',
          url: `https://yfapi.net/v11/finance/quoteSummary/${symbol}`,
          params: { modules: 'defaultKeyStatistics,assetProfile' },
          headers: {
            'x-api-key': YAHOO_FINANCE_API_KEY,
          },
        })
      )
    );

    const companyData = {};
    results.forEach((result, index) => {
      companyData[symbols[index]] = {};

      companyData[symbols[index]].about =
        result.data.quoteSummary.result[0].assetProfile.longBusinessSummary;
      companyData[symbols[index]].keyPeople = createKeyPeopleString(
        result.data.quoteSummary.result[0].assetProfile.companyOfficers
      );
    });

    return companyData;
  } catch (error) {
    console.error(error);
  }
};
