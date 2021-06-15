self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Filters */ "./components/Filters/index.jsx");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchResults */ "./components/SearchResults/index.jsx");
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/index */ "./context/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./pages/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\pages\\index.jsx",
    _s = $RefreshSig$();








var __N_SSP = true;
function HomePage(_ref) {
  _s();

  var searchResults = _ref.searchResults,
      expertise = _ref.expertise;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_6__.SearchResultsContext),
      setCompanyExpertiseFilter = _useContext.setCompanyExpertiseFilter,
      setCompanySizeFilter = _useContext.setCompanySizeFilter,
      setCompanyRevenueFilter = _useContext.setCompanyRevenueFilter,
      setCompanyTypeFilter = _useContext.setCompanyTypeFilter;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var expertiseFilters = router.query.expertise ? router.query.expertise.split(',') : [];
    setCompanyExpertiseFilter(expertiseFilters);
    var typeFilters = router.query.companyType ? router.query.companyType.split(',') : [];
    setCompanyTypeFilter(typeFilters);
    var sizeFilters = router.query.companySize ? router.query.companySize.split(',|') : [];
    setCompanySizeFilter(sizeFilters);
    var revenueFilters = router.query.revenue ? router.query.revenue.split(',|') : [];
    setCompanyRevenueFilter(revenueFilters);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_4__.default, {
        expertise: expertise
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(HomePage, "fWJH0ez+QRQDIGlXKv6Ygptv/8I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwic2VhcmNoUmVzdWx0cyIsImV4cGVydGlzZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldENvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJzZXRDb21wYW55U2l6ZUZpbHRlciIsInNldENvbXBhbnlSZXZlbnVlRmlsdGVyIiwic2V0Q29tcGFueVR5cGVGaWx0ZXIiLCJ1c2VFZmZlY3QiLCJleHBlcnRpc2VGaWx0ZXJzIiwicXVlcnkiLCJzcGxpdCIsInR5cGVGaWx0ZXJzIiwiY29tcGFueVR5cGUiLCJzaXplRmlsdGVycyIsImNvbXBhbnlTaXplIiwicmV2ZW51ZUZpbHRlcnMiLCJyZXZlbnVlIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7O0FBR2UsU0FBU0EsUUFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQTVCQyxhQUE0QixRQUE1QkEsYUFBNEI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFENkQsb0JBUXpEQyxpREFBVSxDQUFDQyxnRUFBRCxDQVIrQztBQUFBLE1BSTNEQyx5QkFKMkQsZUFJM0RBLHlCQUoyRDtBQUFBLE1BSzNEQyxvQkFMMkQsZUFLM0RBLG9CQUwyRDtBQUFBLE1BTTNEQyx1QkFOMkQsZUFNM0RBLHVCQU4yRDtBQUFBLE1BTzNEQyxvQkFQMkQsZUFPM0RBLG9CQVAyRDs7QUFVN0RDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGdCQUFnQixHQUFHVCxNQUFNLENBQUNVLEtBQVAsQ0FBYVgsU0FBYixHQUNyQkMsTUFBTSxDQUFDVSxLQUFQLENBQWFYLFNBQWIsQ0FBdUJZLEtBQXZCLENBQTZCLEdBQTdCLENBRHFCLEdBRXJCLEVBRko7QUFHQVAsNkJBQXlCLENBQUNLLGdCQUFELENBQXpCO0FBRUEsUUFBTUcsV0FBVyxHQUFHWixNQUFNLENBQUNVLEtBQVAsQ0FBYUcsV0FBYixHQUNoQmIsTUFBTSxDQUFDVSxLQUFQLENBQWFHLFdBQWIsQ0FBeUJGLEtBQXpCLENBQStCLEdBQS9CLENBRGdCLEdBRWhCLEVBRko7QUFHQUosd0JBQW9CLENBQUNLLFdBQUQsQ0FBcEI7QUFFQSxRQUFNRSxXQUFXLEdBQUdkLE1BQU0sQ0FBQ1UsS0FBUCxDQUFhSyxXQUFiLEdBQ2hCZixNQUFNLENBQUNVLEtBQVAsQ0FBYUssV0FBYixDQUF5QkosS0FBekIsQ0FBK0IsSUFBL0IsQ0FEZ0IsR0FFaEIsRUFGSjtBQUdBTix3QkFBb0IsQ0FBQ1MsV0FBRCxDQUFwQjtBQUVBLFFBQU1FLGNBQWMsR0FBR2hCLE1BQU0sQ0FBQ1UsS0FBUCxDQUFhTyxPQUFiLEdBQ25CakIsTUFBTSxDQUFDVSxLQUFQLENBQWFPLE9BQWIsQ0FBcUJOLEtBQXJCLENBQTJCLElBQTNCLENBRG1CLEdBRW5CLEVBRko7QUFHQUwsMkJBQXVCLENBQUNVLGNBQUQsQ0FBdkI7QUFDRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFUO0FBc0JBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSxxRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVBLGlFQUFqQjtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBRW5CO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDhEQUFEO0FBQWUscUJBQWEsRUFBRUQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBM0N1QkQsUTtVQUNQSSxrRDs7O0tBRE9KLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTc3ZjZmZjU3YzhkMjZhMWI0MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5pbXBvcnQgRmlsdGVycyBmcm9tICdAL2NvbXBvbmVudHMvRmlsdGVycyc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJztcclxuXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgc2VhcmNoUmVzdWx0cywgZXhwZXJ0aXNlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcixcclxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyLFxyXG4gICAgc2V0Q29tcGFueVJldmVudWVGaWx0ZXIsXHJcbiAgICBzZXRDb21wYW55VHlwZUZpbHRlcixcclxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBleHBlcnRpc2VGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmV4cGVydGlzZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5leHBlcnRpc2Uuc3BsaXQoJywnKVxyXG4gICAgICA6IFtdO1xyXG4gICAgc2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcihleHBlcnRpc2VGaWx0ZXJzKTtcclxuXHJcbiAgICBjb25zdCB0eXBlRmlsdGVycyA9IHJvdXRlci5xdWVyeS5jb21wYW55VHlwZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5jb21wYW55VHlwZS5zcGxpdCgnLCcpXHJcbiAgICAgIDogW107XHJcbiAgICBzZXRDb21wYW55VHlwZUZpbHRlcih0eXBlRmlsdGVycyk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZUZpbHRlcnMgPSByb3V0ZXIucXVlcnkuY29tcGFueVNpemVcclxuICAgICAgPyByb3V0ZXIucXVlcnkuY29tcGFueVNpemUuc3BsaXQoJyx8JylcclxuICAgICAgOiBbXTtcclxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyKHNpemVGaWx0ZXJzKTtcclxuXHJcbiAgICBjb25zdCByZXZlbnVlRmlsdGVycyA9IHJvdXRlci5xdWVyeS5yZXZlbnVlXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LnJldmVudWUuc3BsaXQoJyx8JylcclxuICAgICAgOiBbXTtcclxuICAgIHNldENvbXBhbnlSZXZlbnVlRmlsdGVyKHJldmVudWVGaWx0ZXJzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ib21lUGFnZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaW1pbG88L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICA8RmlsdGVycyBleHBlcnRpc2U9e2V4cGVydGlzZX0gLz5cclxuICAgICAgICA8U2VhcmNoUmVzdWx0cyBzZWFyY2hSZXN1bHRzPXtzZWFyY2hSZXN1bHRzfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHRlcm0gfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGxldCBzZWFyY2hSZXN1bHRzO1xyXG5cclxuICBpZiAoIXRlcm0pIHtcclxuICAgIHNlYXJjaFJlc3VsdHMgPSBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaD8ke3FzLnN0cmluZ2lmeShjb250ZXh0LnF1ZXJ5KX1gXHJcbiAgICApO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhwZXJ0aXNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9leHBlcnRpc2VgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgIGV4cGVydGlzZTogZXhwZXJ0aXNlLmRhdGEuZGF0YS5leHBlcnRpc2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==