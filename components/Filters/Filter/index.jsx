/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect, useContext } from 'react';

import axios from 'axios';
import classnames from 'classnames';
import ReactTooltip from 'react-tooltip';
import Truncate from 'react-truncate';
import amplitude from 'amplitude-js';

import { SearchResultsContext } from '@/context/index';
import csrToUpperCase from '@/helpers/csrToUpperCase';
import classes from './styles.module.scss';
import { API_URL } from '../../../constants/index';

const CHECKBOX_HEIGHT = 27;
let timer;

export default function index({
  title,
  search,
  defaultSize = 3,
  values = [],
  state = [],
  setState,
  tooltipDetails,
}) {
  const [filterHeight, setFilterHeight] = useState('auto');
  const [isListExpanded, setIsListExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [locationValue, setLocationValue] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const filterRef = useRef();
  const listRef = useRef();
  const defaultFilterHeight = useRef();

  const { setCompanyLocationFilter } = useContext(SearchResultsContext);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (filterRef.current && listRef.current && typeof window !== 'undefined') {
      if (window.innerWidth <= 748) {
        return;
      }
      /* expandedListHeightDiff.current =
        listRef.current.scrollHeight - listRef.current.clientHeight; */
      setTimeout(() => {
        defaultFilterHeight.current = filterRef.current.clientHeight;
        setFilterHeight(filterRef.current.clientHeight);
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (values.length <= defaultSize) {
      return;
    }
    if (!isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');
      if (labels.length) {
        setTimeout(() => {
          labels[defaultSize - 1].style.opacity = '0.61';
        }, 200);
      }
    } else if (isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');
      if (labels.length) {
        labels[defaultSize - 1].style.opacity = '1';
      }
    }
  }, [isListExpanded]);

  const collapseFilter = () => {
    setFilterHeight(67);
    setIsExpanded(false);
    setIsListExpanded(false);
  };

  const expandFilter = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
  };

  const collapseList = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsListExpanded(false);
  };

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
          setLocationSuggestions([{ city: 'not found' }]);
        } else {
          setLocationSuggestions(response.data.data.locations);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      collapseFilter();
    }
  }, []);

  const expandList = () => {
    setIsListExpanded(true);
    setFilterHeight(
      defaultFilterHeight.current +
        CHECKBOX_HEIGHT * values.length -
        CHECKBOX_HEIGHT * defaultSize
    );
  };

  return (
    <div
      className={classes.Filter}
      style={{
        height: filterHeight,
        borderBottom: defaultSize > values.length ? 'none' : '',
      }}
      ref={filterRef}
    >
      <div
        className={classes.header}
        onClick={() => {
          if (isExpanded) {
            collapseFilter();
          } else {
            expandFilter();
          }
        }}
      >
        <h2>{title}</h2>
        <i
          className={classnames(
            classes.closeFilterIcon,
            !isExpanded && classes.rotate
          )}
        >
          Close filter
        </i>
      </div>
      {search && (
        <div className={classes.searchContainer}>
          {locationSuggestions.length ? (
            <div className={classes.searchSuggestions}>
              {locationSuggestions.map((location) => {
                return (
                  <span
                    className={classes.suggestion}
                    onClick={() => {
                      if (location.city === 'not found') {
                        setLocationSuggestions([]);
                        return;
                      }
                      setCompanyLocationFilter((prevState) => {
                        if (prevState.includes(location.country)) {
                          return prevState;
                        }

                        return [...prevState, location.country];
                      });
                      setLocationSuggestions([]);
                      setLocationValue('');
                    }}
                    key={location.id}
                  >
                    {location.country}
                    {location.city === 'not found' && location.city}
                  </span>
                );
              })}
            </div>
          ) : null}
          <input
            type="text"
            className={classes.search}
            placeholder="enter a location..."
            value={locationValue}
            onChange={(event) => setLocationValue(event.target.value)}
            onKeyUp={getLocationSuggestions}
          />
        </div>
      )}
      <div
        className={classnames(
          classes.checkBoxes,
          !isListExpanded && classes.notExpanded
        )}
        style={{
          height: isListExpanded
            ? Math.ceil(values.length * CHECKBOX_HEIGHT) - 11
            : Math.ceil(defaultSize * CHECKBOX_HEIGHT) - 11,
        }}
        ref={listRef}
      >
        {values.map((value, i) => {
          return (
            <label className={classes.container} key={value}>
              <input
                type="checkbox"
                checked={state.includes(value)}
                onChange={() => {
                  const indexOfValue = state.indexOf(value);
                  if (indexOfValue === -1) {
                    amplitude
                      .getInstance()
                      .logEvent('Search Filter', { type: title, value });
                    setState((prevState) => {
                      const newState = [...prevState, value];
                      return newState;
                    });
                  } else {
                    setState((prevState) => {
                      const newState = [...prevState];
                      newState.splice(indexOfValue, 1);
                      return newState;
                    });
                  }
                }}
              />
              <span className={classes.checkmark} />
              <Truncate
                lines={1}
                ellipsis={
                  <span>
                    ...{' '}
                    <a style={{ visibility: 'hidden' }} href="/link/to/article">
                      aaaaaaaa
                    </a>
                  </span>
                }
              >
                {title === 'CSR' ? csrToUpperCase(value) : value}
              </Truncate>

              {tooltipDetails && tooltipDetails[i] && (
                <div
                  className={classes.tooltipToggle}
                  data-tip={tooltipDetails[i]}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10px"
                    height="10px"
                    viewBox="0 0 100 100"
                  >
                    <path d="M50.433,0.892c-27.119,0-49.102,21.983-49.102,49.102s21.983,49.103,49.102,49.103s49.101-21.984,49.101-49.103S77.552,0.892,50.433,0.892z M59,79.031C59,83.433,55.194,87,50.5,87S42,83.433,42,79.031V42.469c0-4.401,3.806-7.969,8.5-7.969s8.5,3.568,8.5,7.969V79.031z M50.433,31.214c-5.048,0-9.141-4.092-9.141-9.142c0-5.049,4.092-9.141,9.141-9.141c5.05,0,9.142,4.092,9.142,9.141C59.574,27.122,55.482,31.214,50.433,31.214z" />
                  </svg>
                </div>
              )}
            </label>
          );
        })}
      </div>
      {defaultSize < values.length && (
        <div
          className={classes.showMore}
          onClick={() => {
            if (isListExpanded) {
              collapseList();
            } else {
              expandList();
            }
          }}
        >
          <span>{isListExpanded ? 'Show less' : 'Show more'}</span>
          <i
            className={classnames(
              classes.showMoreIcon,
              isListExpanded && classes.rotate
            )}
          >
            show more icon
          </i>
        </div>
      )}
      {isMounted && <ReactTooltip place="top" type="dark" effect="float" />}
    </div>
  );
}
