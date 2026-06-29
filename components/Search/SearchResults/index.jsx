import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import amplitude from 'amplitude-js';

import { COMPANIES_PER_PAGE, API_URL } from 'constants/index';
import SkeletonLoader from '@/components/SkeletonLoader';
import useOnClickOutside from '@/helpers/useOnClickOutside';
import { exportCSV, exportJSON, exportPDF } from '@/helpers/exportResults';
import SearchResult from './SearchResult';

import classes from './styles.module.scss';
import { SearchResultsContext, UIContext } from '../../../context/index';

let timer;

// Format the rough worldwide estimate for display, e.g. 236 -> "~240",
// 9500 -> "10,000+".
function formatEstimate(n) {
  if (!n) return null;
  if (n >= 1000) {
    const rounded = Math.round(n / 1000) * 1000;
    return `${rounded.toLocaleString('en-US')}+`;
  }
  const rounded = Math.round(n / 10) * 10;
  return `~${rounded}`;
}

export default function SearchResults({
  searchResults,
  csrLinks,
  expertiseLinks,
}) {
  const [innerSearchResults, setInnerSearchResults] = useState({
    ...searchResults,
  });

  const [exportOpen, setExportOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const exportRef = useRef();
  useOnClickOutside(exportRef, () => setExportOpen(false));

  const copyShareLink = () => {
    const url = window.location.href;
    const done = () => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(done);
    } else {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    }
  };

  const [isAllowedToLoadPreviousPage, setIsAllowedToLoadPreviousPage] =
    useState(false);
  const [currentTopPage, setCurrentTopPage] = useState(0);
  const [currentBottomPage, setCurrentBottomPage] = useState(0);
  const [noResultInitialHeight, setNoResultInitalHeight] = useState('');
  const [searchResultsInitialHeight, setSearchResultsInitalHeight] =
    useState('');
  const [addSearchResultsDirection, setAddSearchResultsDirection] =
    useState('bottom');
  const [y, setY] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
    setCompanyDiversityFilter,
    setCompanyCSRFilter,
    setAvailableExpertise,
    setAvailableCSR,
  } = useContext(SearchResultsContext);

  useEffect(() => {
    console.log('last search', lastSearchTerm);
  }, [lastSearchTerm]);

  // Keep the Expertise and CSR filter options in sync with the current results.
  useEffect(() => {
    setAvailableExpertise(
      (innerSearchResults && innerSearchResults.availableExpertise) || []
    );
    setAvailableCSR(
      (innerSearchResults && innerSearchResults.availableCSR) || []
    );
  }, [innerSearchResults]);

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

    // Tell the server which companies are already shown so the next page
    // returns fresh, non-duplicate results (the API is stateless).
    const alreadyShown = (innerSearchResults.data.companies || [])
      .filter((c) => !c.hidden)
      .map((c) => c.name)
      .join('|');

    try {
      const response = await axios.get(url, {
        params: {
          ...router.query,
          page: currentPage + 1,
          exclude: alreadyShown,
        },
      });
      setCurrentPage((prevState) => prevState + 1);
      const updatedResults = { ...innerSearchResults };

      updatedResults.data.companies = [
        ...updatedResults.data.companies,
        ...response.data.data.companies,
      ];
      updatedResults.hasMore = response.data.hasMore;
      updatedResults.availableExpertise = Array.from(
        new Set([
          ...(innerSearchResults.availableExpertise || []),
          ...((response.data && response.data.availableExpertise) || []),
        ])
      );
      updatedResults.availableCSR = Array.from(
        new Set([
          ...(innerSearchResults.availableCSR || []),
          ...((response.data && response.data.availableCSR) || []),
        ])
      );
      setInnerSearchResults(updatedResults);
      setIsSearchResultsLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchResultsLoading(false);
    }
  };

  const errorResult = (error) => ({
    status: 'fail',
    count: 0,
    totalCount: 0,
    page: 0,
    data: { companies: [] },
    error:
      (error.response && error.response.data && error.response.data.message) ||
      'Something went wrong. Please try again later.',
  });

  const getSearchResults = async () => {
    setIsSearchResultsLoading(true);
    setAddSearchResultsDirection('bottom');
    setCurrentPage(0);
    setCurrentTopPage(0);
    setCurrentBottomPage(0);

    // The suggestion flow uses a different endpoint without batching.
    if (router.query.fromSuggestions) {
      try {
        const response = await axios.get(
          `${API_URL}/companies/search/searchFromSuggestions`,
          { params: { ...router.query, page: 0 } }
        );
        setInnerSearchResults(response.data);
      } catch (error) {
        console.log(error);
        setInnerSearchResults(errorResult(error));
      }
      setIsSearchResultsLoading(false);
      return;
    }

    // Progressive loading: fetch the fast first batch and the rest in
    // parallel; render the first batch the moment it lands.
    const url = `${API_URL}/companies/search`;
    const baseParams = { ...router.query, page: 0 };
    const firstReq = axios.get(url, {
      params: { ...baseParams, batch: 'first' },
    });
    const restReq = axios.get(url, {
      params: { ...baseParams, batch: 'rest' },
    });

    let firstData = null;
    try {
      const first = await firstReq;
      firstData = first.data;
      setInnerSearchResults(first.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const rest = await restReq;
      const baseCompanies =
        (firstData && firstData.data && firstData.data.companies) || [];
      const seen = new Set(
        baseCompanies.map((c) => (c.name || '').toLowerCase())
      );
      const merged = (rest.data.data.companies || []).filter(
        (c) => c && c.name && !seen.has(c.name.toLowerCase())
      );
      const base = firstData || rest.data;
      const companies = [...baseCompanies, ...merged];
      setInnerSearchResults({
        ...base,
        hasMore: rest.data.hasMore,
        estimatedTotal: firstData
          ? firstData.estimatedTotal
          : rest.data.estimatedTotal,
        count: companies.length,
        totalCount: companies.length,
        availableExpertise: Array.from(
          new Set([
            ...((firstData && firstData.availableExpertise) || []),
            ...(rest.data.availableExpertise || []),
          ])
        ),
        availableCSR: Array.from(
          new Set([
            ...((firstData && firstData.availableCSR) || []),
            ...(rest.data.availableCSR || []),
          ])
        ),
        data: { companies },
      });
    } catch (error) {
      console.log(error);
      if (!firstData) {
        setInnerSearchResults(errorResult(error));
      }
    }

    setIsSearchResultsLoading(false);
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
      setCompanyDiversityFilter([]);
      setCompanyCSRFilter([]);
    }
  }, [router.query]);

  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < window.scrollY) {
        if (isScrolled) {
          return;
        }
        amplitude.getInstance().logEvent('Scroll Down');
        setIsScrolled(true);
      }
      setY(window.scrollY);
    },
    [y, isScrolled]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
    // A search term is in the URL but results haven't arrived yet —
    // show the skeleton loader instead of a blank screen.
    if (router.query.term) {
      return (
        <div
          className={classes.SearchResults}
          style={{ minHeight: searchResultsInitialHeight }}
        >
          <SkeletonLoader totalCount={9999} />
        </div>
      );
    }
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
          {innerSearchResults.error ||
            'No result found. Try a company or brand name or use a different keyword.'}
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
        <span>
          {innerSearchResults.estimatedTotal
            ? `${formatEstimate(
                innerSearchResults.estimatedTotal
              )} similar companies`
            : `${
                innerSearchResults.data.companies.filter((c) => !c.hidden)
                  .length
              } results`}
        </span>
        <span
          className={classes.openAllCards}
          onClick={() => {
            setAreCompanyCardsExpanded((prevState) => {
              if (prevState === false || prevState === 'notExpanded') {
                return true;
              }
              if (prevState === true || prevState === 'expanded') {
                return false;
              }
            });
          }}
        >
          <i>dot</i>
          {areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards'}
        </span>
        <div className={classes.exportWrap} ref={exportRef}>
          <button
            type="button"
            className={classes.exportButton}
            onClick={() => setExportOpen((prev) => !prev)}
          >
            Export <span className={classes.exportCaret}>▾</span>
          </button>
          {exportOpen && (
            <div className={classes.exportMenu}>
              <span
                className={classes.exportShare}
                onClick={() => copyShareLink()}
              >
                {linkCopied ? 'Link copied!' : 'Copy link'}
              </span>
              <span
                onClick={() => {
                  exportPDF(
                    innerSearchResults.data.companies,
                    (router.query.customFields || '')
                      .split('|')
                      .map((s) => s.trim())
                      .filter(Boolean),
                    router.query.term
                      ? decodeURIComponent(router.query.term)
                      : ''
                  );
                  setExportOpen(false);
                }}
              >
                PDF
              </span>
              <span
                onClick={() => {
                  exportCSV(
                    innerSearchResults.data.companies,
                    (router.query.customFields || '')
                      .split('|')
                      .map((s) => s.trim())
                      .filter(Boolean),
                    router.query.term
                      ? decodeURIComponent(router.query.term)
                      : ''
                  );
                  setExportOpen(false);
                }}
              >
                CSV
              </span>
              <span
                onClick={() => {
                  exportJSON(
                    innerSearchResults.data.companies,
                    (router.query.customFields || '')
                      .split('|')
                      .map((s) => s.trim())
                      .filter(Boolean),
                    router.query.term
                      ? decodeURIComponent(router.query.term)
                      : ''
                  );
                  setExportOpen(false);
                }}
              >
                JSON
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          fontSize: '11px',
          color: '#a8a8a8',
          padding: '2px 2px 10px',
          letterSpacing: '0.02em',
        }}
      >
        Results are AI-generated (Claude) and may be approximate.
      </div>
      {isSearchResultsLoading && addSearchResultsDirection === 'top' && (
        <SkeletonLoader totalCount={innerSearchResults.totalCount} />
      )}
      <div className={classes.resultsContainer}>
        {innerSearchResults.data.companies.map((company, i) => {
          return (
            <SearchResult
              company={company}
              key={company.companyId}
              id={i}
              // csrLinks={csrLinks.filter(
              //   (link) => link.company === company.companyId
              // )}
              csrLinks={csrLinks}
              expertiseLinks={expertiseLinks}
            />
          );
        })}
      </div>
      {isSearchResultsLoading && addSearchResultsDirection !== 'top' && (
        <SkeletonLoader totalCount={9999} />
      )}
      {innerSearchResults.hasMore &&
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
