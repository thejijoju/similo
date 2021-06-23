import React, { useContext, useState, useRef } from 'react';

import classnames from 'classnames';
import usePortal from 'react-useportal';

import { SearchResultsContext, UIContext } from '@/context/index';
import Filter from './Filter';

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

const COMPANY_TYPES = ['Public', 'Private', 'Subsidary'];

export default function Filters({ expertise, locations }) {
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
  } = useContext(SearchResultsContext);

  const { isFiltersPanelVisible, setIsFiltersPanelVisible } =
    useContext(UIContext);

  const filtersContainerRef = useRef();

  const isFilterActive = () => {
    return (
      !!companySizeFilter.length ||
      !!companyLocationFilter.length ||
      !!companyExpertiseFilter.length ||
      !!companyRevenueFilter.length ||
      !!companyTypeFilter.length
    );
  };

  const resetFilters = () => {
    setCompanySizeFilter([]);
    setCompanyLocationFilter([]);
    setCompanyExpertiseFilter([]);
    setCompanyRevenueFilter([]);
    setCompanyTypeFilter([]);
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
                return 'recent';
              }
              return 'relevant';
            });
          }}
        >
          {sortOption === 'relevant' ? 'Most relevant' : 'Most recent'}
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
              {sortOption === 'relevant' ? 'Most recent' : 'Most relevant'}
            </span>
          </div>
          <Filter
            title="Location"
            values={locations}
            defaultSize={4}
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
