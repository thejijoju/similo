export default function convertNumberToCompanyRevenueRange(number) {
  switch (true) {
    case number <= 1000000:
      return '0-1 million';
    case number <= 25000000:
      return '1-25 million';
    case number <= 100000000:
      return '25-100 million';
    case number <= 500000000:
      return '100-500 million';
    case number <= 1000000000:
      return '501-1,000 million';
    case number <= 10000000000:
      return '1-10 billion';
    case number <= 50000000000:
      return '10-50 billion';
    case number > 50000000000:
      return '50+ billion';
    default:
      return '';
  }
}
