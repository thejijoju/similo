import convertNumberToCompanyRevenueRange from './convertNumberToCompanyRevenueRange';

export default function isNumberInsideCompanyRevenueRange(range, number) {
  const targetRange = convertNumberToCompanyRevenueRange(number);
  console.log(targetRange === range);
  return targetRange === range;
}
