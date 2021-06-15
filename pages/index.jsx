import React from 'react';
import Head from 'next/head';

import axios from 'axios';
import qs from 'qs';

import Filters from '@/components/Filters';
import SearchResults from '@/components/SearchResults';

import classes from './styles.module.scss';
import { API_URL } from '../constants/index';

export default function HomePage({ searchResults }) {
  return (
    <div className={classes.HomePage}>
      <Head>
        <title>Similo</title>
      </Head>
      <main className={classes.main}>
        <Filters />
        <SearchResults searchResults={searchResults} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { term } = context.query;

  if (!term) {
    return { props: { searchResults: null } };
  }

  const response = await axios.get(
    `${API_URL}/companies/search?${qs.stringify(context.query)}`
  );
  return { props: { searchResults: response.data } };
}
