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
      companyTypeFilter = _useContext.companyTypeFilter,
      companyRevenueFilter = _useContext.companyRevenueFilter;

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

    var revenue = companyRevenueFilter.map(function (elem) {
      return elem.replace(/,/g, '');
    });
    console.log(companySizeFilter);
    var queryObject = {
      term: encodeURIComponent(searchTerm),
      page: 0,
      perPage: _constants__WEBPACK_IMPORTED_MODULE_6__.COMPANIES_PER_PAGE,
      companySize: companySizeFilter.join(',|'),
      expertise: companyExpertiseFilter.join(','),
      companyType: companyTypeFilter.join(','),
      revenue: revenue.join(',')
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
  }, [companySizeFilter, companyExpertiseFilter, companyTypeFilter, companyRevenueFilter]);
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
      lineNumber: 94,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(Search, "B3L+DHsSS7IHQNEFVfmenOvfb10=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaC9pbmRleC5qc3giXSwibmFtZXMiOlsidGltZXIiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaGlkZVNlYXJjaFN1Z2dlc3Rpb25zIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2UiLCJjb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJjb21wYW55VHlwZUZpbHRlciIsImNvbXBhbnlSZXZlbnVlRmlsdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJldmVudCIsImtleSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwicmV2ZW51ZSIsIm1hcCIsImVsZW0iLCJyZXBsYWNlIiwicXVlcnlPYmplY3QiLCJ0ZXJtIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsInBlclBhZ2UiLCJDT01QQU5JRVNfUEVSX1BBR0UiLCJjb21wYW55U2l6ZSIsImpvaW4iLCJleHBlcnRpc2UiLCJjb21wYW55VHlwZSIsInF1ZXJ5U3RyaW5nIiwicXMiLCJwdXNoIiwidXNlRWZmZWN0IiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULE9BS1o7QUFBQTs7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVB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aUIsTUFBaEI7QUFBd0IsYUFBUyxFQUFFcUIsbUVBQW5DO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFXLEVBQUMsK0NBRmQ7QUFHRSxlQUFTLEVBQUVBLHNFQUhiO0FBSUUsV0FBSyxFQUFFaEQsVUFKVDtBQUtFLGNBQVEsRUFBRSxrQkFBQ2MsS0FBRDtBQUFBLGVBQVdiLGFBQWEsQ0FBQ2EsS0FBSyxDQUFDbUMsTUFBTixDQUFhQyxLQUFkLENBQXhCO0FBQUEsT0FMWjtBQU1FLGFBQU8sRUFBRXJDO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQTNGdUJkLE07VUFhUGEsa0Q7OztLQWJPYixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjgzMGJjZTc0NThkNjE5MGQ2M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9pbmRleCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMLCBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7XG4gIHNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFN1Z2dlc3Rpb25zLFxuICBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMsXG59KSB7XG4gIGNvbnN0IHtcbiAgICBzZXRDdXJyZW50UGFnZSxcbiAgICBjb21wYW55U2l6ZUZpbHRlcixcbiAgICBjb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICAgIGNvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldFNlYXJjaFN1Z2dlc3Rpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICAgIHJldHVybiBzZXRTZWFyY2hTdWdnZXN0aW9ucyhbXSk7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnM/dGVybT0ke3NlYXJjaFRlcm19YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMocmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmV2ZW51ZSA9IGNvbXBhbnlSZXZlbnVlRmlsdGVyLm1hcCgoZWxlbSkgPT4gZWxlbS5yZXBsYWNlKC8sL2csICcnKSk7XG4gICAgY29uc29sZS5sb2coY29tcGFueVNpemVGaWx0ZXIpO1xuXG4gICAgY29uc3QgcXVlcnlPYmplY3QgPSB7XG4gICAgICB0ZXJtOiBlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybSksXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGVyUGFnZTogQ09NUEFOSUVTX1BFUl9QQUdFLFxuICAgICAgY29tcGFueVNpemU6IGNvbXBhbnlTaXplRmlsdGVyLmpvaW4oJyx8JyksXG4gICAgICBleHBlcnRpc2U6IGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIuam9pbignLCcpLFxuICAgICAgY29tcGFueVR5cGU6IGNvbXBhbnlUeXBlRmlsdGVyLmpvaW4oJywnKSxcbiAgICAgIHJldmVudWU6IHJldmVudWUuam9pbignLCcpLFxuICAgIH07XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkocXVlcnlPYmplY3QpO1xuXG4gICAgc2V0Q3VycmVudFBhZ2UoMCk7XG4gICAgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByb3V0ZXIucHVzaChcbiAgICAgIGAvPyR7cXVlcnlTdHJpbmd9YFxuICAgICAgLyogYC8/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgc2VhcmNoVGVybVxuICAgICAgKX0mcGFnZT0wJnBlclBhZ2U9JHtDT01QQU5JRVNfUEVSX1BBR0V9YCAgLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgeyBzaGFsbG93OiB0cnVlIH0gKi9cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VhcmNoKCk7XG4gIH0sIFtcbiAgICBjb21wYW55U2l6ZUZpbHRlcixcbiAgICBjb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICAgIGNvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2h9IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2h9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVVwPXtnZXRTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==