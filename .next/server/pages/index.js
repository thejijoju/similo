(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Filters/Filter/index.jsx":
/*!*********************************************!*\
  !*** ./components/Filters/Filter/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/Filter/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Filters\\Filter\\index.jsx";

/* eslint-disable jsx-a11y/label-has-associated-control */



const CHECKBOX_HEIGHT = 27;
function index({
  title,
  search,
  defaultSize = 3,
  values = [],
  state = [],
  setState
}) {
  const {
    0: filterHeight,
    1: setFilterHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('auto');
  const {
    0: isListExpanded,
    1: setIsListExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const expandedListHeightDiff = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    expandedListHeightDiff.current = listRef.current.scrollHeight - listRef.current.clientHeight;
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (values.length <= defaultSize) {
      return;
    }

    if (!isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');

      if (labels.length) {
        setTimeout(() => {
          labels[defaultSize - 1].style.opacity = '0.61';
        }, 200);
      }
    } else if (isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');

      if (labels.length) {
        labels[defaultSize - 1].style.opacity = '1';
      }
    }
  }, [isListExpanded]);

  const collapseFilter = () => {
    setFilterHeight(67);
    setIsExpanded(false);
    setIsListExpanded(false);
  };

  const expandFilter = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
  };

  const collapseList = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsListExpanded(false);
  };

  const expandList = () => {
    setIsListExpanded(true);
    setFilterHeight(defaultFilterHeight.current + CHECKBOX_HEIGHT * values.length - CHECKBOX_HEIGHT * defaultSize);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filter),
    style: {
      height: filterHeight,
      borderBottom: defaultSize >= values.length ? 'none' : ''
    },
    ref: filterRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeFilterIcon), !isExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        onClick: () => {
          if (isExpanded) {
            collapseFilter();
          } else {
            expandFilter();
          }
        },
        children: "Close filter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes), !isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notExpanded)),
      style: {
        height: isListExpanded ? Math.ceil(values.length * CHECKBOX_HEIGHT) - 11 : Math.ceil(defaultSize * CHECKBOX_HEIGHT) - 11
      },
      ref: listRef,
      children: values.map(value => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: state.includes(value),
            onChange: () => {
              const indexOfValue = state.indexOf(value);

              if (indexOfValue === -1) {
                setState(prevState => {
                  const newState = [...prevState, value];
                  return newState;
                });
              } else {
                setState(prevState => {
                  const newState = [...prevState];
                  newState.splice(indexOfValue, 1);
                  return newState;
                });
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), defaultSize < values.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMore),
      onClick: () => {
        if (isListExpanded) {
          collapseList();
        } else {
          expandList();
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Show more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Filters/index.jsx":
/*!**************************************!*\
  !*** ./components/Filters/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Filters; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/index */ "./context/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./components/Filters/Filter/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Filters\\index.jsx";




const COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
const COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];
/* const EXPERTISE = [
  'Hide All',
  'Ready to wear',
  'Accessories',
  'Footwear',
  'Something else',
]; */

const REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
const COMPANY_TYPES = ['Public', 'Private', 'Subsidary'];
function Filters({
  expertise
}) {
  const {
    companySizeFilter,
    setCompanySizeFilter,
    companyLocationFilter,
    setCompanyLocationFilter,
    companyExpertiseFilter,
    setCompanyExpertiseFilter,
    companyRevenueFilter,
    setCompanyRevenueFilter,
    companyTypeFilter,
    setCompanyTypeFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.SearchResultsContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Filters),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true,
      state: companyLocationFilter,
      setState: setCompanyLocationFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size",
      setState: setCompanySizeFilter,
      state: companySizeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      values: expertise.sort((a, b) => {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      }),
      defaultSize: 4,
      title: "Expertise",
      state: companyExpertiseFilter,
      setState: setCompanyExpertiseFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3,
      state: companyRevenueFilter,
      setState: setCompanyRevenueFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Company Type",
      values: COMPANY_TYPES,
      defaultSize: 3,
      state: companyTypeFilter,
      setState: setCompanyTypeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SearchResults/SearchResult/index.jsx":
/*!*********************************************************!*\
  !*** ./components/SearchResults/SearchResult/index.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResult; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/SearchResult/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index */ "./context/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\SearchResult\\index.jsx";





function convertNumberToString(number) {
  if (!number) {
    return null;
  }

  const parsedNumber = parseInt(number, 10);
  return `€${parsedNumber.toLocaleString('en-US', {
    maximumFractionDigits: 2
  })}`;
}

function SearchResult({
  company
}) {
  const {
    0: isCompanyCardExpanded,
    1: setIsCompanyCardExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: companyCardHeight,
    1: setCompanyCardHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: isExpandCardButtonRotated,
    1: setIsExpandCardButtonRotated
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const companyCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const companyCardInitialHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    areCompanyCardsExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.SearchResultsContext);

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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (companyCardRef.current) {
      setCompanyCardHeight(companyCardRef.current.offsetHeight);
      companyCardInitialHeight.current = companyCardRef.current.offsetHeight;
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isCompanyCardExpanded) {
      console.log(companyCardRef.current.scrollHeight);
      setCompanyCardHeight(companyCardRef.current.scrollHeight + 42);
    }
  }, [isCompanyCardExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (areCompanyCardsExpanded) {
      expandCompanyCard();
    } else {
      collapseCompanyCard();
    }
  }, [areCompanyCardsExpanded]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SearchResult),
    ref: companyCardRef,
    style: {
      height: companyCardHeight
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
      style: {
        backgroundImage: `url(${company.logoPath})`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: company.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().industry),
        children: company.industry
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tags),
        children: company.expertise && company.expertise.split(',').map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tag),
          children: tag
        }, tag, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), isCompanyCardExpanded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainDetails),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Website"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: `https://${company.websiteUrl}`,
                children: company.websiteUrl
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Headquarters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.HQLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Parent Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.parentCompany
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founder"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.founder
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.yearOfFoundation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: convertNumberToString(company.revenue)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalDetails),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().keyPeople),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Key people"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Michael Burke (Chairman & CEO), Nicolas Ghesqui\xE8re, Virgil Abloh (Creative directors)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Number of employees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.employeesCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Area served"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Worldwide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().expandCard), isExpandCardButtonRotated && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rotate)),
      onClick: () => {
        if (isCompanyCardExpanded) {
          collapseCompanyCard();
        } else {
          expandCompanyCard();
        }
      },
      children: "Expand card"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SearchResults/index.jsx":
/*!********************************************!*\
  !*** ./components/SearchResults/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResults; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/index */ "./constants/index.js");
/* harmony import */ var _components_SkeletonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SkeletonLoader */ "./components/SkeletonLoader/index.jsx");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResults/SearchResult/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SearchResults({
  searchResults
}) {
  const {
    0: innerSearchResults,
    1: setInnerSearchResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread({}, searchResults));
  const {
    0: isSearchResultsLoading,
    1: setIsSearchResultsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setInnerSearchResults(searchResults);
  }, [searchResults]);
  const {
    setAreCompanyCardsExpanded,
    areCompanyCardsExpanded,
    currentPage,
    setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_7__.SearchResultsContext);

  const getMoreSearchResults = async () => {
    setIsSearchResultsLoading(true);

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${constants_index__WEBPACK_IMPORTED_MODULE_4__.API_URL}/companies/search`, {
        params: _objectSpread(_objectSpread({}, router.query), {}, {
          page: currentPage + 1
        })
      });
      setCurrentPage(prevState => prevState + 1);

      const updatedResults = _objectSpread({}, innerSearchResults);

      updatedResults.data.companies = [...updatedResults.data.companies, ...response.data.data.companies];
      setInnerSearchResults(updatedResults);
      setIsSearchResultsLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchResultsLoading(false);
    }
  };

  if (!innerSearchResults || !innerSearchResults.data) {
    return null;
  }

  if (innerSearchResults.count === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().SearchResults),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().noResults),
        children: "No result found. Try a company or brand name or use a different keyword."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [innerSearchResults.totalCount, " Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().openAllCards),
        onClick: () => {
          setAreCompanyCardsExpanded(prevState => !prevState);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "dot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().resultsContainer),
      children: innerSearchResults.data.companies.map(company => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_6__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 18
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkeletonLoader__WEBPACK_IMPORTED_MODULE_5__.default, {
      totalCount: innerSearchResults.totalCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && !isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SkeletonLoader/index.jsx":
/*!*********************************************!*\
  !*** ./components/SkeletonLoader/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SkeletonLoader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SkeletonLoader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.js");
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SkeletonLoader\\index.jsx";





function SkeletonLoader({
  totalCount
}) {
  const {
    currentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.SearchResultsContext);
  const elements = [];
  let elementsCount = totalCount - (currentPage + 1) * _constants_index__WEBPACK_IMPORTED_MODULE_3__.COMPANIES_PER_PAGE;

  if (elementsCount > _constants_index__WEBPACK_IMPORTED_MODULE_3__.COMPANIES_PER_PAGE) {
    elementsCount = _constants_index__WEBPACK_IMPORTED_MODULE_3__.COMPANIES_PER_PAGE;
  } // eslint-disable-next-line no-plusplus


  for (let i = 0; i < elementsCount; i++) {
    elements.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchResult),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shine))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shine), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tags),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().SkeletonLoader),
    children: elements
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "COMPANIES_PER_PAGE": function() { return /* binding */ COMPANIES_PER_PAGE; }
/* harmony export */ });
const API_URL = "http://localhost:3000/api";
const COMPANIES_PER_PAGE = 8;

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsContext": function() { return /* binding */ SearchResultsContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SearchResultsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomePage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Filters */ "./components/Filters/index.jsx");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/SearchResults */ "./components/SearchResults/index.jsx");
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/index */ "./context/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ "./pages/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\pages\\index.jsx";










function HomePage({
  searchResults,
  expertise
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    setCompanyExpertiseFilter,
    setCompanySizeFilter,
    setCompanyRevenueFilter,
    setCompanyTypeFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_8__.SearchResultsContext);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const expertiseFilters = router.query.expertise ? router.query.expertise.split(',') : [];
    setCompanyExpertiseFilter(expertiseFilters);
    const typeFilters = router.query.companyType ? router.query.companyType.split(',') : [];
    setCompanyTypeFilter(typeFilters);
    const sizeFilters = router.query.companySize ? router.query.companySize.split(',|') : [];
    setCompanySizeFilter(sizeFilters);
    const revenueFilters = router.query.revenue ? router.query.revenue.split(',|') : [];
    setCompanyRevenueFilter(revenueFilters);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_6__.default, {
        expertise: expertise
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_7__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const {
    term
  } = context.query;
  let searchResults;

  if (!term) {
    searchResults = null;
  } else {
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_constants_index__WEBPACK_IMPORTED_MODULE_9__.API_URL}/companies/search?${qs__WEBPACK_IMPORTED_MODULE_5___default().stringify(context.query)}`);
    searchResults = response.data;
  }

  const expertise = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_constants_index__WEBPACK_IMPORTED_MODULE_9__.API_URL}/companies/expertise`);
  return {
    props: {
      searchResults,
      expertise: expertise.data.data.expertise
    }
  };
}

/***/ }),

/***/ "./components/Filters/Filter/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/Filters/Filter/styles.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Filter": "styles_Filter__2y9v2",
	"header": "styles_header__33OKB",
	"closeFilterIcon": "styles_closeFilterIcon__1niCJ",
	"rotate": "styles_rotate__1HEPo",
	"search": "styles_search__MIbSG",
	"checkBoxes": "styles_checkBoxes__BOKt9",
	"container": "styles_container__bUKO9",
	"checkmark": "styles_checkmark__1nCDe",
	"showMore": "styles_showMore__1v-yW",
	"showMoreIcon": "styles_showMoreIcon__1sv2m"
};


/***/ }),

/***/ "./components/Filters/styles.module.scss":
/*!***********************************************!*\
  !*** ./components/Filters/styles.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Filters": "styles_Filters__3lGcR",
	"buttons": "styles_buttons__2JBqQ",
	"filterButton": "styles_filterButton__2Imej",
	"mostRelevantButton": "styles_mostRelevantButton__11H8B"
};


/***/ }),

/***/ "./components/SearchResults/SearchResult/styles.module.scss":
/*!******************************************************************!*\
  !*** ./components/SearchResults/SearchResult/styles.module.scss ***!
  \******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"SearchResult": "styles_SearchResult__1nfB4",
	"logo": "styles_logo__2WQOv",
	"companyInfo": "styles_companyInfo__jKmHA",
	"industry": "styles_industry__XD5DG",
	"tags": "styles_tags__3hDDr",
	"tag": "styles_tag__gWN2Y",
	"expandCard": "styles_expandCard__2QI2R",
	"rotate": "styles_rotate__2evg5",
	"details": "styles_details__ts2ek",
	"mainDetails": "styles_mainDetails__QnRrd",
	"infoBlock": "styles_infoBlock__1Iemo",
	"title": "styles_title__1epn3",
	"content": "styles_content__3UXYT",
	"divider": "styles_divider__1PxGa",
	"additionalDetails": "styles_additionalDetails__2gT0P",
	"keyPeople": "styles_keyPeople__3Je1W"
};


/***/ }),

/***/ "./components/SearchResults/styles.module.scss":
/*!*****************************************************!*\
  !*** ./components/SearchResults/styles.module.scss ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"SearchResults": "styles_SearchResults__1hCFE",
	"noResults": "styles_noResults__29UvG",
	"header": "styles_header__oaDEM",
	"openAllCards": "styles_openAllCards__3i2uc",
	"displayMore": "styles_displayMore__mpUwS"
};


/***/ }),

/***/ "./components/SkeletonLoader/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/SkeletonLoader/styles.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"SkeletonLoader": "styles_SkeletonLoader__3R8sL",
	"searchResult": "styles_searchResult__2EGtJ",
	"logo": "styles_logo__3_Hhj",
	"companyInfo": "styles_companyInfo__IrI9d",
	"title": "styles_title__189M0",
	"tags": "styles_tags__2VLFt",
	"tag": "styles_tag__13PwB",
	"shine": "styles_shine__33DXr",
	"placeholderShimmer": "styles_placeholderShimmer__2xwii"
};


/***/ }),

/***/ "./pages/styles.module.scss":
/*!**********************************!*\
  !*** ./pages/styles.module.scss ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"HomePage": "styles_HomePage__3oGIj",
	"main": "styles_main__HTKU-"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHQvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9GaWx0ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL1NrZWxldG9uTG9hZGVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9wYWdlcy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZpbHRlckhlaWdodCIsInNldEZpbHRlckhlaWdodCIsInVzZVN0YXRlIiwiaXNMaXN0RXhwYW5kZWQiLCJzZXRJc0xpc3RFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiZmlsdGVyUmVmIiwidXNlUmVmIiwibGlzdFJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImxlbmd0aCIsImxhYmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsIm1hcCIsInZhbHVlIiwiaW5jbHVkZXMiLCJpbmRleE9mVmFsdWUiLCJpbmRleE9mIiwicHJldlN0YXRlIiwibmV3U3RhdGUiLCJzcGxpY2UiLCJjaGVja21hcmsiLCJDT1VOVFJJRVMiLCJDT01QQU5ZX1NJWkVTIiwiUkVWRU5VRSIsIkNPTVBBTllfVFlQRVMiLCJGaWx0ZXJzIiwiZXhwZXJ0aXNlIiwiY29tcGFueVNpemVGaWx0ZXIiLCJzZXRDb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlMb2NhdGlvbkZpbHRlciIsInNldENvbXBhbnlMb2NhdGlvbkZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyIiwiY29tcGFueVJldmVudWVGaWx0ZXIiLCJzZXRDb21wYW55UmV2ZW51ZUZpbHRlciIsImNvbXBhbnlUeXBlRmlsdGVyIiwic2V0Q29tcGFueVR5cGVGaWx0ZXIiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzb3J0IiwiYSIsImIiLCJjb252ZXJ0TnVtYmVyVG9TdHJpbmciLCJudW1iZXIiLCJwYXJzZWROdW1iZXIiLCJwYXJzZUludCIsInRvTG9jYWxlU3RyaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiU2VhcmNoUmVzdWx0IiwiY29tcGFueSIsImlzQ29tcGFueUNhcmRFeHBhbmRlZCIsInNldElzQ29tcGFueUNhcmRFeHBhbmRlZCIsImNvbXBhbnlDYXJkSGVpZ2h0Iiwic2V0Q29tcGFueUNhcmRIZWlnaHQiLCJpc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkIiwic2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCIsImNvbXBhbnlDYXJkUmVmIiwiY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0IiwiYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJleHBhbmRDb21wYW55Q2FyZCIsImNvbGxhcHNlQ29tcGFueUNhcmQiLCJvZmZzZXRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEltYWdlIiwibG9nb1BhdGgiLCJuYW1lIiwiaW5kdXN0cnkiLCJzcGxpdCIsInRhZyIsIndlYnNpdGVVcmwiLCJIUUxvY2F0aW9uIiwicGFyZW50Q29tcGFueSIsImZvdW5kZXIiLCJ5ZWFyT2ZGb3VuZGF0aW9uIiwicmV2ZW51ZSIsImRpdmlkZXIiLCJlbXBsb3llZXNDb3VudCIsIlNlYXJjaFJlc3VsdHMiLCJzZWFyY2hSZXN1bHRzIiwiaW5uZXJTZWFyY2hSZXN1bHRzIiwic2V0SW5uZXJTZWFyY2hSZXN1bHRzIiwiaXNTZWFyY2hSZXN1bHRzTG9hZGluZyIsInNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsInJlc3BvbnNlIiwiYXhpb3MiLCJBUElfVVJMIiwicGFyYW1zIiwicXVlcnkiLCJwYWdlIiwidXBkYXRlZFJlc3VsdHMiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb3VudCIsInRvdGFsQ291bnQiLCJpZCIsIkNPTVBBTklFU19QRVJfUEFHRSIsIlNrZWxldG9uTG9hZGVyIiwiZWxlbWVudHMiLCJlbGVtZW50c0NvdW50IiwiaSIsInB1c2giLCJwcm9jZXNzIiwiUmVhY3QiLCJIb21lUGFnZSIsImV4cGVydGlzZUZpbHRlcnMiLCJ0eXBlRmlsdGVycyIsImNvbXBhbnlUeXBlIiwic2l6ZUZpbHRlcnMiLCJjb21wYW55U2l6ZSIsInJldmVudWVGaWx0ZXJzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRlcm0iLCJxcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxlQUFlLEdBQUcsRUFBeEI7QUFFZSxTQUFTQyxLQUFULENBQWU7QUFDNUJDLE9BRDRCO0FBRTVCQyxRQUY0QjtBQUc1QkMsYUFBVyxHQUFHLENBSGM7QUFJNUJDLFFBQU0sR0FBRyxFQUptQjtBQUs1QkMsT0FBSyxHQUFHLEVBTG9CO0FBTTVCQztBQU40QixDQUFmLEVBT1o7QUFDRCxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLCtDQUFRLENBQUMsTUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxj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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDSEVDS0JPWF9IRUlHSFQgPSAyNztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoe1xuICB0aXRsZSxcbiAgc2VhcmNoLFxuICBkZWZhdWx0U2l6ZSA9IDMsXG4gIHZhbHVlcyA9IFtdLFxuICBzdGF0ZSA9IFtdLFxuICBzZXRTdGF0ZSxcbn0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKCdhdXRvJyk7XG4gIGNvbnN0IFtpc0xpc3RFeHBhbmRlZCwgc2V0SXNMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBmaWx0ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGlzdFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0RmlsdGVySGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50ID1cbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCA9IGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gZGVmYXVsdFNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc0xpc3RFeHBhbmRlZCAmJiBsaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGxpc3RSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xuICAgICAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGFiZWxzW2RlZmF1bHRTaXplIC0gMV0uc3R5bGUub3BhY2l0eSA9ICcwLjYxJztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzTGlzdEV4cGFuZGVkXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VMaXN0ID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRMaXN0ID0gKCkgPT4ge1xuICAgIHNldElzTGlzdEV4cGFuZGVkKHRydWUpO1xuICAgIHNldEZpbHRlckhlaWdodChcbiAgICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCArXG4gICAgICAgIENIRUNLQk9YX0hFSUdIVCAqIHZhbHVlcy5sZW5ndGggLVxuICAgICAgICBDSEVDS0JPWF9IRUlHSFQgKiBkZWZhdWx0U2l6ZVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQsXG4gICAgICAgIGJvcmRlckJvdHRvbTogZGVmYXVsdFNpemUgPj0gdmFsdWVzLmxlbmd0aCA/ICdub25lJyA6ICcnLFxuICAgICAgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuY2hlY2tCb3hlcyxcbiAgICAgICAgICAhaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5ub3RFeHBhbmRlZFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogaXNMaXN0RXhwYW5kZWRcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKHZhbHVlcy5sZW5ndGggKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTFcbiAgICAgICAgICAgIDogTWF0aC5jZWlsKGRlZmF1bHRTaXplICogQ0hFQ0tCT1hfSEVJR0hUKSAtIDExLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e2xpc3RSZWZ9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuaW5jbHVkZXModmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE9mVmFsdWUgPSBzdGF0ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mVmFsdWUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2U3RhdGUsIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZTdGF0ZV07XG4gICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4T2ZWYWx1ZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfSAvPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZGVmYXVsdFNpemUgPCB2YWx1ZXMubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgY29sbGFwc2VMaXN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICBjbGFzc2VzLnNob3dNb3JlSWNvbixcbiAgICAgICAgICAgICAgaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgc2hvdyBtb3JlIGljb25cbiAgICAgICAgICA8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9pbmRleCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDT1VOVFJJRVMgPSBbXG4gICdHZXJtYW55JyxcbiAgJ0ZyYW5jZScsXG4gICdVbml0ZWQgS2luZ2RvbScsXG4gICdVU0EnLFxuICAnU3BhaW4nLFxuICAnSXRhbHknLFxuICAnTm9yd2F5Jyxcbl07XG5cbmNvbnN0IENPTVBBTllfU0laRVMgPSBbXG4gICcwLTIwMCcsXG4gICcyMDEtNTAwJyxcbiAgJzUwMS0xLDAwMCcsXG4gICcxLDAwMS01LDAwMCcsXG4gICc1LDAwMS0xMCwwMDAnLFxuICAnMTAsMDAxKycsXG5dO1xuXG4vKiBjb25zdCBFWFBFUlRJU0UgPSBbXG4gICdIaWRlIEFsbCcsXG4gICdSZWFkeSB0byB3ZWFyJyxcbiAgJ0FjY2Vzc29yaWVzJyxcbiAgJ0Zvb3R3ZWFyJyxcbiAgJ1NvbWV0aGluZyBlbHNlJyxcbl07ICovXG5cbmNvbnN0IFJFVkVOVUUgPSBbXG4gICcwLTEgbWlsbGlvbicsXG4gICcxLTI1IG1pbGxpb24nLFxuICAnMjUtMTAwIG1pbGxpb24nLFxuICAnMTAwLTUwMCBtaWxsaW9uJyxcbiAgJzUwMS0xLDAwMCBtaWxsaW9uJyxcbiAgJzEtMTAgYmlsbGlvbicsXG4gICcxMC01MCBiaWxsaW9uJyxcbiAgJzUwKyBiaWxsaW9uJyxcbl07XG5cbmNvbnN0IENPTVBBTllfVFlQRVMgPSBbJ1B1YmxpYycsICdQcml2YXRlJywgJ1N1YnNpZGFyeSddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKHsgZXhwZXJ0aXNlIH0pIHtcbiAgY29uc3Qge1xuICAgIGNvbXBhbnlTaXplRmlsdGVyLFxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyLFxuICAgIGNvbXBhbnlMb2NhdGlvbkZpbHRlcixcbiAgICBzZXRDb21wYW55TG9jYXRpb25GaWx0ZXIsXG4gICAgY29tcGFueUV4cGVydGlzZUZpbHRlcixcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIHNldENvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICAgIHNldENvbXBhbnlUeXBlRmlsdGVyLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsdGVyQnV0dG9ufT5cbiAgICAgICAgICA8aT5saW5lczwvaT5GaWx0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3N0UmVsZXZhbnRCdXR0b259PlxuICAgICAgICAgIE1vc3QgcmVsZXZhbnQgPGk+YXJyb3cgZG93bjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJMb2NhdGlvblwiXG4gICAgICAgIHZhbHVlcz17Q09VTlRSSUVTfVxuICAgICAgICBkZWZhdWx0U2l6ZT17M31cbiAgICAgICAgc2VhcmNoXG4gICAgICAgIHN0YXRlPXtjb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPEZpbHRlclxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfU0laRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkNvbXBhbnkgc2l6ZVwiXG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55U2l6ZUZpbHRlcn1cbiAgICAgICAgc3RhdGU9e2NvbXBhbnlTaXplRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdmFsdWVzPXtleHBlcnRpc2Uuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSl9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkV4cGVydGlzZVwiXG4gICAgICAgIHN0YXRlPXtjb21wYW55RXhwZXJ0aXNlRmlsdGVyfVxuICAgICAgICBzZXRTdGF0ZT17c2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8RmlsdGVyXG4gICAgICAgIHRpdGxlPVwiUmV2ZW51ZVwiXG4gICAgICAgIHZhbHVlcz17UkVWRU5VRX1cbiAgICAgICAgZGVmYXVsdFNpemU9ezN9XG4gICAgICAgIHN0YXRlPXtjb21wYW55UmV2ZW51ZUZpbHRlcn1cbiAgICAgICAgc2V0U3RhdGU9e3NldENvbXBhbnlSZXZlbnVlRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJDb21wYW55IFR5cGVcIlxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfVFlQRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXszfVxuICAgICAgICBzdGF0ZT17Y29tcGFueVR5cGVGaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55VHlwZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4JztcblxuZnVuY3Rpb24gY29udmVydE51bWJlclRvU3RyaW5nKG51bWJlcikge1xuICBpZiAoIW51bWJlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHBhcnNlZE51bWJlciA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuICByZXR1cm4gYOKCrCR7cGFyc2VkTnVtYmVyLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH0pfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdCh7IGNvbXBhbnkgfSkge1xuICBjb25zdCBbaXNDb21wYW55Q2FyZEV4cGFuZGVkLCBzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tcGFueUNhcmRIZWlnaHQsIHNldENvbXBhbnlDYXJkSGVpZ2h0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQsIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWRdID1cbiAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY29tcGFueUNhcmRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgY29uc3QgZXhwYW5kQ29tcGFueUNhcmQgPSAoKSA9PiB7XG4gICAgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCh0cnVlKTtcbiAgICBzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VDb21wYW55Q2FyZCA9ICgpID0+IHtcbiAgICBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkKGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZChmYWxzZSk7XG4gICAgfSwgMjAwKTtcbiAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQuY3VycmVudCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUNhcmRSZWYuY3VycmVudCkge1xuICAgICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0LmN1cnJlbnQgPSBjb21wYW55Q2FyZFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0NvbXBhbnlDYXJkRXhwYW5kZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgNDIpO1xuICAgIH1cbiAgfSwgW2lzQ29tcGFueUNhcmRFeHBhbmRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkKSB7XG4gICAgICBleHBhbmRDb21wYW55Q2FyZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZUNvbXBhbnlDYXJkKCk7XG4gICAgfVxuICB9LCBbYXJlQ29tcGFueUNhcmRzRXhwYW5kZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHR9XG4gICAgICByZWY9e2NvbXBhbnlDYXJkUmVmfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBjb21wYW55Q2FyZEhlaWdodCB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y29tcGFueS5sb2dvUGF0aH0pYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgIDxoMT57Y29tcGFueS5uYW1lfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmR1c3RyeX0+e2NvbXBhbnkuaW5kdXN0cnl9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICB7Y29tcGFueS5leHBlcnRpc2UgJiZcbiAgICAgICAgICAgIGNvbXBhbnkuZXhwZXJ0aXNlLnNwbGl0KCcsJykubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30ga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzQ29tcGFueUNhcmRFeHBhbmRlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5XZWJzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovLyR7Y29tcGFueS53ZWJzaXRlVXJsfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFueS53ZWJzaXRlVXJsfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5IZWFkcXVhcnRlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LkhRTG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlBhcmVudCBPcmdhbml6YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LnBhcmVudENvbXBhbnl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkZvdW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LmZvdW5kZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkZvdW5kZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAge2NvbXBhbnkueWVhck9mRm91bmRhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UmV2ZW51ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICB7Y29udmVydE51bWJlclRvU3RyaW5nKGNvbXBhbnkucmV2ZW51ZSl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGl0aW9uYWxEZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMua2V5UGVvcGxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PktleSBwZW9wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgTWljaGFlbCBCdXJrZSAoQ2hhaXJtYW4gJiBDRU8pLCBOaWNvbGFzIEdoZXNxdWnDqHJlLCBWaXJnaWxcbiAgICAgICAgICAgICAgICAgIEFibG9oIChDcmVhdGl2ZSBkaXJlY3RvcnMpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pk51bWJlciBvZiBlbXBsb3llZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAge2NvbXBhbnkuZW1wbG95ZWVzQ291bnR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkFyZWEgc2VydmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5Xb3JsZHdpZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBjbGFzc2VzLmV4cGFuZENhcmQsXG4gICAgICAgICAgaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQ29tcGFueUNhcmRFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29sbGFwc2VDb21wYW55Q2FyZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRDb21wYW55Q2FyZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgRXhwYW5kIGNhcmRcbiAgICAgIDwvaT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNrZWxldG9uTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlcic7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vU2VhcmNoUmVzdWx0JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7IHNlYXJjaFJlc3VsdHMgfSkge1xuICBjb25zdCBbaW5uZXJTZWFyY2hSZXN1bHRzLCBzZXRJbm5lclNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoe1xuICAgIC4uLnNlYXJjaFJlc3VsdHMsXG4gIH0pO1xuICBjb25zdCBbaXNTZWFyY2hSZXN1bHRzTG9hZGluZywgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cyk7XG4gIH0sIFtzZWFyY2hSZXN1bHRzXSk7XG5cbiAgY29uc3Qge1xuICAgIHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLFxuICAgIGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLFxuICAgIGN1cnJlbnRQYWdlLFxuICAgIHNldEN1cnJlbnRQYWdlLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgY29uc3QgZ2V0TW9yZVNlYXJjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaGAsIHtcbiAgICAgICAgcGFyYW1zOiB7IC4uLnJvdXRlci5xdWVyeSwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICAgICAgY29uc3QgdXBkYXRlZFJlc3VsdHMgPSB7IC4uLmlubmVyU2VhcmNoUmVzdWx0cyB9O1xuXG4gICAgICB1cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyA9IFtcbiAgICAgICAgLi4udXBkYXRlZFJlc3VsdHMuZGF0YS5jb21wYW5pZXMsXG4gICAgICAgIC4uLnJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMsXG4gICAgICBdO1xuICAgICAgc2V0SW5uZXJTZWFyY2hSZXN1bHRzKHVwZGF0ZWRSZXN1bHRzKTtcbiAgICAgIHNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFpbm5lclNlYXJjaFJlc3VsdHMgfHwgIWlubmVyU2VhcmNoUmVzdWx0cy5kYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW5uZXJTZWFyY2hSZXN1bHRzLmNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub1Jlc3VsdHN9PlxuICAgICAgICAgIE5vIHJlc3VsdCBmb3VuZC4gVHJ5IGEgY29tcGFueSBvciBicmFuZCBuYW1lIG9yIHVzZSBhIGRpZmZlcmVudFxuICAgICAgICAgIGtleXdvcmQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57aW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnR9IFRvdGFsIHJlc3VsdHM8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wZW5BbGxDYXJkc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGk+ZG90PC9pPlxuICAgICAgICAgIHthcmVDb21wYW55Q2FyZHNFeHBhbmRlZCA/ICdDbG9zZSBhbGwgY2FyZHMnIDogJ09wZW4gYWxsIGNhcmRzJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHRzQ29udGFpbmVyfT5cbiAgICAgICAge2lubmVyU2VhcmNoUmVzdWx0cy5kYXRhLmNvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdCBjb21wYW55PXtjb21wYW55fSBrZXk9e2NvbXBhbnkuaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2lzU2VhcmNoUmVzdWx0c0xvYWRpbmcgJiYgKFxuICAgICAgICA8U2tlbGV0b25Mb2FkZXIgdG90YWxDb3VudD17aW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnR9IC8+XG4gICAgICApfVxuICAgICAge0NPTVBBTklFU19QRVJfUEFHRSAqIChjdXJyZW50UGFnZSArIDEpIDxcbiAgICAgICAgK2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50ICYmXG4gICAgICAgICFpc1NlYXJjaFJlc3VsdHNMb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5TW9yZX0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtnZXRNb3JlU2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQ09NUEFOSUVTX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNrZWxldG9uTG9hZGVyKHsgdG90YWxDb3VudCB9KSB7XG4gIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICBsZXQgZWxlbWVudHNDb3VudCA9IHRvdGFsQ291bnQgLSAoY3VycmVudFBhZ2UgKyAxKSAqIENPTVBBTklFU19QRVJfUEFHRTtcbiAgaWYgKGVsZW1lbnRzQ291bnQgPiBDT01QQU5JRVNfUEVSX1BBR0UpIHtcbiAgICBlbGVtZW50c0NvdW50ID0gQ09NUEFOSUVTX1BFUl9QQUdFO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzQ291bnQ7IGkrKykge1xuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hSZXN1bHR9IGtleT17aX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMubG9nbywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnNoaW5lLCBjbGFzc2VzLnRpdGxlKX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnRhZywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy50YWcsIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGFnLCBjbGFzc2VzLnNoaW5lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ta2VsZXRvbkxvYWRlcn0+e2VsZW1lbnRzfTwvZGl2Pjtcbn1cbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbmV4cG9ydCBjb25zdCBDT01QQU5JRVNfUEVSX1BBR0UgPSA4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFJlc3VsdHNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuXHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ0AvY29tcG9uZW50cy9GaWx0ZXJzJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMnO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvaW5kZXgnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBzZWFyY2hSZXN1bHRzLCBleHBlcnRpc2UgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxyXG4gICAgc2V0Q29tcGFueVNpemVGaWx0ZXIsXHJcbiAgICBzZXRDb21wYW55UmV2ZW51ZUZpbHRlcixcclxuICAgIHNldENvbXBhbnlUeXBlRmlsdGVyLFxyXG4gIH0gPSB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGV4cGVydGlzZUZpbHRlcnMgPSByb3V0ZXIucXVlcnkuZXhwZXJ0aXNlXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LmV4cGVydGlzZS5zcGxpdCgnLCcpXHJcbiAgICAgIDogW107XHJcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyKGV4cGVydGlzZUZpbHRlcnMpO1xyXG5cclxuICAgIGNvbnN0IHR5cGVGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmNvbXBhbnlUeXBlXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LmNvbXBhbnlUeXBlLnNwbGl0KCcsJylcclxuICAgICAgOiBbXTtcclxuICAgIHNldENvbXBhbnlUeXBlRmlsdGVyKHR5cGVGaWx0ZXJzKTtcclxuXHJcbiAgICBjb25zdCBzaXplRmlsdGVycyA9IHJvdXRlci5xdWVyeS5jb21wYW55U2l6ZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5jb21wYW55U2l6ZS5zcGxpdCgnLHwnKVxyXG4gICAgICA6IFtdO1xyXG4gICAgc2V0Q29tcGFueVNpemVGaWx0ZXIoc2l6ZUZpbHRlcnMpO1xyXG5cclxuICAgIGNvbnN0IHJldmVudWVGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LnJldmVudWVcclxuICAgICAgPyByb3V0ZXIucXVlcnkucmV2ZW51ZS5zcGxpdCgnLHwnKVxyXG4gICAgICA6IFtdO1xyXG4gICAgc2V0Q29tcGFueVJldmVudWVGaWx0ZXIocmV2ZW51ZUZpbHRlcnMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkhvbWVQYWdlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpbWlsbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgIDxGaWx0ZXJzIGV4cGVydGlzZT17ZXhwZXJ0aXNlfSAvPlxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHNlYXJjaFJlc3VsdHM9e3NlYXJjaFJlc3VsdHN9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgdGVybSB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgbGV0IHNlYXJjaFJlc3VsdHM7XHJcblxyXG4gIGlmICghdGVybSkge1xyXG4gICAgc2VhcmNoUmVzdWx0cyA9IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoPyR7cXMuc3RyaW5naWZ5KGNvbnRleHQucXVlcnkpfWBcclxuICAgICk7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHBlcnRpc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL2V4cGVydGlzZWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VhcmNoUmVzdWx0cyxcclxuICAgICAgZXhwZXJ0aXNlOiBleHBlcnRpc2UuZGF0YS5kYXRhLmV4cGVydGlzZSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGaWx0ZXJcIjogXCJzdHlsZXNfRmlsdGVyX18yeTl2MlwiLFxuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzMzT0tCXCIsXG5cdFwiY2xvc2VGaWx0ZXJJY29uXCI6IFwic3R5bGVzX2Nsb3NlRmlsdGVySWNvbl9fMW5pQ0pcIixcblx0XCJyb3RhdGVcIjogXCJzdHlsZXNfcm90YXRlX18xSEVQb1wiLFxuXHRcInNlYXJjaFwiOiBcInN0eWxlc19zZWFyY2hfX01JYlNHXCIsXG5cdFwiY2hlY2tCb3hlc1wiOiBcInN0eWxlc19jaGVja0JveGVzX19CT0t0OVwiLFxuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX2JVS085XCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwic3R5bGVzX2NoZWNrbWFya19fMW5DRGVcIixcblx0XCJzaG93TW9yZVwiOiBcInN0eWxlc19zaG93TW9yZV9fMXYteVdcIixcblx0XCJzaG93TW9yZUljb25cIjogXCJzdHlsZXNfc2hvd01vcmVJY29uX18xc3YybVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmlsdGVyc1wiOiBcInN0eWxlc19GaWx0ZXJzX18zbEdjUlwiLFxuXHRcImJ1dHRvbnNcIjogXCJzdHlsZXNfYnV0dG9uc19fMkpCcVFcIixcblx0XCJmaWx0ZXJCdXR0b25cIjogXCJzdHlsZXNfZmlsdGVyQnV0dG9uX18ySW1lalwiLFxuXHRcIm1vc3RSZWxldmFudEJ1dHRvblwiOiBcInN0eWxlc19tb3N0UmVsZXZhbnRCdXR0b25fXzExSDhCXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTZWFyY2hSZXN1bHRcIjogXCJzdHlsZXNfU2VhcmNoUmVzdWx0X18xbmZCNFwiLFxuXHRcImxvZ29cIjogXCJzdHlsZXNfbG9nb19fMldRT3ZcIixcblx0XCJjb21wYW55SW5mb1wiOiBcInN0eWxlc19jb21wYW55SW5mb19fakttSEFcIixcblx0XCJpbmR1c3RyeVwiOiBcInN0eWxlc19pbmR1c3RyeV9fWEQ1REdcIixcblx0XCJ0YWdzXCI6IFwic3R5bGVzX3RhZ3NfXzNoRERyXCIsXG5cdFwidGFnXCI6IFwic3R5bGVzX3RhZ19fZ1dOMllcIixcblx0XCJleHBhbmRDYXJkXCI6IFwic3R5bGVzX2V4cGFuZENhcmRfXzJRSTJSXCIsXG5cdFwicm90YXRlXCI6IFwic3R5bGVzX3JvdGF0ZV9fMmV2ZzVcIixcblx0XCJkZXRhaWxzXCI6IFwic3R5bGVzX2RldGFpbHNfX3RzMmVrXCIsXG5cdFwibWFpbkRldGFpbHNcIjogXCJzdHlsZXNfbWFpbkRldGFpbHNfX1FuUnJkXCIsXG5cdFwiaW5mb0Jsb2NrXCI6IFwic3R5bGVzX2luZm9CbG9ja19fMUllbW9cIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fMWVwbjNcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfXzNVWFlUXCIsXG5cdFwiZGl2aWRlclwiOiBcInN0eWxlc19kaXZpZGVyX18xUHhHYVwiLFxuXHRcImFkZGl0aW9uYWxEZXRhaWxzXCI6IFwic3R5bGVzX2FkZGl0aW9uYWxEZXRhaWxzX18yZ1QwUFwiLFxuXHRcImtleVBlb3BsZVwiOiBcInN0eWxlc19rZXlQZW9wbGVfXzNKZTFXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTZWFyY2hSZXN1bHRzXCI6IFwic3R5bGVzX1NlYXJjaFJlc3VsdHNfXzFoQ0ZFXCIsXG5cdFwibm9SZXN1bHRzXCI6IFwic3R5bGVzX25vUmVzdWx0c19fMjlVdkdcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX19vYURFTVwiLFxuXHRcIm9wZW5BbGxDYXJkc1wiOiBcInN0eWxlc19vcGVuQWxsQ2FyZHNfXzNpMnVjXCIsXG5cdFwiZGlzcGxheU1vcmVcIjogXCJzdHlsZXNfZGlzcGxheU1vcmVfX21wVXdTXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTa2VsZXRvbkxvYWRlclwiOiBcInN0eWxlc19Ta2VsZXRvbkxvYWRlcl9fM1I4c0xcIixcblx0XCJzZWFyY2hSZXN1bHRcIjogXCJzdHlsZXNfc2VhcmNoUmVzdWx0X18yRUd0SlwiLFxuXHRcImxvZ29cIjogXCJzdHlsZXNfbG9nb19fM19IaGpcIixcblx0XCJjb21wYW55SW5mb1wiOiBcInN0eWxlc19jb21wYW55SW5mb19fSXJJOWRcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fMTg5TTBcIixcblx0XCJ0YWdzXCI6IFwic3R5bGVzX3RhZ3NfXzJWTEZ0XCIsXG5cdFwidGFnXCI6IFwic3R5bGVzX3RhZ19fMTNQd0JcIixcblx0XCJzaGluZVwiOiBcInN0eWxlc19zaGluZV9fMzNEWHJcIixcblx0XCJwbGFjZWhvbGRlclNoaW1tZXJcIjogXCJzdHlsZXNfcGxhY2Vob2xkZXJTaGltbWVyX18yeHdpaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSG9tZVBhZ2VcIjogXCJzdHlsZXNfSG9tZVBhZ2VfXzNvR0lqXCIsXG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX19IVEtVLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9