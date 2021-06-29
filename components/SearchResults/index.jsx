import React, { useState, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import { COMPANIES_PER_PAGE, API_URL } from 'constants/index';
import SkeletonLoader from '@/components/SkeletonLoader';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';
import { SearchResultsContext, UIContext } from '../../context/index';

let timer;

export default function SearchResults({ searchResults }) {
  const [innerSearchResults, setInnerSearchResults] = useState({
    ...searchResults,
  });
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [isAllowedToLoadPreviousPage, setIsAllowedToLoadPreviousPage] =
    useState(false);
  const [currentTopPage, setCurrentTopPage] = useState(0);
  const [currentBottomPage, setCurrentBottomPage] = useState(0);
  const [noResultInitialHeight, setNoResultInitalHeight] = useState('');
  const [searchResultsInitialHeight, setSearchResultsInitalHeight] =
    useState('');

  const router = useRouter();

  const {
    setAreCompanyCardsExpanded,
    areCompanyCardsExpanded,
    currentPage,
    setCurrentPage,
    setCompanyExpertiseFilter,
    setCompanySizeFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
    setCompanyLocationFilter,
  } = useContext(SearchResultsContext);

  const { setIsSearchResultsMode, setIsFiltersPanelVisible } =
    useContext(UIContext);

  const noResultsRef = useRef();
  const searchResultsRef = useRef();

  // Optional chaining gives error 'Parsing error: Unexpected token'
  useEffect(() => {
    if (innerSearchResults) {
      if (innerSearchResults.data) {
        if (innerSearchResults.data.companies) {
          setIsSearchResultsMode(true);
        }
      }
    }
  }, [innerSearchResults]);

  useEffect(() => {
    setIsAllowedToLoadPreviousPage(false);
    timer = setTimeout(() => {
      setIsAllowedToLoadPreviousPage(true);
    }, 1000);
  }, [searchResults, innerSearchResults]);

  useEffect(() => {
    setInnerSearchResults(searchResults);
    if (searchResults) {
      setCurrentPage(searchResults.page);
    }
  }, [searchResults]);

  /* useEffect(() => {
    console.log('TOP PAGE', currentTopPage);
    console.log('BOTTOM PAGE', currentBottomPage);
  }, [currentTopPage, currentBottomPage]); */

  useEffect(() => {
    if (searchResults) {
      setCurrentTopPage(searchResults.page);
      setCurrentBottomPage(searchResults.page);
    }
  }, [searchResults]);

  /* useEffect(() => {
    console.log(isAllowedToLoadPreviousPage);
  }, [isAllowedToLoadPreviousPage]); */

  const getMoreSearchResultsDirectional = async (direction = 'forward') => {
    if (
      (direction === 'forward' &&
        COMPANIES_PER_PAGE * (currentBottomPage + 1) >
          innerSearchResults.totalCount) ||
      (direction === 'back' && currentTopPage === 0) ||
      isSearchResultsLoading
    ) {
      return;
    }

    // const curScrollPos = document.documentElement.scrollTop;
    // const oldScroll = document.documentElement.scrollHeight;

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
      console.log(direction);
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
      // const newScroll = document.documentElement.scrollHeight;
      if (direction === 'back') {
        const searchResultsElements = document.querySelectorAll(
          'div[data-element="search-result"]'
        );

        let newElementsCount =
          innerSearchResults.totalCount - COMPANIES_PER_PAGE;
        if (newElementsCount > COMPANIES_PER_PAGE) {
          newElementsCount = COMPANIES_PER_PAGE;
        }

        let scrollAmount = 0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < newElementsCount; i++) {
          scrollAmount += searchResultsElements[0].offsetHeight;
        }

        setTimeout(() => {
          /* document.documentElement.scrollTop =
            curScrollPos + (newScroll - oldScroll + 140); */
          document.documentElement.scrollTo({
            top: scrollAmount + document.documentElement.scrollTop,
          });
          setIsAllowedToLoadPreviousPage(true);
          clearTimeout(timer);
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

  const getSearchResults = async () => {
    setCurrentPage(0);
    const url = router.query.fromSuggestions
      ? `${API_URL}/companies/search/searchFromSuggestions`
      : `${API_URL}/companies/search`;
    try {
      const response = await axios.get(url, {
        params: {
          ...router.query,
          page:
            router.query.suggestionType === 'company' ? undefined : currentPage,
        },
      });
      console.log(response.data);
      setInnerSearchResults(response.data);
      // setCurrentPage(response.data.page);
      setCurrentTopPage(response.data.page);
      setCurrentBottomPage(response.data.page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /* if (
      router.query.fromSuggestions &&
      router.query.suggestionType === 'company'
    ) {
      return;
    } */
    if (router.query.term) {
      getSearchResults();
    } else {
      setInnerSearchResults([]);
      setCompanyExpertiseFilter([]);
      setCompanySizeFilter([]);
      setCompanyRevenueFilter([]);
      setCompanyTypeFilter([]);
      setCompanyLocationFilter([]);
    }
  }, [router.query]);

  const switchPage = () => {
    if (!router.query.fromSuggestions || isSearchResultsLoading) {
      return;
    }
    if (
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 150 &&
      isAllowedToLoadPreviousPage
    ) {
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

  useEffect(() => {
    let elementHeightCorrection;
    if (window.innerWidth <= 329) {
      elementHeightCorrection = '133';
    } else if (window.innerWidth > 329 && window.innerWidth < 748) {
      elementHeightCorrection = '175';
    } else if (window.innerWidth > 748 && window.innerWidth < 1201) {
      elementHeightCorrection = '280';
    }
    setNoResultInitalHeight(
      `calc(100vh - ${elementHeightCorrection}px + 14px)`
    );
    setSearchResultsInitalHeight(
      `calc(100vh - ${elementHeightCorrection}px + 29px)`
    );
  }, []);

  useEffect(() => {
    if (!noResultsRef.current) {
      return;
    }
    if (noResultInitialHeight.toString().includes('calc')) {
      setNoResultInitalHeight(noResultsRef.current.clientHeight);
    }
  }, [noResultInitialHeight]);

  useEffect(() => {
    if (!searchResultsRef.current) {
      return;
    }
    if (searchResultsInitialHeight.toString().includes('calc')) {
      setNoResultInitalHeight(searchResultsRef.current.clientHeight);
    }
  }, [searchResultsInitialHeight]);

  if (!innerSearchResults || !innerSearchResults.data) {
    return null;
  }

  if (innerSearchResults.count === 0) {
    return (
      <div className={classes.SearchResults}>
        <div
          className={classes.noResults}
          ref={noResultsRef}
          style={{ height: noResultInitialHeight }}
        >
          No result found. Try a company or brand name or use a different
          keyword.
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes.SearchResults}
      style={{ minHeight: searchResultsInitialHeight }}
      ref={searchResultsRef}
    >
      <div className={classes.header}>
        <button type="button" onClick={() => setIsFiltersPanelVisible(true)}>
          <i>lines</i>Filter
        </button>
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
          return <SearchResult company={company} key={company.companyId} />;
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
