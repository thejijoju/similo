import React, { useState, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import classnames from 'classnames';

import Subsidiaries from './Subsidiaries';
import { FeedbackForm } from '../../Forms/FeedbackForm';
import Modal from '../../Modal';

import classes from './styles.module.scss';
import { SearchResultsContext } from '../../../context/index';

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

  /* const parsedNumber = parseInt(number, 10);
  return `€${parsedNumber.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  })}`; */
}

export default function SearchResult({ company }) {
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

  const { areCompanyCardsExpanded } = useContext(SearchResultsContext);

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
  };

  const showSubsidiaries = (event) => {
    event.stopPropagation();
    setIsSubsidiariesComponentVisible(true);
  };

  const hideSubsidiaries = (event) => {
    event.stopPropagation();
    setIsSubsidiariesComponentVisible(false);
  };

  useEffect(() => {
    if (companyCardRef.current) {
      setCompanyCardHeight(companyCardRef.current.offsetHeight);
      companyCardInitialHeight.current = companyCardRef.current.offsetHeight;
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
    if (areCompanyCardsExpanded) {
      expandCompanyCard();
    } else {
      collapseCompanyCard();
    }
  }, [areCompanyCardsExpanded]);

  useEffect(() => {
    if (
      router.query.fromSuggestions &&
      decodeURI(router.query.term) === company.name
    ) {
      setTimeout(() => {
        expandCompanyCard();
      }, 800);
      setTimeout(() => {
        /* companyCardRef.current.scrollIntoView({ behavior: 'smooth' }); */
        const yOffset = -140;
        const y =
          companyCardRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 600);
    }
  }, [router.query.term]);

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
        style={{ height: companyCardHeight }}
        onClick={() => {
          if (window.innerWidth <= 1200) {
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
              backgroundImage: `url(${company.logoPath})`,
            }}
          />
          <h1 className={classes.mobileTitle}>{company.name}</h1>
        </div>
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
                <div className={classes.keyPeople}>
                  <span className={classes.title}>Key people</span>
                  <span
                    className={classes.content}
                    style={{ left: keyPeopleOffset }}
                  >
                    Michael Burke (Chairman & CEO), Nicolas Ghesquière, Virgil
                    Abloh (Creative directors)
                  </span>
                </div>
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
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Area served</span>
                  <span className={classes.content}>Worldwide</span>
                </div>
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
