import React, { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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

  const { isSearchMode, isSearchResultsMode } = useContext(UIContext);

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
      style={{ height: initialHeight }}
    >
      <div className={classes.logo}>
        <Image src="/images/Logo1.svg" width={191} height={79} />
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
