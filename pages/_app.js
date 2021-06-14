import React, { useState } from 'react';

import Layout from '@/components/Layout';
import { SearchResultsContext } from '../context/index';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [areCompanyCardsExpanded, setAreCompanyCardsExpanded] = useState(false);

  return (
    <SearchResultsContext.Provider
      value={{ areCompanyCardsExpanded, setAreCompanyCardsExpanded }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchResultsContext.Provider>
  );
}

export default MyApp;
