module.exports = function createSortQuery(sortOption, byOrder) {
  switch (sortOption) {
    case 'relevant':
      return byOrder
        ? `ORDER BY "order"`
        : `ORDER BY ts_rank("searchVector", to_tsquery('english', ?)) DESC, name`;

    case 'recent':
      return `ORDER BY "yearOfFoundation" DESC NULLS LAST, name`;

    case 'stockstockPrice asc':
    case 'stockstockPrice desc':
      return `ORDER BY "stockPrice" ${sortOption
        .split(' ')[1]
        .toUpperCase()} NULLS LAST, name`;

    case 'stockmarketCap asc':
    case 'stockmarketCap desc':
      return `ORDER BY "marketCap" ${sortOption
        .split(' ')[1]
        .toUpperCase()} NULLS LAST, name`;

    case 'stockopen asc':
    case 'stockopen desc':
      return `ORDER BY "open" ${sortOption
        .split(' ')[1]
        .toUpperCase()} NULLS LAST, name`;

    case 'stockvolume asc':
    case 'stockvolume desc':
      return `ORDER BY "volume" ${sortOption
        .split(' ')[1]
        .toUpperCase()} NULLS LAST, name`;

    case 'stockpriceEps asc':
    case 'stockpriceEps desc':
      return `ORDER BY "priceEps" ${sortOption
        .split(' ')[1]
        .toUpperCase()} NULLS LAST, name`;

    default:
      return byOrder
        ? `ORDER BY "order"`
        : `ORDER BY ts_rank("searchVector", to_tsquery('english', ?)) DESC, name`;
  }
};
