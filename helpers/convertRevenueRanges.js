export default function convertRevenueRanges(ranges) {
  if (ranges[0] === '') {
    return null;
  }
  const numberRanges = [];
  ranges.forEach((range) => {
    if (range === '50+ billion') {
      numberRanges.push([50 * 1000000000, 9223372036854775807]);
      return;
    }
    let multiplier = 1000;
    const stringMultiplier = range.split(' ')[1];
    if (stringMultiplier === 'million') {
      multiplier = 1000000;
    } else if (stringMultiplier === 'billion') {
      multiplier = 1000000000;
    }
    const minValue =
      range.split(' ')[0].split('-')[0].replace(/,/g, '') * multiplier;
    const maxValue =
      range.split(' ')[0].split('-')[1].replace(/,/g, '') * multiplier;

    numberRanges.push([minValue, maxValue]);
  });
  return numberRanges;
}
