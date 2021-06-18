import React from 'react';
import { useRouter } from 'next/router';

import { COMPANIES_PER_PAGE } from 'constants/index';
import classes from './styles.module.scss';

export default function SearchSuggestions({
  searchSuggestions = [],
  show,
  onHide,
  setSearchTerm,
}) {
  const router = useRouter();

  const search = (term) => {
    setSearchTerm(term);
    onHide();
    router.push(
      `/?term=${encodeURIComponent(
        term
      )}&perPage=${COMPANIES_PER_PAGE}&fromSuggestions=true`
    );
  };

  return show ? (
    <div className={classes.SearchSuggestions}>
      {searchSuggestions.map((suggestion) => {
        return (
          <div
            className={classes.suggestion}
            key={suggestion.name}
            onClick={() => search(suggestion.name)}
          >
            <p className={classes.title}>{suggestion.name}</p>
            <span className={classes.companyIndustry}>
              <i>dot</i>
              {suggestion.industry}
            </span>
            <div
              className={classes.logo}
              style={{ backgroundImage: `url(${suggestion.logoPath})` }}
            />
          </div>
        );
      })}
    </div>
  ) : null;
}
