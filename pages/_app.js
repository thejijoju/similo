import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import amplitude from 'amplitude-js';

import Layout from '@/components/Layout';
import { SearchResultsContext, UIContext } from '../context/index';
import { AMPLITUDE_API_KEY } from '../constants';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [areCompanyCardsExpanded, setAreCompanyCardsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [companySizeFilter, setCompanySizeFilter] = useState([]);
  const [companyLocationFilter, setCompanyLocationFilter] = useState([]);
  const [companyExpertiseFilter, setCompanyExpertiseFilter] = useState([]);
  const [companyRevenueFilter, setCompanyRevenueFilter] = useState([]);
  const [companyTypeFilter, setCompanyTypeFilter] = useState([]);
  const [companyDiversityFilter, setCompanyDiversityFilter] = useState([]);
  const [companyCSRFilter, setCompanyCSRFilter] = useState([]);
  const [companyParentOrganisatonFilter, setCompanyParentOrganisationFilter] =
    useState('');
  const [companyHQFilter, setCompanyHQFilter] = useState('');
  const [companyFoundationYearFilter, setCompanyFoundationYearFilter] =
    useState('');
  const [sortOption, setSortOption] = useState('relevant');
  const [isSearchResultsLoading, setIsSearchResultsLoading] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isSearchResultsMode, setIsSearchResultsMode] = useState(false);
  const [isFiltersPanelVisible, setIsFiltersPanelVisible] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [currentlyOpenedCompanyCard, setCurrentlyOpenedCompanyCard] =
    useState('');
  const [globalStockDataKey, setGlobalStockDataKey] = useState('stockPrice');
  const [companyWithLastSwitchedStockKey, setCompanyWithLastSwitchedStockKey] =
    useState('');

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      amplitude.getInstance().init(AMPLITUDE_API_KEY);
    }
  }, [router.isReady]);

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
        companyDiversityFilter,
        setCompanyDiversityFilter,
        companyCSRFilter,
        setCompanyCSRFilter,
        companyParentOrganisatonFilter,
        setCompanyParentOrganisationFilter,
        companyHQFilter,
        setCompanyHQFilter,
        companyFoundationYearFilter,
        setCompanyFoundationYearFilter,
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
          currentlyOpenedCompanyCard,
          setCurrentlyOpenedCompanyCard,
          globalStockDataKey,
          setGlobalStockDataKey,
          companyWithLastSwitchedStockKey,
          setCompanyWithLastSwitchedStockKey,
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
