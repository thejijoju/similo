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
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    console.log(currentPage);
  }, [currentPage]);
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
    }, this), constants_index__WEBPACK_IMPORTED_MODULE_8__.COMPANIES_PER_PAGE * (currentPage + 1) < +innerSearchResults.totalCount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "4wgThpqvg2FpOMxRivqFzaWLnl4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlubmVyU2VhcmNoUmVzdWx0cyIsInNldElubmVyU2VhcmNoUmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwiYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJjb3VudCIsImNsYXNzZXMiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImF4aW9zIiwiQVBJX1VSTCIsInBhcmFtcyIsInBhZ2UiLCJyZXNwb25zZSIsInByZXZTdGF0ZSIsInVwZGF0ZWRSZXN1bHRzIiwiZGF0YSIsImNvbXBhbmllcyIsInVzZUVmZmVjdCIsInRvdGFsQ291bnQiLCJtYXAiLCJjb21wYW55IiwiaWQiLCJDT01QQU5JRVNfUEVSX1BBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7O0FBQUEsa0JBQ2pCQywrQ0FBUSxDQUFDLENBQUQsQ0FEUztBQUFBLE1BQ2hEQyxXQURnRDtBQUFBLE1BQ25DQyxjQURtQzs7QUFBQSxtQkFFSEYsK0NBQVEsQ0FBQ0QsYUFBRCxDQUZMO0FBQUEsTUFFaERJLGtCQUZnRDtBQUFBLE1BRTVCQyxxQkFGNEI7O0FBSXZELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBSnVELG9CQU9yREMsaURB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QUNFLGtCQUFrQixDQUFDd0IsVUFEckIsaUJBRUM7QUFBSyxlQUFTLEVBQUVmLHlFQUFoQjtBQUFBLDZCQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFQyxvQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQTNFdUJmLGE7VUFJUFEsa0Q7OztLQUpPUixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwNjg0OTQzZTU0ZGI2N2I3MGY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ09NUEFOSUVTX1BFUl9QQUdFLCBBUElfVVJMIH0gZnJvbSAnY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9TZWFyY2hSZXN1bHQnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHsgc2VhcmNoUmVzdWx0cyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbm5lclNlYXJjaFJlc3VsdHMsIHNldElubmVyU2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShzZWFyY2hSZXN1bHRzKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLCBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID1cbiAgICB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcbiAgaWYgKCFzZWFyY2hSZXN1bHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHNlYXJjaFJlc3VsdHMuY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vUmVzdWx0c30+XG4gICAgICAgICAgTm8gcmVzdWx0IGZvdW5kLiBUcnkgYSBjb21wYW55IG9yIGJyYW5kIG5hbWUgb3IgdXNlIGEgZGlmZmVyZW50XG4gICAgICAgICAga2V5d29yZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZ2V0TW9yZVNlYXJjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoYCwge1xuICAgICAgICBwYXJhbXM6IHsgLi4ucm91dGVyLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICBjb25zdCB1cGRhdGVkUmVzdWx0cyA9IHsgLi4uaW5uZXJTZWFyY2hSZXN1bHRzIH07XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGVkUmVzdWx0cyk7XG4gICAgICB1cGRhdGVkUmVzdWx0cy5kYXRhLmNvbXBhbmllcyA9IFtcbiAgICAgICAgLi4udXBkYXRlZFJlc3VsdHMuZGF0YS5jb21wYW5pZXMsXG4gICAgICAgIC4uLnJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMsXG4gICAgICBdO1xuICAgICAgc2V0SW5uZXJTZWFyY2hSZXN1bHRzKHVwZGF0ZWRSZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHRzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxzcGFuPntzZWFyY2hSZXN1bHRzLnRvdGFsQ291bnR9IFRvdGFsIHJlc3VsdHM8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wZW5BbGxDYXJkc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGk+ZG90PC9pPlxuICAgICAgICAgIHthcmVDb21wYW55Q2FyZHNFeHBhbmRlZCA/ICdDbG9zZSBhbGwgY2FyZHMnIDogJ09wZW4gYWxsIGNhcmRzJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHRzQ29udGFpbmVyfT5cbiAgICAgICAge2lubmVyU2VhcmNoUmVzdWx0cy5kYXRhLmNvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdCBjb21wYW55PXtjb21wYW55fSBrZXk9e2NvbXBhbnkuaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge0NPTVBBTklFU19QRVJfUEFHRSAqIChjdXJyZW50UGFnZSArIDEpIDxcbiAgICAgICAgK2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheU1vcmV9PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dldE1vcmVTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=