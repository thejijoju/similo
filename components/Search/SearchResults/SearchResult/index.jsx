/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import psl from 'psl';
import classnames from 'classnames';
import amplitude from 'amplitude-js';

import csrToUpperCase from '@/helpers/csrToUpperCase';
import convertNumberToCompanySizeRanges from '@/helpers/convertNumberToCompanySizeRange';
import isNumberInsideCompanySizeRange from '@/helpers/isNumberInsideCompanySizeRange';
import isNumberInsideCompanyRevenueRange from '@/helpers/isNumberInsideCompanyRevenueRange';
import convertNumberToCompanyRevenueRange from '@/helpers/convertNumberToCompanyRevenueRange';
import Subsidiaries from './Subsidiaries';
import { FeedbackForm } from '../../../Forms/FeedbackForm';
import Modal from '../../../Modal';

import classes from './styles.module.scss';
import { SearchResultsContext, UIContext } from '../../../../context/index';

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

function openCSRLink(link) {
  window.open(link, '_blank');
}

function createDateString(date) {
  function getTimezoneOffset() {
    let offset = new Date().getTimezoneOffset();
    const sign = offset < 0 ? '+' : '-';
    offset = Math.abs(offset);
    return sign + offset / 60;
  }

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateObj = new Date(date);
  return `${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getHours()}:${
    (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes()
  } GMT${getTimezoneOffset()}`;
}

function createCompanySymbolAndExchange(stockData) {
  return (
    <>
      <span style={{ color: '#2463c4' }}>{stockData.symbol}</span>{' '}
      <span style={{ color: '#717479' }}>({stockData.exchange})</span>{' '}
    </>
  );
}

function createDateStampSubstring(stockData) {
  return (
    <sub
      style={{
        fontSize: '13px',
        lineHeight: '15px',
        color: '#848181',
        fontWeight: 'normal',
      }}
    >
      {createDateString(stockData.createdAt)} -{' '}
      <Link href="/disclamer">
        <a target="_blank" style={{ display: 'inline', color: 'inherit' }}>
          Disclamer
        </a>
      </Link>
    </sub>
  );
}

function createStockPriceString(stockData) {
  if (!stockData || !stockData.stockPrice) {
    return null;
  }
  return (
    <span style={{ fontWeight: 'bold' }}>
      {createCompanySymbolAndExchange(stockData)}
      <span>
        {stockData.currency === 'USD' ? '$' : '€'}
        {stockData.stockPrice.toFixed(2)}
        &nbsp;&nbsp;
        <span
          style={{
            color: +stockData.stockPriceChange >= 0 ? 'green' : '#e02c38',
          }}
        >
          <span>
            {+stockData.stockPriceChange > 0 && '+'}
            {stockData.stockPriceChange.toFixed(2)}
          </span>{' '}
          <span>
            ({+stockData.regularMarketChangePercent > 0 && '+'}
            {stockData.regularMarketChangePercent.toFixed(2)}%)
          </span>
        </span>
        <br />
        {createDateStampSubstring(stockData)}
        <span />
      </span>
    </span>
  );
}

function createMktCapString(stockData) {
  if (!stockData || !stockData.marketCap) {
    return null;
  }
  return (
    <span style={{ fontWeight: 'bold' }}>
      {createCompanySymbolAndExchange(stockData)}
      <span>
        {stockData.currency === 'USD' ? '$' : '€'}
        {stockData.marketCap}
        <br />
        {createDateStampSubstring(stockData)}
        <span />
      </span>
    </span>
  );
}

function createOpenString(stockData) {
  if (!stockData || !stockData.open) {
    return null;
  }
  return (
    <span style={{ fontWeight: 'bold' }}>
      {createCompanySymbolAndExchange(stockData)}
      <span>
        {stockData.currency === 'USD' ? '$' : '€'}
        {stockData.open}
        <br />
        {createDateStampSubstring(stockData)}
        <span />
      </span>
    </span>
  );
}

function createVolumeString(stockData) {
  if (!stockData || !stockData.volume) {
    return null;
  }
  return (
    <span style={{ fontWeight: 'bold' }}>
      {createCompanySymbolAndExchange(stockData)}
      <span>
        {stockData.currency === 'USD' ? '$' : '€'}
        {stockData.volume}
        <br />
        {createDateStampSubstring(stockData)}
        <span />
      </span>
    </span>
  );
}

function createPriceEPSString(stockData) {
  if (!stockData || !stockData.priceEps) {
    return null;
  }
  return (
    <span style={{ fontWeight: 'bold' }}>
      {createCompanySymbolAndExchange(stockData)}
      <span>
        {stockData.priceEps}
        <br />
        {createDateStampSubstring(stockData)}
        <span />
      </span>
    </span>
  );
}

// eslint-disable-next-line consistent-return
function createStockDataValue(
  company,
  currentStockDataKey,
  setCurrentStockDataKey
) {
  if (currentStockDataKey === 'stockPrice') {
    const dataValue = createStockPriceString(JSON.parse(company.stockData));
    if (!dataValue && setCurrentStockDataKey) {
      return setCurrentStockDataKey('marketCap');
    }
    return dataValue;
  }
  if (currentStockDataKey === 'marketCap') {
    const dataValue = createMktCapString(JSON.parse(company.stockData));
    if (!dataValue && setCurrentStockDataKey) {
      return setCurrentStockDataKey('open');
    }
    return dataValue;
  }
  if (currentStockDataKey === 'open') {
    const dataValue = createOpenString(JSON.parse(company.stockData));
    if (!dataValue && setCurrentStockDataKey) {
      return setCurrentStockDataKey('volume');
    }
    return dataValue;
  }
  if (currentStockDataKey === 'volume') {
    const dataValue = createVolumeString(JSON.parse(company.stockData));
    if (!dataValue && setCurrentStockDataKey) {
      return setCurrentStockDataKey('priceEps');
    }
    return dataValue;
  }
  if (currentStockDataKey === 'priceEps') {
    const dataValue = createPriceEPSString(JSON.parse(company.stockData));
    if (!dataValue && setCurrentStockDataKey) {
      return setCurrentStockDataKey('stockPrice');
    }
    return dataValue;
  }
}

export default function SearchResult({
  company,
  id,
  csrLinks,
  expertiseLinks,
}) {
  const [isTouched, setIsTouched] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCompanyCardExpanded, setIsCompanyCardExpanded] = useState(false);
  const [companyCardHeight, setCompanyCardHeight] = useState('');
  const [isExpandCardButtonRotated, setIsExpandCardButtonRotated] =
    useState(false);
  const [isSubsidiariesComponentVisible, setIsSubsidiariesComponentVisible] =
    useState(false);
  const [isAdditionalInfoVisible /* , setIsAdditionalInfoVisible */] =
    useState(true);
  const [keyPeopleOffset, setKeyPeopleOffset] = useState(0);
  const [companyWebsiteLink, setCompanyWebsiteLink] = useState('');
  const [companyWebsiteText, setCompanyWebsiteText] = useState('');
  const [stockDataKeyTitle, setStockDataKeyTitle] = useState('');
  const [isFullAboutVisible, setIsFullAboutVisible] = useState(false);
  const [currentStockDataKey, setCurrentStockDataKey] = useState('stockPrice');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleDetailsPage, setVisibleDetailsPage] = useState(1);

  const companyCardRef = useRef();
  const companyCardInitialHeight = useRef();
  const employeesCountRef = useRef();
  const tagsRef = useRef();
  const additionalDetailsRef = useRef();
  const detailsRef = useRef();

  useEffect(() => {
    setCompanyWebsiteLink(company.websiteUrl);
    setCompanyWebsiteText(company.websiteUrl);
  }, [company]);

  const {
    areCompanyCardsExpanded,
    companyExpertiseFilter,
    setCompanyExpertiseFilter,
    lastSearchTerm,
    setLastSearchTerm,
    companyParentOrganisatonFilter,
    setCompanyParentOrganisationFilter,
    companyHQFilter,
    setCompanyHQFilter,
    companyFoundationYearFilter,
    setCompanyFoundationYearFilter,
    companySizeFilter,
    setCompanySizeFilter,
    companyRevenueFilter,
    setCompanyRevenueFilter,
    sortOption,
    companyCSRFilter,
  } = useContext(SearchResultsContext);

  const {
    globalStockDataKey,
    setGlobalStockDataKey,
    setCompanyWithLastSwitchedStockKey,
    companyWithLastSwitchedStockKey,
  } = useContext(UIContext);

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
      amplitude.getInstance().logEvent('Search Filter', {
        type: 'Expertise',
        value,
      });
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

  const toggleCompanyCardFilter = (filterType, filter) => {
    if (window.innerWidth <= 1200) {
      return;
    }
    switch (filterType) {
      case 'parentCompany':
        setCompanyParentOrganisationFilter((prevFilter) => {
          if (filter === prevFilter && prevFilter !== '') {
            return '';
          }
          amplitude.getInstance().logEvent('Search Filter', {
            type: 'Parent Organization',
            value: filter,
          });
          return filter;
        });
        break;
      case 'HQLocation':
        setCompanyHQFilter((prevFilter) => {
          if (filter === prevFilter && prevFilter !== '') {
            return '';
          }
          amplitude.getInstance().logEvent('Search Filter', {
            type: 'HQ Location',
            value: filter,
          });
          return filter;
        });
        break;
      case 'yearOfFoundation':
        setCompanyFoundationYearFilter((prevFilter) => {
          if (filter === prevFilter && prevFilter !== '') {
            return '';
          }
          amplitude.getInstance().logEvent('Search Filter', {
            type: 'Year Of Foundation',
            value: filter,
          });
          return filter;
        });
        break;
      case 'companySize':
        setCompanySizeFilter((prevFilter) => {
          if (prevFilter[0] === convertNumberToCompanySizeRanges(filter)) {
            return [];
          }
          const value = convertNumberToCompanySizeRanges(filter);
          amplitude.getInstance().logEvent('Search Filter', {
            type: 'Company size',
            value,
          });
          return [value];
        });
        break;
      case 'revenue':
        setCompanyRevenueFilter((prevFilter) => {
          if (prevFilter[0] === convertNumberToCompanyRevenueRange(filter)) {
            return [];
          }
          const value = convertNumberToCompanyRevenueRange(filter);
          amplitude.getInstance().logEvent('Search Filter', {
            type: 'Revenue',
            value,
          });
          return [value];
        });
        break;
      default:
        console.log('No such filter exists');
    }
  };

  const changeCurrentStockDataKey = () => {
    // eslint-disable-next-line consistent-return
    setCurrentStockDataKey((prevKey) => {
      if (prevKey === 'stockPrice') {
        return 'marketCap';
      }
      if (prevKey === 'marketCap') {
        return 'open';
      }
      if (prevKey === 'open') {
        return 'volume';
      }
      if (prevKey === 'volume') {
        return 'priceEps';
      }
      if (prevKey === 'priceEps') {
        return 'stockPrice';
      }
    });
  };

  useEffect(() => {
    if (currentStockDataKey === 'stockPrice') {
      setStockDataKeyTitle('Stock price');
    }
    if (currentStockDataKey === 'marketCap') {
      setStockDataKeyTitle('Mkt Cap');
    }
    if (currentStockDataKey === 'open') {
      setStockDataKeyTitle('Open');
    }
    if (currentStockDataKey === 'volume') {
      setStockDataKeyTitle('Vol');
    }
    if (currentStockDataKey === 'priceEps') {
      setStockDataKeyTitle('P/E');
    }
  }, [currentStockDataKey]);

  useEffect(() => {
    if (
      sortOption.startsWith('stock') &&
      companyWithLastSwitchedStockKey === company.name
    ) {
      console.log('setting stock key');
      setGlobalStockDataKey(currentStockDataKey);
    }
  }, [sortOption, currentStockDataKey]);

  useEffect(() => {
    if (globalStockDataKey !== currentStockDataKey) {
      setCurrentStockDataKey(globalStockDataKey);
    }
  }, [globalStockDataKey]);

  useEffect(() => {
    if (companyCardRef.current && tagsRef.current) {
      companyCardInitialHeight.current = companyCardRef.current.offsetHeight;
      setCompanyCardHeight(companyCardRef.current.offsetHeight);
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

  useEffect(() => {
    function getDomainFromUrl(url) {
      const tmp = document.createElement('a');
      tmp.href = url.includes('https://') ? url : `https://${url}`;
      const parsed = psl.parse(tmp.hostname);
      return parsed.sld;
    }

    if (!companyExpertiseFilter.length && !companyCSRFilter.length) {
      setCompanyWebsiteLink(company.websiteUrl);
      setCompanyWebsiteText(company.websiteUrl);
    } else {
      const expertiseLink = expertiseLinks.find(
        (link) =>
          link.name ===
            companyExpertiseFilter[companyExpertiseFilter.length - 1] &&
          (link.company === company.companyId || link.company === company.id)
      );

      if (expertiseLink) {
        setCompanyWebsiteLink(expertiseLink.url);
        setCompanyWebsiteText(
          `${getDomainFromUrl(expertiseLink.url)}/${
            companyExpertiseFilter[companyExpertiseFilter.length - 1]
          }`
        );
      }

      const csrLink = csrLinks.find((link) => {
        return (
          link.name === companyCSRFilter[companyCSRFilter.length - 1] &&
          (link.company === company.companyId || link.company === company.id)
        );
      });

      if (csrLink) {
        setCompanyWebsiteLink(csrLink.url);
        setCompanyWebsiteText(
          `${getDomainFromUrl(company.websiteUrl)}/${
            companyCSRFilter[companyCSRFilter.length - 1]
          }`
        );
      }
    }
  }, [
    companyExpertiseFilter,
    company,
    expertiseLinks,
    companyCSRFilter,
    csrLinks,
  ]);

  const swipeDetails = (direction) => {
    if (direction === 'left') {
      if (visibleDetailsPage === 2) {
        setVisibleDetailsPage(1);
      }
    } else if (direction === 'right') {
      if (visibleDetailsPage === 1) {
        setVisibleDetailsPage(2);
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd === 0) {
      return;
    }
    if (touchStart - touchEnd > 75) {
      swipeDetails('right');
    }

    if (touchStart - touchEnd < -75) {
      swipeDetails('left');
    }
  };

  useEffect(() => {
    if (additionalDetailsRef.current && visibleDetailsPage === 2) {
      detailsRef.current.style.height = `${additionalDetailsRef.current.offsetHeight}px`;
    } else if (additionalDetailsRef.current && visibleDetailsPage === 1) {
      detailsRef.current.style.height = '';
    }
  }, [visibleDetailsPage, isFullAboutVisible, isCompanyCardExpanded]);

  return (
    <>
      <div
        data-element="search-result"
        className={classes.SearchResult}
        ref={companyCardRef}
        style={{
          height:
            isFullAboutVisible && window.innerWidth > 1200
              ? ''
              : companyCardHeight,
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleExpertiseFilter(tag.trim());
                  }}
                >
                  {tag.trim()}
                </span>
              ))}
            {company.csr &&
              company.csr.split(',').map((tag) => (
                <span
                  className={classnames(
                    classes.tag,
                    classes.csr,
                    companyExpertiseFilter.includes(tag.trim()) &&
                      classes.active
                  )}
                  key={tag}
                  onClick={(event) => {
                    event.stopPropagation();
                    openCSRLink(
                      csrLinks.find((link) => link.name === tag.trim()).url
                    );
                  }}
                >
                  {csrToUpperCase(tag.trim())}
                </span>
              ))}
          </div>
          {isCompanyCardExpanded && (
            <div className={classes.details} ref={detailsRef}>
              <div
                className={classnames(
                  classes.mainDetails,
                  visibleDetailsPage === 2 ? classes.hidden : classes.visible
                )}
              >
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Website</span>
                  <span className={classes.content}>
                    <a
                      onClick={() => {
                        amplitude.getInstance().logEvent('Open Link', {
                          url: companyWebsiteLink.includes('http')
                            ? companyWebsiteLink
                            : `https://${companyWebsiteLink}`,
                        });
                      }}
                      className={classes.companyLink}
                      href={
                        companyWebsiteLink.includes('http')
                          ? companyWebsiteLink
                          : `https://${companyWebsiteLink}`
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {companyWebsiteText}
                    </a>
                  </span>
                </div>
                {company.stockData && (
                  <div className={classes.infoBlock}>
                    <span
                      className={classnames(classes.title, classes.toggle)}
                      onClick={() => {
                        changeCurrentStockDataKey();
                        setCompanyWithLastSwitchedStockKey(company.name);
                      }}
                    >
                      {stockDataKeyTitle}
                    </span>
                    <span className={classes.content}>
                      <span>
                        {createStockDataValue(
                          company,
                          currentStockDataKey,
                          setCurrentStockDataKey
                        )}
                      </span>
                    </span>
                  </div>
                )}
                <div className={classes.infoBlock}>
                  <span className={classes.title}>Headquarters</span>
                  <span
                    className={classnames(
                      classes.content,
                      classes.cardFilter,
                      companyHQFilter === company.HQLocation && classes.active
                    )}
                    onClick={() =>
                      toggleCompanyCardFilter('HQLocation', company.HQLocation)
                    }
                  >
                    <span>{company.HQLocation}</span>
                  </span>
                </div>
                {company.parentCompany && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Parent Organization</span>
                    <span
                      className={classnames(
                        classes.content,
                        classes.cardFilter,
                        companyParentOrganisatonFilter ===
                          company.parentCompany && classes.active
                      )}
                      onClick={() =>
                        toggleCompanyCardFilter(
                          'parentCompany',
                          company.parentCompany
                        )
                      }
                    >
                      <span>{company.parentCompany}</span>
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
                    <span
                      className={classnames(
                        classes.content,
                        classes.cardFilter,
                        companyFoundationYearFilter ===
                          company.yearOfFoundation && classes.active
                      )}
                      onClick={() =>
                        toggleCompanyCardFilter(
                          'yearOfFoundation',
                          company.yearOfFoundation
                        )
                      }
                    >
                      <span>{company.yearOfFoundation}</span>
                    </span>
                  </div>
                )}
                {company.revenue && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Revenue</span>
                    <span
                      className={classnames(
                        classes.content,
                        classes.cardFilter,
                        companyRevenueFilter.length === 1 &&
                          isNumberInsideCompanyRevenueRange(
                            companyRevenueFilter[0],
                            company.revenue
                          ) &&
                          classes.active
                      )}
                      onClick={() =>
                        toggleCompanyCardFilter('revenue', company.revenue)
                      }
                    >
                      <span>{convertNumberToString(company.revenue)}</span>
                    </span>
                  </div>
                )}
              </div>
              <div
                className={classes.divider}
                style={{
                  display:
                    // isAdditionalInfoVisible || window.innerWidth > 1201
                    //   ? 'block'
                    //   : 'none',
                    'none',
                }}
              />
              <div
                className={classnames(
                  classes.additionalDetails,
                  visibleDetailsPage === 1 ? classes.hidden : classes.visible
                )}
                ref={additionalDetailsRef}
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
                      {company.keyPeople.split(',').slice(0, 3).join(',')}
                    </span>
                  </div>
                )}
                {company.about && (
                  <div className={classes.keyPeople}>
                    <span className={classes.title}>About</span>
                    <span
                      className={classes.content}
                      style={{ left: keyPeopleOffset }}
                    >
                      {isFullAboutVisible
                        ? company.about
                        : company.about.substring(0, 140)}
                      &nbsp;&nbsp;&nbsp;
                      {!isFullAboutVisible && (
                        <sub
                          className={classes.moreAbout}
                          onClick={(event) => {
                            event.stopPropagation();
                            event.nativeEvent.stopImmediatePropagation();
                            setIsFullAboutVisible(true);
                          }}
                        >
                          More
                        </sub>
                      )}
                    </span>
                  </div>
                )}
                {company.employeesCount && (
                  <div className={classes.infoBlock}>
                    <span className={classes.title}>Number of employees</span>
                    <span
                      className={classnames(
                        classes.content,
                        classes.cardFilter,
                        companySizeFilter.length === 1 &&
                          isNumberInsideCompanySizeRange(
                            companySizeFilter[0],
                            company.employeesCount
                          ) &&
                          classes.active
                      )}
                      ref={employeesCountRef}
                      onClick={() =>
                        toggleCompanyCardFilter(
                          'companySize',
                          company.employeesCount
                        )
                      }
                    >
                      <span>
                        {company.employeesCount
                          ? company.employeesCount.toLocaleString('en-US', {
                              maximumFractionDigits: 2,
                            })
                          : null}
                      </span>
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
              amplitude
                .getInstance()
                .logEvent('Company Card Open', { companyName: company.name });
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
            companyName={company.name}
          />
        )}
        <div className={classes.showMore}>
          <div>
            <span
              className={classnames(visibleDetailsPage === 1 && classes.active)}
            >
              1
            </span>
            <span
              className={classnames(visibleDetailsPage === 2 && classes.active)}
            >
              2
            </span>
          </div>
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
