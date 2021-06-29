import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { COMPANIES_PER_PAGE } from 'constants/index';
import { SearchResultsContext } from '@/context/index';
import classes from './styles.module.scss';

function highlightMatchingText(searchTerm, text) {
  /* const querystr = 'ula';
  const result = 'Calculator'; */
  const reg = new RegExp(searchTerm, 'gi');
  const finalStr = text.replace(reg, (str) => {
    return `<b>${str}</b>`;
  });
  console.log(finalStr);
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
  const router = useRouter();

  const { setLastSearchTerm } = useContext(SearchResultsContext);

  const search = (term, type) => {
    setSearchTerm(term);
    onHide();
    router.push(
      `/?term=${encodeURIComponent(
        term
      )}&perPage=${COMPANIES_PER_PAGE}&fromSuggestions=true&suggestionType=${
        type === 'industry' ? 'industry' : 'company'
      }`,
      undefined,
      { shallow: true }
    );
  };

  return show ? (
    <div className={classes.SearchSuggestions}>
      {searchSuggestions.map((suggestion) => {
        return (
          <div
            className={classes.suggestion}
            key={suggestion.name}
            onClick={() => {
              setTimeout(() => {
                setLastSearchTerm('');
              }, 100);
              search(suggestion.name, suggestion.type);
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
