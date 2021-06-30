import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import qs from 'qs';

import { SearchResultsContext, UIContext } from '@/context/index';
import classes from './styles.module.scss';
import { API_URL, COMPANIES_PER_PAGE } from '../../../../constants';

let timer;

export default function Search({
  searchTerm,
  setSearchTerm,
  setSearchSuggestions,
  hideSearchSuggestions,
}) {
  const {
    setCurrentPage,
    companySizeFilter,
    companyExpertiseFilter,
    companyTypeFilter,
    companyRevenueFilter,
    companyLocationFilter,
    sortOption,
    setIsSearchResultsLoading,
  } = useContext(SearchResultsContext);
  const { setIsSearchMode } = useContext(UIContext);

  const router = useRouter();

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

  const search = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (searchTerm.trim() === '') {
      return;
    }

    const queryObject = {
      term: encodeURIComponent(searchTerm),
      perPage: COMPANIES_PER_PAGE,
    };

    if (companySizeFilter.length) {
      queryObject.companySize = companySizeFilter.join(',|');
    }

    if (companyExpertiseFilter.length) {
      queryObject.expertise = companyExpertiseFilter.join(',');
    }

    if (companyTypeFilter.length) {
      queryObject.companyType = companyTypeFilter.join(',');
    }

    if (companyRevenueFilter.length) {
      queryObject.revenue = companyRevenueFilter.join(',|');
    }

    if (companyLocationFilter.length) {
      queryObject.locations = companyLocationFilter.join(',');
    }

    if (router.query.fromSuggestions && !event) {
      queryObject.fromSuggestions = 'true';
      queryObject.suggestionType = router.query.suggestionType;
    }

    queryObject.sort = sortOption;

    const queryString = qs.stringify(queryObject);

    setCurrentPage(0);
    hideSearchSuggestions();
    clearTimeout(timer);
    router.push(
      `/?${queryString}`,
      undefined,
      { shallow: true }
      /* `/?term=${encodeURIComponent(
        searchTerm
      )}&page=0&perPage=${COMPANIES_PER_PAGE}`  ,
      undefined,
      { shallow: true } */
    );
  };

  useEffect(() => {
    search();
  }, [
    companySizeFilter,
    companyExpertiseFilter,
    companyTypeFilter,
    companyRevenueFilter,
    companyLocationFilter,
    sortOption,
  ]);

  useEffect(() => {
    if (!router.query.term) {
      setSearchTerm('');
    }
  }, [router.query.term]);

  return (
    <form onSubmit={search} className={classes.Search}>
      <input
        onFocus={() => setIsSearchMode(true)}
        type="text"
        placeholder="What company or brand do you want to compare?"
        className={classes.searchBar}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyUp={getSearchSuggestions}
      />
    </form>
  );
}
