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
  values = []
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
        lineNumber: 82,
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
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 139,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/Filters/Filter/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Filters\\index.jsx";



const COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
const COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,000+'];
const EXPERTISE = ['Hide All', 'Ready to wear', 'Accessories', 'Footwear', 'Something else'];
const REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
const COMPANY_TYPES = ['Public', 'Private', 'Subsidiary'];
function Filters() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filters),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filterButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: EXPERTISE,
      defaultSize: 4,
      title: "Expertise"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Company Type",
      values: COMPANY_TYPES,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResults/SearchResult/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function SearchResults({
  searchResults
}) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: innerSearchResults,
    1: setInnerSearchResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread({}, searchResults));
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setInnerSearchResults(searchResults);
  }, [searchResults]);
  const {
    setAreCompanyCardsExpanded,
    areCompanyCardsExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_6__.SearchResultsContext);

  const getMoreSearchResults = async () => {
    console.log(router.query);

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${constants_index__WEBPACK_IMPORTED_MODULE_4__.API_URL}/companies/search`, {
        params: _objectSpread(_objectSpread({}, router.query), {}, {
          page: currentPage + 1
        })
      });
      setCurrentPage(prevState => prevState + 1);

      const updatedResults = _objectSpread({}, innerSearchResults);

      console.log(updatedResults);
      updatedResults.data.companies = [...updatedResults.data.companies, ...response.data.data.companies];
      setInnerSearchResults(updatedResults);
    } catch (error) {
      console.log(error);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(currentPage);
  }, [currentPage]);

  if (!innerSearchResults || !innerSearchResults.data) {
    return null;
  }

  if (innerSearchResults.count === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SearchResults),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().noResults),
        children: "No result found. Try a company or brand name or use a different keyword."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [innerSearchResults.totalCount, "Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().openAllCards),
        onClick: () => {
          setAreCompanyCardsExpanded(prevState => !prevState);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "dot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().resultsContainer),
      children: innerSearchResults.data.companies.map(company => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_5__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 18
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Filters */ "./components/Filters/index.jsx");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchResults */ "./components/SearchResults/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./pages/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/index */ "./constants/index.js");

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\pages\\index.jsx";







function HomePage({
  searchResults
}) {
  console.log(searchResults);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const {
    term,
    perPage,
    page
  } = context.query;
  console.log('!!!!!!!!!!');

  if (!term) {
    return {
      props: {
        searchResults: null
      }
    };
  }

  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_constants_index__WEBPACK_IMPORTED_MODULE_6__.API_URL}/companies/search?term=${term}&page=${page}&perPage=${perPage}`);
  return {
    props: {
      searchResults: response.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHQvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9GaWx0ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9wYWdlcy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNIRUNLQk9YX0hFSUdIVCIsImluZGV4IiwidGl0bGUiLCJzZWFyY2giLCJkZWZhdWx0U2l6ZSIsInZhbHVlcyIsImZpbHRlckhlaWdodCIsInNldEZpbHRlckhlaWdodCIsInVzZVN0YXRlIiwiaXNMaXN0RXhwYW5kZWQiLCJzZXRJc0xpc3RFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiZmlsdGVyUmVmIiwidXNlUmVmIiwibGlzdFJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImxlbmd0aCIsImxhYmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIiwiQ09VTlRSSUVTIiwiQ09NUEFOWV9TSVpFUyIsIkVYUEVSVElTRSIsIlJFVkVOVUUiLCJDT01QQU5ZX1RZUEVTIiwiRmlsdGVycyIsIlNlYXJjaFJlc3VsdCIsImNvbXBhbnkiLCJpc0NvbXBhbnlDYXJkRXhwYW5kZWQiLCJzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWQiLCJjb21wYW55Q2FyZEhlaWdodCIsInNldENvbXBhbnlDYXJkSGVpZ2h0IiwiaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCIsInNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQiLCJjb21wYW55Q2FyZFJlZiIsImNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodCIsImFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0IiwiZXhwYW5kQ29tcGFueUNhcmQiLCJjb2xsYXBzZUNvbXBhbnlDYXJkIiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsImxvZ29QYXRoIiwibmFtZSIsImluZHVzdHJ5IiwiZXhwZXJ0aXNlIiwic3BsaXQiLCJ0YWciLCJ3ZWJzaXRlVXJsIiwiSFFMb2NhdGlvbiIsInBhcmVudENvbXBhbnkiLCJmb3VuZGVyIiwieWVhck9mRm91bmRhdGlvbiIsInJldmVudWUiLCJkaXZpZGVyIiwiU2VhcmNoUmVzdWx0cyIsInNlYXJjaFJlc3VsdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaW5uZXJTZWFyY2hSZXN1bHRzIiwic2V0SW5uZXJTZWFyY2hSZXN1bHRzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsIkFQSV9VUkwiLCJwYXJhbXMiLCJwYWdlIiwicHJldlN0YXRlIiwidXBkYXRlZFJlc3VsdHMiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb3VudCIsInRvdGFsQ291bnQiLCJpZCIsIkNPTVBBTklFU19QRVJfUEFHRSIsInByb2Nlc3MiLCJSZWFjdCIsIkhvbWVQYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRlcm0iLCJwZXJQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxFQUF4QjtBQUVlLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxPQUFGO0FBQVNDLFFBQVQ7QUFBaUJDLGFBQVcsR0FBRyxDQUEvQjtBQUFrQ0MsUUFBTSxHQUFHO0FBQTNDLENBQWYsRUFBZ0U7QUFDN0UsUUFBTTtBQUFBLE9B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MEJBQXlCaUIsSUFBSyxTQUFRZixJQUFLLFlBQVdnQixPQUFRLEVBRHBELENBQXZCO0FBR0EsU0FBTztBQUFFQyxTQUFLLEVBQUU7QUFBRS9CLG1CQUFhLEVBQUVVLFFBQVEsQ0FBQ087QUFBMUI7QUFBVCxHQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ3BDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENIRUNLQk9YX0hFSUdIVCA9IDI3O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHRpdGxlLCBzZWFyY2gsIGRlZmF1bHRTaXplID0gMywgdmFsdWVzID0gW10gfSkge1xuICBjb25zdCBbZmlsdGVySGVpZ2h0LCBzZXRGaWx0ZXJIZWlnaHRdID0gdXNlU3RhdGUoJ2F1dG8nKTtcbiAgY29uc3QgW2lzTGlzdEV4cGFuZGVkLCBzZXRJc0xpc3RFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBleHBhbmRlZExpc3RIZWlnaHREaWZmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnQgPVxuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSBkZWZhdWx0U2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzAuNjEnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNMaXN0RXhwYW5kZWQgJiYgbGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBsaXN0UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwnKTtcbiAgICAgIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgIGxhYmVsc1tkZWZhdWx0U2l6ZSAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNMaXN0RXhwYW5kZWRdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUxpc3QgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZExpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQodHJ1ZSk7XG4gICAgc2V0RmlsdGVySGVpZ2h0KFxuICAgICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ICtcbiAgICAgICAgQ0hFQ0tCT1hfSEVJR0hUICogdmFsdWVzLmxlbmd0aCAtXG4gICAgICAgIENIRUNLQk9YX0hFSUdIVCAqIGRlZmF1bHRTaXplXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IGZpbHRlckhlaWdodCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBkZWZhdWx0U2l6ZSA+PSB2YWx1ZXMubGVuZ3RoID8gJ25vbmUnIDogJycsXG4gICAgICB9fVxuICAgICAgcmVmPXtmaWx0ZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuY2xvc2VGaWx0ZXJJY29uLFxuICAgICAgICAgICAgIWlzRXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIGNvbGxhcHNlRmlsdGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xvc2UgZmlsdGVyXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaCAmJiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBsb2NhdGlvbi4uLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5jaGVja0JveGVzLFxuICAgICAgICAgICFpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLm5vdEV4cGFuZGVkXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBpc0xpc3RFeHBhbmRlZFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAqIENIRUNLQk9YX0hFSUdIVCkgLSAxMVxuICAgICAgICAgICAgOiBNYXRoLmNlaWwoZGVmYXVsdFNpemUgKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTEsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17bGlzdFJlZn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja21hcmt9IC8+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZWZhdWx0U2l6ZSA8IHZhbHVlcy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUxpc3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIGNsYXNzZXMuc2hvd01vcmVJY29uLFxuICAgICAgICAgICAgICBpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBzaG93IG1vcmUgaWNvblxuICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ09VTlRSSUVTID0gW1xuICAnR2VybWFueScsXG4gICdGcmFuY2UnLFxuICAnVW5pdGVkIEtpbmdkb20nLFxuICAnVVNBJyxcbiAgJ1NwYWluJyxcbiAgJ0l0YWx5JyxcbiAgJ05vcndheScsXG5dO1xuXG5jb25zdCBDT01QQU5ZX1NJWkVTID0gW1xuICAnMC0yMDAnLFxuICAnMjAxLTUwMCcsXG4gICc1MDEtMSwwMDAnLFxuICAnMSwwMDEtNSwwMDAnLFxuICAnNSwwMDEtMTAsMDAwJyxcbiAgJzEwLDAwMCsnLFxuXTtcblxuY29uc3QgRVhQRVJUSVNFID0gW1xuICAnSGlkZSBBbGwnLFxuICAnUmVhZHkgdG8gd2VhcicsXG4gICdBY2Nlc3NvcmllcycsXG4gICdGb290d2VhcicsXG4gICdTb21ldGhpbmcgZWxzZScsXG5dO1xuXG5jb25zdCBSRVZFTlVFID0gW1xuICAnMC0xIG1pbGxpb24nLFxuICAnMS0yNSBtaWxsaW9uJyxcbiAgJzI1LTEwMCBtaWxsaW9uJyxcbiAgJzEwMC01MDAgbWlsbGlvbicsXG4gICc1MDEtMSwwMDAgbWlsbGlvbicsXG4gICcxLTEwIGJpbGxpb24nLFxuICAnMTAtNTAgYmlsbGlvbicsXG4gICc1MCsgYmlsbGlvbicsXG5dO1xuXG5jb25zdCBDT01QQU5ZX1RZUEVTID0gWydQdWJsaWMnLCAnUHJpdmF0ZScsICdTdWJzaWRpYXJ5J107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbHRlckJ1dHRvbn0+XG4gICAgICAgICAgPGk+bGluZXM8L2k+RmlsdGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMubW9zdFJlbGV2YW50QnV0dG9ufT5cbiAgICAgICAgICBNb3N0IHJlbGV2YW50IDxpPmFycm93IGRvd248L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8RmlsdGVyIHRpdGxlPVwiTG9jYXRpb25cIiB2YWx1ZXM9e0NPVU5UUklFU30gZGVmYXVsdFNpemU9ezN9IHNlYXJjaCAvPlxuICAgICAgPEZpbHRlciB2YWx1ZXM9e0NPTVBBTllfU0laRVN9IGRlZmF1bHRTaXplPXs0fSB0aXRsZT1cIkNvbXBhbnkgc2l6ZVwiIC8+XG4gICAgICA8RmlsdGVyIHZhbHVlcz17RVhQRVJUSVNFfSBkZWZhdWx0U2l6ZT17NH0gdGl0bGU9XCJFeHBlcnRpc2VcIiAvPlxuICAgICAgPEZpbHRlciB0aXRsZT1cIlJldmVudWVcIiB2YWx1ZXM9e1JFVkVOVUV9IGRlZmF1bHRTaXplPXszfSAvPlxuICAgICAgPEZpbHRlciB0aXRsZT1cIkNvbXBhbnkgVHlwZVwiIHZhbHVlcz17Q09NUEFOWV9UWVBFU30gZGVmYXVsdFNpemU9ezN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHsgY29tcGFueSB9KSB7XG4gIGNvbnN0IFtpc0NvbXBhbnlDYXJkRXhwYW5kZWQsIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wYW55Q2FyZEhlaWdodCwgc2V0Q29tcGFueUNhcmRIZWlnaHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCwgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZF0gPVxuICAgIHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb21wYW55Q2FyZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIH0gPSB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcblxuICBjb25zdCBleHBhbmRDb21wYW55Q2FyZCA9ICgpID0+IHtcbiAgICBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkKHRydWUpO1xuICAgIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUNvbXBhbnlDYXJkID0gKCkgPT4ge1xuICAgIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQoZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkKGZhbHNlKTtcbiAgICB9LCAyMDApO1xuICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodC5jdXJyZW50KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55Q2FyZFJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQuY3VycmVudCA9IGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29tcGFueUNhcmRFeHBhbmRlZCkge1xuICAgICAgY29uc29sZS5sb2coY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuICAgICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyA0Mik7XG4gICAgfVxuICB9LCBbaXNDb21wYW55Q2FyZEV4cGFuZGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQpIHtcbiAgICAgIGV4cGFuZENvbXBhbnlDYXJkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxhcHNlQ29tcGFueUNhcmQoKTtcbiAgICB9XG4gIH0sIFthcmVDb21wYW55Q2FyZHNFeHBhbmRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdH1cbiAgICAgIHJlZj17Y29tcGFueUNhcmRSZWZ9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGNvbXBhbnlDYXJkSGVpZ2h0IH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb21wYW55LmxvZ29QYXRofSlgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgPGgxPntjb21wYW55Lm5hbWV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmluZHVzdHJ5fT57Y29tcGFueS5pbmR1c3RyeX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgIHtjb21wYW55LmV4cGVydGlzZSAmJlxuICAgICAgICAgICAgY29tcGFueS5leHBlcnRpc2Uuc3BsaXQoJywnKS5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNDb21wYW55Q2FyZEV4cGFuZGVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5EZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PldlYnNpdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vJHtjb21wYW55LndlYnNpdGVVcmx9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wYW55LndlYnNpdGVVcmx9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkhlYWRxdWFydGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkuSFFMb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UGFyZW50IE9yZ2FuaXphdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkucGFyZW50Q29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Rm91bmRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkuZm91bmRlcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+Rm91bmRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICB7Y29tcGFueS55ZWFyT2ZGb3VuZGF0aW9ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5SZXZlbnVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5yZXZlbnVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRpdGlvbmFsRGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmtleVBlb3BsZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5LZXkgcGVvcGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIE1pY2hhZWwgQnVya2UgKENoYWlybWFuICYgQ0VPKSwgTmljb2xhcyBHaGVzcXVpw6hyZSwgVmlyZ2lsXG4gICAgICAgICAgICAgICAgICBBYmxvaCAoQ3JlYXRpdmUgZGlyZWN0b3JzKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5OdW1iZXIgb2YgZW1wbG95ZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5yZXZlbnVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5BcmVhIHNlcnZlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+V29ybGR3aWRlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8aVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5leHBhbmRDYXJkLFxuICAgICAgICAgIGlzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChpc0NvbXBhbnlDYXJkRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlQ29tcGFueUNhcmQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kQ29tcGFueUNhcmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEV4cGFuZCBjYXJkXG4gICAgICA8L2k+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ09NUEFOSUVTX1BFUl9QQUdFLCBBUElfVVJMIH0gZnJvbSAnY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9TZWFyY2hSZXN1bHQnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHsgc2VhcmNoUmVzdWx0cyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbm5lclNlYXJjaFJlc3VsdHMsIHNldElubmVyU2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZSh7XG4gICAgLi4uc2VhcmNoUmVzdWx0cyxcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cyk7XG4gIH0sIFtzZWFyY2hSZXN1bHRzXSk7XG5cbiAgY29uc3QgeyBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCwgYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgfSA9XG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgY29uc3QgZ2V0TW9yZVNlYXJjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoYCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4ucm91dGVyLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICBjb25zdCB1cGRhdGVkUmVzdWx0cyA9IHsgLi4uaW5uZXJTZWFyY2hSZXN1bHRzIH07XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGVkUmVzdWx0cyk7XG4gICAgICB1cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyA9IFtcbiAgICAgICAgLi4udXBkYXRlZFJlc3VsdHMuZGF0YS5jb21wYW5pZXMsXG4gICAgICAgIC4uLnJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMsXG4gICAgICBdO1xuICAgICAgc2V0SW5uZXJTZWFyY2hSZXN1bHRzKHVwZGF0ZWRSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XG5cbiAgaWYgKCFpbm5lclNlYXJjaFJlc3VsdHMgfHwgIWlubmVyU2VhcmNoUmVzdWx0cy5kYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW5uZXJTZWFyY2hSZXN1bHRzLmNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub1Jlc3VsdHN9PlxuICAgICAgICAgIE5vIHJlc3VsdCBmb3VuZC4gVHJ5IGEgY29tcGFueSBvciBicmFuZCBuYW1lIG9yIHVzZSBhIGRpZmZlcmVudFxuICAgICAgICAgIGtleXdvcmQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57aW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnR9VG90YWwgcmVzdWx0czwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3BlbkFsbENhcmRzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aT5kb3Q8L2k+XG4gICAgICAgICAge2FyZUNvbXBhbnlDYXJkc0V4cGFuZGVkID8gJ0Nsb3NlIGFsbCBjYXJkcycgOiAnT3BlbiBhbGwgY2FyZHMnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3VsdHNDb250YWluZXJ9PlxuICAgICAgICB7aW5uZXJTZWFyY2hSZXN1bHRzLmRhdGEuY29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8U2VhcmNoUmVzdWx0IGNvbXBhbnk9e2NvbXBhbnl9IGtleT17Y29tcGFueS5pZH0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7Q09NUEFOSUVTX1BFUl9QQUdFICogKGN1cnJlbnRQYWdlICsgMSkgPFxuICAgICAgICAraW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5TW9yZX0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Z2V0TW9yZVNlYXJjaFJlc3VsdHN9PlxuICAgICAgICAgICAgRGlzcGxheSBtb3JlIHJlc3VsdHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuZXhwb3J0IGNvbnN0IENPTVBBTklFU19QRVJfUEFHRSA9IDg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoUmVzdWx0c0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ0AvY29tcG9uZW50cy9GaWx0ZXJzJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMnO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgc2VhcmNoUmVzdWx0cyB9KSB7XHJcbiAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkhvbWVQYWdlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpbWlsbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgIDxGaWx0ZXJzIC8+XHJcbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgc2VhcmNoUmVzdWx0cz17c2VhcmNoUmVzdWx0c30gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyB0ZXJtLCBwZXJQYWdlLCBwYWdlIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnNvbGUubG9nKCchISEhISEhISEhJyk7XHJcbiAgaWYgKCF0ZXJtKSB7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyBzZWFyY2hSZXN1bHRzOiBudWxsIH0gfTtcclxuICB9XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoP3Rlcm09JHt0ZXJtfSZwYWdlPSR7cGFnZX0mcGVyUGFnZT0ke3BlclBhZ2V9YFxyXG4gICk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgc2VhcmNoUmVzdWx0czogcmVzcG9uc2UuZGF0YSB9IH07XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmlsdGVyXCI6IFwic3R5bGVzX0ZpbHRlcl9fMnk5djJcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18zM09LQlwiLFxuXHRcImNsb3NlRmlsdGVySWNvblwiOiBcInN0eWxlc19jbG9zZUZpbHRlckljb25fXzFuaUNKXCIsXG5cdFwicm90YXRlXCI6IFwic3R5bGVzX3JvdGF0ZV9fMUhFUG9cIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX19NSWJTR1wiLFxuXHRcImNoZWNrQm94ZXNcIjogXCJzdHlsZXNfY2hlY2tCb3hlc19fQk9LdDlcIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19iVUtPOVwiLFxuXHRcImNoZWNrbWFya1wiOiBcInN0eWxlc19jaGVja21hcmtfXzFuQ0RlXCIsXG5cdFwic2hvd01vcmVcIjogXCJzdHlsZXNfc2hvd01vcmVfXzF2LXlXXCIsXG5cdFwic2hvd01vcmVJY29uXCI6IFwic3R5bGVzX3Nob3dNb3JlSWNvbl9fMXN2Mm1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZpbHRlcnNcIjogXCJzdHlsZXNfRmlsdGVyc19fM2xHY1JcIixcblx0XCJidXR0b25zXCI6IFwic3R5bGVzX2J1dHRvbnNfXzJKQnFRXCIsXG5cdFwiZmlsdGVyQnV0dG9uXCI6IFwic3R5bGVzX2ZpbHRlckJ1dHRvbl9fMkltZWpcIixcblx0XCJtb3N0UmVsZXZhbnRCdXR0b25cIjogXCJzdHlsZXNfbW9zdFJlbGV2YW50QnV0dG9uX18xMUg4QlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2VhcmNoUmVzdWx0XCI6IFwic3R5bGVzX1NlYXJjaFJlc3VsdF9fMW5mQjRcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fXzJXUU92XCIsXG5cdFwiY29tcGFueUluZm9cIjogXCJzdHlsZXNfY29tcGFueUluZm9fX2pLbUhBXCIsXG5cdFwiaW5kdXN0cnlcIjogXCJzdHlsZXNfaW5kdXN0cnlfX1hENURHXCIsXG5cdFwidGFnc1wiOiBcInN0eWxlc190YWdzX18zaEREclwiLFxuXHRcInRhZ1wiOiBcInN0eWxlc190YWdfX2dXTjJZXCIsXG5cdFwiZXhwYW5kQ2FyZFwiOiBcInN0eWxlc19leHBhbmRDYXJkX18yUUkyUlwiLFxuXHRcInJvdGF0ZVwiOiBcInN0eWxlc19yb3RhdGVfXzJldmc1XCIsXG5cdFwiZGV0YWlsc1wiOiBcInN0eWxlc19kZXRhaWxzX190czJla1wiLFxuXHRcIm1haW5EZXRhaWxzXCI6IFwic3R5bGVzX21haW5EZXRhaWxzX19RblJyZFwiLFxuXHRcImluZm9CbG9ja1wiOiBcInN0eWxlc19pbmZvQmxvY2tfXzFJZW1vXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzFlcG4zXCIsXG5cdFwiY29udGVudFwiOiBcInN0eWxlc19jb250ZW50X18zVVhZVFwiLFxuXHRcImRpdmlkZXJcIjogXCJzdHlsZXNfZGl2aWRlcl9fMVB4R2FcIixcblx0XCJhZGRpdGlvbmFsRGV0YWlsc1wiOiBcInN0eWxlc19hZGRpdGlvbmFsRGV0YWlsc19fMmdUMFBcIixcblx0XCJrZXlQZW9wbGVcIjogXCJzdHlsZXNfa2V5UGVvcGxlX18zSmUxV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2VhcmNoUmVzdWx0c1wiOiBcInN0eWxlc19TZWFyY2hSZXN1bHRzX18xaENGRVwiLFxuXHRcIm5vUmVzdWx0c1wiOiBcInN0eWxlc19ub1Jlc3VsdHNfXzI5VXZHXCIsXG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fb2FERU1cIixcblx0XCJvcGVuQWxsQ2FyZHNcIjogXCJzdHlsZXNfb3BlbkFsbENhcmRzX18zaTJ1Y1wiLFxuXHRcImRpc3BsYXlNb3JlXCI6IFwic3R5bGVzX2Rpc3BsYXlNb3JlX19tcFV3U1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSG9tZVBhZ2VcIjogXCJzdHlsZXNfSG9tZVBhZ2VfXzNvR0lqXCIsXG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX19IVEtVLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=