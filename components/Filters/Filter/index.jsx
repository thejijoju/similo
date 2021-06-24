/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';

import classnames from 'classnames';

import classes from './styles.module.scss';

const CHECKBOX_HEIGHT = 27;

export default function index({
  title,
  search,
  defaultSize = 3,
  values = [],
  state = [],
  setState,
}) {
  const [filterHeight, setFilterHeight] = useState('auto');
  const [isListExpanded, setIsListExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const filterRef = useRef();
  const listRef = useRef();
  const defaultFilterHeight = useRef();

  const expandedListHeightDiff = useRef();

  useEffect(() => {
    if (filterRef.current && listRef.current) {
      expandedListHeightDiff.current =
        listRef.current.scrollHeight - listRef.current.clientHeight;
      defaultFilterHeight.current = filterRef.current.clientHeight;
      setFilterHeight(filterRef.current.clientHeight);
    }
  }, [
    filterRef.current,
    listRef.current,
    defaultFilterHeight.current,
    expandedListHeightDiff.current,
  ]);

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
        borderBottom: defaultSize >= values.length ? 'none' : '',
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
          <input
            type="text"
            className={classes.search}
            placeholder="enter a location..."
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
        {values.map((value) => {
          return (
            <label className={classes.container} key={value}>
              <input
                type="checkbox"
                checked={state.includes(value)}
                onChange={() => {
                  const indexOfValue = state.indexOf(value);
                  if (indexOfValue === -1) {
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
              {value}
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
    </div>
  );
}
