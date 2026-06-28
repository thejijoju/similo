import React, { useState } from 'react';

import axios from 'axios';
import amplitude from 'amplitude-js';

import FilterElement from './FilterElement';
import classes from './styles.module.scss';
import { API_URL } from '../../../constants';

let timer;

export default function LocationFilter({
  companyLocationFilter,
  setCompanyLocationFilter,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [locationValue, setLocationValue] = useState('');

  const getLocationSuggestions = () => {
    clearTimeout(timer);
    if (locationValue.trim() === '') {
      setLocationSuggestions([]);
      return;
    }
    timer = setTimeout(async () => {
      try {
        const response = await axios.get(
          `${API_URL}/companies/locations?suggestLocation=${encodeURIComponent(
            locationValue
          )}`
        );
        const locs =
          (response.data &&
            response.data.data &&
            response.data.data.locations) ||
          [];
        setLocationSuggestions(locs.length ? locs : ['not found']);
      } catch (error) {
        console.log(error);
        setLocationSuggestions(['not found']);
      }
    }, 500);
  };

  const removeFilter = (filter) => {
    setTimeout(() => {
      setSelectedFilter(null);
    }, 100);
    setCompanyLocationFilter((prevFilters) =>
      prevFilters.filter((fltr) => fltr !== filter)
    );
  };

  const addLocation = (location) => {
    if (location === 'not found') {
      setLocationSuggestions([]);
      return;
    }
    amplitude.getInstance().logEvent('Search Filter', {
      type: 'Location',
      value: location.value,
    });
    setCompanyLocationFilter((prevState) =>
      prevState.includes(location.value)
        ? prevState
        : [...prevState, location.value]
    );
    setLocationSuggestions([]);
    setLocationValue('');
  };

  return (
    <div className={classes.LocationFilter}>
      <div className={classes.header}>
        <h2>Locations</h2>
        {companyLocationFilter.length ? (
          <span onClick={() => setCompanyLocationFilter([])}>Clear</span>
        ) : null}
      </div>
      <div className={classes.activeFilters}>
        {companyLocationFilter.map((filter) => (
          <FilterElement
            key={filter}
            filter={filter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            onRemoveFilter={removeFilter}
          />
        ))}
      </div>
      <div className={classes.inputContainer}>
        {locationSuggestions.length ? (
          <div className={classes.searchSuggestions}>
            {locationSuggestions.map((location) => (
              <span
                className={classes.suggestion}
                onClick={() => addLocation(location)}
                key={location.value || location}
              >
                {location.label || location}
              </span>
            ))}
          </div>
        ) : null}

        <input
          type="text"
          placeholder="enter a location..."
          value={locationValue}
          onChange={(event) => setLocationValue(event.target.value)}
          onKeyUp={getLocationSuggestions}
        />
      </div>
    </div>
  );
}
