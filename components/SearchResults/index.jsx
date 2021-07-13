import React, { useState, useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import arrayMove from 'array-move';

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

  const [isAllowedToLoadPreviousPage, setIsAllowedToLoadPreviousPage] =
    useState(false);
  const [currentTopPage, setCurrentTopPage] = useState(0);
  const [currentBottomPage, setCurrentBottomPage] = useState(0);
  const [noResultInitialHeight, setNoResultInitalHeight] = useState('');
  const [searchResultsInitialHeight, setSearchResultsInitalHeight] =
    useState('');
  const [addSearchResultsDirection, setAddSearchResultsDirection] =
    useState('bottom');

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
    isSearchResultsLoading,
    setIsSearchResultsLoading,
    lastSearchTerm,
  } = useContext(SearchResultsContext);

  useEffect(() => {
    console.log('last search', lastSearchTerm);
  }, [lastSearchTerm]);

  const {
    setIsSearchResultsMode,
    setIsFiltersPanelVisible,
    isFiltersPanelVisible,
  } = useContext(UIContext);

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
    }, 1400);
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
    setAddSearchResultsDirection(direction === 'forward' ? 'bottom' : 'top');
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
      updatedResults.data.companies = updatedResults.data.companies.filter(
        (company) => !company.hidden
      );
      console.log(updatedResults.data.companies);

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
      setAddSearchResultsDirection('bottom');
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
    console.log('GETTING MORE');
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
    console.log('GETTING SEARCH RESULTS');

    const companyPreviousPosition =
      innerSearchResults?.data?.companies.findIndex(
        (company) => company.name === router.query.term
      );

    setIsSearchResultsLoading(true);
    setAddSearchResultsDirection('bottom');
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

      if (
        companyPreviousPosition !== -1 &&
        companyPreviousPosition !== undefined
      ) {
        const companyCurrentPosition = response.data.data.companies.findIndex(
          (company) => company.name === router.query.term
        );

        if (companyCurrentPosition === -1) {
          setInnerSearchResults(response.data);
        } else {
          console.log('REBUILDING');
          console.log('LENGTH', response.data.data.companies.length);
          if (response.data.data.companies.length < 10) {
            const count = 10 - response.data.data.companies.length;
            for (let i = 0; i < count; i++) {
              response.data.data.companies.push({
                ...response.data.data.companies[0],
                id: Math.random(),
                hidden: true,
                name: 'Noname',
              });
            }
          }

          arrayMove.mutate(
            response.data.data.companies,
            companyCurrentPosition,
            companyPreviousPosition
          );
          response.data.data.companies.forEach((company, i) => {
            if (company.hidden && i < companyPreviousPosition) {
              response.data.data.companies.splice(i, 1);
              response.data.data.companies.unshift(company);
            }
          });
          setInnerSearchResults(response.data);
        }
      } else {
        setInnerSearchResults(response.data);
      }

      setCurrentTopPage(response.data.page);
      setCurrentBottomPage(response.data.page);
      setIsSearchResultsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
    if (
      router.query.suggestionType === 'industry' ||
      !router.query.fromSuggestions ||
      isSearchResultsLoading
    ) {
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
      <div
        className={classes.header}
        style={{ zIndex: isFiltersPanelVisible ? 0 : 1 }}
      >
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
      {isSearchResultsLoading && addSearchResultsDirection === 'top' && (
        <SkeletonLoader totalCount={innerSearchResults.totalCount} />
      )}
      <div className={classes.resultsContainer}>
        {innerSearchResults.data.companies.map((company, i) => {
          return (
            <SearchResult company={company} key={company.companyId} id={i} />
          );
        })}
      </div>
      {isSearchResultsLoading && addSearchResultsDirection !== 'top' && (
        <SkeletonLoader totalCount={9999} />
      )}
      {COMPANIES_PER_PAGE * (currentPage + 1) <
        +innerSearchResults.totalCount &&
        !isSearchResultsLoading &&
        router.query.suggestionType !== 'company' && (
          <div className={classes.displayMore}>
            <button type="button" onClick={getMoreSearchResults}>
              Display more results
            </button>
          </div>
        )}
    </div>
  );
}
