import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';
import qs from 'qs';

import Filters from '@/components/Filters';
import SearchResults from '@/components/Search/SearchResults';

import { SearchResultsContext, UIContext } from '@/context/index';
import classes from './styles.module.scss';
import { API_URL } from '../constants/index';

export default function HomePage({
  searchResults,
  expertise,
  locations,
  csrs,
  csrLinks,
  expertiseLinks,
}) {
  const router = useRouter();

  const {
    setCompanyExpertiseFilter,
    setCompanySizeFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
    setCompanyLocationFilter,
    setCompanyDiversityFilter,
    setCompanyCSRFilter,
  } = useContext(SearchResultsContext);

  const { isFiltersPanelVisible } = useContext(UIContext);

  useEffect(() => {
    document.documentElement.style.minHeight = `${document.documentElement.clientHeight}px`;
  });

  useEffect(() => {
    if (isFiltersPanelVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFiltersPanelVisible]);

  useEffect(() => {
    const expertiseFilters = router.query.expertise
      ? router.query.expertise.split(',')
      : [];
    setCompanyExpertiseFilter(expertiseFilters);

    const typeFilters = router.query.companyType
      ? router.query.companyType.split(',')
      : [];
    setCompanyTypeFilter(typeFilters);

    const sizeFilters = router.query.companySize
      ? router.query.companySize.split(',|')
      : [];
    setCompanySizeFilter(sizeFilters);

    const revenueFilters = router.query.revenue
      ? router.query.revenue.split(',|')
      : [];
    setCompanyRevenueFilter(revenueFilters);

    const locationsFilters = router.query.locations
      ? router.query.locations.split(',')
      : [];
    setCompanyLocationFilter(locationsFilters);

    const diversityFilters = router.query.diversity
      ? router.query.diversity.split(',')
      : [];
    setCompanyDiversityFilter(diversityFilters);

    const csrFilters = router.query.csr ? router.query.csr.split(',') : [];
    setCompanyCSRFilter(csrFilters);
  }, []);

  return (
    <div className={classes.HomePage}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Similo</title>
      </Head>
      <main className={classes.main}>
        <Filters expertise={expertise} locations={locations} csrs={csrs} />
        <SearchResults
          searchResults={searchResults}
          csrLinks={csrLinks}
          expertiseLinks={expertiseLinks}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { term } = context.query;

  let searchResults;
  const url = context.query.fromSuggestions
    ? `${API_URL}/companies/search/searchFromSuggestions`
    : `${API_URL}/companies/search`;

  if (!term) {
    searchResults = null;
  } else {
    const response = await axios.get(`${url}?${qs.stringify(context.query)}`);

    searchResults = response.data;
  }

  const expertise = await axios.get(`${API_URL}/companies/expertise`);
  const locations = await axios.get(`${API_URL}/companies/locations`);
  const csrs = await axios.get(`${API_URL}/companies/csrs`);
  const csrLinks = await axios.get(`${API_URL}/companies/csrLinks`);
  const expertiseLinks = await axios.get(`${API_URL}/companies/expertiseLinks`);

  const sortedLocations = [...locations.data.data.locations].sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      searchResults,
      expertise: expertise.data.data.expertise,
      locations: sortedLocations,
      csrs: csrs.data.data.csr,
      csrLinks: csrLinks.data.data.csrLinks,
      expertiseLinks: expertiseLinks.data.data.expertiseLinks,
    },
  };
}
