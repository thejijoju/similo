import React, { useState } from 'react';

import Layout from '@/components/Layout';
import { SearchResultsContext } from '../context/index';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [areCompanyCardsExpanded, setAreCompanyCardsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [companySizeFilter, setCompanySizeFilter] = useState([]);
  const [companyLocationFilter, setCompanyLocationFilter] = useState([]);
  const [companyExpertiseFilter, setCompanyExpertiseFilter] = useState([]);
  const [companyRevenueFilter, setCompanyRevenueFilter] = useState([]);
  const [companyTypeFilter, setCompanyTypeFilter] = useState([]);

  return (
    <SearchResultsContext.Provider
      value={{
        areCompanyCardsExpanded,
        setAreCompanyCardsExpanded,
        currentPage,
        setCurrentPage,
        companySizeFilter,
        setCompanySizeFilter,
        companyLocationFilter,
        setCompanyLocationFilter,
        companyExpertiseFilter,
        setCompanyExpertiseFilter,
        companyRevenueFilter,
        setCompanyRevenueFilter,
        companyTypeFilter,
        setCompanyTypeFilter,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchResultsContext.Provider>
  );
}

export default MyApp;
