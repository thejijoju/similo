module.exports = function getSearchVectorTerm(searchTerm = '') {
  const searchTermArray = searchTerm.split(' ').map((term) => `${term}:*`);

  if (searchTermArray.length === 1) {
    return searchTermArray.join('');
  }

  return searchTermArray.join(' | ');
};
