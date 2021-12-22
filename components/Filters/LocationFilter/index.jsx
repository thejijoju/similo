import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FilterElement from './FilterElement';
import classes from './styles.module.scss';
import { API_URL } from '../../../constants';

let timer;

// eslint-disable-next-line consistent-return
function createLocationSuggestion(location, locationValue) {
  if (location.country.toLowerCase().includes(locationValue.toLowerCase())) {
    return [
      { jsx: <b>{location.country}</b>, textContent: location.country },
      {
        jsx: (
          <span>
            {location.region}, <b>{location.country}</b>
          </span>
        ),
        textContent: `${location.region}|${location.country}`,
      },
      {
        jsx: (
          <span>
            {location.city}, {location.region}, <b>{location.country}</b>
          </span>
        ),
        textContent: `${location.city}|${location.region}|${location.country}`,
      },
    ];
  }
  if (location.region.toLowerCase().includes(locationValue.toLowerCase())) {
    return [
      {
        jsx: (
          <span>
            <b>{location.region}</b>, {location.country}
          </span>
        ),
        textContent: `${location.region}|${location.country}`,
      },
      {
        jsx: (
          <span>
            {location.city}, <b>{location.region}</b>, {location.country}
          </span>
        ),
        textContent: `${location.city}|${location.region}|${location.country}`,
      },
    ];
  }
  if (location.city.toLowerCase().includes(locationValue.toLowerCase())) {
    return [
      {
        jsx: (
          <span>
            <b>{location.city}</b>, {location.country}
          </span>
        ),
        textContent: `${location.city}|${location.country}`,
      },
    ];
  }
}

function createLocationText(location) {
  const locationTextArray = location.split(',');
  const locationText = `${locationTextArray[0]}, ${locationTextArray[2]}`;
  return locationText;
}

export default function LocationFilter({
  companyLocationFilter,
  setCompanyLocationFilter,
  locations,
  locationCounts,
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
          `${API_URL}/companies/locations?suggestLocation=${locationValue}`
        );
        if (!response.data.data.locations.length) {
          setLocationSuggestions(['not found']);
        } else {
          setLocationSuggestions(
            createLocationSuggestion(
              response.data.data.locations[0],
              locationValue
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log(locationSuggestions);
  }, [locationSuggestions]);

  const removeFilter = (filter) => {
    setTimeout(() => {
      setSelectedFilter(null);
    }, 100);
    setCompanyLocationFilter((prevFilters) => {
      const newFilters = prevFilters.filter((fltr) => fltr !== filter);
      return newFilters;
    });
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
            {locationSuggestions.map((location) => {
              return (
                <span
                  className={classes.suggestion}
                  onClick={() => {
                    if (location === 'not found') {
                      setLocationSuggestions([]);
                      return;
                    }
                    if (companyLocationFilter.includes(location.textContent)) {
                      return;
                    }
                    setCompanyLocationFilter((prevState) => {
                      if (prevState.includes(location.country)) {
                        return prevState;
                      }
                      return [...prevState, location.textContent];
                    });
                    setLocationSuggestions([]);
                    setLocationValue('');
                  }}
                  key={location.id}
                >
                  {location.jsx || location}
                </span>
              );
            })}
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
      <div className={classes.filters}>
        {locations.map((location) => {
          return (
            <div
              className={classes.filter}
              key={location}
              onClick={() => {
                if (
                  companyLocationFilter.includes(location.replace(/, /g, '|'))
                ) {
                  return;
                }
                setCompanyLocationFilter((prevFilters) => {
                  const newFilters = [
                    ...prevFilters,
                    location.replace(/, /g, '|'),
                  ];
                  return newFilters;
                });
              }}
            >
              {createLocationText(location)} ({locationCounts[location]})
            </div>
          );
        })}
      </div>
    </div>
  );
}
