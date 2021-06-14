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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isSearchResultsLoading = _useState3[0],
      setIsSearchResultsLoading = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setInnerSearchResults(searchResults);
  }, [searchResults]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setCurrentPage(0);
  }, []);

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
              setIsSearchResultsLoading(true);
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
              updatedResults.data.companies = [].concat((0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedResults.data.companies), (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(response.data.data.companies));
              setInnerSearchResults(updatedResults);
              setIsSearchResultsLoading(false);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              setIsSearchResultsLoading(false);

            case 16:
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
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this);
  }

  console.log(currentPage);
  console.log(constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE * (currentPage + 1), innerSearchResults.totalCount);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: [innerSearchResults.totalCount, "Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
          lineNumber: 89,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().resultsContainer),
      children: innerSearchResults.data.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_10__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__.default, {
      elementsCount: 8
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 34
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && !isSearchResultsLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "YkWSzO6Wf7HgOafHAvkI0Pi+7KI=", false, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlubmVyU2VhcmNoUmVzdWx0cyIsInNldElubmVyU2VhcmNoUmVzdWx0cyIsImlzU2VhcmNoUmVzdWx0c0xvYWRpbmciLCJzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImdldE1vcmVTZWFyY2hSZXN1bHRzIiwiYXhpb3MiLCJBUElfVVJMIiwicGFyYW1zIiwicXVlcnkiLCJwYWdlIiwicmVzcG9uc2UiLCJwcmV2U3RhdGUiLCJ1cGRhdGVkUmVzdWx0cyIsImRhdGEiLCJjb21wYW5pZXMiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJjbGFzc2VzIiwiQ09NUEFOSUVTX1BFUl9QQUdFIiwidG90YWxDb3VudCIsIm1hcCIsImNvbXBhbnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjs7QUFBQSxrQkFDakJDLCtDQUFRLENBQUMsQ0FBRCxDQURTO0FBQUEsTUFDaERDLFdBRGdEO0FBQUEsTUFDbkNDLGNBRG1DOztBQUFBLG1CQUVIRiwrQ0FBUSxtQkFDdkRELGFBRHVELEVBRkw7QUFBQSxNQUVoREksa0JBRmdEO0FBQUEsTUFFNUJD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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNrZWxldG9uTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlcic7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vU2VhcmNoUmVzdWx0JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7IHNlYXJjaFJlc3VsdHMgfSkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW5uZXJTZWFyY2hSZXN1bHRzLCBzZXRJbm5lclNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoe1xuICAgIC4uLnNlYXJjaFJlc3VsdHMsXG4gIH0pO1xuICBjb25zdCBbaXNTZWFyY2hSZXN1bHRzTG9hZGluZywgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cyk7XG4gIH0sIFtzZWFyY2hSZXN1bHRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZSgwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQsIGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIH0gPVxuICAgIHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuXG4gIGNvbnN0IGdldE1vcmVTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzU2VhcmNoUmVzdWx0c0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2hgLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRSZXN1bHRzID0geyAuLi5pbm5lclNlYXJjaFJlc3VsdHMgfTtcblxuICAgICAgdXBkYXRlZFJlc3VsdHMuZGF0YS5jb21wYW5pZXMgPSBbXG4gICAgICAgIC4uLnVwZGF0ZWRSZXN1bHRzLmRhdGEuY29tcGFuaWVzLFxuICAgICAgICAuLi5yZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzLFxuICAgICAgXTtcbiAgICAgIHNldElubmVyU2VhcmNoUmVzdWx0cyh1cGRhdGVkUmVzdWx0cyk7XG4gICAgICBzZXRJc1NlYXJjaFJlc3VsdHNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNTZWFyY2hSZXN1bHRzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xuICB9LCBbY3VycmVudFBhZ2VdKTtcblxuICBpZiAoIWlubmVyU2VhcmNoUmVzdWx0cyB8fCAhaW5uZXJTZWFyY2hSZXN1bHRzLmRhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbm5lclNlYXJjaFJlc3VsdHMuY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vUmVzdWx0c30+XG4gICAgICAgICAgTm8gcmVzdWx0IGZvdW5kLiBUcnkgYSBjb21wYW55IG9yIGJyYW5kIG5hbWUgb3IgdXNlIGEgZGlmZmVyZW50XG4gICAgICAgICAga2V5d29yZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xuICBjb25zb2xlLmxvZyhcbiAgICBDT01QQU5JRVNfUEVSX1BBR0UgKiAoY3VycmVudFBhZ2UgKyAxKSxcbiAgICBpbm5lclNlYXJjaFJlc3VsdHMudG90YWxDb3VudFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57aW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnR9VG90YWwgcmVzdWx0czwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3BlbkFsbENhcmRzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aT5kb3Q8L2k+XG4gICAgICAgICAge2FyZUNvbXBhbnlDYXJkc0V4cGFuZGVkID8gJ0Nsb3NlIGFsbCBjYXJkcycgOiAnT3BlbiBhbGwgY2FyZHMnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3VsdHNDb250YWluZXJ9PlxuICAgICAgICB7aW5uZXJTZWFyY2hSZXN1bHRzLmRhdGEuY29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8U2VhcmNoUmVzdWx0IGNvbXBhbnk9e2NvbXBhbnl9IGtleT17Y29tcGFueS5pZH0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7aXNTZWFyY2hSZXN1bHRzTG9hZGluZyAmJiA8U2tlbGV0b25Mb2FkZXIgZWxlbWVudHNDb3VudD17OH0gLz59XG4gICAgICB7Q09NUEFOSUVTX1BFUl9QQUdFICogKGN1cnJlbnRQYWdlICsgMSkgPFxuICAgICAgICAraW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnQgJiZcbiAgICAgICAgIWlzU2VhcmNoUmVzdWx0c0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlNb3JlfT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dldE1vcmVTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgICAgRGlzcGxheSBtb3JlIHJlc3VsdHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==