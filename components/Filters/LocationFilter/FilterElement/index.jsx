import React, { useRef, useEffect, useState } from 'react';

import ReactTooltip from 'react-tooltip';
import classnames from 'classnames';
import { FaTimes } from 'react-icons/fa';

import useOnClickOutside from '@/helpers/useOnClickOutside';
import classes from './styles.module.scss';

export default function FilterElement({
  filter,
  selectedFilter,
  setSelectedFilter,
  onRemoveFilter,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [initialWidth, setInitialWidth] = useState('');

  const filterRef = useRef();

  useOnClickOutside(filterRef, () => {
    if (filter === selectedFilter) {
      setSelectedFilter(null);
    }
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [selectedFilter]);

  useEffect(() => {
    if (filterRef.current) {
      setInitialWidth(filterRef.current.offsetWidth);
    }
  }, [filterRef]);

  const filterTextArray = filter.split('|');
  const filterText = filterTextArray.join(', ');

  return (
    <div
      style={{ width: selectedFilter === filter ? initialWidth : '' }}
      ref={filterRef}
      onClick={() => setSelectedFilter(filter)}
      className={classnames(
        classes.FilterElement,
        selectedFilter === filter && classes.selected
      )}
    >
      <span className={classes.filterName}>{filterText}</span>
      {selectedFilter === filter && (
        <>
          <div
            onClick={() => {
              onRemoveFilter(filter);
              ReactTooltip.hide();
            }}
            className={classnames(classes.removeButton, classes.button)}
            data-tip={`Remove ${filterText}`}
            data-for="locationTooltip"
          >
            <FaTimes style={{ top: 0 }} />
          </div>
        </>
      )}
      {isMounted && (
        <ReactTooltip
          id="locationTooltip"
          place="bottom"
          type="dark"
          effect="float"
        />
      )}
    </div>
  );
}
