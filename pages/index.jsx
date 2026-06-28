import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Filters from '@/components/Filters';
import SearchResults from '@/components/Search/SearchResults';

import { SearchResultsContext, UIContext } from '@/context/index';
import classes from './styles.module.scss';

const FAQ = [
  {
    q: 'How does Similo find similar companies?',
    a: 'Similo uses AI to identify a company’s closest competitors and peers based on its industry, products, market and business model, then returns a ranked list of similar companies.',
  },
  {
    q: 'Is Similo free to use?',
    a: 'Yes. You can search for any company or brand and see its similar companies and competitors for free.',
  },
  {
    q: 'Can I filter competitors by country, industry or size?',
    a: 'Yes. You can refine results by location (from worldwide down to a single town), industry and expertise, company size, revenue, company type and CSR.',
  },
  {
    q: 'How accurate is the company data?',
    a: 'Company details are AI-generated and may be approximate or occasionally out of date. Use them as a fast starting point for research rather than a definitive source.',
  },
];

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://similo.xyz/#organization',
      name: 'Similo',
      url: 'https://similo.xyz/',
      legalName: 'Twiggli UG (haftungsbeschränkt)',
      email: 'twiggli.info@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rodenkirchenerstr. 147',
        postalCode: '50997',
        addressLocality: 'Köln',
        addressCountry: 'DE',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://similo.xyz/#website',
      url: 'https://similo.xyz/',
      name: 'Similo',
      description:
        'AI-powered tool to discover a company’s closest competitors and similar brands worldwide.',
      publisher: { '@id': 'https://similo.xyz/#organization' },
    },
    {
      '@type': 'WebApplication',
      name: 'Similo',
      url: 'https://similo.xyz/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      description:
        'Find similar companies and competitors. Search any company or brand and filter peers by location, industry, size, revenue and more.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

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
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
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
      {!router.query.term && (
        <section className={classes.seoIntro}>
          <h1>Find similar companies and competitors</h1>
          <p>
            Similo is an AI-powered tool for discovering a company’s closest
            competitors and similar brands worldwide. Search any company or
            brand name and instantly see a ranked list of comparable companies —
            with industry, headquarters, size, revenue, key people and more.
            It’s built for competitive analysis, sales prospecting and market
            mapping.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>Type a company or brand name into the search bar.</li>
            <li>
              Similo returns the company plus its most similar competitors and
              peers.
            </li>
            <li>
              Refine the results by location, industry and expertise, company
              size, revenue, company type or CSR.
            </li>
          </ol>

          <h2>What you can do with Similo</h2>
          <ul>
            <li>Discover a brand’s direct competitors in seconds.</li>
            <li>
              Map competitors by country — from worldwide down to a single city
              or town.
            </li>
            <li>Filter peers by industry, size, revenue and company type.</li>
            <li>Find companies that run CSR and sustainability initiatives.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item) => (
            <div key={item.q} className={classes.faqItem}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      )}
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
