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
      companyExpertiseFilter = _useContext.companyExpertiseFilter;

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
      expertise: companyExpertiseFilter.join(',')
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
  }, [companySizeFilter]);
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
      lineNumber: 79,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

_s(Search, "RCfCqr2/Oj/+GgS4vTXUdCb9/7I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaC9pbmRleC5qc3giXSwibmFtZXMiOlsidGltZXIiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaGlkZVNlYXJjaFN1Z2dlc3Rpb25zIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2UiLCJjb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRTZWFyY2hTdWdnZXN0aW9ucyIsImV2ZW50Iiwia2V5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImF4aW9zIiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb21wYW5pZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJxdWVyeU9iamVjdCIsInRlcm0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwicGVyUGFnZSIsIkNPTVBBTklFU19QRVJfUEFHRSIsImNvbXBhbnlTaXplIiwiam9pbiIsImV4cGVydGlzZSIsInF1ZXJ5U3RyaW5nIiwicXMiLCJwdXNoIiwidXNlRWZmZWN0IiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULE9BS1o7QUFBQTs7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxhQUdDLFFBSERBLGFBR0M7QUFBQSxNQUZEQyxvQkFFQyxRQUZEQSxvQkFFQztBQUFBLE1BRERDLHFCQUNDLFFBRERBLHFCQUNDOztBQUFBLG9CQUVDQyxpREFBVSxDQUFDQyxnRUFBRCxDQUZYO0FBQUEsTUFDT0MsY0FEUCxlQUNPQSxjQURQO0FBQUEsTUFDdUJDLGlCQUR2QixlQUN1QkEsaUJBRHZCO0FBQUEsTUFDMENDLHNCQUQxQyxlQUMwQ0Esc0JBRDFDOztBQUdELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDdEMsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDekI7QUFDRDs7QUFDREMsZ0JBQVksQ0FBQ2hCLEtBQUQsQ0FBWjs7QUFFQSxRQUFJRSxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDckI7QUFDQSxhQUFPRSxvQkFBb0IsQ0FBQyxFQUFELENBQTNCO0FBQ0Q7O0FBQ0RKLFNBQUssR0FBR2lCLFVBQVUsQ0FBQyxZQUFNO0FBQ3ZCQyxzREFBQSxXQUNVQywrQ0FEVixnREFDdURqQixVQUR2RCxHQUVHa0IsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQmpCLDRCQUFvQixDQUFDaUIsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLFNBQXBCLENBQXBCO0FBQ0QsT0FKSCxXQUtTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsT0FMVDtBQU1ELEtBUGlCLEVBT2YsSUFQZSxDQUFsQjtBQVFELEdBbEJEOztBQW9CQSxNQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDYixLQUFELEVBQVc7QUFDeEIsUUFBSUEsS0FBSixFQUFXO0FBQ1RBLFdBQUssQ0FBQ2MsY0FBTjtBQUNEOztBQUNELFFBQUkxQixVQUFVLENBQUMyQixJQUFYLE9BQXNCLEVBQTFCLEVBQThCO0FBQzVCO0FBQ0Q7O0FBRUQsUUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxVQUFJLEVBQUVDLGtCQUFrQixDQUFDOUIsVUFBRCxDQUROO0FBRWxCK0IsVUFBSSxFQUFFLENBRlk7QUFHbEJDLGFBQU8sRUFBRUMsMERBSFM7QUFJbEJDLGlCQUFXLEVBQUUzQixpQkFBaUIsQ0FBQzRCLElBQWxCLENBQXVCLElBQXZCLENBSks7QUFLbEJDLGVBQVMsRUFBRTVCLHNCQUFzQixDQUFDMkIsSUFBdkIsQ0FBNEIsR0FBNUI7QUFMTyxLQUFwQjtBQU9BLFFBQU1FLFdBQVcsR0FBR0MsbURBQUEsQ0FBYVYsV0FBYixDQUFwQjtBQUVBdEIsa0JBQWMsQ0FBQyxDQUFELENBQWQ7QUFDQUgseUJBQXFCO0FBQ3JCVyxnQkFBWSxDQUFDaEIsS0FBRCxDQUFaO0FBQ0FXLFVBQU0sQ0FBQzhCLElBQVAsYUFDT0YsV0FEUDtBQUVFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFOSTtBQVFELEdBNUJEOztBQThCQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RmLFVBQU07QUFDUCxHQUZRLEVBRU4sQ0FBQ2xCLGlCQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQU0sWUFBUSxFQUFFa0IsTUFBaEI7QUFBd0IsYUFBUyxFQUFFZ0IsbUVBQW5DO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFXLEVBQUMsK0NBRmQ7QUFHRSxlQUFTLEVBQUVBLHNFQUhiO0FBSUUsV0FBSyxFQUFFekMsVUFKVDtBQUtFLGNBQVEsRUFBRSxrQkFBQ1ksS0FBRDtBQUFBLGVBQVdYLGFBQWEsQ0FBQ1csS0FBSyxDQUFDOEIsTUFBTixDQUFhQyxLQUFkLENBQXhCO0FBQUEsT0FMWjtBQU1FLGFBQU8sRUFBRWhDO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQTVFdUJaLE07VUFRUFcsa0Q7OztLQVJPWCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWU5ZTQzYmQ4NDNkOGNiODQ3YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9pbmRleCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMLCBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7XG4gIHNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFRlcm0sXG4gIHNldFNlYXJjaFN1Z2dlc3Rpb25zLFxuICBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMsXG59KSB7XG4gIGNvbnN0IHsgc2V0Q3VycmVudFBhZ2UsIGNvbXBhbnlTaXplRmlsdGVyLCBjb21wYW55RXhwZXJ0aXNlRmlsdGVyIH0gPVxuICAgIHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBnZXRTZWFyY2hTdWdnZXN0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgICByZXR1cm4gc2V0U2VhcmNoU3VnZ2VzdGlvbnMoW10pO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoL3N1Z2dlc3Rpb25zP3Rlcm09JHtzZWFyY2hUZXJtfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFN1Z2dlc3Rpb25zKHJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaFRlcm0udHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5T2JqZWN0ID0ge1xuICAgICAgdGVybTogZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRlcm0pLFxuICAgICAgcGFnZTogMCxcbiAgICAgIHBlclBhZ2U6IENPTVBBTklFU19QRVJfUEFHRSxcbiAgICAgIGNvbXBhbnlTaXplOiBjb21wYW55U2l6ZUZpbHRlci5qb2luKCcsfCcpLFxuICAgICAgZXhwZXJ0aXNlOiBjb21wYW55RXhwZXJ0aXNlRmlsdGVyLmpvaW4oJywnKSxcbiAgICB9O1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHF1ZXJ5T2JqZWN0KTtcblxuICAgIHNldEN1cnJlbnRQYWdlKDApO1xuICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICBgLz8ke3F1ZXJ5U3RyaW5nfWBcbiAgICAgIC8qIGAvP3Rlcm09JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlYXJjaFRlcm1cbiAgICAgICl9JnBhZ2U9MCZwZXJQYWdlPSR7Q09NUEFOSUVTX1BFUl9QQUdFfWAgICxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9ICovXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpO1xuICB9LCBbY29tcGFueVNpemVGaWx0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2h9IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2h9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVVwPXtnZXRTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==