import React from 'react';

import classes from './styles.module.scss';

export default function SearchSuggestions({ searchSuggestions = [], show }) {
  return show ? (
    <div className={classes.SearchSuggestions}>
      {searchSuggestions.map((suggestion) => {
        return (
          <div className={classes.suggestion} key={suggestion.name}>
            <p className={classes.title}>{suggestion.name}</p>
            <span className={classes.compenyIndustry}>
              <i>dot</i>
              {suggestion.industry}
            </span>
          </div>
        );
      })}
    </div>
  ) : null;
}
