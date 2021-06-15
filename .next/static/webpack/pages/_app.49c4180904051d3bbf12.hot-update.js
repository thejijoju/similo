self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header/Search/index.jsx":
/*!***************************************************!*\
  !*** ./components/Layout/Header/Search/index.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/index */ "./context/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/Search/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Layout\\Header\\Search\\index.jsx",
    _s = $RefreshSig$();








var timer;
function Search(_ref) {
  _s();

  var searchTerm = _ref.searchTerm,
      setSearchTerm = _ref.setSearchTerm,
      setSearchSuggestions = _ref.setSearchSuggestions,
      hideSearchSuggestions = _ref.hideSearchSuggestions;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_5__.SearchResultsContext),
      setCurrentPage = _useContext.setCurrentPage,
      companySizeFilter = _useContext.companySizeFilter,
      companyExpertiseFilter = _useContext.companyExpertiseFilter,
      companyTypeFilter = _useContext.companyTypeFilter;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var getSearchSuggestions = function getSearchSuggestions(event) {
    if (event.key === 'Enter') {
      return;
    }

    clearTimeout(timer);

    if (searchTerm === '') {
      // eslint-disable-next-line consistent-return
      return setSearchSuggestions([]);
    }

    timer = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL, "/companies/search/suggestions?term=").concat(searchTerm)).then(function (response) {
        setSearchSuggestions(response.data.data.companies);
      })["catch"](function (error) {
        return console.log(error);
      });
    }, 1000);
  };

  var search = function search(event) {
    if (event) {
      event.preventDefault();
    }

    if (searchTerm.trim() === '') {
      return;
    }

    var queryObject = {
      term: encodeURIComponent(searchTerm),
      page: 0,
      perPage: _constants__WEBPACK_IMPORTED_MODULE_6__.COMPANIES_PER_PAGE,
      companySize: companySizeFilter.join(',|'),
      expertise: companyExpertiseFilter.join(','),
      companyType: companyTypeFilter.join(',')
    };
    var queryString = qs__WEBPACK_IMPORTED_MODULE_4___default().stringify(queryObject);
    setCurrentPage(0);
    hideSearchSuggestions();
    clearTimeout(timer);
    router.push("/?".concat(queryString)
    /* `/?term=${encodeURIComponent(
      searchTerm
    )}&page=0&perPage=${COMPANIES_PER_PAGE}`  ,
    undefined,
    { shallow: true } */
    );
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    search();
  }, [companySizeFilter, companyExpertiseFilter, companyTypeFilter]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: search,
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Search),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      placeholder: "What company or brand do you want to compare?",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchBar),
      value: searchTerm,
      onChange: function onChange(event) {
        return setSearchTerm(event.target.value);
      },
      onKeyUp: getSearchSuggestions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(Search, "H4aYntxTeWkovRNjIG0W+Z5WIYQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaC9pbmRleC5qc3giXSwibmFtZXMiOlsidGltZXIiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaGlkZVNlYXJjaFN1Z2dlc3Rpb25zIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2UiLCJjb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJjb21wYW55VHlwZUZpbHRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImdldFNlYXJjaFN1Z2dlc3Rpb25zIiwiZXZlbnQiLCJrZXkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbXBhbmllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInF1ZXJ5T2JqZWN0IiwidGVybSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhZ2UiLCJwZXJQYWdlIiwiQ09NUEFOSUVTX1BFUl9QQUdFIiwiY29tcGFueVNpemUiLCJqb2luIiwiZXhwZXJ0aXNlIiwiY29tcGFueVR5cGUiLCJxdWVyeVN0cmluZyIsInFzIiwicHVzaCIsInVzZUVmZmVjdCIsImNsYXNzZXMiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKO0FBRWUsU0FBU0MsTUFBVCxPQUtaO0FBQUE7O0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsYUFHQyxRQUhEQSxhQUdDO0FBQUEsTUFGREMsb0JBRUMsUUFGREEsb0JB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LE07VUFZUFksa0Q7OztLQVpPWixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDljNDE4MDkwNDA1MWQzYmJmMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9pbmRleCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMLCBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7XG4gIHNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFN1Z2dlc3Rpb25zLFxuICBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMsXG59KSB7XG4gIGNvbnN0IHtcbiAgICBzZXRDdXJyZW50UGFnZSxcbiAgICBjb21wYW55U2l6ZUZpbHRlcixcbiAgICBjb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldFNlYXJjaFN1Z2dlc3Rpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICAgIHJldHVybiBzZXRTZWFyY2hTdWdnZXN0aW9ucyhbXSk7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnM/dGVybT0ke3NlYXJjaFRlcm19YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMocmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlPYmplY3QgPSB7XG4gICAgICB0ZXJtOiBlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybSksXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGVyUGFnZTogQ09NUEFOSUVTX1BFUl9QQUdFLFxuICAgICAgY29tcGFueVNpemU6IGNvbXBhbnlTaXplRmlsdGVyLmpvaW4oJyx8JyksXG4gICAgICBleHBlcnRpc2U6IGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIuam9pbignLCcpLFxuICAgICAgY29tcGFueVR5cGU6IGNvbXBhbnlUeXBlRmlsdGVyLmpvaW4oJywnKSxcbiAgICB9O1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHF1ZXJ5T2JqZWN0KTtcblxuICAgIHNldEN1cnJlbnRQYWdlKDApO1xuICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICBgLz8ke3F1ZXJ5U3RyaW5nfWBcbiAgICAgIC8qIGAvP3Rlcm09JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlYXJjaFRlcm1cbiAgICAgICl9JnBhZ2U9MCZwZXJQYWdlPSR7Q09NUEFOSUVTX1BFUl9QQUdFfWAgICxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9ICovXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpO1xuICB9LCBbY29tcGFueVNpemVGaWx0ZXIsIGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIsIGNvbXBhbnlUeXBlRmlsdGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNofSBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNofT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBjb21wYW55IG9yIGJyYW5kIGRvIHlvdSB3YW50IHRvIGNvbXBhcmU/XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlVcD17Z2V0U2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=