import React, { useContext, useState, useRef, useEffect } from 'react';

import classnames from 'classnames';
import usePortal from 'react-useportal';
import amplitude from 'amplitude-js';

import { SearchResultsContext, UIContext } from '@/context/index';
import Filter from './Filter';
import LocationFilter from './LocationFilter';

import classes from './styles.module.scss';

const COMPANY_SIZES = [
  '0-200',
  '201-500',
  '501-1,000',
  '1,001-5,000',
  '5,001-10,000',
  '10,001+',
];

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

/* const LOCATIONS = [
  'Germany',
  'France',
  'United Kingdom',
  'Spain',
  'Italy',
  'Albania',
  'Andorra',
  'Armenia',
  'Austria',
  'Azerbaijan',
  'Belarus',
  'Belgium',
  'Bosnia and Herzegovina',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Estonia',
  'Finland',
  'Georgia',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Kazakhstan',
  'Kosovo',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Moldova',
  'Monaco',
  'Montenegro',
  'Netherlands',
  'North Macedonia',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'San Marino',
  'Serbia',
  'Slovakia',
  'Slovenia',
  'Sweden',
  'Switzerland',
  'Turkey',
  'Ukraine',
  'Vatican City',
]; */

const DIVERSITY = ['Underrepresented minorities', 'Female CEO'];
const DIVERSITY_DETAILS = [
  'Here is some explanatory text',
  'Here is another explanatory text',
];

const COMPANY_TYPES = ['Public', 'Private', 'Subsidary'];

function createSortingButtonLabel(currentStockDataKey) {
  switch (currentStockDataKey) {
    case 'stockPrice':
      return 'Stock price';
    case 'marketCap':
      return 'Mkt Cap';
    case 'open':
      return 'Open';
    case 'volume':
      return 'Vol';
    case 'priceEps':
      return 'P/E';
    default:
      return '';
  }
}

export default function Filters() {
  const [areFiltersVisible, setAreFiltersVisible] = useState(true);
  const [filtersContainerHeight, setFiltersContainerHeight] = useState('unset');
  const [areSortOptionsExpanded, setAreSortOptionsExpanded] = useState(false);

  const { Portal } = usePortal();

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
    sortOption,
    setSortOption,
    companyDiversityFilter,
    setCompanyDiversityFilter,
    companyCSRFilter,
    setCompanyCSRFilter,
    availableExpertise,
    availableCSR,
  } = useContext(SearchResultsContext);

  const {
    isFiltersPanelVisible,
    setIsFiltersPanelVisible,
    globalStockDataKey,
  } = useContext(UIContext);

  useEffect(() => {
    if (sortOption.startsWith('stock')) {
      if (sortOption.includes('desc')) {
        setSortOption(`stock${globalStockDataKey} desc`);
      } else if (sortOption.includes('asc')) {
        setSortOption(`stock${globalStockDataKey} asc`);
      }
    }
  }, [globalStockDataKey]);

  const filtersContainerRef = useRef();

  const isFilterActive = () => {
    return (
      !!companySizeFilter.length ||
      !!companyLocationFilter.length ||
      !!companyExpertiseFilter.length ||
      !!companyRevenueFilter.length ||
      !!companyTypeFilter.length ||
      !!companyCSRFilter.length
    );
  };

  const resetFilters = () => {
    setCompanySizeFilter([]);
    setCompanyLocationFilter([]);
    setCompanyExpertiseFilter([]);
    setCompanyRevenueFilter([]);
    setCompanyTypeFilter([]);
    setCompanyCSRFilter([]);
  };

  const toggleFiltersVisibility = () => {
    if (!areFiltersVisible) {
      setAreFiltersVisible(true);
      setFiltersContainerHeight('unset');
    } else {
      setFiltersContainerHeight(filtersContainerRef.current.clientHeight);
      setAreFiltersVisible(false);
    }
  };

  let sortOptionLabel = 'Most relevant';
  if (sortOption === 'recent') {
    sortOptionLabel = 'Most recent';
  } else if (sortOption.startsWith('stock') && sortOption.includes('asc')) {
    sortOptionLabel = `${createSortingButtonLabel(globalStockDataKey)} (asc)`;
  } else if (sortOption.startsWith('stock') && sortOption.includes('desc')) {
    sortOptionLabel = `${createSortingButtonLabel(globalStockDataKey)} (desc)`;
  }

  return (
    <div
      className={classnames(
        classes.Filters,
        isFiltersPanelVisible && classes.show
      )}
    >
      <div className={classes.buttons}>
        <button
          type="button"
          className={classes.filterButton}
          onClick={toggleFiltersVisibility}
        >
          <i>lines</i>Filter
        </button>
        <button
          type="button"
          className={classes.mostRelevantButton}
          onClick={() => {
            setSortOption((prevOption) => {
              if (prevOption === 'relevant') {
                amplitude.getInstance().logEvent('Sort Search Results', {
                  value: 'recent',
                });
                return 'recent';
              }
              if (prevOption === 'recent') {
                amplitude.getInstance().logEvent('Sort Search Results', {
                  value: `stock${globalStockDataKey} asc`,
                });
                return `stock${globalStockDataKey} asc`;
              }
              if (prevOption === `stock${globalStockDataKey} asc`) {
                amplitude.getInstance().logEvent('Sort Search Results', {
                  value: `stock${globalStockDataKey} desc`,
                });
                return `stock${globalStockDataKey} desc`;
              }
              amplitude.getInstance().logEvent('Sort Search Results', {
                value: 'relevant',
              });
              return 'relevant';
            });
          }}
        >
          {sortOptionLabel}
          <i>arrow down</i>
        </button>
        {isFilterActive() && (
          <button
            type="button"
            className={classes.resetFiltersButton}
            onClick={resetFilters}
          >
            Reset all filters
          </button>
        )}
      </div>
      <div
        className={classes.filtersContainer}
        style={{ minHeight: filtersContainerHeight }}
        ref={filtersContainerRef}
      >
        <div className={classes.header}>
          {isFilterActive() && (
            <span onClick={resetFilters}>Reset all filters</span>
          )}
          <i
            className={classes.closeIcon}
            onClick={() => setIsFiltersPanelVisible(false)}
          >
            Close
          </i>
        </div>
        <div
          className={classnames(
            classes.content,
            areFiltersVisible && classes.visible
          )}
        >
          <div
            className={classnames(
              classes.sortOptions,
              areSortOptionsExpanded && classes.expand
            )}
          >
            <div
              className={classes.sortHeader}
              onClick={() =>
                setAreSortOptionsExpanded((prevState) => !prevState)
              }
            >
              <h2>
                {sortOption === 'relevant' ? 'Most relevant' : 'Most recent'}
              </h2>
              <i
                className={classnames(
                  classes.expandIcon,
                  areSortOptionsExpanded && classes.rotate
                )}
              >
                Expand sort options
              </i>
            </div>
            <span
              className={classes.currentOption}
              onClick={() => {
                setSortOption((prevOption) => {
                  if (prevOption === 'recent') {
                    return 'relevant';
                  }
                  return 'recent';
                });
              }}
            >
              {sortOptionLabel}
            </span>
          </div>
          <Filter
            values={availableExpertise}
            defaultSize={10}
            openWhenValues
            title="Expertise"
            state={companyExpertiseFilter}
            setState={setCompanyExpertiseFilter}
          />
          <Filter
            title="Diversity"
            values={DIVERSITY}
            defaultSize={2}
            tooltipDetails={DIVERSITY_DETAILS}
            state={companyDiversityFilter}
            setState={setCompanyDiversityFilter}
          />
          {availableCSR.length ? (
            <Filter
              title="CSR"
              values={availableCSR}
              defaultSize={4}
              state={companyCSRFilter}
              setState={setCompanyCSRFilter}
            />
          ) : null}
          <LocationFilter
            companyLocationFilter={companyLocationFilter}
            setCompanyLocationFilter={setCompanyLocationFilter}
          />
          <Filter
            values={COMPANY_SIZES}
            defaultSize={4}
            title="Company size"
            setState={setCompanySizeFilter}
            state={companySizeFilter}
          />
          <Filter
            title="Revenue"
            values={REVENUE}
            defaultSize={4}
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
      </div>
      {isFiltersPanelVisible && (
        <Portal>
          <div className={classes.overlay} />
        </Portal>
      )}
    </div>
  );
}
