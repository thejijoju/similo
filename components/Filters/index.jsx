import React, { useContext } from 'react';

import { SearchResultsContext } from '@/context/index';
import Filter from './Filter';

import classes from './styles.module.scss';

const COUNTRIES = [
  'Germany',
  'France',
  'United Kingdom',
  'USA',
  'Spain',
  'Italy',
  'Norway',
];

const COMPANY_SIZES = [
  '0-200',
  '201-500',
  '501-1,000',
  '1,001-5,000',
  '5,001-10,000',
  '10,001+',
];

/* const EXPERTISE = [
  'Hide All',
  'Ready to wear',
  'Accessories',
  'Footwear',
  'Something else',
]; */

const REVENUE = [
  '0-1 million',
  '1-25 million',
  '25-100 million',
  '100-500 million',
  '501-1,000 million',
  '1-10 billion',
  '10-50 billion',
  '50+ billion',
];

const COMPANY_TYPES = ['Public', 'Private', 'Subsidiary'];

export default function Filters({ expertise }) {
  const {
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
  } = useContext(SearchResultsContext);

  return (
    <div className={classes.Filters}>
      <div className={classes.buttons}>
        <button type="button" className={classes.filterButton}>
          <i>lines</i>Filter
        </button>
        <button type="button" className={classes.mostRelevantButton}>
          Most relevant <i>arrow down</i>
        </button>
      </div>
      <Filter
        title="Location"
        values={COUNTRIES}
        defaultSize={3}
        search
        state={companyLocationFilter}
        setState={setCompanyLocationFilter}
      />
      <Filter
        values={COMPANY_SIZES}
        defaultSize={4}
        title="Company size"
        setState={setCompanySizeFilter}
        state={companySizeFilter}
      />
      <Filter
        values={expertise.sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })}
        defaultSize={4}
        title="Expertise"
        state={companyExpertiseFilter}
        setState={setCompanyExpertiseFilter}
      />
      <Filter
        title="Revenue"
        values={REVENUE}
        defaultSize={3}
        state={companyRevenueFilter}
        setState={setCompanyRevenueFilter}
      />
      <Filter
        title="Company Type"
        values={COMPANY_TYPES}
        defaultSize={3}
        state={companyTypeFilter}
        setState={setCompanyTypeFilter}
      />
    </div>
  );
}
