import React, { useState, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import classnames from 'classnames';

import Subsidiaries from './Subsidiaries';
import { FeedbackForm } from '../../Forms/FeedbackForm';
import Modal from '../../Modal';

import classes from './styles.module.scss';
import { SearchResultsContext } from '../../../context/index';

function setBorderAndShadowColor(id) {
  switch (true) {
    case id === 0 || id % 6 === 0:
      return {
        border: '1px solid rgba(193, 80, 80, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(193, 80, 80, 0.06)',
      };
    case id === 1 || id % 6 === 1:
      return {
        border: '1px solid rgba(238, 194, 171, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(238, 194, 171, 0.06)',
      };
    case id === 2 || id % 6 === 2:
      return {
        border: '1px solid rgba(84, 191, 207, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(84, 191, 207, 0.06)',
      };
    case id === 3 || id % 6 === 3:
      return {
        border: '1px solid rgba(150, 146, 239, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(150, 146, 239, 0.06)',
      };
    case id === 4 || id % 6 === 4:
      return {
        border: '1px solid rgba(105, 60, 114, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(105, 60, 114, 0.06)',
      };
    case id === 5 || id % 6 === 5:
      return {
        border: '1px solid rgba(193, 80, 80, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(193, 80, 80, 0.06)',
      };
    default:
      return {
        border: '1px solid rgba(193, 80, 80, 0.2)',
        boxShadow: 'inset 0 2px 12px rgba(193, 80, 80, 0.06)',
      };
  }
}

function convertNumberToString(number) {
  if (!number) {
    return null;
  }

  switch (true) {
    case number >= 1000000000:
      return `€${number / 1000000000} billion`.replace('.', ',');
    case number >= 1000000:
      return `€${number / 1000000} million`.replace('.', ',');
    default:
      return `€${number / 1000} thousand`.replace('.', ',');
  }
}

export default function SearchResult({ company, id }) {
  const [isTouched, setIsTouched] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCompanyCardExpanded, setIsCompanyCardExpanded] = useState(false);
  const [companyCardHeight, setCompanyCardHeight] = useState('');
  const [isExpandCardButtonRotated, setIsExpandCardButtonRotated] =
    useState(false);
  const [isSubsidiariesComponentVisible, setIsSubsidiariesComponentVisible] =
    useState(false);
  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);
  const [keyPeopleOffset, setKeyPeopleOffset] = useState(0);

  const companyCardRef = useRef();
  const companyCardInitialHeight = useRef();
  const employeesCountRef = useRef();
  const tagsRef = useRef();

  const {
    areCompanyCardsExpanded,
    // setAreCompanyCardsExpanded,
    companyExpertiseFilter,
    setCompanyExpertiseFilter,
    lastSearchTerm,
    setLastSearchTerm,
  } = useContext(SearchResultsContext);

  /* const { currentlyOpenedCompanyCard, setCurrentlyOpenedCompanyCard } =
    useContext(SearchResultsContext); */

  const openModal = () => {
    setIsOpenModal(true);
  };
  const router = useRouter();

  const expandCompanyCard = () => {
    setIsExpandCardButtonRotated(true);
    setIsCompanyCardExpanded(true);
  };

  const collapseCompanyCard = () => {
    setIsExpandCardButtonRotated(false);
    if (window.innerWidth > 1200) {
      setTimeout(() => {
        setIsCompanyCardExpanded(false);
      }, 200);
    } else {
      setIsCompanyCardExpanded(false);
    }
    setCompanyCardHeight(companyCardInitialHeight.current);
    // setCompanyCardHeight('unset');
  };

  const showSubsidiaries = (event) => {
    event.stopPropagation();
    setIsSubsidiariesComponentVisible(true);
  };

  const hideSubsidiaries = (event) => {
    event.stopPropagation();
    setIsSubsidiariesComponentVisible(false);
  };

  const toggleExpertiseFilter = (value) => {
    const indexOfValue = companyExpertiseFilter.indexOf(value);
    if (indexOfValue === -1) {
      setCompanyExpertiseFilter((prevState) => {
        const newState = [...prevState, value];
        return newState;
      });
    } else {
      setCompanyExpertiseFilter((prevState) => {
        const newState = [...prevState];
        newState.splice(indexOfValue, 1);
        return newState;
      });
    }
  };

  useEffect(() => {
    if (companyCardRef.current && tagsRef.current) {
      companyCardInitialHeight.current = companyCardRef.current.offsetHeight;
      setCompanyCardHeight(companyCardRef.current.offsetHeight);
      /* companyCardInitialHeight.current = 70 + tagsRef.current.offsetHeight;
      setCompanyCardHeight(companyCardInitialHeight.current); */
    }
  }, []);

  useEffect(() => {
    if (isCompanyCardExpanded) {
      if (window.innerWidth > 1200) {
        setCompanyCardHeight(companyCardRef.current.scrollHeight + 43);
      } else {
        setCompanyCardHeight('unset');
      }
    }
  }, [isCompanyCardExpanded]);

  useEffect(() => {
    if (isTouched) {
      return;
    }
    if (areCompanyCardsExpanded) {
      expandCompanyCard();
    } else {
      collapseCompanyCard();
    }
  }, [
    areCompanyCardsExpanded,
    expandCompanyCard,
    collapseCompanyCard,
    isCompanyCardExpanded,
    isTouched,
    company,
  ]);

  useEffect(() => {
    setIsTouched(false);
  }, [areCompanyCardsExpanded]);

  useEffect(() => {
    // collapseCompanyCard();
    setTimeout(() => {
      setLastSearchTerm(decodeURI(router.query.term));
    }, 100);
  }, [router.query.term]);

  useEffect(() => {
    if (
      router.query.fromSuggestions &&
      decodeURI(router.query.term) === company.name &&
      lastSearchTerm !== decodeURI(router.query.term)
    ) {
      setIsTouched(true);
      setTimeout(() => {
        expandCompanyCard();
        setLastSearchTerm(decodeURI(router.query.term));
      }, 600);
      setTimeout(() => {
        const yOffset = -140;
        const y =
          companyCardRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 800);
    } else {
      collapseCompanyCard();
    }
  }, [router.query.term, company.name, lastSearchTerm]);

  useEffect(() => {
    if (isOpenModal && window.innerWidth <= 748) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (employeesCountRef.current) {
      setKeyPeopleOffset(-employeesCountRef.current.offsetWidth);
      document.documentElement.style.setProperty(
        '--keyPeopleOffset',
        `${employeesCountRef.current.offsetWidth}px`
      );
    }
  }, [employeesCountRef.current]);

  return (
    <>
      <div
        data-element="search-result"
        className={classes.SearchResult}
        ref={companyCardRef}
        style={{
          height: companyCardHeight,
          visibility: company.hidden ? 'hidden' : 'visible',
          ...setBorderAndShadowColor(id),
        }}
        onClick={() => {
          if (window.innerWidth <= 1200) {
            setIsTouched(true);
            if (isCompanyCardExpanded) {
              collapseCompanyCard();
            } else {
              expandCompanyCard();
            }
          }
        }}
      >
        <div className={classes.header}>
          <div
            className={classes.logo}
            style={{
              backgroundImage: `url(${
                company.logoLocalPath
                  ? `uploads/${company.logoLocalPath}`
                  : company.logoPath
              })`,
            }}
          />
          <h1 className={classes.mobileTitle}>{company.name}</h1>
        </div>
        <div className={classes.companyInfo}>
          <h1>{company.name}</h1>
          <span className={classes.industry}>{company.industry}</span>
          <div className={classes.tags} ref={tagsRef}>
            {company.expertise &&
              company.expertise.split(',').map((tag) => (
                <span
                  className={classnames(
                    classes.tag,
                    companyExpertiseFilter.includes(tag.trim()) &&
                      classes.active
                  )}
                  key={tag}
                  onClick={() => toggleExpertiseFilter(tag.trim())}
                >
                  {tag.trim()}
                </span>
              ))}
          </div>
          {isCompanyCardExpanded && (
            <div className={classes.details}>
              <div className={classes.mainDetails}>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Website</span>
                  <span className={classes.content}>
                    <a href={`https://${company.websiteUrl}`}>
                      {company.websiteUrl}
                    </a>
                  </span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Headquarters</span>
                  <span className={classes.content}>{company.HQLocation}</span>
                </div>
                {company.parentCompany && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Parent Organization</span>
                    <span className={classes.content}>
                      {company.parentCompany}
                    </span>
                  </div>
                )}
                {company.founder && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Founder</span>
                    <span className={classes.content}>{company.founder}</span>
                  </div>
                )}
                {company.yearOfFoundation && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Founded</span>
                    <span className={classes.content}>
                      {company.yearOfFoundation}
                    </span>
                  </div>
                )}
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Revenue</span>
                  <span className={classes.content}>
                    {convertNumberToString(company.revenue)}
                  </span>
                </div>
              </div>
              <div
                className={classes.divider}
                style={{
                  display:
                    isAdditionalInfoVisible || window.innerWidth > 1201
                      ? 'block'
                      : 'none',
                }}
              />
              <div
                className={classes.additionalDetails}
                style={{
                  display:
                    isAdditionalInfoVisible || window.innerWidth > 1201
                      ? 'flex'
                      : 'none',
                }}
              >
                {company.keyPeople && (
                  <div className={classes.keyPeople}>
                    <span className={classes.title}>Key people</span>
                    <span
                      className={classes.content}
                      style={{ left: keyPeopleOffset }}
                    >
                      {company.keyPeople}
                    </span>
                  </div>
                )}
                {company.employeesCount && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Number of employees</span>
                    <span className={classes.content} ref={employeesCountRef}>
                      {company.employeesCount
                        ? company.employeesCount.toLocaleString('en-US', {
                            maximumFractionDigits: 2,
                          })
                        : null}
                    </span>
                  </div>
                )}
                {company.areaServed && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Area served</span>
                    <span className={classes.content}>
                      {company.areaServed}
                    </span>
                  </div>
                )}
                {company.subsidiaries && (
                  <div
                    className={classnames(
                      classes.infoBlock,
                      classes.subsidiaries
                    )}
                  >
                    <span className={classes.title}>Subsidiaries</span>
                    <span
                      className={classes.content}
                      onClick={showSubsidiaries}
                    >
                      List of subsidiaries (
                      {company.subsidiaries.split(',').length})
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <i
          className={classnames(
            classes.expandCard,
            isExpandCardButtonRotated && classes.rotate
          )}
          onClick={() => {
            setIsTouched(true);
            if (isCompanyCardExpanded) {
              collapseCompanyCard();
            } else {
              expandCompanyCard();
            }
          }}
        >
          Expand card
        </i>
        {company.subsidiaries && (
          <Subsidiaries
            show={isSubsidiariesComponentVisible}
            onHide={hideSubsidiaries}
            subsidiaries={company.subsidiaries.split(',')}
          />
        )}
        <div
          className={classes.showMore}
          onClick={(event) => {
            event.stopPropagation();
            setIsAdditionalInfoVisible((prevState) => !prevState);
          }}
        >
          <span>
            <i
              className={classnames(isAdditionalInfoVisible && classes.rotate)}
            >
              arrow icon
            </i>
            {isAdditionalInfoVisible ? 'see less' : 'see more'}
          </span>
        </div>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={() => setIsOpenModal(false)}
        >
          <FeedbackForm
            company={company}
            onClose={() => setIsOpenModal(false)}
          />
        </Modal>
      </div>
      {isCompanyCardExpanded && (
        <div className={classes.feedbackContainer} onClick={openModal}>
          Feedback
        </div>
      )}
    </>
  );
}
