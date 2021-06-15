import React, { useContext } from 'react';

import classnames from 'classnames';

import classes from './styles.module.scss';
import { COMPANIES_PER_PAGE } from '../../constants/index';
import { SearchResultsContext } from '../../context/index';

export default function SkeletonLoader({ totalCount }) {
  const { currentPage } = useContext(SearchResultsContext);
  const elements = [];
  let elementsCount = totalCount - (currentPage + 1) * COMPANIES_PER_PAGE;
  if (elementsCount > COMPANIES_PER_PAGE) {
    elementsCount = COMPANIES_PER_PAGE;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elementsCount; i++) {
    elements.push(
      <div className={classes.searchResult} key={i}>
        <div className={classnames(classes.logo, classes.shine)} />
        <div className={classes.companyInfo}>
          <div className={classnames(classes.shine, classes.title)} />
          <div className={classes.tags}>
            <span className={classnames(classes.tag, classes.shine)} />
            <span className={classnames(classes.tag, classes.shine)} />
            <span className={classnames(classes.tag, classes.shine)} />
          </div>
        </div>
      </div>
    );
  }
  return <div className={classes.SkeletonLoader}>{elements}</div>;
}
