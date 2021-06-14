self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchResults/index.jsx":
/*!********************************************!*\
  !*** ./components/SearchResults/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResults; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/index */ "./constants/index.js");
/* harmony import */ var _components_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/SkeletonLoader */ "./components/SkeletonLoader/index.jsx");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResults/SearchResult/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function SearchResults(_ref) {
  _s();

  var _this = this;

  var searchResults = _ref.searchResults;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_objectSpread({}, searchResults)),
      innerSearchResults = _useState2[0],
      setInnerSearchResults = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setInnerSearchResults(searchResults);
  }, [searchResults]);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_11__.SearchResultsContext),
      setAreCompanyCardsExpanded = _useContext.setAreCompanyCardsExpanded,
      areCompanyCardsExpanded = _useContext.areCompanyCardsExpanded;

  var getMoreSearchResults = /*#__PURE__*/function () {
    var _ref2 = (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, updatedResults;
      return c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(router.query);
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat(constants_index__WEBPACK_IMPORTED_MODULE_8__.API_URL, "/companies/search"), {
                params: _objectSpread(_objectSpread({}, router.query), {}, {
                  page: currentPage + 1
                })
              });

            case 4:
              response = _context.sent;
              setCurrentPage(function (prevState) {
                return prevState + 1;
              });
              updatedResults = _objectSpread({}, innerSearchResults);
              console.log(updatedResults);
              updatedResults.data.companies = [].concat((0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedResults.data.companies), (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(response.data.data.companies));
              setInnerSearchResults(updatedResults);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getMoreSearchResults() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    console.log(currentPage);
  }, [currentPage]);

  if (!innerSearchResults || !innerSearchResults.data) {
    return null;
  }

  if (innerSearchResults.count === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().SearchResults),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().noResults),
        children: "No result found. Try a company or brand name or use a different keyword."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [innerSearchResults.totalCount, "Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().openAllCards),
        onClick: function onClick() {
          setAreCompanyCardsExpanded(function (prevState) {
            return !prevState;
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "dot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().resultsContainer),
      children: innerSearchResults.data.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_10__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "Tn/jwsUiE6420xdhGrDdc+/1KbU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = SearchResults;

var _c;

$RefreshReg$(_c, "SearchResults");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/SkeletonLoader/index.jsx":
/*!*********************************************!*\
  !*** ./components/SkeletonLoader/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SkeletonLoader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SkeletonLoader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SkeletonLoader\\index.jsx";



function SkeletonLoader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().SkeletonLoader),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().searchResult),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().searchResult),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = SkeletonLoader;

var _c;

$RefreshReg$(_c, "SkeletonLoader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/SkeletonLoader/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/SkeletonLoader/styles.module.scss ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/SkeletonLoader/styles.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/SkeletonLoader/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/SkeletonLoader/styles.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/SkeletonLoader/styles.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/SkeletonLoader/styles.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".styles_SkeletonLoader__3R8sL {\n  /*  box {\n     width: 58px;\n     height: 52px;\n     border-radius: 21.5px;\n   }\n\n   div {\n     display: inline-flex;\n     flex-direction: column;\n     margin-left: 25px;\n     margin-top: 15px;\n     vertical-align: top;\n   }\n\n   lines {\n     height: 10px;\n     margin-top: 10px;\n     width: 200px;\n   }\n\n   photo {\n     display: block !important;\n     width: 325px;\n     height: 100px;\n     margin-top: 15px;\n   }\n  */\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ {\n  position: relative;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 97px;\n  margin-bottom: 21px;\n  padding-right: 89px;\n  border: 1px solid rgba(193, 80, 80, 0.2);\n  box-sizing: border-box;\n  -webkit-box-shadow: inset 0 2px 12px rgba(193, 80, 80, 0.06);\n          box-shadow: inset 0 2px 12px rgba(193, 80, 80, 0.06);\n  border-radius: 4px;\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ .styles_logo__3_Hhj {\n  margin-left: 26px;\n  margin-top: 21px;\n  margin-bottom: 15px;\n  margin-right: 32px;\n  width: 58px;\n  height: 52px;\n  border-radius: 21.5px;\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ .styles_companyInfo__IrI9d {\n  width: 100%;\n  flex-direction: row;\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ .styles_companyInfo__IrI9d .styles_title__189M0 {\n  display: block;\n  width: 114px;\n  height: 15px;\n  margin-top: 20px;\n  border-radius: 2px;\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ .styles_companyInfo__IrI9d .styles_tags__2VLFt {\n  position: absolute;\n  bottom: 13px;\n}\n.styles_SkeletonLoader__3R8sL .styles_searchResult__2EGtJ .styles_companyInfo__IrI9d .styles_tags__2VLFt .styles_tag__13PwB {\n  display: inline-block;\n  width: 76px;\n  height: 14px;\n  margin-right: 3px;\n  border-radius: 16px;\n}\n.styles_SkeletonLoader__3R8sL .styles_shine__33DXr {\n  background: #f5f5f7;\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5f5f7), color-stop(20%, #edeef1), color-stop(40%, #f5f5f7), to(#f5f5f7));\n  background-image: -webkit-linear-gradient(left, #f5f5f7 0%, #edeef1 20%, #f5f5f7 40%, #f5f5f7 100%);\n  background-image: linear-gradient(to right, #f5f5f7 0%, #edeef1 20%, #f5f5f7 40%, #f5f5f7 100%);\n  background-repeat: no-repeat;\n  background-size: 800px 104px;\n  display: inline-block;\n  position: relative;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: styles_placeholderShimmer__2xwii;\n  -webkit-animation-timing-function: linear;\n}\n@-webkit-keyframes styles_placeholderShimmer__2xwii {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EAoEE;;;;;;;;;;;;;;;;;;;;;;;;;;GAAA;AAxCF;AA3BE;EACE,kBAAA;EACA,aAAA;EAEA,8BAAA;UAAA,sBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,wCAAA;EACA,sBAAA;EACA,4DAAA;UAAA,oDAAA;EACA,kBAAA;AA4BJ;AA3BI;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;AA6BN;AA3BI;EACE,WAAA;EACA,mBAAA;AA6BN;AA5BM;EACE,cAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;AA8BR;AA3BM;EACE,kBAAA;EACA,YAAA;AA6BR;AA5BQ;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AA8BV;AAxBE;EACE,mBAAA;EACA,+IAAA;EAAA,mGAAA;EAAA,+FAAA;EAOA,4BAAA;EACA,4BAAA;EACA,qBAAA;EACA,kBAAA;EAEA,8BAAA;EACA,qCAAA;EACA,2CAAA;EACA,wDAAA;EACA,yCAAA;AAmBJ;AAWE;EACE;IACE,6BAAA;EATJ;EAYE;IACE,4BAAA;EAVJ;AACF","sourcesContent":[".SkeletonLoader {\n  .searchResult {\n    position: relative;\n    display: flex;\n    //min-width: 924px;\n    box-sizing: border-box;\n    min-height: 97px;\n    margin-bottom: 21px;\n    padding-right: 89px;\n    border: 1px solid rgba(193, 80, 80, 0.2);\n    box-sizing: border-box;\n    box-shadow: inset 0 2px 12px rgba(193, 80, 80, 0.06);\n    border-radius: 4px;\n    .logo {\n      margin-left: 26px;\n      margin-top: 21px;\n      margin-bottom: 15px;\n      margin-right: 32px;\n      width: 58px;\n      height: 52px;\n      border-radius: 21.5px;\n    }\n    .companyInfo {\n      width: 100%;\n      flex-direction: row;\n      .title {\n        display: block;\n        width: 114px;\n        height: 15px;\n        margin-top: 20px;\n        border-radius: 2px;\n      }\n\n      .tags {\n        position: absolute;\n        bottom: 13px;\n        .tag {\n          display: inline-block;\n          width: 76px;\n          height: 14px;\n          margin-right: 3px;\n          border-radius: 16px;\n        }\n      }\n    }\n  }\n\n  .shine {\n    background: #f5f5f7;\n    background-image: linear-gradient(\n      to right,\n      #f5f5f7 0%,\n      #edeef1 20%,\n      #f5f5f7 40%,\n      #f5f5f7 100%\n    );\n    background-repeat: no-repeat;\n    background-size: 800px 104px;\n    display: inline-block;\n    position: relative;\n\n    -webkit-animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-name: placeholderShimmer;\n    -webkit-animation-timing-function: linear;\n  }\n\n  /*  box {\n    width: 58px;\n    height: 52px;\n    border-radius: 21.5px;\n  }\n\n  div {\n    display: inline-flex;\n    flex-direction: column;\n    margin-left: 25px;\n    margin-top: 15px;\n    vertical-align: top;\n  }\n\n  lines {\n    height: 10px;\n    margin-top: 10px;\n    width: 200px;\n  }\n\n  photo {\n    display: block !important;\n    width: 325px;\n    height: 100px;\n    margin-top: 15px;\n  }\n */\n  @-webkit-keyframes placeholderShimmer {\n    0% {\n      background-position: -468px 0;\n    }\n\n    100% {\n      background-position: 468px 0;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
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
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tlbGV0b25Mb2FkZXIvc3R5bGVzLm1vZHVsZS5zY3NzPzZhOWYiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tlbGV0b25Mb2FkZXIvc3R5bGVzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJzZWFyY2hSZXN1bHRzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaW5uZXJTZWFyY2hSZXN1bHRzIiwic2V0SW5uZXJTZWFyY2hSZXN1bHRzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImdldE1vcmVTZWFyY2hSZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiYXhpb3MiLCJBUElfVVJMIiwicGFyYW1zIiwicGFnZSIsInJlc3BvbnNlIiwicHJldlN0YXRlIiwidXBkYXRlZFJlc3VsdHMiLCJkYXRhIiwiY29tcGFuaWVzIiwiY291bnQiLCJjbGFzc2VzIiwidG90YWxDb3VudCIsIm1hcCIsImNvbXBhbnkiLCJpZCIsIkNPTVBBTklFU19QRVJfUEFHRSIsIlNrZWxldG9uTG9hZGVyIiwiY2xhc3NuYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEs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VyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssMENBQTBDLG1CQUFtQix5QkFBeUIsb0JBQW9CLHlCQUF5Qiw2QkFBNkIsdUJBQXVCLDBCQUEwQiwwQkFBMEIsK0NBQStDLDZCQUE2QiwyREFBMkQseUJBQXlCLGFBQWEsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsOEJBQThCLE9BQU8sb0JBQW9CLG9CQUFvQiw0QkFBNEIsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLDJCQUEyQiw2QkFBNkIsU0FBUyxpQkFBaUIsNkJBQTZCLHVCQUF1QixnQkFBZ0Isa0NBQWtDLHdCQUF3Qix5QkFBeUIsOEJBQThCLGdDQUFnQyxXQUFXLFNBQVMsT0FBTyxLQUFLLGNBQWMsMEJBQTBCLGdKQUFnSixtQ0FBbUMsbUNBQW1DLDRCQUE0Qix5QkFBeUIsdUNBQXVDLDRDQUE0QyxrREFBa0QsaURBQWlELGdEQUFnRCxLQUFLLGVBQWUsa0JBQWtCLG1CQUFtQiw0QkFBNEIsS0FBSyxXQUFXLDJCQUEyQiw2QkFBNkIsd0JBQXdCLHVCQUF1QiwwQkFBMEIsS0FBSyxhQUFhLG1CQUFtQix1QkFBdUIsbUJBQW1CLEtBQUssYUFBYSxnQ0FBZ0MsbUJBQW1CLG9CQUFvQix1QkFBdUIsS0FBSyxnREFBZ0QsVUFBVSxzQ0FBc0MsT0FBTyxjQUFjLHFDQUFxQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDbHZMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1Nzk3ZTY0ODM0NWIwNDdlNzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ09NUEFOSUVTX1BFUl9QQUdFLCBBUElfVVJMIH0gZnJvbSAnY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBTa2VsZXRvbkxvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvU2tlbGV0b25Mb2FkZXInO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lubmVyU2VhcmNoUmVzdWx0cywgc2V0SW5uZXJTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKHtcbiAgICAuLi5zZWFyY2hSZXN1bHRzLFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElubmVyU2VhcmNoUmVzdWx0cyhzZWFyY2hSZXN1bHRzKTtcbiAgfSwgW3NlYXJjaFJlc3VsdHNdKTtcblxuICBjb25zdCB7IHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLCBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID1cbiAgICB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcblxuICBjb25zdCBnZXRNb3JlU2VhcmNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2hgLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRSZXN1bHRzID0geyAuLi5pbm5lclNlYXJjaFJlc3VsdHMgfTtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRSZXN1bHRzKTtcbiAgICAgIHVwZGF0ZWRSZXN1bHRzLmRhdGEuY29tcGFuaWVzID0gW1xuICAgICAgICAuLi51cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyxcbiAgICAgICAgLi4ucmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyxcbiAgICAgIF07XG4gICAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHModXBkYXRlZFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xuICB9LCBbY3VycmVudFBhZ2VdKTtcblxuICBpZiAoIWlubmVyU2VhcmNoUmVzdWx0cyB8fCAhaW5uZXJTZWFyY2hSZXN1bHRzLmRhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbm5lclNlYXJjaFJlc3VsdHMuY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vUmVzdWx0c30+XG4gICAgICAgICAgTm8gcmVzdWx0IGZvdW5kLiBUcnkgYSBjb21wYW55IG9yIGJyYW5kIG5hbWUgb3IgdXNlIGEgZGlmZmVyZW50XG4gICAgICAgICAga2V5d29yZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHRzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxzcGFuPntpbm5lclNlYXJjaFJlc3VsdHMudG90YWxDb3VudH1Ub3RhbCByZXN1bHRzPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcGVuQWxsQ2FyZHN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICB7YXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgPyAnQ2xvc2UgYWxsIGNhcmRzJyA6ICdPcGVuIGFsbCBjYXJkcyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c0NvbnRhaW5lcn0+XG4gICAgICAgIHtpbm5lclNlYXJjaFJlc3VsdHMuZGF0YS5jb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxTZWFyY2hSZXN1bHQgY29tcGFueT17Y29tcGFueX0ga2V5PXtjb21wYW55LmlkfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtDT01QQU5JRVNfUEVSX1BBR0UgKiAoY3VycmVudFBhZ2UgKyAxKSA8XG4gICAgICAgICtpbm5lclNlYXJjaFJlc3VsdHMudG90YWxDb3VudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlNb3JlfT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtnZXRNb3JlU2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgICBEaXNwbGF5IG1vcmUgcmVzdWx0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXRvbkxvYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ta2VsZXRvbkxvYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hSZXN1bHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLmxvZ28sIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5zaGluZSwgY2xhc3Nlcy50aXRsZSl9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy50YWcsIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGFnLCBjbGFzc2VzLnNoaW5lKX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnRhZywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hSZXN1bHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLmxvZ28sIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy5zaGluZSwgY2xhc3Nlcy50aXRsZSl9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy50YWcsIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGFnLCBjbGFzc2VzLnNoaW5lKX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnRhZywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfU2tlbGV0b25Mb2FkZXJfXzNSOHNMIHtcXG4gIC8qICBib3gge1xcbiAgICAgd2lkdGg6IDU4cHg7XFxuICAgICBoZWlnaHQ6IDUycHg7XFxuICAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XFxuICAgfVxcblxcbiAgIGRpdiB7XFxuICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgIH1cXG5cXG4gICBsaW5lcyB7XFxuICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgd2lkdGg6IDIwMHB4O1xcbiAgIH1cXG5cXG4gICBwaG90byB7XFxuICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICAgd2lkdGg6IDMyNXB4O1xcbiAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgfVxcbiAgKi9cXG59XFxuLnN0eWxlc19Ta2VsZXRvbkxvYWRlcl9fM1I4c0wgLnN0eWxlc19zZWFyY2hSZXN1bHRfXzJFR3RKIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtaW4taGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDg5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MywgODAsIDgwLCAwLjIpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggMTJweCByZ2JhKDE5MywgODAsIDgwLCAwLjA2KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggMTJweCByZ2JhKDE5MywgODAsIDgwLCAwLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnN0eWxlc19Ta2VsZXRvbkxvYWRlcl9fM1I4c0wgLnN0eWxlc19zZWFyY2hSZXN1bHRfXzJFR3RKIC5zdHlsZXNfbG9nb19fM19IaGoge1xcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XFxuICBtYXJnaW4tdG9wOiAyMXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMzJweDtcXG4gIHdpZHRoOiA1OHB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjEuNXB4O1xcbn1cXG4uc3R5bGVzX1NrZWxldG9uTG9hZGVyX18zUjhzTCAuc3R5bGVzX3NlYXJjaFJlc3VsdF9fMkVHdEogLnN0eWxlc19jb21wYW55SW5mb19fSXJJOWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uc3R5bGVzX1NrZWxldG9uTG9hZGVyX18zUjhzTCAuc3R5bGVzX3NlYXJjaFJlc3VsdF9fMkVHdEogLnN0eWxlc19jb21wYW55SW5mb19fSXJJOWQgLnN0eWxlc190aXRsZV9fMTg5TTAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTE0cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uc3R5bGVzX1NrZWxldG9uTG9hZGVyX18zUjhzTCAuc3R5bGVzX3NlYXJjaFJlc3VsdF9fMkVHdEogLnN0eWxlc19jb21wYW55SW5mb19fSXJJOWQgLnN0eWxlc190YWdzX18yVkxGdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEzcHg7XFxufVxcbi5zdHlsZXNfU2tlbGV0b25Mb2FkZXJfXzNSOHNMIC5zdHlsZXNfc2VhcmNoUmVzdWx0X18yRUd0SiAuc3R5bGVzX2NvbXBhbnlJbmZvX19Jckk5ZCAuc3R5bGVzX3RhZ3NfXzJWTEZ0IC5zdHlsZXNfdGFnX18xM1B3QiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNzZweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuLnN0eWxlc19Ta2VsZXRvbkxvYWRlcl9fM1I4c0wgLnN0eWxlc19zaGluZV9fMzNEWHIge1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmNWY1ZjcpLCBjb2xvci1zdG9wKDIwJSwgI2VkZWVmMSksIGNvbG9yLXN0b3AoNDAlLCAjZjVmNWY3KSwgdG8oI2Y1ZjVmNykpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2Y1ZjVmNyAwJSwgI2VkZWVmMSAyMCUsICNmNWY1ZjcgNDAlLCAjZjVmNWY3IDEwMCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVmNWY3IDAlLCAjZWRlZWYxIDIwJSwgI2Y1ZjVmNyA0MCUsICNmNWY1ZjcgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3R5bGVzX3BsYWNlaG9sZGVyU2hpbW1lcl9fMnh3aWk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHN0eWxlc19wbGFjZWhvbGRlclNoaW1tZXJfXzJ4d2lpIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQW9FRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQXhDRjtBQTNCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUNBLGtCQUFBO0FBNEJKO0FBM0JJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBNkJOO0FBM0JJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBNkJOO0FBNUJNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQThCUjtBQTNCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTZCUjtBQTVCUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBOEJWO0FBeEJFO0VBQ0UsbUJBQUE7RUFDQSwrSUFBQTtFQUFBLG1HQUFBO0VBQUEsK0ZBQUE7RUFPQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdEQUFBO0VBQ0EseUNBQUE7QUFtQko7QUFXRTtFQUNFO0lBQ0UsNkJBQUE7RUFUSjtFQVlFO0lBQ0UsNEJBQUE7RUFWSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Ta2VsZXRvbkxvYWRlciB7XFxuICAuc2VhcmNoUmVzdWx0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvL21pbi13aWR0aDogOTI0cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1pbi1oZWlnaHQ6IDk3cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDg5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkzLCA4MCwgODAsIDAuMik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDEycHggcmdiYSgxOTMsIDgwLCA4MCwgMC4wNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLmxvZ28ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNnB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDIxcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XFxuICAgICAgd2lkdGg6IDU4cHg7XFxuICAgICAgaGVpZ2h0OiA1MnB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcXG4gICAgfVxcbiAgICAuY29tcGFueUluZm8ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDExNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICB9XFxuXFxuICAgICAgLnRhZ3Mge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxM3B4O1xcbiAgICAgICAgLnRhZyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDc2cHg7XFxuICAgICAgICAgIGhlaWdodDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuc2hpbmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgI2Y1ZjVmNyAwJSxcXG4gICAgICAjZWRlZWYxIDIwJSxcXG4gICAgICAjZjVmNWY3IDQwJSxcXG4gICAgICAjZjVmNWY3IDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIH1cXG5cXG4gIC8qICBib3gge1xcbiAgICB3aWR0aDogNThweDtcXG4gICAgaGVpZ2h0OiA1MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XFxuICB9XFxuXFxuICBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB9XFxuXFxuICBsaW5lcyB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgcGhvdG8ge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMzI1cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuICovXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcXG4gICAgMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiU2tlbGV0b25Mb2FkZXJcIjogXCJzdHlsZXNfU2tlbGV0b25Mb2FkZXJfXzNSOHNMXCIsXG5cdFwic2VhcmNoUmVzdWx0XCI6IFwic3R5bGVzX3NlYXJjaFJlc3VsdF9fMkVHdEpcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fXzNfSGhqXCIsXG5cdFwiY29tcGFueUluZm9cIjogXCJzdHlsZXNfY29tcGFueUluZm9fX0lySTlkXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzE4OU0wXCIsXG5cdFwidGFnc1wiOiBcInN0eWxlc190YWdzX18yVkxGdFwiLFxuXHRcInRhZ1wiOiBcInN0eWxlc190YWdfXzEzUHdCXCIsXG5cdFwic2hpbmVcIjogXCJzdHlsZXNfc2hpbmVfXzMzRFhyXCIsXG5cdFwicGxhY2Vob2xkZXJTaGltbWVyXCI6IFwic3R5bGVzX3BsYWNlaG9sZGVyU2hpbW1lcl9fMnh3aWlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9