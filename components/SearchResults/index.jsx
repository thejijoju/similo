import React from 'react';

import { COMPANIES_PER_PAGE } from 'constants/index';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';

export default function SearchResults({ searchResults }) {
  if (!searchResults) {
    return null;
  }
  if (searchResults.count === 0) {
    return (
      <div className={classes.SearchResults}>
        <div className={classes.noResults}>
          No result found. Try a company or brand name or use a different
          keyword.
        </div>
      </div>
    );
  }
  return (
    <div className={classes.SearchResults}>
      <div className={classes.header}>
        <span>{searchResults.totalCount} Total results</span>
        <span className={classes.openAllCards}>
          <i>dot</i>Open all cards
        </span>
      </div>
      <div className={classes.resultsContainer}>
        {searchResults.data.companies.map((company) => {
          return <SearchResult company={company} key={company.id} />;
        })}
      </div>
      {searchResults.totalCount > COMPANIES_PER_PAGE && (
        <div className={classes.displayMore}>
          <button type="button">Display more results</button>
        </div>
      )}
    </div>
  );
}
