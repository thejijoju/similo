import React, { useState } from 'react';

import Layout from '@/components/Layout';
import { SearchResultsContext, UIContext } from '../context/index';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [areCompanyCardsExpanded, setAreCompanyCardsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [companySizeFilter, setCompanySizeFilter] = useState([]);
  const [companyLocationFilter, setCompanyLocationFilter] = useState([]);
  const [companyExpertiseFilter, setCompanyExpertiseFilter] = useState([]);
  const [companyRevenueFilter, setCompanyRevenueFilter] = useState([]);
  const [companyTypeFilter, setCompanyTypeFilter] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);

  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isSearchResultsMode, setIsSearchResultsMode] = useState(false);
  const [isFiltersPanelVisible, setIsFiltersPanelVisible] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

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
        sortOption,
        setSortOption,
        lastSearchTerm,
        setLastSearchTerm,
        isSearchResultsLoading,
        setIsSearchResultsLoading,
      }}
    >
      <UIContext.Provider
        value={{
          isSearchMode,
          setIsSearchMode,
          isSearchResultsMode,
          setIsSearchResultsMode,
          isFiltersPanelVisible,
          setIsFiltersPanelVisible,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIContext.Provider>
    </SearchResultsContext.Provider>
  );
}

export default MyApp;
