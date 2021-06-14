import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import axios from 'axios';

import SearchSuggestions from './SearchSuggestions';

import classes from './styles.module.scss';
import { API_URL, COMPANIES_PER_PAGE } from '../../../constants';
import useOnClickOutside from '../../../helpers/useOnClickOutside';

let timer;

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchSuggestionVisible, setIsSearchSuggestionVisible] =
    useState(false);

  const searchContainerRef = useRef();

  const router = useRouter();

  useEffect(() => {
    if (router.query.term) {
      setSearchTerm(router.query.term);
    }
  }, []);

  const showSearchSuggestions = () => {
    setIsSearchSuggestionVisible(true);
  };

  const hideSearchSuggestions = () => {
    setIsSearchSuggestionVisible(false);
  };

  const search = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      return;
    }
    hideSearchSuggestions();
    clearTimeout(timer);
    router.push(
      `/?term=${encodeURIComponent(
        searchTerm
      )}&page=0&perPage=${COMPANIES_PER_PAGE}`
    );
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

  const getSearchSuggestions = (event) => {
    if (event.key === 'Enter') {
      return;
    }
    clearTimeout(timer);

    if (searchTerm === '') {
      // eslint-disable-next-line consistent-return
      return setSearchSuggestions([]);
    }
    timer = setTimeout(() => {
      axios
        .get(`${API_URL}/companies/search/suggestions?term=${searchTerm}`)
        .then((response) => {
          setSearchSuggestions(response.data.data.companies);
        })
        .catch((error) => console.log(error));
    }, 1000);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <Image src="/images/Logo1.svg" width={191} height={79} />
      </div>
      <div className={classes.searchContainer} ref={searchContainerRef}>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="What company or brand do you want to compare?"
            className={classes.searchBar}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyUp={getSearchSuggestions}
          />
        </form>
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
