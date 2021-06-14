import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';

import axios from 'axios';

import SearchSuggestions from './SearchSuggestions';

import classes from './styles.module.scss';
import { API_URL } from '../../../constants';
import useOnClickOutside from '../../../helpers/useOnClickOutside';

let timer;

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchSuggestionVisible, setIsSearchSuggestionVisible] =
    useState(false);

  const searchContainerRef = useRef();

  // const router = useRouter();

  const showSearchSuggestions = () => {
    setIsSearchSuggestionVisible(true);
  };

  const hideSearchSuggestions = () => {
    setIsSearchSuggestionVisible(false);
  };

  useEffect(() => {
    if (searchSuggestions.length) {
      showSearchSuggestions();
    }
  }, [searchSuggestions]);

  useOnClickOutside(searchContainerRef, hideSearchSuggestions);

  // eslint-disable-next-line consistent-return
  const getSearchSuggestions = () => {
    clearTimeout(timer);
    if (searchTerm === '') {
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
        <input
          type="text"
          placeholder="What company or brand do you want to compare?"
          className={classes.searchBar}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyUp={getSearchSuggestions}
        />
        <div className={classes.searchSuggestionsContainer}>
          <SearchSuggestions
            searchSuggestions={searchSuggestions}
            show={isSearchSuggestionVisible}
          />
        </div>
      </div>
    </header>
  );
}
