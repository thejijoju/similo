import React, { useState, useRef, useEffect, useContext } from 'react';

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
  const parsedNumber = parseInt(number, 10);
  return `€${parsedNumber.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  })}`;
}

export default function SearchResult({ company }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCompanyCardExpanded, setIsCompanyCardExpanded] = useState(false);
  const [companyCardHeight, setCompanyCardHeight] = useState('');
  const [isExpandCardButtonRotated, setIsExpandCardButtonRotated] =
    useState(false);
  const [isSubsidiariesComponentVisible, setIsSubsidiariesComponentVisible] =
    useState(false);

  const companyCardRef = useRef();
  const companyCardInitialHeight = useRef();

  const { areCompanyCardsExpanded } = useContext(SearchResultsContext);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const expandCompanyCard = () => {
    setIsExpandCardButtonRotated(true);
    setIsCompanyCardExpanded(true);
  };

  const collapseCompanyCard = () => {
    setIsExpandCardButtonRotated(false);
    setTimeout(() => {
      setIsCompanyCardExpanded(false);
    }, 200);
    setCompanyCardHeight(companyCardInitialHeight.current);
  };

  const showSubsidiaries = () => {
    setIsSubsidiariesComponentVisible(true);
  };

  const hideSubsidiaries = () => {
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
      console.log(companyCardRef.current.scrollHeight);
      setCompanyCardHeight(companyCardRef.current.scrollHeight + 42);
    }
  }, [isCompanyCardExpanded]);

  useEffect(() => {
    if (areCompanyCardsExpanded) {
      expandCompanyCard();
    } else {
      collapseCompanyCard();
    }
  }, [areCompanyCardsExpanded]);

  return (
    <>
      <div
        className={classes.SearchResult}
        ref={companyCardRef}
        style={{ height: companyCardHeight }}
      >
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
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Parent Organization</span>
                  <span className={classes.content}>
                    {company.parentCompany}
                  </span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Founder</span>
                  <span className={classes.content}>{company.founder}</span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Founded</span>
                  <span className={classes.content}>
                    {company.yearOfFoundation}
                  </span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Revenue</span>
                  <span className={classes.content}>
                    {convertNumberToString(company.revenue)}
                  </span>
                </div>
              </div>
              <div className={classes.divider} />
              <div className={classes.additionalDetails}>
                <div className={classes.keyPeople}>
                  <span className={classes.title}>Key people</span>
                  <span className={classes.content}>
                    Michael Burke (Chairman & CEO), Nicolas Ghesquière, Virgil
                    Abloh (Creative directors)
                  </span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Number of employees</span>
                  <span className={classes.content}>
                    {company.employeesCount
                      ? company.employeesCount.toLocaleString('en-US', {
                          maximumFractionDigits: 2,
                        })
                      : null}
                  </span>
                </div>
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Area served</span>
                  <span className={classes.content}>Worldwide</span>
                </div>
              </div>
              {company.subsidiaries && (
                <div
                  className={classnames(
                    classes.infoBlock,
                    classes.subsidiaries
                  )}
                >
                  <span className={classes.title}>Subsidiaries</span>
                  <span className={classes.content} onClick={showSubsidiaries}>
                    List of subsidiaries (
                    {company.subsidiaries.split(',').length})
                  </span>
                </div>
              )}
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
      {isCompanyCardExpanded && (
        <div className={classes.feedbackContainer} onClick={openModal}>
          Feedback
        </div>
      )}
      <Modal isOpen={isOpenModal} onRequestClose={() => setIsOpenModal(false)}>
        <FeedbackForm company={company} onClose={() => setIsOpenModal(false)} />
      </Modal>
    </>
  );
}
