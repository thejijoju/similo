import React, { useContext } from 'react';

import { SearchResultsContext } from '@/context/index';
import classes from './styles.module.scss';

function highlightMatchingText(searchTerm, text) {
  const reg = new RegExp(searchTerm, 'gi');
  const finalStr = text.replace(reg, (str) => {
    return `<b>${str}</b>`;
  });

  return {
    __html: finalStr,
  };
}

export default function SearchSuggestions({
  searchSuggestions = [],
  show,
  onHide,
  setSearchTerm,
  searchTerm,
}) {
  const {
    setLastSearchTerm,
    setCompanySizeFilter,
    setCompanyLocationFilter,
    setCompanyExpertiseFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter,
  } = useContext(SearchResultsContext);

  const search = (term) => {
    setSearchTerm(term);
    onHide();
    setCompanySizeFilter([]);
    setCompanyLocationFilter([]);
    setCompanyExpertiseFilter([]);
    setCompanyRevenueFilter([]);
    setCompanyTypeFilter([]);
  };

  const sortedSuggestions = searchSuggestions.sort((a, b) => {
    return b.type === 'industry' ? 1 : -1;
  });

  return show ? (
    <div className={classes.SearchSuggestions}>
      {sortedSuggestions.map((suggestion) => {
        return (
          <div
            className={classes.suggestion}
            key={suggestion.name}
            onClick={() => {
              setTimeout(() => {
                setLastSearchTerm('');
              }, 100);
              search(suggestion.name);
            }}
          >
            <p
              className={classes.title}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={highlightMatchingText(
                searchTerm,
                suggestion.name
              )}
            />
            <span className={classes.companyIndustry}>
              {suggestion.industry && <i>dot</i>}
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
