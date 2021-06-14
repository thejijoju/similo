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
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/index */ "./constants/index.js");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResults/SearchResult/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function SearchResults(_ref) {
  _s();

  var _this = this;

  var searchResults = _ref.searchResults;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(searchResults),
      innerSearchResults = _useState2[0],
      setInnerSearchResults = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setInnerSearchResults(searchResults);
  }, [searchResults]);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_10__.SearchResultsContext),
      setAreCompanyCardsExpanded = _useContext.setAreCompanyCardsExpanded,
      areCompanyCardsExpanded = _useContext.areCompanyCardsExpanded;

  if (!searchResults) {
    return null;
  }

  if (searchResults.count === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().SearchResults),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().noResults),
        children: "No result found. Try a company or brand name or use a different keyword."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this);
  }

  var getMoreSearchResults = /*#__PURE__*/function () {
    var _ref2 = (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response, updatedResults;
      return c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
              updatedResults.data.companies = [].concat((0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(updatedResults.data.companies), (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(response.data.data.companies));
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: [searchResults.totalCount, " Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().openAllCards),
        onClick: function onClick() {
          setAreCompanyCardsExpanded(function (prevState) {
            return !prevState;
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          children: "dot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().resultsContainer),
      children: innerSearchResults.data.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_9__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), (innerSearchResults.totalCount > constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE || constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE * (currentPage + 1) >= +innerSearchResults.totalCount) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "nBDzLbu+aehIGdsItFEkWu0nQrs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlubmVyU2VhcmNoUmVzdWx0cyIsInNldElubmVyU2VhcmNoUmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwiYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJjb3VudCIsImNsYXNzZXMiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImF4aW9zIiwiQVBJX1VSTCIsInBhcmFtcyIsInBhZ2UiLCJyZXNwb25zZSIsInByZXZTdGF0ZSIsInVwZGF0ZWRSZXN1bHRzIiwiZGF0YSIsImNvbXBhbmllcyIsInRvdGFsQ291bnQiLCJtYXAiLCJjb21wYW55IiwiaWQiLCJDT01QQU5JRVNfUEVSX1BBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7O0FBQUEsa0JBQ2pCQywrQ0FBUSxDQUFDLENBQUQsQ0FEUztBQUFBLE1BQ2hEQyxXQURnRDtBQUFBLE1BQ25DQyxjQURtQzs7QUFBQSxtQkFFSEYsK0NBQVEsQ0FBQ0QsYUFBRCxDQUZMO0FBQUEsTUFFaERJLGtCQUZnRDtBQUFBLE1BRTVCQyxxQkFGNEI7O0FBSXZELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxZ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K0RBQWtCLElBQUk5QixXQUFXLEdBQUcsQ0FBbEIsQ0FBbEIsSUFDRSxDQUFDRSxrQkFBa0IsQ0FBQ3dCLFVBRnZCLGtCQUdDO0FBQUssZUFBUyxFQUFFZCx5RUFBaEI7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0E1RXVCaEIsYTtVQUlQUSxrRDs7O0tBSk9SLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjJkZDA5YjE2Yzc3MjVmMGZmZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lubmVyU2VhcmNoUmVzdWx0cywgc2V0SW5uZXJTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKHNlYXJjaFJlc3VsdHMpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5uZXJTZWFyY2hSZXN1bHRzKHNlYXJjaFJlc3VsdHMpO1xuICB9LCBbc2VhcmNoUmVzdWx0c10pO1xuXG4gIGNvbnN0IHsgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQsIGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIH0gPVxuICAgIHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuICBpZiAoIXNlYXJjaFJlc3VsdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoc2VhcmNoUmVzdWx0cy5jb3VudCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm9SZXN1bHRzfT5cbiAgICAgICAgICBObyByZXN1bHQgZm91bmQuIFRyeSBhIGNvbXBhbnkgb3IgYnJhbmQgbmFtZSBvciB1c2UgYSBkaWZmZXJlbnRcbiAgICAgICAgICBrZXl3b3JkLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBnZXRNb3JlU2VhcmNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2hgLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IGN1cnJlbnRQYWdlICsgMSB9LFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRSZXN1bHRzID0geyAuLi5pbm5lclNlYXJjaFJlc3VsdHMgfTtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRSZXN1bHRzKTtcbiAgICAgIHVwZGF0ZWRSZXN1bHRzLmRhdGEuY29tcGFuaWVzID0gW1xuICAgICAgICAuLi51cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyxcbiAgICAgICAgLi4ucmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyxcbiAgICAgIF07XG4gICAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHModXBkYXRlZFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57c2VhcmNoUmVzdWx0cy50b3RhbENvdW50fSBUb3RhbCByZXN1bHRzPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcGVuQWxsQ2FyZHN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICB7YXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgPyAnQ2xvc2UgYWxsIGNhcmRzJyA6ICdPcGVuIGFsbCBjYXJkcyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c0NvbnRhaW5lcn0+XG4gICAgICAgIHtpbm5lclNlYXJjaFJlc3VsdHMuZGF0YS5jb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxTZWFyY2hSZXN1bHQgY29tcGFueT17Y29tcGFueX0ga2V5PXtjb21wYW55LmlkfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsoaW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnQgPiBDT01QQU5JRVNfUEVSX1BBR0UgfHxcbiAgICAgICAgQ09NUEFOSUVTX1BFUl9QQUdFICogKGN1cnJlbnRQYWdlICsgMSkgPj1cbiAgICAgICAgICAraW5uZXJTZWFyY2hSZXN1bHRzLnRvdGFsQ291bnQpICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheU1vcmV9PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dldE1vcmVTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=