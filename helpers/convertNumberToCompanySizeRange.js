export default function convertNumberToCompanySizeRange(number) {
  switch (true) {
    case number <= 200:
      return '0-200';
    case number <= 500:
      return '201-500';
    case number <= 1000:
      return '501-1,000';
    case number <= 5000:
      return '1,001-5,000';
    case number <= 10000:
      return '5,001-10,000';
    case number > 10000:
      return '10,001+';
    default:
      return '';
  }
}
