import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Filters from '@/components/Filters';
import SearchResults from '@/components/Search/SearchResults';

import { SearchResultsContext, UIContext } from '@/context/index';
import classes from './styles.module.scss';

export default function HomePage({
  searchResults,
  expertise,
  // locations,
  csrs,
  csrLinks,
  expertiseLinks,
  // locationCounts,
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
    setCompanyParentOrganisationFilter,
    setCompanyHQFilter,
    setCompanyFoundationYearFilter,
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

    const companyParentOrganisationFilter = router.query.parentOrganisation;
    setCompanyParentOrganisationFilter(companyParentOrganisationFilter);

    const companyHQFilter = router.query.companyHQ;
    setCompanyHQFilter(companyHQFilter);

    const companyFoundationYearFilter = router.query.foundationYear;
    setCompanyFoundationYearFilter(companyFoundationYearFilter);
  }, []);

  return (
    <div className={classes.HomePage}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Similo — Find Similar Companies &amp; Competitors</title>
        <meta
          name="description"
          content="Similo is an AI-powered tool to instantly discover a company's closest competitors and similar brands worldwide — filter by industry, location, company size, revenue and more."
        />
        <link rel="canonical" href="https://similo.xyz/" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Similo" />
        <meta property="og:url" content="https://similo.xyz/" />
        <meta
          property="og:title"
          content="Similo — Find Similar Companies & Competitors"
        />
        <meta
          property="og:description"
          content="Discover a company's closest competitors and similar brands worldwide, powered by AI."
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Similo — Find Similar Companies & Competitors"
        />
        <meta
          name="twitter:description"
          content="Discover a company's closest competitors and similar brands worldwide, powered by AI."
        />
      </Head>
      <main className={classes.main}>
        <Filters
          expertise={expertise}
          // locations={locations}
          csrs={csrs}
          // locationCounts={locationCounts}
        />
        <SearchResults
          searchResults={searchResults}
          csrLinks={csrLinks}
          expertiseLinks={expertiseLinks}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // The page renders instantly; SearchResults fetches data client-side
  // and shows a skeleton loader while Claude generates the results.
  return {
    props: {
      searchResults: null,
      expertise: [],
      csrs: [],
      csrLinks: [],
      expertiseLinks: [],
    },
  };
}
