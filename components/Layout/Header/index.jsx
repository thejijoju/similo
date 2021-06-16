import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import SearchSuggestions from './SearchSuggestions';
import Search from './Search';

import classes from './styles.module.scss';

import useOnClickOutside from '../../../helpers/useOnClickOutside';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchSuggestionVisible, setIsSearchSuggestionVisible] =
    useState(false);

  const searchContainerRef = useRef();

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

  useOnClickOutside(searchContainerRef, hideSearchSuggestions);

  return (
    <header className={classes.Header}>
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
    </header>
  );
}
