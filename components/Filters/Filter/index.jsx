/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';

import classnames from 'classnames';
import ReactTooltip from 'react-tooltip';
import amplitude from 'amplitude-js';

import csrToUpperCase from '@/helpers/csrToUpperCase';
import classes from './styles.module.scss';

export default function index({
  title,
  defaultSize = 3,
  values = [],
  state = [],
  setState,
  tooltipDetails,
  openWhenValues = false,
}) {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const filterRef = useRef();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Collapse on small screens by default (unless this filter manages its own
  // open state from its values, e.g. Expertise).
  useEffect(() => {
    if (openWhenValues) return;
    if (typeof window !== 'undefined' && window.innerWidth <= 1200) {
      setIsExpanded(false);
    }
  }, []);

  // Expertise: closed by default, open once a query has produced options.
  useEffect(() => {
    if (openWhenValues) {
      setIsExpanded(values.length > 0);
    }
  }, [openWhenValues, values.length]);

  const visibleValues = isListExpanded ? values : values.slice(0, defaultSize);
  const hasMore = values.length > defaultSize;

  return (
    <div
      className={classnames(classes.Filter, !isExpanded && classes.collapsed)}
      ref={filterRef}
    >
      <div
        className={classes.header}
        onClick={() => setIsExpanded((prev) => !prev)}
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
      {isExpanded && (
        <>
          <div className={classes.checkBoxes}>
            {visibleValues.map((value, i) => (
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
                      setState((prevState) => [...prevState, value]);
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
                <span className={classes.label}>
                  {title === 'CSR' ? csrToUpperCase(value) : value}
                </span>
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
            ))}
          </div>
          {hasMore && (
            <div
              className={classes.showMore}
              onClick={() => setIsListExpanded((prev) => !prev)}
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
        </>
      )}
      {isMounted && <ReactTooltip place="top" type="dark" effect="float" />}
    </div>
  );
}
