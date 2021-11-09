import convertNumberToCompanySizeRanges from './convertNumberToCompanySizeRange';

export default function isNumberInsideCompanySizeRange(range, number) {
  const targetRange = convertNumberToCompanySizeRanges(number);

  return targetRange === range;
}
