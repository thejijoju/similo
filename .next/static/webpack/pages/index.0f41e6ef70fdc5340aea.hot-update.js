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
      companyExpertiseFilter = _useContext.companyExpertiseFilter;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var expertiseFilters = router.query.expertise ? router.query.expertise.split(',') : [];
    console.log(setCompanyExpertiseFilter);
    setCompanyExpertiseFilter(companyExpertiseFilter);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_4__.default, {
        expertise: expertise
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(HomePage, "qXlhM879aTsumfnrY14GS29Rtfg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwic2VhcmNoUmVzdWx0cyIsImV4cGVydGlzZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldENvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJjb21wYW55RXhwZXJ0aXNlRmlsdGVyIiwidXNlRWZmZWN0IiwiZXhwZXJ0aXNlRmlsdGVycyIsInF1ZXJ5Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7O0FBR2UsU0FBU0EsUUFBVCxPQUFnRDtBQUFBOztBQUFBLE1BQTVCQyxhQUE0QixRQUE1QkEsYUFBNEI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFENkQsb0JBSTNEQyxpREFBVSxDQUFDQyxnRUFBRCxDQUppRDtBQUFBLE1BR3JEQyx5QkFIcUQsZUFHckRBLHlCQUhxRDtBQUFBLE1BRzFCQyxzQkFIMEIsZUFHMUJBLHNCQUgwQjs7QUFNN0RDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGdCQUFnQixHQUFHUCxNQUFNLENBQUNRLEtBQVAsQ0FBYVQsU0FBYixHQUNyQkMsTUFBTSxDQUFDUSxLQUFQLENBQWFULFNBQWIsQ0FBdUJVLEtBQXZCLENBQTZCLEdBQTdCLENBRHFCLEdBRXJCLEVBRko7QUFHQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLHlCQUFaO0FBQ0FBLDZCQUF5QixDQUFDQyxzQkFBRCxDQUF6QjtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU8scUVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQU0sZUFBUyxFQUFFQSxpRUFBakI7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFTLGlCQUFTLEVBQUViO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDhEQUFEO0FBQWUscUJBQWEsRUFBRUQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBekJ1QkQsUTtVQUNQSSxrRDs7O0tBRE9KLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGY0MWU2ZWY3MGZkYzUzNDBhZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5pbXBvcnQgRmlsdGVycyBmcm9tICdAL2NvbXBvbmVudHMvRmlsdGVycyc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJztcclxuXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0L2luZGV4JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgc2VhcmNoUmVzdWx0cywgZXhwZXJ0aXNlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLCBjb21wYW55RXhwZXJ0aXNlRmlsdGVyIH0gPVxyXG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBleHBlcnRpc2VGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmV4cGVydGlzZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5leHBlcnRpc2Uuc3BsaXQoJywnKVxyXG4gICAgICA6IFtdO1xyXG4gICAgY29uc29sZS5sb2coc2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcik7XHJcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyKGNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkhvbWVQYWdlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpbWlsbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgIDxGaWx0ZXJzIGV4cGVydGlzZT17ZXhwZXJ0aXNlfSAvPlxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHNlYXJjaFJlc3VsdHM9e3NlYXJjaFJlc3VsdHN9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgdGVybSB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgbGV0IHNlYXJjaFJlc3VsdHM7XHJcblxyXG4gIGlmICghdGVybSkge1xyXG4gICAgc2VhcmNoUmVzdWx0cyA9IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoPyR7cXMuc3RyaW5naWZ5KGNvbnRleHQucXVlcnkpfWBcclxuICAgICk7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHBlcnRpc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL2V4cGVydGlzZWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VhcmNoUmVzdWx0cyxcclxuICAgICAgZXhwZXJ0aXNlOiBleHBlcnRpc2UuZGF0YS5kYXRhLmV4cGVydGlzZSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9