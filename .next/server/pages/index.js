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
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
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
    areCompanyCardsExpanded
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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(currentPage);
  }, [currentPage]);

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
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }

  console.log(currentPage);
  console.log(constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE * (currentPage + 1), innerSearchResults.totalCount);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [innerSearchResults.totalCount, "Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
          lineNumber: 85,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().resultsContainer),
      children: innerSearchResults.data.companies.map(company => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_6__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 18
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkeletonLoader__WEBPACK_IMPORTED_MODULE_5__.default, {
      elementsCount: 8
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 34
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && !isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_SkeletonLoader_index_jsx"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHQvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9GaWx0ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpbWlsby8uL2NvbXBvbmVudHMvRmlsdGVycy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9wYWdlcy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNIRUNLQk9YX0hFSUdIVCIsImluZGV4IiwidGl0bGUiLCJzZWFyY2giLCJkZWZhdWx0U2l6ZSIsInZhbHVlcyIsImZpbHRlckhlaWdodCIsInNldEZpbHRlckhlaWdodCIsInVzZVN0YXRlIiwiaXNMaXN0RXhwYW5kZWQiLCJzZXRJc0xpc3RFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiZmlsdGVyUmVmIiwidXNlUmVmIiwibGlzdFJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImxlbmd0aCIsImxhYmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIiwiQ09VTlRSSUVTIiwiQ09NUEFOWV9TSVpFUyIsIkVYUEVSVElTRSIsIlJFVkVOVUUiLCJDT01QQU5ZX1RZUEVTIiwiRmlsdGVycyIsIlNlYXJjaFJlc3VsdCIsImNvbXBhbnkiLCJpc0NvbXBhbnlDYXJkRXhwYW5kZWQiLCJzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWQiLCJjb21wYW55Q2FyZEhlaWdodCIsInNldENvbXBhbnlDYXJkSGVpZ2h0IiwiaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCIsInNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQiLCJjb21wYW55Q2FyZFJlZiIsImNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodCIsImFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0IiwiZXhwYW5kQ29tcGFueUNhcmQiLCJjb2xsYXBzZUNvbXBhbnlDYXJkIiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsImxvZ29QYXRoIiwibmFtZSIsImluZHVzdHJ5IiwiZXhwZXJ0aXNlIiwic3BsaXQiLCJ0YWciLCJ3ZWJzaXRlVXJsIiwiSFFMb2NhdGlvbiIsInBhcmVudENvbXBhbnkiLCJmb3VuZGVyIiwieWVhck9mRm91bmRhdGlvbiIsInJldmVudWUiLCJkaXZpZGVyIiwiU2VhcmNoUmVzdWx0cyIsInNlYXJjaFJlc3VsdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaW5uZXJTZWFyY2hSZXN1bHRzIiwic2V0SW5uZXJTZWFyY2hSZXN1bHRzIiwiaXNTZWFyY2hSZXN1bHRzTG9hZGluZyIsInNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImdldE1vcmVTZWFyY2hSZXN1bHRzIiwicmVzcG9uc2UiLCJheGlvcyIsIkFQSV9VUkwiLCJwYXJhbXMiLCJxdWVyeSIsInBhZ2UiLCJwcmV2U3RhdGUiLCJ1cGRhdGVkUmVzdWx0cyIsImRhdGEiLCJjb21wYW5pZXMiLCJlcnJvciIsImNvdW50IiwiQ09NUEFOSUVTX1BFUl9QQUdFIiwidG90YWxDb3VudCIsImlkIiwicHJvY2VzcyIsIlJlYWN0IiwiSG9tZVBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidGVybSIsInBlclBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsTUFBTUEsZUFBZSxHQUFHLEVBQXhCO0FBRWUsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLE9BQUY7QUFBU0MsUUFBVDtBQUFpQkMsYUFBVyxHQUFHLENBQS9C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bUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDSEVDS0JPWF9IRUlHSFQgPSAyNztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyB0aXRsZSwgc2VhcmNoLCBkZWZhdWx0U2l6ZSA9IDMsIHZhbHVlcyA9IFtdIH0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKCdhdXRvJyk7XG4gIGNvbnN0IFtpc0xpc3RFeHBhbmRlZCwgc2V0SXNMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBmaWx0ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGlzdFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0RmlsdGVySGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50ID1cbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCA9IGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gZGVmYXVsdFNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc0xpc3RFeHBhbmRlZCAmJiBsaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGxpc3RSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xuICAgICAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGFiZWxzW2RlZmF1bHRTaXplIC0gMV0uc3R5bGUub3BhY2l0eSA9ICcwLjYxJztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzTGlzdEV4cGFuZGVkXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VMaXN0ID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRMaXN0ID0gKCkgPT4ge1xuICAgIHNldElzTGlzdEV4cGFuZGVkKHRydWUpO1xuICAgIHNldEZpbHRlckhlaWdodChcbiAgICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCArXG4gICAgICAgIENIRUNLQk9YX0hFSUdIVCAqIHZhbHVlcy5sZW5ndGggLVxuICAgICAgICBDSEVDS0JPWF9IRUlHSFQgKiBkZWZhdWx0U2l6ZVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQsXG4gICAgICAgIGJvcmRlckJvdHRvbTogZGVmYXVsdFNpemUgPj0gdmFsdWVzLmxlbmd0aCA/ICdub25lJyA6ICcnLFxuICAgICAgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuY2hlY2tCb3hlcyxcbiAgICAgICAgICAhaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5ub3RFeHBhbmRlZFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogaXNMaXN0RXhwYW5kZWRcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKHZhbHVlcy5sZW5ndGggKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTFcbiAgICAgICAgICAgIDogTWF0aC5jZWlsKGRlZmF1bHRTaXplICogQ0hFQ0tCT1hfSEVJR0hUKSAtIDExLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e2xpc3RSZWZ9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfSAvPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZGVmYXVsdFNpemUgPCB2YWx1ZXMubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgY29sbGFwc2VMaXN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICBjbGFzc2VzLnNob3dNb3JlSWNvbixcbiAgICAgICAgICAgICAgaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgc2hvdyBtb3JlIGljb25cbiAgICAgICAgICA8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENPVU5UUklFUyA9IFtcbiAgJ0dlcm1hbnknLFxuICAnRnJhbmNlJyxcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgJ1VTQScsXG4gICdTcGFpbicsXG4gICdJdGFseScsXG4gICdOb3J3YXknLFxuXTtcblxuY29uc3QgQ09NUEFOWV9TSVpFUyA9IFtcbiAgJzAtMjAwJyxcbiAgJzIwMS01MDAnLFxuICAnNTAxLTEsMDAwJyxcbiAgJzEsMDAxLTUsMDAwJyxcbiAgJzUsMDAxLTEwLDAwMCcsXG4gICcxMCwwMDArJyxcbl07XG5cbmNvbnN0IEVYUEVSVElTRSA9IFtcbiAgJ0hpZGUgQWxsJyxcbiAgJ1JlYWR5IHRvIHdlYXInLFxuICAnQWNjZXNzb3JpZXMnLFxuICAnRm9vdHdlYXInLFxuICAnU29tZXRoaW5nIGVsc2UnLFxuXTtcblxuY29uc3QgUkVWRU5VRSA9IFtcbiAgJzAtMSBtaWxsaW9uJyxcbiAgJzEtMjUgbWlsbGlvbicsXG4gICcyNS0xMDAgbWlsbGlvbicsXG4gICcxMDAtNTAwIG1pbGxpb24nLFxuICAnNTAxLTEsMDAwIG1pbGxpb24nLFxuICAnMS0xMCBiaWxsaW9uJyxcbiAgJzEwLTUwIGJpbGxpb24nLFxuICAnNTArIGJpbGxpb24nLFxuXTtcblxuY29uc3QgQ09NUEFOWV9UWVBFUyA9IFsnUHVibGljJywgJ1ByaXZhdGUnLCAnU3Vic2lkaWFyeSddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWx0ZXJCdXR0b259PlxuICAgICAgICAgIDxpPmxpbmVzPC9pPkZpbHRlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vc3RSZWxldmFudEJ1dHRvbn0+XG4gICAgICAgICAgTW9zdCByZWxldmFudCA8aT5hcnJvdyBkb3duPC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpbHRlciB0aXRsZT1cIkxvY2F0aW9uXCIgdmFsdWVzPXtDT1VOVFJJRVN9IGRlZmF1bHRTaXplPXszfSBzZWFyY2ggLz5cbiAgICAgIDxGaWx0ZXIgdmFsdWVzPXtDT01QQU5ZX1NJWkVTfSBkZWZhdWx0U2l6ZT17NH0gdGl0bGU9XCJDb21wYW55IHNpemVcIiAvPlxuICAgICAgPEZpbHRlciB2YWx1ZXM9e0VYUEVSVElTRX0gZGVmYXVsdFNpemU9ezR9IHRpdGxlPVwiRXhwZXJ0aXNlXCIgLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJSZXZlbnVlXCIgdmFsdWVzPXtSRVZFTlVFfSBkZWZhdWx0U2l6ZT17M30gLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJDb21wYW55IFR5cGVcIiB2YWx1ZXM9e0NPTVBBTllfVFlQRVN9IGRlZmF1bHRTaXplPXszfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdCh7IGNvbXBhbnkgfSkge1xuICBjb25zdCBbaXNDb21wYW55Q2FyZEV4cGFuZGVkLCBzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tcGFueUNhcmRIZWlnaHQsIHNldENvbXBhbnlDYXJkSGVpZ2h0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQsIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWRdID1cbiAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY29tcGFueUNhcmRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgY29uc3QgZXhwYW5kQ29tcGFueUNhcmQgPSAoKSA9PiB7XG4gICAgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCh0cnVlKTtcbiAgICBzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VDb21wYW55Q2FyZCA9ICgpID0+IHtcbiAgICBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkKGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZChmYWxzZSk7XG4gICAgfSwgMjAwKTtcbiAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQuY3VycmVudCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29tcGFueUNhcmRSZWYuY3VycmVudCkge1xuICAgICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xuICAgICAgY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0LmN1cnJlbnQgPSBjb21wYW55Q2FyZFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0NvbXBhbnlDYXJkRXhwYW5kZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgNDIpO1xuICAgIH1cbiAgfSwgW2lzQ29tcGFueUNhcmRFeHBhbmRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkKSB7XG4gICAgICBleHBhbmRDb21wYW55Q2FyZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZUNvbXBhbnlDYXJkKCk7XG4gICAgfVxuICB9LCBbYXJlQ29tcGFueUNhcmRzRXhwYW5kZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHR9XG4gICAgICByZWY9e2NvbXBhbnlDYXJkUmVmfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBjb21wYW55Q2FyZEhlaWdodCB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y29tcGFueS5sb2dvUGF0aH0pYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgIDxoMT57Y29tcGFueS5uYW1lfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmR1c3RyeX0+e2NvbXBhbnkuaW5kdXN0cnl9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICB7Y29tcGFueS5leHBlcnRpc2UgJiZcbiAgICAgICAgICAgIGNvbXBhbnkuZXhwZXJ0aXNlLnNwbGl0KCcsJykubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30ga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzQ29tcGFueUNhcmRFeHBhbmRlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5XZWJzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovLyR7Y29tcGFueS53ZWJzaXRlVXJsfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFueS53ZWJzaXRlVXJsfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5IZWFkcXVhcnRlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LkhRTG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlBhcmVudCBPcmdhbml6YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LnBhcmVudENvbXBhbnl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkZvdW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LmZvdW5kZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkZvdW5kZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAge2NvbXBhbnkueWVhck9mRm91bmRhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UmV2ZW51ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkucmV2ZW51ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkaXRpb25hbERldGFpbHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5rZXlQZW9wbGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+S2V5IHBlb3BsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICBNaWNoYWVsIEJ1cmtlIChDaGFpcm1hbiAmIENFTyksIE5pY29sYXMgR2hlc3F1acOocmUsIFZpcmdpbFxuICAgICAgICAgICAgICAgICAgQWJsb2ggKENyZWF0aXZlIGRpcmVjdG9ycylcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+TnVtYmVyIG9mIGVtcGxveWVlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkucmV2ZW51ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+QXJlYSBzZXJ2ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pldvcmxkd2lkZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGlcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuZXhwYW5kQ2FyZCxcbiAgICAgICAgICBpc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNDb21wYW55Q2FyZEV4cGFuZGVkKSB7XG4gICAgICAgICAgICBjb2xsYXBzZUNvbXBhbnlDYXJkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZENvbXBhbnlDYXJkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBFeHBhbmQgY2FyZFxuICAgICAgPC9pPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IENPTVBBTklFU19QRVJfUEFHRSwgQVBJX1VSTCB9IGZyb20gJ2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgU2tlbGV0b25Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL1NrZWxldG9uTG9hZGVyJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9TZWFyY2hSZXN1bHQnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHsgc2VhcmNoUmVzdWx0cyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbm5lclNlYXJjaFJlc3VsdHMsIHNldElubmVyU2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZSh7XG4gICAgLi4uc2VhcmNoUmVzdWx0cyxcbiAgfSk7XG4gIGNvbnN0IFtpc1NlYXJjaFJlc3VsdHNMb2FkaW5nLCBzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElubmVyU2VhcmNoUmVzdWx0cyhzZWFyY2hSZXN1bHRzKTtcbiAgfSwgW3NlYXJjaFJlc3VsdHNdKTtcblxuICBjb25zdCB7IHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLCBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID1cbiAgICB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcblxuICBjb25zdCBnZXRNb3JlU2VhcmNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoYCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4ucm91dGVyLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICBjb25zdCB1cGRhdGVkUmVzdWx0cyA9IHsgLi4uaW5uZXJTZWFyY2hSZXN1bHRzIH07XG5cbiAgICAgIHVwZGF0ZWRSZXN1bHRzLmRhdGEuY29tcGFuaWVzID0gW1xuICAgICAgICAuLi51cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyxcbiAgICAgICAgLi4ucmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyxcbiAgICAgIF07XG4gICAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHModXBkYXRlZFJlc3VsdHMpO1xuICAgICAgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XG5cbiAgaWYgKCFpbm5lclNlYXJjaFJlc3VsdHMgfHwgIWlubmVyU2VhcmNoUmVzdWx0cy5kYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW5uZXJTZWFyY2hSZXN1bHRzLmNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub1Jlc3VsdHN9PlxuICAgICAgICAgIE5vIHJlc3VsdCBmb3VuZC4gVHJ5IGEgY29tcGFueSBvciBicmFuZCBuYW1lIG9yIHVzZSBhIGRpZmZlcmVudFxuICAgICAgICAgIGtleXdvcmQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgY29uc29sZS5sb2coXG4gICAgQ09NUEFOSUVTX1BFUl9QQUdFICogKGN1cnJlbnRQYWdlICsgMSksXG4gICAgaW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPHNwYW4+e2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50fVRvdGFsIHJlc3VsdHM8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wZW5BbGxDYXJkc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGk+ZG90PC9pPlxuICAgICAgICAgIHthcmVDb21wYW55Q2FyZHNFeHBhbmRlZCA/ICdDbG9zZSBhbGwgY2FyZHMnIDogJ09wZW4gYWxsIGNhcmRzJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHRzQ29udGFpbmVyfT5cbiAgICAgICAge2lubmVyU2VhcmNoUmVzdWx0cy5kYXRhLmNvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdCBjb21wYW55PXtjb21wYW55fSBrZXk9e2NvbXBhbnkuaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2lzU2VhcmNoUmVzdWx0c0xvYWRpbmcgJiYgPFNrZWxldG9uTG9hZGVyIGVsZW1lbnRzQ291bnQ9ezh9IC8+fVxuICAgICAge0NPTVBBTklFU19QRVJfUEFHRSAqIChjdXJyZW50UGFnZSArIDEpIDxcbiAgICAgICAgK2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50ICYmXG4gICAgICAgICFpc1NlYXJjaFJlc3VsdHNMb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5TW9yZX0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtnZXRNb3JlU2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbmV4cG9ydCBjb25zdCBDT01QQU5JRVNfUEVSX1BBR0UgPSA4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFJlc3VsdHNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgRmlsdGVycyBmcm9tICdAL2NvbXBvbmVudHMvRmlsdGVycyc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IHNlYXJjaFJlc3VsdHMgfSkge1xyXG4gIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ib21lUGFnZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaW1pbG88L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICA8RmlsdGVycyAvPlxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHNlYXJjaFJlc3VsdHM9e3NlYXJjaFJlc3VsdHN9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgdGVybSwgcGVyUGFnZSwgcGFnZSB9ID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zb2xlLmxvZygnISEhISEhISEhIScpO1xyXG4gIGlmICghdGVybSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VhcmNoUmVzdWx0czogbnVsbCB9IH07XHJcbiAgfVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaD90ZXJtPSR7dGVybX0mcGFnZT0ke3BhZ2V9JnBlclBhZ2U9JHtwZXJQYWdlfWBcclxuICApO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHNlYXJjaFJlc3VsdHM6IHJlc3BvbnNlLmRhdGEgfSB9O1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZpbHRlclwiOiBcInN0eWxlc19GaWx0ZXJfXzJ5OXYyXCIsXG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fMzNPS0JcIixcblx0XCJjbG9zZUZpbHRlckljb25cIjogXCJzdHlsZXNfY2xvc2VGaWx0ZXJJY29uX18xbmlDSlwiLFxuXHRcInJvdGF0ZVwiOiBcInN0eWxlc19yb3RhdGVfXzFIRVBvXCIsXG5cdFwic2VhcmNoXCI6IFwic3R5bGVzX3NlYXJjaF9fTUliU0dcIixcblx0XCJjaGVja0JveGVzXCI6IFwic3R5bGVzX2NoZWNrQm94ZXNfX0JPS3Q5XCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYlVLTzlcIixcblx0XCJjaGVja21hcmtcIjogXCJzdHlsZXNfY2hlY2ttYXJrX18xbkNEZVwiLFxuXHRcInNob3dNb3JlXCI6IFwic3R5bGVzX3Nob3dNb3JlX18xdi15V1wiLFxuXHRcInNob3dNb3JlSWNvblwiOiBcInN0eWxlc19zaG93TW9yZUljb25fXzFzdjJtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGaWx0ZXJzXCI6IFwic3R5bGVzX0ZpbHRlcnNfXzNsR2NSXCIsXG5cdFwiYnV0dG9uc1wiOiBcInN0eWxlc19idXR0b25zX18ySkJxUVwiLFxuXHRcImZpbHRlckJ1dHRvblwiOiBcInN0eWxlc19maWx0ZXJCdXR0b25fXzJJbWVqXCIsXG5cdFwibW9zdFJlbGV2YW50QnV0dG9uXCI6IFwic3R5bGVzX21vc3RSZWxldmFudEJ1dHRvbl9fMTFIOEJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlNlYXJjaFJlc3VsdFwiOiBcInN0eWxlc19TZWFyY2hSZXN1bHRfXzFuZkI0XCIsXG5cdFwibG9nb1wiOiBcInN0eWxlc19sb2dvX18yV1FPdlwiLFxuXHRcImNvbXBhbnlJbmZvXCI6IFwic3R5bGVzX2NvbXBhbnlJbmZvX19qS21IQVwiLFxuXHRcImluZHVzdHJ5XCI6IFwic3R5bGVzX2luZHVzdHJ5X19YRDVER1wiLFxuXHRcInRhZ3NcIjogXCJzdHlsZXNfdGFnc19fM2hERHJcIixcblx0XCJ0YWdcIjogXCJzdHlsZXNfdGFnX19nV04yWVwiLFxuXHRcImV4cGFuZENhcmRcIjogXCJzdHlsZXNfZXhwYW5kQ2FyZF9fMlFJMlJcIixcblx0XCJyb3RhdGVcIjogXCJzdHlsZXNfcm90YXRlX18yZXZnNVwiLFxuXHRcImRldGFpbHNcIjogXCJzdHlsZXNfZGV0YWlsc19fdHMyZWtcIixcblx0XCJtYWluRGV0YWlsc1wiOiBcInN0eWxlc19tYWluRGV0YWlsc19fUW5ScmRcIixcblx0XCJpbmZvQmxvY2tcIjogXCJzdHlsZXNfaW5mb0Jsb2NrX18xSWVtb1wiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVzX3RpdGxlX18xZXBuM1wiLFxuXHRcImNvbnRlbnRcIjogXCJzdHlsZXNfY29udGVudF9fM1VYWVRcIixcblx0XCJkaXZpZGVyXCI6IFwic3R5bGVzX2RpdmlkZXJfXzFQeEdhXCIsXG5cdFwiYWRkaXRpb25hbERldGFpbHNcIjogXCJzdHlsZXNfYWRkaXRpb25hbERldGFpbHNfXzJnVDBQXCIsXG5cdFwia2V5UGVvcGxlXCI6IFwic3R5bGVzX2tleVBlb3BsZV9fM0plMVdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlNlYXJjaFJlc3VsdHNcIjogXCJzdHlsZXNfU2VhcmNoUmVzdWx0c19fMWhDRkVcIixcblx0XCJub1Jlc3VsdHNcIjogXCJzdHlsZXNfbm9SZXN1bHRzX18yOVV2R1wiLFxuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfX29hREVNXCIsXG5cdFwib3BlbkFsbENhcmRzXCI6IFwic3R5bGVzX29wZW5BbGxDYXJkc19fM2kydWNcIixcblx0XCJkaXNwbGF5TW9yZVwiOiBcInN0eWxlc19kaXNwbGF5TW9yZV9fbXBVd1NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhvbWVQYWdlXCI6IFwic3R5bGVzX0hvbWVQYWdlX18zb0dJalwiLFxuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fSFRLVS1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9