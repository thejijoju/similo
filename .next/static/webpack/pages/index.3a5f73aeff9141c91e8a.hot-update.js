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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(searchResults),
      innerSearchResults = _useState2[0],
      setInnerSearchResults = _useState2[1];

  console.log(innerSearchResults);
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
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
        lineNumber: 53,
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
          lineNumber: 60,
          columnNumber: 11
        }, this), areCompanyCardsExpanded ? 'Close all cards' : 'Open all cards']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().resultsContainer),
      children: searchResults.data.companies.map(function (company) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_SearchResult__WEBPACK_IMPORTED_MODULE_8__.default, {
          company: company
        }, company.id, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), searchResults.totalCount > constants_index__WEBPACK_IMPORTED_MODULE_7__.COMPANIES_PER_PAGE && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().displayMore),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        onClick: getMoreSearchResults,
        children: "Display more results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(SearchResults, "BgASQ5+212UZtInHE2sg8wYhwb8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlubmVyU2VhcmNoUmVzdWx0cyIsInNldElubmVyU2VhcmNoUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIiwiY291bnQiLCJjbGFzc2VzIiwiZ2V0TW9yZVNlYXJjaFJlc3VsdHMiLCJxdWVyeSIsImF4aW9zIiwiQVBJX1VSTCIsInBhcmFtcyIsInBhZ2UiLCJyZXNwb25zZSIsInByZXZTdGF0ZSIsInRvdGFsQ291bnQiLCJkYXRhIiwiY29tcGFuaWVzIiwibWFwIiwiY29tcGFueSIsImlkIiwiQ09NUEFOSUVTX1BFUl9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjs7QUFBQSxrQkFDakJDLCtDQUFRLENBQUMsQ0FBRCxDQURTO0FBQUEsTUFDaERDLFdBRGdEO0FBQUEsTUFDbkNDLGNBRG1DOztBQUFBLG1CQUVIRiwrQ0FBUSxDQUFDRCxhQUFELENBRkw7QUFBQSxNQUVoREksa0JBRmdEO0FBQUEsTUFFNUJDLHFCQUY0Qjs7QUFJdkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxrQkFBWjtBQUVBLE1BQU1JLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBTnVELG9CQVNyREMs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UsIEFQSV9VUkwgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuL1NlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoeyBzZWFyY2hSZXN1bHRzIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lubmVyU2VhcmNoUmVzdWx0cywgc2V0SW5uZXJTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKHNlYXJjaFJlc3VsdHMpO1xuXG4gIGNvbnNvbGUubG9nKGlubmVyU2VhcmNoUmVzdWx0cyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBzZXRBcmVDb21wYW55Q2FyZHNFeHBhbmRlZCwgYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgfSA9XG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG4gIGlmICghc2VhcmNoUmVzdWx0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChzZWFyY2hSZXN1bHRzLmNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub1Jlc3VsdHN9PlxuICAgICAgICAgIE5vIHJlc3VsdCBmb3VuZC4gVHJ5IGEgY29tcGFueSBvciBicmFuZCBuYW1lIG9yIHVzZSBhIGRpZmZlcmVudFxuICAgICAgICAgIGtleXdvcmQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGdldE1vcmVTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaGAsIHtcbiAgICAgICAgcGFyYW1zOiB7IC4uLnJvdXRlci5xdWVyeSwgcGFnZTogY3VycmVudFBhZ2UgKyAxIH0sXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0c30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8c3Bhbj57c2VhcmNoUmVzdWx0cy50b3RhbENvdW50fSBUb3RhbCByZXN1bHRzPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcGVuQWxsQ2FyZHN9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QXJlQ29tcGFueUNhcmRzRXhwYW5kZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICB7YXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgPyAnQ2xvc2UgYWxsIGNhcmRzJyA6ICdPcGVuIGFsbCBjYXJkcyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0c0NvbnRhaW5lcn0+XG4gICAgICAgIHtzZWFyY2hSZXN1bHRzLmRhdGEuY29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8U2VhcmNoUmVzdWx0IGNvbXBhbnk9e2NvbXBhbnl9IGtleT17Y29tcGFueS5pZH0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoUmVzdWx0cy50b3RhbENvdW50ID4gQ09NUEFOSUVTX1BFUl9QQUdFICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheU1vcmV9PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dldE1vcmVTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIERpc3BsYXkgbW9yZSByZXN1bHRzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=