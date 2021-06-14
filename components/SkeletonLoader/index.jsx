import React from 'react';

import classnames from 'classnames';

import classes from './styles.module.scss';

export default function SkeletonLoader({ elementsCount }) {
  const elements = [];
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
