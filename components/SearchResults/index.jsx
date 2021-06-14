import React, { useContext } from 'react';

import { COMPANIES_PER_PAGE } from 'constants/index';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';
import { SearchResultsContext } from '../../context/index';

export default function SearchResults({ searchResults }) {
  const { setAreCompanyCardsExpanded, areCompanyCardsExpanded } =
    useContext(SearchResultsContext);
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
        <span
          className={classes.openAllCards}
          onClick={() => {
            setAreCompanyCardsExpanded((prevState) => !prevState);
          }}
        >
          <i>dot</i>
          {areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards'}
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
