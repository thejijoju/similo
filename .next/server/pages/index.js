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
const COMPANY_TYPES = ['Public', 'Private', 'Subsidiary'];
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
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: company.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().industry),
        children: company.industry
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tags),
        children: company.expertise && company.expertise.split(',').map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tag),
          children: tag
        }, tag, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
              lineNumber: 81,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: `https://${company.websiteUrl}`,
                children: company.websiteUrl
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Headquarters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.HQLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Parent Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.parentCompany
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founder"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.founder
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.yearOfFoundation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.revenue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
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
              lineNumber: 114,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Michael Burke (Chairman & CEO), Nicolas Ghesqui\xE8re, Virgil Abloh (Creative directors)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Number of employees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.revenue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Area served"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Worldwide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 132,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
    setCompanySizeFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_8__.SearchResultsContext);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const expertiseFilters = router.query.expertise ? router.query.expertise.split(',') : [];
    setCompanyExpertiseFilter(expertiseFilters);
    const sizeFilters = router.query.companySize ? router.query.companySize.split(',|') : [];
    setCompanySizeFilter(sizeFilters);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_6__.default, {
        expertise: expertise
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_7__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHQvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9GaWx0ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL1NrZWxldG9uTG9hZGVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9wYWdlcy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZpbHRlckhlaWdodCIsInNldEZpbHRlckhlaWdodCIsInVzZVN0YXRlIiwiaXNMaXN0RXhwYW5kZWQiLCJzZXRJc0xpc3RFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiZmlsdGVyUmVmIiwidXNlUmVmIiwibGlzdFJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImxlbmd0aCIsImxhYmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsIm1hcCIsInZhbHVlIiwiaW5jbHVkZXMiLCJpbmRleE9mVmFsdWUiLCJpbmRleE9mIiwicHJldlN0YXRlIiwibmV3U3RhdGUiLCJzcGxpY2UiLCJjaGVja21hcmsiLCJDT1VOVFJJRVMiLCJDT01QQU5ZX1NJWkVTIiwiUkVWRU5VRSIsIkNPTVBBTllfVFlQRVMiLCJGaWx0ZXJzIiwiZXhwZXJ0aXNlIiwiY29tcGFueVNpemVGaWx0ZXIiLCJzZXRDb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlMb2NhdGlvbkZpbHRlciIsInNldENvbXBhbnlMb2NhdGlvbkZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyIiwiY29tcGFueVJldmVudWVGaWx0ZXIiLCJzZXRDb21wYW55UmV2ZW51ZUZpbHRlciIsImNvbXBhbnlUeXBlRmlsdGVyIiwic2V0Q29tcGFueVR5cGVGaWx0ZXIiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzb3J0IiwiYSIsImIiLCJTZWFyY2hSZXN1bHQiLCJjb21wYW55IiwiaXNDb21wYW55Q2FyZEV4cGFuZGVkIiwic2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkIiwiY29tcGFueUNhcmRIZWlnaHQiLCJzZXRDb21wYW55Q2FyZEhlaWdodCIsImlzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQiLCJzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkIiwiY29tcGFueUNhcmRSZWYiLCJjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQiLCJhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImV4cGFuZENvbXBhbnlDYXJkIiwiY29sbGFwc2VDb21wYW55Q2FyZCIsIm9mZnNldEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2dvUGF0aCIsIm5hbWUiLCJpbmR1c3RyeSIsInNwbGl0IiwidGFnIiwid2Vic2l0ZVVybCIsIkhRTG9jYXRpb24iLCJwYXJlbnRDb21wYW55IiwiZm91bmRlciIsInllYXJPZkZvdW5kYXRpb24iLCJyZXZlbnVlIiwiZGl2aWRlciIsIlNlYXJjaFJlc3VsdHMiLCJzZWFyY2hSZXN1bHRzIiwiaW5uZXJTZWFyY2hSZXN1bHRzIiwic2V0SW5uZXJTZWFyY2hSZXN1bHRzIiwiaXNTZWFyY2hSZXN1bHRzTG9hZGluZyIsInNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsInJlc3BvbnNlIiwiYXhpb3MiLCJBUElfVVJMIiwicGFyYW1zIiwicXVlcnkiLCJwYWdlIiwidXBkYXRlZFJlc3VsdHMiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb3VudCIsInRvdGFsQ291bnQiLCJpZCIsIkNPTVBBTklFU19QRVJfUEFHRSIsIlNrZWxldG9uTG9hZGVyIiwiZWxlbWVudHMiLCJlbGVtZW50c0NvdW50IiwiaSIsInB1c2giLCJwcm9jZXNzIiwiUmVhY3QiLCJIb21lUGFnZSIsImV4cGVydGlzZUZpbHRlcnMiLCJzaXplRmlsdGVycyIsImNvbXBhbnlTaXplIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRlcm0iLCJxcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxlQUFlLEdBQUcsRUFBeEI7QUFFZSxTQUFTQyxLQUFULENBQWU7QUFDNUJDLE9BRDRCO0FBRTVCQyxRQUY0QjtBQUc1QkMsYUFBVyxHQUFHLENBSGM7QUFJNUJDLFFBQU0sR0FBRyxFQUptQjtBQUs1QkMsT0FBSyxHQUFHLEVBTG9CO0FBTTVCQztBQU40QixDQUFmLEVBT1o7QUFDRCxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLCtDQUFRLENBQUMsTUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJKLCtDQUFRLENBQUMsSUFBRCxDQUE1QztBQUVBLFFBQU1LLFNBQVMsR0FBR0MsNkNBQU0sRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdELDZDQUFNLEVBQXRCO0FBQ0EsUUFBTUUsbUJBQW1CLEdBQUdGLDZDQUFNLEVBQWxDO0FBRUEsUUFBTUcsc0JBQXNCLEdBQUdILDZDQUFNLEVBQXJDO0FBRUFJLGtEQUFTLENBQUMsTUFBTTtBQUNkRCwwQkFBc0IsQ0FBQ0UsT0FBdkIsR0FDRUosT0FBTyxDQUFDSSxPQUFSLENBQWdCQyxZQUFoQixHQUErQkwsT0FBTyxDQUFDSSxPQUFSLENBQWdCRSxZQURqRDtBQUVBTCx1QkFBbUIsQ0FBQ0csT0FBcEIsR0FBOEJOLFNBQVMsQ0FBQ00sT0FBVixDQUFrQkUsWUFBaEQ7QUFDQWQsbUJBQWUsQ0FBQ00sU0FBUyxDQUFDTSxPQUFWLENBQWtCRSxZQUFuQixDQUFmO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BSCxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJZixNQUFNLENBQUNtQixNQUFQLElBQWlCcEIsV0FBckIsRUFBa0M7QUFDaEM7QUFDRDs7QUFDRCxRQUFJLENBQUNPLGNBQUQsSUFBbUJNLE9BQU8sQ0FBQ0ksT0FBL0IsRUFBd0M7QUFDdEMsWUFBTUksTUFBTSxHQUFHUixPQUFPLENBQUNJLE9BQVIsQ0FBZ0JLLGdCQUFoQixDQUFpQyxPQUFqQyxDQUFmOztBQUNBLFVBQUlELE1BQU0sQ0FBQ0QsTUFBWCxFQUFtQjtBQUNqQkcsa0JBQVUsQ0FBQyxNQUFNO0FBQ2ZGLGdCQUFNLENBQUNyQixXQUFXLEdBQUcsQ0FBZixDQUFOLENBQXdCd0IsS0FBeEIsQ0FBOEJDLE9BQTlCLEdBQXdDLE1BQXhDO0FBQ0QsU0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0YsS0FQRCxNQU9PLElBQUlsQixjQUFjLElBQUlNLE9BQU8sQ0FBQ0ksT0FBOUIsRUFBdUM7QUFDNUMsWUFBTUksTUFBTSxHQUFHUixPQUFPLENBQUNJLE9BQVIsQ0FBZ0JLLGdCQUFoQixDQUFpQyxPQUFqQyxDQUFmOztBQUNBLFVBQUlELE1BQU0sQ0FBQ0QsTUFBWCxFQUFtQjtBQUNqQkMsY0FBTSxDQUFDckIsV0FBVyxHQUFHLENBQWYsQ0FBTixDQUF3QndCLEtBQXhCLENBQThCQyxPQUE5QixHQUF3QyxHQUF4QztBQUNEO0FBQ0Y7QUFDRixHQWpCUSxFQWlCTixDQUFDbEIsY0FBRCxDQWpCTSxDQUFUOztBQW1CQSxRQUFNbUIsY0FBYyxHQUFHLE1BQU07QUFDM0JyQixtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBSyxpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBRixxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0QsR0FKRDs7QUFNQSxRQUFNbUIsWUFBWSxHQUFHLE1BQU07QUFDekJ0QixtQkFBZSxDQUFDUyxtQkFBbUIsQ0FBQ0csT0FBckIsQ0FBZjtBQUNBUCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsUUFBTWtCLFlBQVksR0FBRyxNQUFNO0FBQ3pCdkIsbUJBQWUsQ0FBQ1MsbUJBQW1CLENBQUNHLE9BQXJCLENBQWY7QUFDQVQscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNELEdBSEQ7O0FBS0EsUUFBTXFCLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCckIscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBSCxtQkFBZSxDQUNiUyxtQkFBbUIsQ0FBQ0csT0FBcEIsR0FDRXJCLGVBQWUsR0FBR0ssTUFBTSxDQUFDbUIsTUFEM0IsR0FFRXhCLGVBQWUsR0FBR0ksV0FIUCxDQUFmO0FBS0QsR0FQRDs7QUFTQSxzQkFDRTtBQUNFLGFBQVMsRUFBRThCLG1FQURiO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRTNCLFlBREg7QUFFTDRCLGtCQUFZLEVBQUVoQyxXQUFXLElBQUlDLE1BQU0sQ0FBQ21CLE1BQXRCLEdBQStCLE1BQS9CLEdBQXdDO0FBRmpELEtBRlQ7QUFNRSxPQUFHLEVBQUVULFNBTlA7QUFBQSw0QkFRRTtBQUFLLGVBQVMsRUFBRW1CLG1FQUFoQjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtoQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsaUJBQVMsRUFBRW1DLGlEQUFVLENBQ25CSCw0RUFEbUIsRUFFbkIsQ0FBQ3JCLFVBQUQsSUFBZXFCLG1FQUZJLENBRHZCO0FBS0UsZUFBTyxFQUFFLE1BQU07QUFDYixjQUFJckIsVUFBSixFQUFnQjtBQUNkaUIsMEJBQWM7QUFDZixXQUZELE1BRU87QUFDTEMsd0JBQVk7QUFDYjtBQUNGLFNBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQTBCRzVCLE1BQU0saUJBQ0w7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGVBQVMsRUFBRStCLG1FQUZiO0FBR0UsaUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkosZUFpQ0U7QUFDRSxlQUFTLEVBQUVHLGlEQUFVLENBQ25CSCx1RUFEbUIsRUFFbkIsQ0FBQ3ZCLGNBQUQsSUFBbUJ1Qix3RUFGQSxDQUR2QjtBQUtFLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUV4QixjQUFjLEdBQ2xCMkIsSUFBSSxDQUFDQyxJQUFMLENBQVVsQyxNQUFNLENBQUNtQixNQUFQLEdBQWdCeEIsZUFBMUIsSUFBNkMsRUFEM0IsR0FFbEJzQyxJQUFJLENBQUNDLElBQUwsQ0FBVW5DLFdBQVcsR0FBR0osZUFBeEIsSUFBMkM7QUFIMUMsT0FMVDtBQVVFLFNBQUcsRUFBRWlCLE9BVlA7QUFBQSxnQkFZR1osTUFBTSxDQUFDbUMsR0FBUCxDQUFZQyxLQUFELElBQVc7QUFDckIsNEJBQ0U7QUFBTyxtQkFBUyxFQUFFUCxzRUFBbEI7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFPLEVBQUU1QixLQUFLLENBQUNvQyxRQUFOLENBQWVELEtBQWYsQ0FGWDtBQUdFLG9CQUFRLEVBQUUsTUFBTTtBQUNkLG9CQUFNRSxZQUFZLEdBQUdyQyxLQUFLLENBQUNzQyxPQUFOLENBQWNILEtBQWQsQ0FBckI7O0FBQ0Esa0JBQUlFLFlBQVksS0FBSyxDQUFDLENBQXRCLEVBQXlCO0FBQ3ZCcEMsd0JBQVEsQ0FBRXNDLFNBQUQsSUFBZTtBQUN0Qix3QkFBTUMsUUFBUSxHQUFHLENBQUMsR0FBR0QsU0FBSixFQUFlSixLQUFmLENBQWpCO0FBQ0EseUJBQU9LLFFBQVA7QUFDRCxpQkFITyxDQUFSO0FBSUQsZUFMRCxNQUtPO0FBQ0x2Qyx3QkFBUSxDQUFFc0MsU0FBRCxJQUFlO0FBQ3RCLHdCQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFHRCxTQUFKLENBQWpCO0FBQ0FDLDBCQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLFlBQWhCLEVBQThCLENBQTlCO0FBQ0EseUJBQU9HLFFBQVA7QUFDRCxpQkFKTyxDQUFSO0FBS0Q7QUFDRjtBQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBb0JFO0FBQU0scUJBQVMsRUFBRVosc0VBQWlCYztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRixFQXFCR1AsS0FyQkg7QUFBQSxXQUEwQ0EsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQXlCRCxPQTFCQTtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0YsRUF5RUdyQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ21CLE1BQXJCLGlCQUNDO0FBQ0UsZUFBUyxFQUFFVSxxRUFEYjtBQUVFLGFBQU8sRUFBRSxNQUFNO0FBQ2IsWUFBSXZCLGNBQUosRUFBb0I7QUFDbEJxQixzQkFBWTtBQUNiLFNBRkQsTUFFTztBQUNMQyxvQkFBVTtBQUNYO0FBQ0YsT0FSSDtBQUFBLDhCQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRTtBQUNFLGlCQUFTLEVBQUVJLGlEQUFVLENBQ25CSCx5RUFEbUIsRUFFbkJ2QixjQUFjLElBQUl1QixtRUFGQyxDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExEO0FBRUE7QUFDQTtBQUVBO0FBRUEsTUFBTWUsU0FBUyxHQUFHLENBQ2hCLFNBRGdCLEVBRWhCLFFBRmdCLEVBR2hCLGdCQUhnQixFQUloQixLQUpnQixFQUtoQixPQUxnQixFQU1oQixPQU5nQixFQU9oQixRQVBnQixDQUFsQjtBQVVBLE1BQU1DLGFBQWEsR0FBRyxDQUNwQixPQURvQixFQUVwQixTQUZvQixFQUdwQixXQUhvQixFQUlwQixhQUpvQixFQUtwQixjQUxvQixFQU1wQixTQU5vQixDQUF0QjtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUNkLGFBRGMsRUFFZCxjQUZjLEVBR2QsZ0JBSGMsRUFJZCxpQkFKYyxFQUtkLG1CQUxjLEVBTWQsY0FOYyxFQU9kLGVBUGMsRUFRZCxhQVJjLENBQWhCO0FBV0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsWUFBdEIsQ0FBdEI7QUFFZSxTQUFTQyxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBZ0M7QUFDN0MsUUFBTTtBQUNKQyxxQkFESTtBQUVKQyx3QkFGSTtBQUdKQyx5QkFISTtBQUlKQyw0QkFKSTtBQUtKQywwQkFMSTtBQU1KQyw2QkFOSTtBQU9KQyx3QkFQSTtBQVFKQywyQkFSSTtBQVNKQyxxQkFUSTtBQVVKQztBQVZJLE1BV0ZDLGlEQUFVLENBQUNDLGdFQUFELENBWGQ7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWhDLG9FQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxvRUFBaEI7QUFBQSw4QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVBLHlFQUFqQztBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFQSwrRUFBakM7QUFBQSxrREFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0UsOERBQUMsNENBQUQ7QUFDRSxXQUFLLEVBQUMsVUFEUjtBQUVFLFlBQU0sRUFBRWUsU0FGVjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLFlBQU0sTUFKUjtBQUtFLFdBQUssRUFBRVEscUJBTFQ7QUFNRSxjQUFRLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBaUJFLDhEQUFDLDRDQUFEO0FBQ0UsWUFBTSxFQUFFUixhQURWO0FBRUUsaUJBQVcsRUFBRSxDQUZmO0FBR0UsV0FBSyxFQUFDLGNBSFI7QUFJRSxjQUFRLEVBQUVNLG9CQUpaO0FBS0UsV0FBSyxFQUFFRDtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF3QkUsOERBQUMsNENBQUQ7QUFDRSxZQUFNLEVBQUVELFNBQVMsQ0FBQ2EsSUFBVixDQUFlLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQy9CLFlBQUlELENBQUMsR0FBR0MsQ0FBUixFQUFXO0FBQ1QsaUJBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsWUFBSUQsQ0FBQyxHQUFHQyxDQUFSLEVBQVc7QUFDVCxpQkFBTyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxDQUFQO0FBQ0QsT0FSTyxDQURWO0FBVUUsaUJBQVcsRUFBRSxDQVZmO0FBV0UsV0FBSyxFQUFDLFdBWFI7QUFZRSxXQUFLLEVBQUVWLHNCQVpUO0FBYUUsY0FBUSxFQUFFQztBQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUF1Q0UsOERBQUMsNENBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLFlBQU0sRUFBRVQsT0FGVjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLFdBQUssRUFBRVUsb0JBSlQ7QUFLRSxjQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRixlQThDRSw4REFBQyw0Q0FBRDtBQUNFLFdBQUssRUFBQyxjQURSO0FBRUUsWUFBTSxFQUFFVixhQUZWO0FBR0UsaUJBQVcsRUFBRSxDQUhmO0FBSUUsV0FBSyxFQUFFVyxpQkFKVDtBQUtFLGNBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0RELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhEO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU00sWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW1DO0FBQ2hELFFBQU07QUFBQSxPQUFDQyxxQkFBRDtBQUFBLE9BQXdCQztBQUF4QixNQUFvRC9ELCtDQUFRLENBQUMsS0FBRCxDQUFsRTtBQUNBLFFBQU07QUFBQSxPQUFDZ0UsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNENqRSwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2tFLHlCQUFEO0FBQUEsT0FBNEJDO0FBQTVCLE1BQ0puRSwrQ0FBUSxDQUFDLEtBQUQsQ0FEVjtBQUdBLFFBQU1vRSxjQUFjLEdBQUc5RCw2Q0FBTSxFQUE3QjtBQUNBLFFBQU0rRCx3QkFBd0IsR0FBRy9ELDZDQUFNLEVBQXZDO0FBRUEsUUFBTTtBQUFFZ0U7QUFBRixNQUE4QmYsaURBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUM7O0FBRUEsUUFBTWUsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QkosZ0NBQTRCLENBQUMsSUFBRCxDQUE1QjtBQUNBSiw0QkFBd0IsQ0FBQyxJQUFELENBQXhCO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUyxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDTCxnQ0FBNEIsQ0FBQyxLQUFELENBQTVCO0FBQ0FsRCxjQUFVLENBQUMsTUFBTTtBQUNmOEMsOEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNELEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQUUsd0JBQW9CLENBQUNJLHdCQUF3QixDQUFDMUQsT0FBMUIsQ0FBcEI7QUFDRCxHQU5EOztBQVFBRCxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJMEQsY0FBYyxDQUFDekQsT0FBbkIsRUFBNEI7QUFDMUJzRCwwQkFBb0IsQ0FBQ0csY0FBYyxDQUFDekQsT0FBZixDQUF1QjhELFlBQXhCLENBQXBCO0FBQ0FKLDhCQUF3QixDQUFDMUQsT0FBekIsR0FBbUN5RCxjQUFjLENBQUN6RCxPQUFmLENBQXVCOEQsWUFBMUQ7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQS9ELGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlvRCxxQkFBSixFQUEyQjtBQUN6QlksYUFBTyxDQUFDQyxHQUFSLENBQVlQLGNBQWMsQ0FBQ3pELE9BQWYsQ0FBdUJDLFlBQW5DO0FBQ0FxRCwwQkFBb0IsQ0FBQ0csY0FBYyxDQUFDekQsT0FBZixDQUF1QkMsWUFBdkIsR0FBc0MsRUFBdkMsQ0FBcEI7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDa0QscUJBQUQsQ0FMTSxDQUFUO0FBT0FwRCxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJNEQsdUJBQUosRUFBNkI7QUFDM0JDLHVCQUFpQjtBQUNsQixLQUZELE1BRU87QUFDTEMseUJBQW1CO0FBQ3BCO0FBQ0YsR0FOUSxFQU1OLENBQUNGLHVCQUFELENBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFOUMseUVBRGI7QUFFRSxPQUFHLEVBQUU0QyxjQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUUzQyxZQUFNLEVBQUV1QztBQUFWLEtBSFQ7QUFBQSw0QkFLRTtBQUNFLGVBQVMsRUFBRXhDLGlFQURiO0FBRUUsV0FBSyxFQUFFO0FBQ0xvRCx1QkFBZSxFQUFHLE9BQU1mLE9BQU8sQ0FBQ2dCLFFBQVM7QUFEcEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFXRTtBQUFLLGVBQVMsRUFBRXJELHdFQUFoQjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtxQyxPQUFPLENBQUNpQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0saUJBQVMsRUFBRXRELHFFQUFqQjtBQUFBLGtCQUFvQ3FDLE9BQU8sQ0FBQ2tCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBRXZELGlFQUFoQjtBQUFBLGtCQUNHcUMsT0FBTyxDQUFDakIsU0FBUixJQUNDaUIsT0FBTyxDQUFDakIsU0FBUixDQUFrQm9DLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCbEQsR0FBN0IsQ0FBa0NtRCxHQUFELGlCQUMvQjtBQUFNLG1CQUFTLEVBQUV6RCxnRUFBakI7QUFBQSxvQkFDR3lEO0FBREgsV0FBbUNBLEdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsRUFXR25CLHFCQUFxQixpQkFDcEI7QUFBSyxpQkFBUyxFQUFFdEMsb0VBQWhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBRUEsa0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFQSxvRUFBakI7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLEVBQUcsV0FBVXFDLE9BQU8sQ0FBQ3FCLFVBQVcsRUFBdkM7QUFBQSwwQkFDR3JCLE9BQU8sQ0FBQ3FCO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFFMUQsc0VBQWhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFQSxrRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVBLG9FQUFqQjtBQUFBLHdCQUFtQ3FDLE9BQU8sQ0FBQ3NCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLGVBYUU7QUFBSyxxQkFBUyxFQUFFM0Qsc0VBQWhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFQSxrRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVBLG9FQUFqQjtBQUFBLHdCQUFtQ3FDLE9BQU8sQ0FBQ3VCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLGVBaUJFO0FBQUsscUJBQVMsRUFBRTVELHNFQUFoQjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBRUEsa0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFQSxvRUFBakI7QUFBQSx3QkFBbUNxQyxPQUFPLENBQUN3QjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkYsZUFxQkU7QUFBSyxxQkFBUyxFQUFFN0Qsc0VBQWhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFQSxrRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVBLG9FQUFqQjtBQUFBLHdCQUNHcUMsT0FBTyxDQUFDeUI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkYsZUEyQkU7QUFBSyxxQkFBUyxFQUFFOUQsc0VBQWhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFQSxrRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVBLG9FQUFqQjtBQUFBLHdCQUFtQ3FDLE9BQU8sQ0FBQzBCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFpQ0U7QUFBSyxtQkFBUyxFQUFFL0Qsb0VBQWVnRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRixlQWtDRTtBQUFLLG1CQUFTLEVBQUVoRSw4RUFBaEI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLHNFQUFoQjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBRUEsa0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFQSxvRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUU7QUFBSyxxQkFBUyxFQUFFQSxzRUFBaEI7QUFBQSxvQ0FDRTtBQUFNLHVCQUFTLEVBQUVBLGtFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBRUEsb0VBQWpCO0FBQUEsd0JBQW1DcUMsT0FBTyxDQUFDMEI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsZUFZRTtBQUFLLHFCQUFTLEVBQUUvRCxzRUFBaEI7QUFBQSxvQ0FDRTtBQUFNLHVCQUFTLEVBQUVBLGtFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBRUEsb0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBNkVFO0FBQ0UsZUFBUyxFQUFFRyxpREFBVSxDQUNuQkgsdUVBRG1CLEVBRW5CMEMseUJBQXlCLElBQUkxQyxtRUFGVixDQUR2QjtBQUtFLGFBQU8sRUFBRSxNQUFNO0FBQ2IsWUFBSXNDLHFCQUFKLEVBQTJCO0FBQ3pCVSw2QkFBbUI7QUFDcEIsU0FGRCxNQUVPO0FBQ0xELDJCQUFpQjtBQUNsQjtBQUNGLE9BWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkQ7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNrQixhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBMEM7QUFDdkQsUUFBTTtBQUFBLE9BQUNDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDNUYsK0NBQVEsbUJBQ3ZEMEYsYUFEdUQsRUFBNUQ7QUFHQSxRQUFNO0FBQUEsT0FBQ0csc0JBQUQ7QUFBQSxPQUF5QkM7QUFBekIsTUFBc0Q5RiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEU7QUFFQSxRQUFNK0YsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBdEYsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RrRix5QkFBcUIsQ0FBQ0YsYUFBRCxDQUFyQjtBQUNELEdBRlEsRUFFTixDQUFDQSxhQUFELENBRk0sQ0FBVDtBQUlBLFFBQU07QUFDSk8sOEJBREk7QUFFSjNCLDJCQUZJO0FBR0o0QixlQUhJO0FBSUpDO0FBSkksTUFLRjVDLGlEQUFVLENBQUNDLGdFQUFELENBTGQ7O0FBT0EsUUFBTTRDLG9CQUFvQixHQUFHLFlBQVk7QUFDdkNOLDZCQUF5QixDQUFDLElBQUQsQ0FBekI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1PLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLG9EQUFRLG1CQUFyQixFQUF5QztBQUM5REMsY0FBTSxrQ0FBT1QsTUFBTSxDQUFDVSxLQUFkO0FBQXFCQyxjQUFJLEVBQUVSLFdBQVcsR0FBRztBQUF6QztBQUR3RCxPQUF6QyxDQUF2QjtBQUdBQyxvQkFBYyxDQUFFaEUsU0FBRCxJQUFlQSxTQUFTLEdBQUcsQ0FBNUIsQ0FBZDs7QUFDQSxZQUFNd0UsY0FBYyxxQkFBUWhCLGtCQUFSLENBQXBCOztBQUVBZ0Isb0JBQWMsQ0FBQ0MsSUFBZixDQUFvQkMsU0FBcEIsR0FBZ0MsQ0FDOUIsR0FBR0YsY0FBYyxDQUFDQyxJQUFmLENBQW9CQyxTQURPLEVBRTlCLEdBQUdSLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxTQUZRLENBQWhDO0FBSUFqQiwyQkFBcUIsQ0FBQ2UsY0FBRCxDQUFyQjtBQUNBYiwrQkFBeUIsQ0FBQyxLQUFELENBQXpCO0FBQ0QsS0FiRCxDQWFFLE9BQU9nQixLQUFQLEVBQWM7QUFDZHBDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbUMsS0FBWjtBQUNBaEIsK0JBQXlCLENBQUMsS0FBRCxDQUF6QjtBQUNEO0FBQ0YsR0FuQkQ7O0FBcUJBLE1BQUksQ0FBQ0gsa0JBQUQsSUFBdUIsQ0FBQ0Esa0JBQWtCLENBQUNpQixJQUEvQyxFQUFxRDtBQUNuRCxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJakIsa0JBQWtCLENBQUNvQixLQUFuQixLQUE2QixDQUFqQyxFQUFvQztBQUNsQyx3QkFDRTtBQUFLLGVBQVMsRUFBRXZGLDBFQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsc0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBUUQ7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVBLDBFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxtRUFBaEI7QUFBQSw4QkFDRTtBQUFBLG1CQUFPbUUsa0JBQWtCLENBQUNxQixVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsaUJBQVMsRUFBRXhGLHlFQURiO0FBRUUsZUFBTyxFQUFFLE1BQU07QUFDYnlFLG9DQUEwQixDQUFFOUQsU0FBRCxJQUFlLENBQUNBLFNBQWpCLENBQTFCO0FBQ0QsU0FKSDtBQUFBLGdDQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLEVBT0dtQyx1QkFBdUIsR0FBRyxpQkFBSCxHQUF1QixnQkFQakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRTtBQUFLLGVBQVMsRUFBRTlDLDZFQUFoQjtBQUFBLGdCQUNHbUUsa0JBQWtCLENBQUNpQixJQUFuQixDQUF3QkMsU0FBeEIsQ0FBa0MvRSxHQUFsQyxDQUF1QytCLE9BQUQsSUFBYTtBQUNsRCw0QkFBTyw4REFBQyxrREFBRDtBQUFjLGlCQUFPLEVBQUVBO0FBQXZCLFdBQXFDQSxPQUFPLENBQUNvRCxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWtCR3BCLHNCQUFzQixpQkFDckIsOERBQUMsK0RBQUQ7QUFBZ0IsZ0JBQVUsRUFBRUYsa0JBQWtCLENBQUNxQjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKLEVBcUJHRSwrREFBa0IsSUFBSWhCLFdBQVcsR0FBRyxDQUFsQixDQUFsQixHQUNDLENBQUNQLGtCQUFrQixDQUFDcUIsVUFEckIsSUFFQyxDQUFDbkIsc0JBRkYsaUJBR0c7QUFBSyxlQUFTLEVBQUVyRSx3RUFBaEI7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRTRFLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdEO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTZSxjQUFULENBQXdCO0FBQUVIO0FBQUYsQ0FBeEIsRUFBd0M7QUFDckQsUUFBTTtBQUFFZDtBQUFGLE1BQWtCM0MsaURBQVUsQ0FBQ0MsZ0VBQUQsQ0FBbEM7QUFDQSxRQUFNNEQsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHTCxVQUFVLEdBQUcsQ0FBQ2QsV0FBVyxHQUFHLENBQWYsSUFBb0JnQixnRUFBckQ7O0FBQ0EsTUFBSUcsYUFBYSxHQUFHSCxnRUFBcEIsRUFBd0M7QUFDdENHLGlCQUFhLEdBQUdILGdFQUFoQjtBQUNELEdBTm9ELENBT3JEOzs7QUFDQSxPQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGFBQXBCLEVBQW1DQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDRixZQUFRLENBQUNHLElBQVQsZUFDRTtBQUFLLGVBQVMsRUFBRS9GLHlFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUcsaURBQVUsQ0FBQ0gsaUVBQUQsRUFBZUEsa0VBQWY7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVHLGlEQUFVLENBQUNILGtFQUFELEVBQWdCQSxrRUFBaEI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUEsaUVBQWhCO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFFRyxpREFBVSxDQUFDSCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFRyxpREFBVSxDQUFDSCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBTSxxQkFBUyxFQUFFRyxpREFBVSxDQUFDSCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLE9BQTJDOEYsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBYUQ7O0FBQ0Qsc0JBQU87QUFBSyxhQUFTLEVBQUU5RiwyRUFBaEI7QUFBQSxjQUF5QzRGO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ00sTUFBTWIsT0FBTyxHQUFHaUIsMkJBQWhCO0FBQ0EsTUFBTU4sa0JBQWtCLEdBQUcsQ0FBM0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDtBQUVPLE1BQU0xRCxvQkFBb0IsZ0JBQUdpRSwwREFBQSxFQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFFBQVQsQ0FBa0I7QUFBRWhDLGVBQUY7QUFBaUI5QztBQUFqQixDQUFsQixFQUFnRDtBQUM3RCxRQUFNbUQsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRTlDLDZCQUFGO0FBQTZCSjtBQUE3QixNQUNKUyxpREFBVSxDQUFDQyxnRUFBRCxDQURaO0FBR0E5QyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNaUgsZ0JBQWdCLEdBQUc1QixNQUFNLENBQUNVLEtBQVAsQ0FBYTdELFNBQWIsR0FDckJtRCxNQUFNLENBQUNVLEtBQVAsQ0FBYTdELFNBQWIsQ0FBdUJvQyxLQUF2QixDQUE2QixHQUE3QixDQURxQixHQUVyQixFQUZKO0FBR0E5Qiw2QkFBeUIsQ0FBQ3lFLGdCQUFELENBQXpCO0FBRUEsVUFBTUMsV0FBVyxHQUFHN0IsTUFBTSxDQUFDVSxLQUFQLENBQWFvQixXQUFiLEdBQ2hCOUIsTUFBTSxDQUFDVSxLQUFQLENBQWFvQixXQUFiLENBQXlCN0MsS0FBekIsQ0FBK0IsSUFBL0IsQ0FEZ0IsR0FFaEIsRUFGSjtBQUdBbEMsd0JBQW9CLENBQUM4RSxXQUFELENBQXBCO0FBQ0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFFcEcsc0VBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQU0sZUFBUyxFQUFFQSxrRUFBakI7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFTLGlCQUFTLEVBQUVvQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw4REFBRDtBQUFlLHFCQUFhLEVBQUU4QztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtBQUVNLGVBQWVvQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTTtBQUFFQztBQUFGLE1BQVdELE9BQU8sQ0FBQ3RCLEtBQXpCO0FBRUEsTUFBSWYsYUFBSjs7QUFFQSxNQUFJLENBQUNzQyxJQUFMLEVBQVc7QUFDVHRDLGlCQUFhLEdBQUcsSUFBaEI7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNVyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUEsQ0FDcEIsR0FBRUMscURBQVEscUJBQW9CMEIsbURBQUEsQ0FBYUYsT0FBTyxDQUFDdEIsS0FBckIsQ0FBNEIsRUFEdEMsQ0FBdkI7QUFJQWYsaUJBQWEsR0FBR1csUUFBUSxDQUFDTyxJQUF6QjtBQUNEOztBQUVELFFBQU1oRSxTQUFTLEdBQUcsTUFBTTBELGdEQUFBLENBQVcsR0FBRUMscURBQVEsc0JBQXJCLENBQXhCO0FBRUEsU0FBTztBQUNMMkIsU0FBSyxFQUFFO0FBQ0x4QyxtQkFESztBQUVMOUMsZUFBUyxFQUFFQSxTQUFTLENBQUNnRSxJQUFWLENBQWVBLElBQWYsQ0FBb0JoRTtBQUYxQjtBQURGLEdBQVA7QUFNRCxDOzs7Ozs7Ozs7O0FDcEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENIRUNLQk9YX0hFSUdIVCA9IDI3O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7XG4gIHRpdGxlLFxuICBzZWFyY2gsXG4gIGRlZmF1bHRTaXplID0gMyxcbiAgdmFsdWVzID0gW10sXG4gIHN0YXRlID0gW10sXG4gIHNldFN0YXRlLFxufSkge1xuICBjb25zdCBbZmlsdGVySGVpZ2h0LCBzZXRGaWx0ZXJIZWlnaHRdID0gdXNlU3RhdGUoJ2F1dG8nKTtcbiAgY29uc3QgW2lzTGlzdEV4cGFuZGVkLCBzZXRJc0xpc3RFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBleHBhbmRlZExpc3RIZWlnaHREaWZmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnQgPVxuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSBkZWZhdWx0U2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzAuNjEnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNMaXN0RXhwYW5kZWQgJiYgbGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBsaXN0UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwnKTtcbiAgICAgIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgIGxhYmVsc1tkZWZhdWx0U2l6ZSAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNMaXN0RXhwYW5kZWRdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUxpc3QgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZExpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQodHJ1ZSk7XG4gICAgc2V0RmlsdGVySGVpZ2h0KFxuICAgICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ICtcbiAgICAgICAgQ0hFQ0tCT1hfSEVJR0hUICogdmFsdWVzLmxlbmd0aCAtXG4gICAgICAgIENIRUNLQk9YX0hFSUdIVCAqIGRlZmF1bHRTaXplXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IGZpbHRlckhlaWdodCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBkZWZhdWx0U2l6ZSA+PSB2YWx1ZXMubGVuZ3RoID8gJ25vbmUnIDogJycsXG4gICAgICB9fVxuICAgICAgcmVmPXtmaWx0ZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuY2xvc2VGaWx0ZXJJY29uLFxuICAgICAgICAgICAgIWlzRXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIGNvbGxhcHNlRmlsdGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xvc2UgZmlsdGVyXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaCAmJiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBsb2NhdGlvbi4uLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5jaGVja0JveGVzLFxuICAgICAgICAgICFpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLm5vdEV4cGFuZGVkXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBpc0xpc3RFeHBhbmRlZFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAqIENIRUNLQk9YX0hFSUdIVCkgLSAxMVxuICAgICAgICAgICAgOiBNYXRoLmNlaWwoZGVmYXVsdFNpemUgKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTEsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17bGlzdFJlZn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0ZS5pbmNsdWRlcyh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4T2ZWYWx1ZSA9IHN0YXRlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZWYWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZTdGF0ZSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4ucHJldlN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXhPZlZhbHVlLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja21hcmt9IC8+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZWZhdWx0U2l6ZSA8IHZhbHVlcy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUxpc3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIGNsYXNzZXMuc2hvd01vcmVJY29uLFxuICAgICAgICAgICAgICBpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBzaG93IG1vcmUgaWNvblxuICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2luZGV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENPVU5UUklFUyA9IFtcbiAgJ0dlcm1hbnknLFxuICAnRnJhbmNlJyxcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgJ1VTQScsXG4gICdTcGFpbicsXG4gICdJdGFseScsXG4gICdOb3J3YXknLFxuXTtcblxuY29uc3QgQ09NUEFOWV9TSVpFUyA9IFtcbiAgJzAtMjAwJyxcbiAgJzIwMS01MDAnLFxuICAnNTAxLTEsMDAwJyxcbiAgJzEsMDAxLTUsMDAwJyxcbiAgJzUsMDAxLTEwLDAwMCcsXG4gICcxMCwwMDErJyxcbl07XG5cbi8qIGNvbnN0IEVYUEVSVElTRSA9IFtcbiAgJ0hpZGUgQWxsJyxcbiAgJ1JlYWR5IHRvIHdlYXInLFxuICAnQWNjZXNzb3JpZXMnLFxuICAnRm9vdHdlYXInLFxuICAnU29tZXRoaW5nIGVsc2UnLFxuXTsgKi9cblxuY29uc3QgUkVWRU5VRSA9IFtcbiAgJzAtMSBtaWxsaW9uJyxcbiAgJzEtMjUgbWlsbGlvbicsXG4gICcyNS0xMDAgbWlsbGlvbicsXG4gICcxMDAtNTAwIG1pbGxpb24nLFxuICAnNTAxLTEsMDAwIG1pbGxpb24nLFxuICAnMS0xMCBiaWxsaW9uJyxcbiAgJzEwLTUwIGJpbGxpb24nLFxuICAnNTArIGJpbGxpb24nLFxuXTtcblxuY29uc3QgQ09NUEFOWV9UWVBFUyA9IFsnUHVibGljJywgJ1ByaXZhdGUnLCAnU3Vic2lkaWFyeSddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKHsgZXhwZXJ0aXNlIH0pIHtcbiAgY29uc3Qge1xuICAgIGNvbXBhbnlTaXplRmlsdGVyLFxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyLFxuICAgIGNvbXBhbnlMb2NhdGlvbkZpbHRlcixcbiAgICBzZXRDb21wYW55TG9jYXRpb25GaWx0ZXIsXG4gICAgY29tcGFueUV4cGVydGlzZUZpbHRlcixcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIHNldENvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICAgIHNldENvbXBhbnlUeXBlRmlsdGVyLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsdGVyQnV0dG9ufT5cbiAgICAgICAgICA8aT5saW5lczwvaT5GaWx0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3N0UmVsZXZhbnRCdXR0b259PlxuICAgICAgICAgIE1vc3QgcmVsZXZhbnQgPGk+YXJyb3cgZG93bjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJMb2NhdGlvblwiXG4gICAgICAgIHZhbHVlcz17Q09VTlRSSUVTfVxuICAgICAgICBkZWZhdWx0U2l6ZT17M31cbiAgICAgICAgc2VhcmNoXG4gICAgICAgIHN0YXRlPXtjb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPEZpbHRlclxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfU0laRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkNvbXBhbnkgc2l6ZVwiXG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55U2l6ZUZpbHRlcn1cbiAgICAgICAgc3RhdGU9e2NvbXBhbnlTaXplRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdmFsdWVzPXtleHBlcnRpc2Uuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSl9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkV4cGVydGlzZVwiXG4gICAgICAgIHN0YXRlPXtjb21wYW55RXhwZXJ0aXNlRmlsdGVyfVxuICAgICAgICBzZXRTdGF0ZT17c2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8RmlsdGVyXG4gICAgICAgIHRpdGxlPVwiUmV2ZW51ZVwiXG4gICAgICAgIHZhbHVlcz17UkVWRU5VRX1cbiAgICAgICAgZGVmYXVsdFNpemU9ezN9XG4gICAgICAgIHN0YXRlPXtjb21wYW55UmV2ZW51ZUZpbHRlcn1cbiAgICAgICAgc2V0U3RhdGU9e3NldENvbXBhbnlSZXZlbnVlRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJDb21wYW55IFR5cGVcIlxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfVFlQRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXszfVxuICAgICAgICBzdGF0ZT17Y29tcGFueVR5cGVGaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55VHlwZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHsgY29tcGFueSB9KSB7XG4gIGNvbnN0IFtpc0NvbXBhbnlDYXJkRXhwYW5kZWQsIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wYW55Q2FyZEhlaWdodCwgc2V0Q29tcGFueUNhcmRIZWlnaHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCwgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZF0gPVxuICAgIHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb21wYW55Q2FyZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIH0gPSB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcblxuICBjb25zdCBleHBhbmRDb21wYW55Q2FyZCA9ICgpID0+IHtcbiAgICBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkKHRydWUpO1xuICAgIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUNvbXBhbnlDYXJkID0gKCkgPT4ge1xuICAgIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQoZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkKGZhbHNlKTtcbiAgICB9LCAyMDApO1xuICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodC5jdXJyZW50KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55Q2FyZFJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQuY3VycmVudCA9IGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29tcGFueUNhcmRFeHBhbmRlZCkge1xuICAgICAgY29uc29sZS5sb2coY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuICAgICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyA0Mik7XG4gICAgfVxuICB9LCBbaXNDb21wYW55Q2FyZEV4cGFuZGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQpIHtcbiAgICAgIGV4cGFuZENvbXBhbnlDYXJkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxhcHNlQ29tcGFueUNhcmQoKTtcbiAgICB9XG4gIH0sIFthcmVDb21wYW55Q2FyZHNFeHBhbmRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdH1cbiAgICAgIHJlZj17Y29tcGFueUNhcmRSZWZ9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGNvbXBhbnlDYXJkSGVpZ2h0IH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb21wYW55LmxvZ29QYXRofSlgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgPGgxPntjb21wYW55Lm5hbWV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmluZHVzdHJ5fT57Y29tcGFueS5pbmR1c3RyeX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgIHtjb21wYW55LmV4cGVydGlzZSAmJlxuICAgICAgICAgICAgY29tcGFueS5leHBlcnRpc2Uuc3BsaXQoJywnKS5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNDb21wYW55Q2FyZEV4cGFuZGVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5EZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PldlYnNpdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vJHtjb21wYW55LndlYnNpdGVVcmx9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wYW55LndlYnNpdGVVcmx9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkhlYWRxdWFydGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkuSFFMb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UGFyZW50IE9yZ2FuaXphdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkucGFyZW50Q29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Rm91bmRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkuZm91bmRlcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Rm91bmRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICB7Y29tcGFueS55ZWFyT2ZGb3VuZGF0aW9ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5SZXZlbnVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5yZXZlbnVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRpdGlvbmFsRGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmtleVBlb3BsZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5LZXkgcGVvcGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIE1pY2hhZWwgQnVya2UgKENoYWlybWFuICYgQ0VPKSwgTmljb2xhcyBHaGVzcXVpw6hyZSwgVmlyZ2lsXG4gICAgICAgICAgICAgICAgICBBYmxvaCAoQ3JlYXRpdmUgZGlyZWN0b3JzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5OdW1iZXIgb2YgZW1wbG95ZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5yZXZlbnVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5BcmVhIHNlcnZlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+V29ybGR3aWRlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8aVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5leHBhbmRDYXJkLFxuICAgICAgICAgIGlzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChpc0NvbXBhbnlDYXJkRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlQ29tcGFueUNhcmQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kQ29tcGFueUNhcmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEV4cGFuZCBjYXJkXG4gICAgICA8L2k+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ09NUEFOSUVTX1BFUl9QQUdFLCBBUElfVVJMIH0gZnJvbSAnY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBTa2VsZXRvbkxvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvU2tlbGV0b25Mb2FkZXInO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2lubmVyU2VhcmNoUmVzdWx0cywgc2V0SW5uZXJTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKHtcbiAgICAuLi5zZWFyY2hSZXN1bHRzLFxuICB9KTtcbiAgY29uc3QgW2lzU2VhcmNoUmVzdWx0c0xvYWRpbmcsIHNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5uZXJTZWFyY2hSZXN1bHRzKHNlYXJjaFJlc3VsdHMpO1xuICB9LCBbc2VhcmNoUmVzdWx0c10pO1xuXG4gIGNvbnN0IHtcbiAgICBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCxcbiAgICBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCxcbiAgICBjdXJyZW50UGFnZSxcbiAgICBzZXRDdXJyZW50UGFnZSxcbiAgfSA9IHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuXG4gIGNvbnN0IGdldE1vcmVTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2hgLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRSZXN1bHRzID0geyAuLi5pbm5lclNlYXJjaFJlc3VsdHMgfTtcblxuICAgICAgdXBkYXRlZFJlc3VsdHMuZGF0YS5jb21wYW5pZXMgPSBbXG4gICAgICAgIC4uLnVwZGF0ZWRSZXN1bHRzLmRhdGEuY29tcGFuaWVzLFxuICAgICAgICAuLi5yZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzLFxuICAgICAgXTtcbiAgICAgIHNldElubmVyU2VhcmNoUmVzdWx0cyh1cGRhdGVkUmVzdWx0cyk7XG4gICAgICBzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghaW5uZXJTZWFyY2hSZXN1bHRzIHx8ICFpbm5lclNlYXJjaFJlc3VsdHMuZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlubmVyU2VhcmNoUmVzdWx0cy5jb3VudCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm9SZXN1bHRzfT5cbiAgICAgICAgICBObyByZXN1bHQgZm91bmQuIFRyeSBhIGNvbXBhbnkgb3IgYnJhbmQgbmFtZSBvciB1c2UgYSBkaWZmZXJlbnRcbiAgICAgICAgICBrZXl3b3JkLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPHNwYW4+e2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50fSBUb3RhbCByZXN1bHRzPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcGVuQWxsQ2FyZHN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICB7YXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgPyAnQ2xvc2UgYWxsIGNhcmRzJyA6ICdPcGVuIGFsbCBjYXJkcyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c0NvbnRhaW5lcn0+XG4gICAgICAgIHtpbm5lclNlYXJjaFJlc3VsdHMuZGF0YS5jb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxTZWFyY2hSZXN1bHQgY29tcGFueT17Y29tcGFueX0ga2V5PXtjb21wYW55LmlkfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc1NlYXJjaFJlc3VsdHNMb2FkaW5nICYmIChcbiAgICAgICAgPFNrZWxldG9uTG9hZGVyIHRvdGFsQ291bnQ9e2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50fSAvPlxuICAgICAgKX1cbiAgICAgIHtDT01QQU5JRVNfUEVSX1BBR0UgKiAoY3VycmVudFBhZ2UgKyAxKSA8XG4gICAgICAgICtpbm5lclNlYXJjaFJlc3VsdHMudG90YWxDb3VudCAmJlxuICAgICAgICAhaXNTZWFyY2hSZXN1bHRzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheU1vcmV9PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Z2V0TW9yZVNlYXJjaFJlc3VsdHN9PlxuICAgICAgICAgICAgICBEaXNwbGF5IG1vcmUgcmVzdWx0c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IENPTVBBTklFU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXRvbkxvYWRlcih7IHRvdGFsQ291bnQgfSkge1xuICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgbGV0IGVsZW1lbnRzQ291bnQgPSB0b3RhbENvdW50IC0gKGN1cnJlbnRQYWdlICsgMSkgKiBDT01QQU5JRVNfUEVSX1BBR0U7XG4gIGlmIChlbGVtZW50c0NvdW50ID4gQ09NUEFOSUVTX1BFUl9QQUdFKSB7XG4gICAgZWxlbWVudHNDb3VudCA9IENPTVBBTklFU19QRVJfUEFHRTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0NvdW50OyBpKyspIHtcbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoUmVzdWx0fSBrZXk9e2l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLmxvZ28sIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5zaGluZSwgY2xhc3Nlcy50aXRsZSl9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy50YWcsIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGFnLCBjbGFzc2VzLnNoaW5lKX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnRhZywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2tlbGV0b25Mb2FkZXJ9PntlbGVtZW50c308L2Rpdj47XG59XG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG5leHBvcnQgY29uc3QgQ09NUEFOSUVTX1BFUl9QQUdFID0gODtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hSZXN1bHRzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5pbXBvcnQgRmlsdGVycyBmcm9tICdAL2NvbXBvbmVudHMvRmlsdGVycyc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJztcclxuXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgc2VhcmNoUmVzdWx0cywgZXhwZXJ0aXNlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLCBzZXRDb21wYW55U2l6ZUZpbHRlciB9ID1cclxuICAgIHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZXhwZXJ0aXNlRmlsdGVycyA9IHJvdXRlci5xdWVyeS5leHBlcnRpc2VcclxuICAgICAgPyByb3V0ZXIucXVlcnkuZXhwZXJ0aXNlLnNwbGl0KCcsJylcclxuICAgICAgOiBbXTtcclxuICAgIHNldENvbXBhbnlFeHBlcnRpc2VGaWx0ZXIoZXhwZXJ0aXNlRmlsdGVycyk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZUZpbHRlcnMgPSByb3V0ZXIucXVlcnkuY29tcGFueVNpemVcclxuICAgICAgPyByb3V0ZXIucXVlcnkuY29tcGFueVNpemUuc3BsaXQoJyx8JylcclxuICAgICAgOiBbXTtcclxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyKHNpemVGaWx0ZXJzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ib21lUGFnZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaW1pbG88L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICA8RmlsdGVycyBleHBlcnRpc2U9e2V4cGVydGlzZX0gLz5cclxuICAgICAgICA8U2VhcmNoUmVzdWx0cyBzZWFyY2hSZXN1bHRzPXtzZWFyY2hSZXN1bHRzfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHRlcm0gfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGxldCBzZWFyY2hSZXN1bHRzO1xyXG5cclxuICBpZiAoIXRlcm0pIHtcclxuICAgIHNlYXJjaFJlc3VsdHMgPSBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaD8ke3FzLnN0cmluZ2lmeShjb250ZXh0LnF1ZXJ5KX1gXHJcbiAgICApO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhwZXJ0aXNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9leHBlcnRpc2VgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgIGV4cGVydGlzZTogZXhwZXJ0aXNlLmRhdGEuZGF0YS5leHBlcnRpc2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmlsdGVyXCI6IFwic3R5bGVzX0ZpbHRlcl9fMnk5djJcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18zM09LQlwiLFxuXHRcImNsb3NlRmlsdGVySWNvblwiOiBcInN0eWxlc19jbG9zZUZpbHRlckljb25fXzFuaUNKXCIsXG5cdFwicm90YXRlXCI6IFwic3R5bGVzX3JvdGF0ZV9fMUhFUG9cIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX19NSWJTR1wiLFxuXHRcImNoZWNrQm94ZXNcIjogXCJzdHlsZXNfY2hlY2tCb3hlc19fQk9LdDlcIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19iVUtPOVwiLFxuXHRcImNoZWNrbWFya1wiOiBcInN0eWxlc19jaGVja21hcmtfXzFuQ0RlXCIsXG5cdFwic2hvd01vcmVcIjogXCJzdHlsZXNfc2hvd01vcmVfXzF2LXlXXCIsXG5cdFwic2hvd01vcmVJY29uXCI6IFwic3R5bGVzX3Nob3dNb3JlSWNvbl9fMXN2Mm1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZpbHRlcnNcIjogXCJzdHlsZXNfRmlsdGVyc19fM2xHY1JcIixcblx0XCJidXR0b25zXCI6IFwic3R5bGVzX2J1dHRvbnNfXzJKQnFRXCIsXG5cdFwiZmlsdGVyQnV0dG9uXCI6IFwic3R5bGVzX2ZpbHRlckJ1dHRvbl9fMkltZWpcIixcblx0XCJtb3N0UmVsZXZhbnRCdXR0b25cIjogXCJzdHlsZXNfbW9zdFJlbGV2YW50QnV0dG9uX18xMUg4QlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2VhcmNoUmVzdWx0XCI6IFwic3R5bGVzX1NlYXJjaFJlc3VsdF9fMW5mQjRcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fXzJXUU92XCIsXG5cdFwiY29tcGFueUluZm9cIjogXCJzdHlsZXNfY29tcGFueUluZm9fX2pLbUhBXCIsXG5cdFwiaW5kdXN0cnlcIjogXCJzdHlsZXNfaW5kdXN0cnlfX1hENURHXCIsXG5cdFwidGFnc1wiOiBcInN0eWxlc190YWdzX18zaEREclwiLFxuXHRcInRhZ1wiOiBcInN0eWxlc190YWdfX2dXTjJZXCIsXG5cdFwiZXhwYW5kQ2FyZFwiOiBcInN0eWxlc19leHBhbmRDYXJkX18yUUkyUlwiLFxuXHRcInJvdGF0ZVwiOiBcInN0eWxlc19yb3RhdGVfXzJldmc1XCIsXG5cdFwiZGV0YWlsc1wiOiBcInN0eWxlc19kZXRhaWxzX190czJla1wiLFxuXHRcIm1haW5EZXRhaWxzXCI6IFwic3R5bGVzX21haW5EZXRhaWxzX19RblJyZFwiLFxuXHRcImluZm9CbG9ja1wiOiBcInN0eWxlc19pbmZvQmxvY2tfXzFJZW1vXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzFlcG4zXCIsXG5cdFwiY29udGVudFwiOiBcInN0eWxlc19jb250ZW50X18zVVhZVFwiLFxuXHRcImRpdmlkZXJcIjogXCJzdHlsZXNfZGl2aWRlcl9fMVB4R2FcIixcblx0XCJhZGRpdGlvbmFsRGV0YWlsc1wiOiBcInN0eWxlc19hZGRpdGlvbmFsRGV0YWlsc19fMmdUMFBcIixcblx0XCJrZXlQZW9wbGVcIjogXCJzdHlsZXNfa2V5UGVvcGxlX18zSmUxV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2VhcmNoUmVzdWx0c1wiOiBcInN0eWxlc19TZWFyY2hSZXN1bHRzX18xaENGRVwiLFxuXHRcIm5vUmVzdWx0c1wiOiBcInN0eWxlc19ub1Jlc3VsdHNfXzI5VXZHXCIsXG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fb2FERU1cIixcblx0XCJvcGVuQWxsQ2FyZHNcIjogXCJzdHlsZXNfb3BlbkFsbENhcmRzX18zaTJ1Y1wiLFxuXHRcImRpc3BsYXlNb3JlXCI6IFwic3R5bGVzX2Rpc3BsYXlNb3JlX19tcFV3U1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2tlbGV0b25Mb2FkZXJcIjogXCJzdHlsZXNfU2tlbGV0b25Mb2FkZXJfXzNSOHNMXCIsXG5cdFwic2VhcmNoUmVzdWx0XCI6IFwic3R5bGVzX3NlYXJjaFJlc3VsdF9fMkVHdEpcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fXzNfSGhqXCIsXG5cdFwiY29tcGFueUluZm9cIjogXCJzdHlsZXNfY29tcGFueUluZm9fX0lySTlkXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzE4OU0wXCIsXG5cdFwidGFnc1wiOiBcInN0eWxlc190YWdzX18yVkxGdFwiLFxuXHRcInRhZ1wiOiBcInN0eWxlc190YWdfXzEzUHdCXCIsXG5cdFwic2hpbmVcIjogXCJzdHlsZXNfc2hpbmVfXzMzRFhyXCIsXG5cdFwicGxhY2Vob2xkZXJTaGltbWVyXCI6IFwic3R5bGVzX3BsYWNlaG9sZGVyU2hpbW1lcl9fMnh3aWlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhvbWVQYWdlXCI6IFwic3R5bGVzX0hvbWVQYWdlX18zb0dJalwiLFxuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fSFRLVS1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==