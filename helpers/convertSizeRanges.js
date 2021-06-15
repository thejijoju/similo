export default function convertSizeRanges(ranges) {
  if (ranges[0] === '') {
    return null;
  }
  const numberRanges = [];
  ranges.forEach((range) => {
    if (range === '10,001+') {
      numberRanges.push([10001, 2147483647]);
      return;
    }

    const minValue = range.split(' ')[0].split('-')[0].replace(/,/g, '');
    const maxValue = range.split(' ')[0].split('-')[1].replace(/,/g, '');

    numberRanges.push([minValue, maxValue]);
  });
  return numberRanges;
}
