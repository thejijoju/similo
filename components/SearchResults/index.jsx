import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import { COMPANIES_PER_PAGE, API_URL } from 'constants/index';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';
import { SearchResultsContext } from '../../context/index';

export default function SearchResults({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [innerSearchResults, setInnerSearchResults] = useState({
    ...searchResults,
  });

  const router = useRouter();

  useEffect(() => {
    setInnerSearchResults(searchResults);
  }, [searchResults]);

  const { setAreCompanyCardsExpanded, areCompanyCardsExpanded } =
    useContext(SearchResultsContext);

  const getMoreSearchResults = async () => {
    console.log(router.query);

    try {
      const response = await axios.get(`${API_URL}/companies/search`, {
        params: { ...router.query, page: currentPage + 1 },
      });
      setCurrentPage((prevState) => prevState + 1);
      const updatedResults = { ...innerSearchResults };
      console.log(updatedResults);
      updatedResults.data.companies = [
        ...updatedResults.data.companies,
        ...response.data.data.companies,
      ];
      setInnerSearchResults(updatedResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  if (!innerSearchResults || !innerSearchResults.data) {
    return null;
  }

  if (innerSearchResults.count === 0) {
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
        <span>{innerSearchResults.totalCount}Total results</span>
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
        {innerSearchResults.data.companies.map((company) => {
          return <SearchResult company={company} key={company.id} />;
        })}
      </div>
      {COMPANIES_PER_PAGE * (currentPage + 1) <
        +innerSearchResults.totalCount && (
        <div className={classes.displayMore}>
          <button type="button" onClick={getMoreSearchResults}>
            Display more results
          </button>
        </div>
      )}
    </div>
  );
}