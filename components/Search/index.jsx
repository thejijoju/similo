import React, { useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import qs from 'qs';
import classnames from 'classnames';

import { SearchResultsContext, UIContext } from '@/context/index';
import classes from './styles.module.scss';
import { API_URL, COMPANIES_PER_PAGE } from '../../constants';

let timer;

export default function Search({
  searchTerm,
  setSearchTerm,
  setSearchSuggestions,
  hideSearchSuggestions,
  onClearSearch,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    setCurrentPage,
    companySizeFilter,
    companyExpertiseFilter,
    companyTypeFilter,
    companyRevenueFilter,
    companyLocationFilter,
    companyCSRFilter,
    sortOption,
    setCompanySizeFilter,
    setCompanyLocationFilter,
    setCompanyExpertiseFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
    companyDiversityFilter,
    setCompanyDiversityFilter,
    setCompanyCSRFilter,
  } = useContext(SearchResultsContext);
  const { setIsSearchMode } = useContext(UIContext);

  const searchBarRef = useRef();

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

  const createSearchUrl = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (searchTerm.trim() === '') {
      return;
    }

    let isCompany;
    let isIndustry;
    let entityName;
    try {
      const response = await axios.get(
        `${API_URL}/companies/search/isCompany?term=${encodeURIComponent(
          searchTerm
        )}`
      );
      isCompany = response.data.data.isCompany;
      isIndustry = response.data.data.isIndustry;
      entityName = response.data.data.name;
    } catch (error) {
      console.log(error);
      isCompany = false;
    }

    const queryObject = {
      term:
        isCompany || isIndustry ? entityName : encodeURIComponent(searchTerm),
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

    if (companyDiversityFilter.length) {
      queryObject.diversity = companyDiversityFilter.join(',');
    }

    if (companyCSRFilter.length) {
      queryObject.csr = companyCSRFilter.join(',');
    }

    if (router.query.fromSuggestions && !event) {
      queryObject.fromSuggestions = 'true';
      queryObject.suggestionType = router.query.suggestionType;
    }

    if (isCompany || isIndustry) {
      queryObject.fromSuggestions = 'true';
      queryObject.suggestionType = isCompany ? 'company' : 'industry';
    } else {
      delete queryObject.fromSuggestions;
      delete queryObject.suggestionType;
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
    createSearchUrl();
  }, [
    companySizeFilter,
    companyExpertiseFilter,
    companyTypeFilter,
    companyRevenueFilter,
    companyLocationFilter,
    companyDiversityFilter,
    companyCSRFilter,
    sortOption,
  ]);

  useEffect(() => {
    if (!router.query.term) {
      setSearchTerm('');
    }
  }, [router.query.term]);

  return (
    <form
      onSubmit={(event) => {
        setCompanySizeFilter([]);
        setCompanyLocationFilter([]);
        setCompanyExpertiseFilter([]);
        setCompanyRevenueFilter([]);
        setCompanyTypeFilter([]);
        setCompanyDiversityFilter([]);
        setCompanyCSRFilter([]);
        createSearchUrl(event);
      }}
      className={classes.Search}
    >
      <input
        onFocus={() => {
          setIsSearchMode(true);
          setIsHovered(true);
        }}
        onBlur={() => setIsHovered(false)}
        type="text"
        placeholder="What company or brand do you want to compare?"
        className={classes.searchBar}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyUp={getSearchSuggestions}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => {
          if (document.activeElement === searchBarRef.current) {
            return;
          }
          setIsHovered(false);
        }}
        ref={searchBarRef}
      />
      <i
        className={classnames(classes.closeIcon, isHovered && classes.hover)}
        onClick={() => {
          onClearSearch();
        }}
      >
        Close
      </i>
    </form>
  );
}
