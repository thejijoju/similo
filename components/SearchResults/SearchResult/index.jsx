import React from 'react';
// import Image from 'next/image';

import classes from './styles.module.scss';

export default function SearchResult({ company }) {
  return (
    <div className={classes.SearchResult}>
      <div className={classes.shadow} />
      <div
        className={classes.logo}
        style={{
          backgroundImage: `url(${company.logoPath})`,
        }}
      />
      <div className={classes.companyInfo}>
        <h1>{company.name}</h1>
        <span className={classes.industry}>{company.industry}</span>
        <div className={classes.tags}>
          {company.expertise &&
            company.expertise.split(',').map((tag) => (
              <span className={classes.tag} key={tag}>
                {tag}
              </span>
            ))}
        </div>
      </div>
      <i className={classes.expandCard}>Expand card</i>
    </div>
  );
}
