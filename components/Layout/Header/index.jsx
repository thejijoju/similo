/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import classnames from 'classnames';

import { UIContext } from '@/context/index';
import SearchSuggestions from './SearchSuggestions';
import Search from './Search';

import classes from './styles.module.scss';

import useOnClickOutside from '../../../helpers/useOnClickOutside';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchSuggestionVisible, setIsSearchSuggestionVisible] =
    useState(false);
  const [initialHeight, setInitalHeight] = useState('');

  const {
    isSearchMode,
    isSearchResultsMode,
    setIsSearchMode,
    setIsSearchResultsMode,
    isFiltersPanelVisible,
  } = useContext(UIContext);

  /* const {
    setCompanyExpertiseFilter,
    setCompanySizeFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
    setCompanyLocationFilter,
  } = useContext(SearchResultsContext); */

  const searchContainerRef = useRef();
  const headerRef = useRef();

  const router = useRouter();

  useEffect(() => {
    if (router.query.term) {
      setSearchTerm(decodeURI(router.query.term));
    }
  }, []);

  const showSearchSuggestions = () => {
    setIsSearchSuggestionVisible(true);
  };

  const hideSearchSuggestions = () => {
    setIsSearchSuggestionVisible(false);
  };

  useEffect(() => {
    if (!searchSuggestions.length) {
      hideSearchSuggestions();
    }
  }, [searchSuggestions]);

  const clearSearch = () => {
    setSearchTerm('');
    hideSearchSuggestions();
  };

  useEffect(() => {
    if (searchSuggestions.length) {
      showSearchSuggestions();
    }
  }, [searchSuggestions]);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      return;
    }
    setInitalHeight(
      `calc(100vh - ${window.innerWidth <= 329 ? '45' : '93'}px)`
    );
  }, []);

  useEffect(() => {
    if (initialHeight.toString().includes('calc')) {
      setInitalHeight(headerRef.current.clientHeight);
    }
  }, [initialHeight]);

  useOnClickOutside(searchContainerRef, hideSearchSuggestions);

  return (
    <header
      className={classnames(
        classes.Header,
        isSearchMode && classes.searchMode,
        isSearchResultsMode && classes.searchResultsMode,
        isSearchResultsMode && classes.searchMode
      )}
      ref={headerRef}
      style={{
        height: initialHeight,
        minHeight: isFiltersPanelVisible ? 69 : 'unset',
      }}
    >
      <div
        className={classes.logo}
        onClick={() => {
          setIsSearchMode(false);
          setIsSearchResultsMode(false);
        }}
      >
        <Link href="/">
          <a>
            <Image src="/images/Logo1.svg" width={191} height={79} />
          </a>
        </Link>
      </div>
      <div className={classes.searchContainer} ref={searchContainerRef}>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSearchSuggestions={setSearchSuggestions}
          hideSearchSuggestions={hideSearchSuggestions}
        />
        <div className={classes.searchSuggestionsContainer}>
          <SearchSuggestions
            searchSuggestions={searchSuggestions}
            show={isSearchSuggestionVisible}
            onHide={hideSearchSuggestions}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        </div>
        <i className={classes.closeIcon} onClick={clearSearch}>
          Close
        </i>
      </div>
      <div className={classes.description}>
        <p>The european company directory.</p>
        <p>150.000 + companies</p>
      </div>
      <div className={classes.secondDescription}>
        <p>Made by people. For people.</p>
      </div>
    </header>
  );
}
