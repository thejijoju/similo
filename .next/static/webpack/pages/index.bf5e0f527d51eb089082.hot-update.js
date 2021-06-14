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

  var _innerSearchResults$d,
      _this = this;

  var searchResults = _ref.searchResults;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(searchResults),
      innerSearchResults = _useState2[0],
      setInnerSearchResults = _useState2[1];

  console.log('inner', innerSearchResults);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setInnerSearchResults(searchResults);
  }, [searchResults]);

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
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
                  page: currentPage + 1
                })
              });

            case 4:
              response = _context.sent;
              setCurrentPage(function (prevState) {
                return prevState + 1;
              });
              console.log(response);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
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
        lineNumber: 57,
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
          lineNumber: 64,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().resultsContainer),
      children: innerSearchResults === null || innerSearchResults === void 0 ? void 0 : (_innerSearchResults$d = innerSearchResults.data) === null || _innerSearchResults$d === void 0 ? void 0 : _innerSearchResults$d.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_8__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), innerSearchResults.totalCount > constants_index__WEBPACK_IMPORTED_MODULE_7__.COMPANIES_PER_PAGE && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "nBDzLbu+aehIGdsItFEkWu0nQrs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlubmVyU2VhcmNoUmVzdWx0cyIsInNldElubmVyU2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwiY291bnQiLCJjbGFzc2VzIiwiZ2V0TW9yZVNlYXJjaFJlc3VsdHMiLCJxdWVyeSIsImF4aW9zIiwiQVBJX1VSTCIsInBhcmFtcyIsInBhZ2UiLCJyZXNwb25zZSIsInByZXZTdGF0ZSIsInRvdGFsQ291bnQiLCJkYXRhIiwiY29tcGFuaWVzIiwibWFwIiwiY29tcGFueSIsImlkIiwiQ09NUEFOSUVTX1BFUl9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULE9BQTBDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCOztBQUFBLGtCQUNqQkMsK0NBQVEsQ0FBQyxDQUFELENBRFM7QUFBQSxNQUNoREMsV0FEZ0Q7QUFBQSxNQUNuQ0MsY0FEbUM7O0FBQUEsbUJBRUhGLCtDQUFRLENBQUNELGFBQUQsQ0FGTDtBQUFBLE1BRWhESSxrQkFGZ0Q7QUFBQSxNQUU1QkMscUJBRjRCOztBQUl2REMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkgsa0JBQXJCO0FBRUEsTUFBTUksTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEwseUJBQXFCLENBQUNMLGFBQUQsQ0FBckI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsYUFBRCxDQUZNLENBQVQ7O0FBUnVELG9CQWFyRFcsaURBQVUsQ0FBQ0MsZ0VBQUQsQ0FiMkM7QUFBQSxNQVkvQ0MsMEJBWitDLGVBWS9DQSwwQkFaK0M7QUFBQSxNQVluQkMsdUJBWm1CLGVBWW5CQSx1QkFabUI7O0FBY3ZELE1BQUksQ0FBQ2QsYUFBTCxFQUFvQjtBQUNsQixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFJQSxhQUFhLENBQUNlLEtBQWQsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0Isd0JBQ0U7QUFBSyxlQUFTLEVBQUVDLDJFQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsdUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBUUQ7O0FBRUQsTUFBTUMsb0JBQW9CO0FBQUEsZ1NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNCWCxxQkFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ1UsS0FBbkI7QUFEMkI7QUFBQTtBQUFBLHFCQUlGQyxnREFBQSxXQUFhQyxvREFBYix3QkFBeUM7QUFDOURDLHNCQUFNLGtDQUFPYixNQUFNLENBQUNVLEtBQWQ7QUFBcUJJLHNCQUFJLEVBQUVwQixXQUFXLEdBQUc7QUFBekM7QUFEd0QsZUFBekMsQ0FKRTs7QUFBQTtBQUluQnFCLHNCQUptQjtBQU96QnBCLDRCQUFjLENBQUMsVUFBQ3FCLFNBQUQ7QUFBQSx1QkFBZUEsU0FBUyxHQUFHLENBQTNCO0FBQUEsZUFBRCxDQUFkO0FBQ0FsQixxQkFBTyxDQUFDQyxHQUFSLENBQVlnQixRQUFaO0FBUnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVXpCakIscUJBQU8sQ0FBQ0MsR0FBUjs7QUFWeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBcEJVLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUQsMkVBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG9FQUFoQjtBQUFBLDhCQUNFO0FBQUEsbUJBQU9oQixhQUFhLENBQUN5QixVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsaUJBQVMsRUFBRVQsMEVBRGI7QUFFRSxlQUFPLEVBQUUsbUJBQU07QUFDYkgsb0NBQTBCLENBQUMsVUFBQ1csU0FBRDtBQUFBLG1CQUFlLENBQUNBLFNBQWhCO0FBQUEsV0FBRCxDQUExQjtBQUNELFNBSkg7QUFBQSxnQ0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixFQU9HVix1QkFBdUIsR0FBRyxpQkFBSCxHQUF1QixnQkFQakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRTtBQUFLLGVBQVMsRUFBRUUsOEVBQWhCO0FBQUEsZ0JBQ0daLGtCQURILGFBQ0dBLGtCQURILGdEQUNHQSxrQkFBa0IsQ0FBRXNCLElBRHZCLDBEQUNHLHNCQUEwQkMsU0FBMUIsQ0FBb0NDLEdBQXBDLENBQXdDLFVBQUNDLE9BQUQsRUFBYTtBQUNwRCw0QkFBTyw4REFBQyxrREFBRDtBQUFjLGlCQUFPLEVBQUVBO0FBQXZCLFdBQXFDQSxPQUFPLENBQUNDLEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLEVBa0JHMUIsa0JBQWtCLENBQUNxQixVQUFuQixHQUFnQ00sK0RBQWhDLGlCQUNDO0FBQUssZUFBUyxFQUFFZix5RUFBaEI7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsb0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0F0RXVCbEIsYTtVQU1QVSxrRDs7O0tBTk9WLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmY1ZTBmNTI3ZDUxZWIwODkwODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lubmVyU2VhcmNoUmVzdWx0cywgc2V0SW5uZXJTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKHNlYXJjaFJlc3VsdHMpO1xuXG4gIGNvbnNvbGUubG9nKCdpbm5lcicsIGlubmVyU2VhcmNoUmVzdWx0cyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbm5lclNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cyk7XG4gIH0sIFtzZWFyY2hSZXN1bHRzXSk7XG5cbiAgY29uc3QgeyBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCwgYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgfSA9XG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG4gIGlmICghc2VhcmNoUmVzdWx0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChzZWFyY2hSZXN1bHRzLmNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub1Jlc3VsdHN9PlxuICAgICAgICAgIE5vIHJlc3VsdCBmb3VuZC4gVHJ5IGEgY29tcGFueSBvciBicmFuZCBuYW1lIG9yIHVzZSBhIGRpZmZlcmVudFxuICAgICAgICAgIGtleXdvcmQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGdldE1vcmVTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaGAsIHtcbiAgICAgICAgcGFyYW1zOiB7IC4uLnJvdXRlci5xdWVyeSwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57c2VhcmNoUmVzdWx0cy50b3RhbENvdW50fSBUb3RhbCByZXN1bHRzPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcGVuQWxsQ2FyZHN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICB7YXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgPyAnQ2xvc2UgYWxsIGNhcmRzJyA6ICdPcGVuIGFsbCBjYXJkcyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c0NvbnRhaW5lcn0+XG4gICAgICAgIHtpbm5lclNlYXJjaFJlc3VsdHM/LmRhdGE/LmNvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdCBjb21wYW55PXtjb21wYW55fSBrZXk9e2NvbXBhbnkuaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2lubmVyU2VhcmNoUmVzdWx0cy50b3RhbENvdW50ID4gQ09NUEFOSUVTX1BFUl9QQUdFICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheU1vcmV9PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dldE1vcmVTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=