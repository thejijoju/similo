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
  }, [companySizeFilter, companyExpertiseFilter]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaC9pbmRleC5qc3giXSwibmFtZXMiOlsidGltZXIiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaGlkZVNlYXJjaFN1Z2dlc3Rpb25zIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2UiLCJjb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRTZWFyY2hTdWdnZXN0aW9ucyIsImV2ZW50Iiwia2V5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImF4aW9zIiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb21wYW5pZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJxdWVyeU9iamVjdCIsInRlcm0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwicGVyUGFnZSIsIkNPTVBBTklFU19QRVJfUEFHRSIsImNvbXBhbnlTaXplIiwiam9pbiIsImV4cGVydGlzZSIsInF1ZXJ5U3RyaW5nIiwicXMiLCJwdXNoIiwidXNlRWZmZWN0IiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULE9BS1o7QUFBQTs7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxhQUdDLFFBSERBLGFBR0M7QUFBQSxNQUZEQyxvQkFFQyxRQUZEQSxvQkFFQztBQUFBLE1BRERDLHFCQUNDLFFBRERBLHFCQUNDOztBQUFBLG9CQUVDQyxpREFBVSxDQUFDQyxnRUFBRCxDQUZYO0FBQUEsTUFDT0MsY0FEUCxlQUNPQSxjQURQO0FBQUEsTUFDdUJDLGlCQUR2QixlQUN1QkEsaUJBRHZCO0FBQUEsTUFDMENDLHNCQUQxQyxlQUMwQ0Esc0JBRDFDOztBQUdELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDdEMsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDekI7QUFDRDs7QUFDREMsZ0JBQVksQ0FBQ2hCLEtBQUQsQ0FBWjs7QUFFQSxRQUFJRSxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDckI7QUFDQSxhQUFPRSxvQkFBb0IsQ0FBQyxFQUFELENBQTNCO0FBQ0Q7O0FBQ0RKLFNBQUssR0FBR2lCLFVBQVUsQ0FBQyxZQUFNO0FBQ3ZCQyxzREFBQSxXQUNVQywrQ0FEVixnREFDdURqQixVQUR2RCxHQUVHa0IsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQmpCLDRCQUFvQixDQUFDaUIsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLFNBQXBCLENBQXBCO0FBQ0QsT0FKSCxXQUtTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsT0FMVDtBQU1ELEtBUGlCLEVBT2YsSUFQZSxDQUFsQjtBQVFELEdBbEJEOztBQW9CQSxNQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDYixLQUFELEVBQVc7QUFDeEIsUUFBSUEsS0FBSixFQUFXO0FBQ1RBLFdBQUssQ0FBQ2MsY0FBTjtBQUNEOztBQUNELFFBQUkxQixVQUFVLENBQUMyQixJQUFYLE9BQXNCLEVBQTFCLEVBQThCO0FBQzVCO0FBQ0Q7O0FBRUQsUUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxVQUFJLEVBQUVDLGtCQUFrQixDQUFDOUIsVUFBRCxDQUROO0FBRWxCK0IsVUFBSSxFQUFFLENBRlk7QUFHbEJDLGFBQU8sRUFBRUMsMERBSFM7QUFJbEJDLGlCQUFXLEVBQUUzQixpQkFBaUIsQ0FBQzRCLElBQWxCLENBQXVCLElBQXZCLENBSks7QUFLbEJDLGVBQVMsRUFBRTVCLHNCQUFzQixDQUFDMkIsSUFBdkIsQ0FBNEIsR0FBNUI7QUFMTyxLQUFwQjtBQU9BLFFBQU1FLFdBQVcsR0FBR0MsbURBQUEsQ0FBYVYsV0FBYixDQUFwQjtBQUVBdEIsa0JBQWMsQ0FBQyxDQUFELENBQWQ7QUFDQUgseUJBQXFCO0FBQ3JCVyxnQkFBWSxDQUFDaEIsS0FBRCxDQUFaO0FBQ0FXLFVBQU0sQ0FBQzhCLElBQVAsYUFDT0YsV0FEUDtBQUVFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFOSTtBQVFELEdBNUJEOztBQThCQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RmLFVBQU07QUFDUCxHQUZRLEVBRU4sQ0FBQ2xCLGlCQUFELEVBQW9CQyxzQkFBcEIsQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBTSxZQUFRLEVBQUVpQixNQUFoQjtBQUF3QixhQUFTLEVBQUVnQixtRUFBbkM7QUFBQSwyQkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsaUJBQVcsRUFBQywrQ0FGZDtBQUdFLGVBQVMsRUFBRUEsc0VBSGI7QUFJRSxXQUFLLEVBQUV6QyxVQUpUO0FBS0UsY0FBUSxFQUFFLGtCQUFDWSxLQUFEO0FBQUEsZUFBV1gsYUFBYSxDQUFDVyxLQUFLLENBQUM4QixNQUFOLENBQWFDLEtBQWQsQ0FBeEI7QUFBQSxPQUxaO0FBTUUsYUFBTyxFQUFFaEM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBNUV1QlosTTtVQVFQVyxrRDs7O0tBUk9YLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNDk3YmVlZTE2ODY0OTJiYWNhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2luZGV4JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwsIENPTVBBTklFU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmxldCB0aW1lcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHtcbiAgc2VhcmNoVGVybSxcbiAgc2V0U2VhcmNoVGVybSxcbiAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMsXG4gIGhpZGVTZWFyY2hTdWdnZXN0aW9ucyxcbn0pIHtcbiAgY29uc3QgeyBzZXRDdXJyZW50UGFnZSwgY29tcGFueVNpemVGaWx0ZXIsIGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIgfSA9XG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldFNlYXJjaFN1Z2dlc3Rpb25zID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICAgIHJldHVybiBzZXRTZWFyY2hTdWdnZXN0aW9ucyhbXSk7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnM/dGVybT0ke3NlYXJjaFRlcm19YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMocmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlPYmplY3QgPSB7XG4gICAgICB0ZXJtOiBlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybSksXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGVyUGFnZTogQ09NUEFOSUVTX1BFUl9QQUdFLFxuICAgICAgY29tcGFueVNpemU6IGNvbXBhbnlTaXplRmlsdGVyLmpvaW4oJyx8JyksXG4gICAgICBleHBlcnRpc2U6IGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIuam9pbignLCcpLFxuICAgIH07XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkocXVlcnlPYmplY3QpO1xuXG4gICAgc2V0Q3VycmVudFBhZ2UoMCk7XG4gICAgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByb3V0ZXIucHVzaChcbiAgICAgIGAvPyR7cXVlcnlTdHJpbmd9YFxuICAgICAgLyogYC8/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgc2VhcmNoVGVybVxuICAgICAgKX0mcGFnZT0wJnBlclBhZ2U9JHtDT01QQU5JRVNfUEVSX1BBR0V9YCAgLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgeyBzaGFsbG93OiB0cnVlIH0gKi9cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VhcmNoKCk7XG4gIH0sIFtjb21wYW55U2l6ZUZpbHRlciwgY29tcGFueUV4cGVydGlzZUZpbHRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaH0gY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaH0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgY29tcGFueSBvciBicmFuZCBkbyB5b3Ugd2FudCB0byBjb21wYXJlP1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5VXA9e2dldFNlYXJjaFN1Z2dlc3Rpb25zfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9