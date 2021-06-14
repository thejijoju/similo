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
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/index */ "./constants/index.js");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResults/SearchResult/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function SearchResults(_ref) {
  _s();

  var _this = this;

  var searchResults = _ref.searchResults;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_9__.SearchResultsContext),
      setAreCompanyCardsExpanded = _useContext.setAreCompanyCardsExpanded,
      areCompanyCardsExpanded = _useContext.areCompanyCardsExpanded;

  if (!searchResults) {
    return null;
  }

  if (searchResults.count === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().SearchResults),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().noResults),
        children: "No result found. Try a company or brand name or use a different keyword."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this);
  }

  var getMoreSearchResults = /*#__PURE__*/function () {
    var _ref2 = (0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(router.query);
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat(constants_index__WEBPACK_IMPORTED_MODULE_7__.API_URL, "/companies/search"), {
                params: _objectSpread(_objectSpread({}, router.query), {}, {
                  page: currentPage
                })
              });

            case 4:
              response = _context.sent;
              console.log(response);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function getMoreSearchResults() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().SearchResults),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: [searchResults.totalCount, " Total results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().openAllCards),
        onClick: function onClick() {
          setAreCompanyCardsExpanded(function (prevState) {
            return !prevState;
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
          children: "dot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().resultsContainer),
      children: searchResults.data.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_8__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), searchResults.totalCount > constants_index__WEBPACK_IMPORTED_MODULE_7__.COMPANIES_PER_PAGE && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "fmEkL5DdrhbXKMFYxDAiTfNiONw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwiYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQiLCJjb3VudCIsImNsYXNzZXMiLCJnZXRNb3JlU2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImF4aW9zIiwiQVBJX1VSTCIsInBhcmFtcyIsInBhZ2UiLCJyZXNwb25zZSIsInRvdGFsQ291bnQiLCJwcmV2U3RhdGUiLCJkYXRhIiwiY29tcGFuaWVzIiwibWFwIiwiY29tcGFueSIsImlkIiwiQ09NUEFOSUVTX1BFUl9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjs7QUFBQSxrQkFDakJDLCtDQUFRLENBQUMsQ0FBRCxDQURTO0FBQUEsTUFDaERDLFdBRGdEO0FBQUEsTUFDbkNDLGNBRG1DOztBQUd2RCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUh1RCxvQkFNckRDLGlEQUFVLENBQUNDLGdFQUFELENBTjJDO0FBQUEsTUFLL0NDLDBCQUwrQyxlQUsvQ0EsMEJBTCtDO0FBQUEsTUFLbkJDLHVCQUxtQixlQUtuQkEsdUJBTG1COztBQU92RCxNQUFJLENBQUNULGFBQUwsRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSUEsYUFBYSxDQUFDVSxLQUFkLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLHdCQUNFO0FBQUssZUFBUyxFQUFFQywyRUFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVFEOztBQUVELE1BQU1DLG9CQUFvQjtBQUFBLGdTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFNLENBQUNXLEtBQW5CO0FBRDJCO0FBQUE7QUFBQSxxQkFJUkMsZ0RBQUEsV0FBYUMsb0RBQWIsd0JBQXlDO0FBQ3hEQyxzQkFBTSxrQ0FBT2QsTUFBTSxDQUFDVyxLQUFkO0FBQXFCSSxzQkFBSSxFQUFFakI7QUFBM0I7QUFEa0QsZUFBekMsQ0FKUTs7QUFBQTtBQUl6QmtCLHNCQUp5QjtBQU96QlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaO0FBUHlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU3pCUCxxQkFBTyxDQUFDQyxHQUFSOztBQVR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFwQkYsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFFRCwyRUFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsOEJBQ0U7QUFBQSxtQkFBT1gsYUFBYSxDQUFDcUIsVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLGlCQUFTLEVBQUVWLDBFQURiO0FBRUUsZUFBTyxFQUFFLG1CQUFNO0FBQ2JILG9DQUEwQixDQUFDLFVBQUNjLFNBQUQ7QUFBQSxtQkFBZSxDQUFDQSxTQUFoQjtBQUFBLFdBQUQsQ0FBMUI7QUFDRCxTQUpIO0FBQUEsZ0NBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsRUFPR2IsdUJBQXVCLEdBQUcsaUJBQUgsR0FBdUIsZ0JBUGpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFBSyxlQUFTLEVBQUVFLDhFQUFoQjtBQUFBLGdCQUNHWCxhQUFhLENBQUN1QixJQUFkLENBQW1CQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ0MsT0FBRCxFQUFhO0FBQzdDLDRCQUFPLDhEQUFDLGtEQUFEO0FBQWMsaUJBQU8sRUFBRUE7QUFBdkIsV0FBcUNBLE9BQU8sQ0FBQ0MsRUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFrQkczQixhQUFhLENBQUNxQixVQUFkLEdBQTJCTywrREFBM0IsaUJBQ0M7QUFBSyxlQUFTLEVBQUVqQix5RUFBaEI7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0E5RHVCYixhO1VBR1BNLGtEOzs7S0FIT04sYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OGQxYTMyYjg0M2IzYzc0MjRkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkLCBhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCB9ID1cbiAgICB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcbiAgaWYgKCFzZWFyY2hSZXN1bHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHNlYXJjaFJlc3VsdHMuY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vUmVzdWx0c30+XG4gICAgICAgICAgTm8gcmVzdWx0IGZvdW5kLiBUcnkgYSBjb21wYW55IG9yIGJyYW5kIG5hbWUgb3IgdXNlIGEgZGlmZmVyZW50XG4gICAgICAgICAga2V5d29yZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZ2V0TW9yZVNlYXJjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2hgLCB7XG4gICAgICAgIHBhcmFtczogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IGN1cnJlbnRQYWdlIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPHNwYW4+e3NlYXJjaFJlc3VsdHMudG90YWxDb3VudH0gVG90YWwgcmVzdWx0czwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3BlbkFsbENhcmRzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aT5kb3Q8L2k+XG4gICAgICAgICAge2FyZUNvbXBhbnlDYXJkc0V4cGFuZGVkID8gJ0Nsb3NlIGFsbCBjYXJkcycgOiAnT3BlbiBhbGwgY2FyZHMnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3VsdHNDb250YWluZXJ9PlxuICAgICAgICB7c2VhcmNoUmVzdWx0cy5kYXRhLmNvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdCBjb21wYW55PXtjb21wYW55fSBrZXk9e2NvbXBhbnkuaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaFJlc3VsdHMudG90YWxDb3VudCA+IENPTVBBTklFU19QRVJfUEFHRSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlNb3JlfT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtnZXRNb3JlU2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgICBEaXNwbGF5IG1vcmUgcmVzdWx0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9