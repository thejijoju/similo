import React from 'react';

import classnames from 'classnames';

import classes from './styles.module.scss';

export default function Subsidiaries({
  show,
  onHide,
  subsidiaries,
  companyName,
}) {
  return (
    <div className={classnames(classes.Subsidiaries, show && classes.show)}>
      <header>
        <span onClick={onHide}>
          <i>back icon</i>back
        </span>
        <h1>Subsidiaries</h1>
      </header>
      <div className={classes.subsidiariesList}>
        <div className={classes.title}>
          <h2>{companyName}</h2>
        </div>
        {subsidiaries.map((company) => {
          if (company === '') {
            return null;
          }
          return (
            <span key={company} className={classes.company}>
              {company}
            </span>
          );
        })}
      </div>
    </div>
  );
}
