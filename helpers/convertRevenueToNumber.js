module.exports = function convertRevenueToNumber(revenue) {
  let multiplier = 1000;
  const stringMultiplier = revenue.trim().split(' ')[1];
  if (stringMultiplier === 'million') {
    multiplier = 1000000;
  } else if (stringMultiplier === 'billion') {
    multiplier = 1000000000;
  }

  let value = revenue.split(' ')[0];
  value = value.replace(/€/g, '');
  value = parseFloat(value);
  if (Number.isNaN(value)) {
    value = 0;
  }
  return value * multiplier;
};
