import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import { COMPANIES_PER_PAGE, API_URL } from 'constants/index';
import SkeletonLoader from '@/components/SkeletonLoader';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';
import { SearchResultsContext } from '../../context/index';

export default function SearchResults({ searchResults }) {
  const [innerSearchResults, setInnerSearchResults] = useState({
    ...searchResults,
  });
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [isAllowedToLoadPreviousPage, setIsAllowedToLoadPreviousPage] =
    useState(false);
  const [currentTopPage, setCurrentTopPage] = useState(0);
  const [currentBottomPage, setCurrentBottomPage] = useState(0);

  const router = useRouter();

  const {
    setAreCompanyCardsExpanded,
    areCompanyCardsExpanded,
    currentPage,
    setCurrentPage,
  } = useContext(SearchResultsContext);

  useEffect(() => {
    if (searchResults) {
      setTimeout(() => {
        setIsAllowedToLoadPreviousPage(true);
      }, 400);
    }
  }, [searchResults]);

  useEffect(() => {
    setInnerSearchResults(searchResults);
    if (searchResults) {
      setCurrentPage(searchResults.page);
    }
  }, [searchResults]);

  useEffect(() => {
    console.log('TOP PAGE', currentTopPage);
    console.log('BOTTOM PAGE', currentBottomPage);
  }, [currentTopPage, currentBottomPage]);

  useEffect(() => {
    if (searchResults) {
      console.log('SETTING');
      setCurrentTopPage(searchResults.page);
      setCurrentBottomPage(searchResults.page);
    }
  }, [searchResults]);

  useEffect(() => {
    console.log(isAllowedToLoadPreviousPage);
  }, [isAllowedToLoadPreviousPage]);

  const getMoreSearchResultsDirectional = async (direction = 'forward') => {
    if (
      (direction === 'forward' &&
        COMPANIES_PER_PAGE * (currentBottomPage + 1) >
          searchResults.totalCount) ||
      (direction === 'back' && currentTopPage === 0) ||
      isSearchResultsLoading
    ) {
      return;
    }

    const curScrollPos = document.documentElement.scrollTop;
    const oldScroll = document.documentElement.scrollHeight;

    setIsSearchResultsLoading(true);
    if (direction === 'back') {
      setIsAllowedToLoadPreviousPage(false);
    }

    const url = router.query.fromSuggestions
      ? `${API_URL}/companies/search/searchFromSuggestions`
      : `${API_URL}/companies/search`;

    try {
      const response = await axios.get(url, {
        params: {
          ...router.query,
          page:
            direction === 'forward'
              ? currentBottomPage + 1
              : currentTopPage - 1,
        },
      });

      if (direction === 'forward') {
        setCurrentBottomPage((prevState) => prevState + 1);
      } else {
        setCurrentTopPage((prevState) => prevState - 1);
      }
      const updatedResults = { ...innerSearchResults };

      if (direction === 'forward') {
        updatedResults.data.companies = [
          ...updatedResults.data.companies,
          ...response.data.data.companies,
        ];
      } else {
        updatedResults.data.companies = [
          ...response.data.data.companies,
          ...updatedResults.data.companies,
        ];
      }
      setInnerSearchResults(updatedResults);
      setIsSearchResultsLoading(false);
      const newScroll = document.documentElement.scrollHeight;
      if (direction === 'back') {
        setTimeout(() => {
          document.documentElement.scrollTop =
            curScrollPos + (newScroll - oldScroll + 140);
          setIsAllowedToLoadPreviousPage(true);
        }, 144);
      }
    } catch (error) {
      console.log(error);
      setIsSearchResultsLoading(false);
    }
  };

  const getMoreSearchResults = async () => {
    setIsSearchResultsLoading(true);

    const url = router.query.fromSuggestions
      ? `${API_URL}/companies/search/searchFromSuggestions`
      : `${API_URL}/companies/search`;

    try {
      const response = await axios.get(url, {
        params: {
          ...router.query,
          page: currentPage + 1,
        },
      });
      setCurrentPage((prevState) => prevState + 1);
      const updatedResults = { ...innerSearchResults };

      updatedResults.data.companies = [
        ...updatedResults.data.companies,
        ...response.data.data.companies,
      ];
      setInnerSearchResults(updatedResults);
      setIsSearchResultsLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchResultsLoading(false);
    }
  };

  const switchPage = () => {
    if (!router.query.fromSuggestions || isSearchResultsLoading) {
      return;
    }
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 150
    ) {
      console.log('BOTTOM');
      getMoreSearchResultsDirectional('forward');
    } else if (window.pageYOffset <= 50 && isAllowedToLoadPreviousPage) {
      console.log('TOP');
      getMoreSearchResultsDirectional('back');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', switchPage);
    return () => {
      window.removeEventListener('scroll', switchPage);
    };
  }, [
    router.query,
    isSearchResultsLoading,
    currentBottomPage,
    currentTopPage,
    isAllowedToLoadPreviousPage,
  ]);

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
        <span>{innerSearchResults.totalCount} Total results</span>
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
      {isSearchResultsLoading && (
        <SkeletonLoader totalCount={innerSearchResults.totalCount} />
      )}
      {COMPANIES_PER_PAGE * (currentPage + 1) <
        +innerSearchResults.totalCount &&
        !isSearchResultsLoading &&
        !router.query.fromSuggestions && (
          <div className={classes.displayMore}>
            <button type="button" onClick={getMoreSearchResults}>
              Display more results
            </button>
          </div>
        )}
    </div>
  );
}
