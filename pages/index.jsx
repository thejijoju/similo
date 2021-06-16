import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';
import qs from 'qs';

import Filters from '@/components/Filters';
import SearchResults from '@/components/SearchResults';

import { SearchResultsContext } from '@/context/index';
import classes from './styles.module.scss';
import { API_URL } from '../constants/index';

export default function HomePage({ searchResults, expertise, locations }) {
  const router = useRouter();

  const {
    setCompanyExpertiseFilter,
    setCompanySizeFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
  } = useContext(SearchResultsContext);

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
  }, []);

  return (
    <div className={classes.HomePage}>
      <Head>
        <title>Similo</title>
      </Head>
      <main className={classes.main}>
        <Filters expertise={expertise} locations={locations} />
        <SearchResults searchResults={searchResults} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { term } = context.query;

  let searchResults;

  if (!term) {
    searchResults = null;
  } else {
    const response = await axios.get(
      `${API_URL}/companies/search?${qs.stringify(context.query)}`
    );

    searchResults = response.data;
  }

  const expertise = await axios.get(`${API_URL}/companies/expertise`);
  const locations = await axios.get(`${API_URL}/companies/locations`);

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
    },
  };
}
