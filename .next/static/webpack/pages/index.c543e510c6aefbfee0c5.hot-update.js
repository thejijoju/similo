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
      setCompanySizeFilter = _useContext.setCompanySizeFilter;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var expertiseFilters = router.query.expertise ? router.query.expertise.split(',') : [];
    setCompanyExpertiseFilter(expertiseFilters);
    var sizeFilters = router.query.companySize ? router.query.companySize.split(',') : [];
    setCompanySizeFilter(sizeFilters);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().HomePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Similo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_4__.default, {
        expertise: expertise
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__.default, {
        searchResults: searchResults
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_s(HomePage, "Ny9TnftatMw0FqqEfmA6XL/YieM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwic2VhcmNoUmVzdWx0cyIsImV4cGVydGlzZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJTZWFyY2hSZXN1bHRzQ29udGV4dCIsInNldENvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJzZXRDb21wYW55U2l6ZUZpbHRlciIsInVzZUVmZmVjdCIsImV4cGVydGlzZUZpbHRlcnMiLCJxdWVyeSIsInNwbGl0Iiwic2l6ZUZpbHRlcnMiLCJjb21wYW55U2l6ZSIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBOztBQUdlLFNBQVNBLFFBQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUE1QkMsYUFBNEIsUUFBNUJBLGFBQTRCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzdELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRDZELG9CQUkzREMsaURBQVUsQ0FBQ0MsZ0VBQUQsQ0FKaUQ7QUFBQSxNQUdyREMseUJBSHFELGVBR3JEQSx5QkFIcUQ7QUFBQSxNQUcxQkMsb0JBSDBCLGVBRzFCQSxvQkFIMEI7O0FBTTdEQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0IsR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFULFNBQWIsR0FDckJDLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhVCxTQUFiLENBQXVCVSxLQUF2QixDQUE2QixHQUE3QixDQURxQixHQUVyQixFQUZKO0FBR0FMLDZCQUF5QixDQUFDRyxnQkFBRCxDQUF6QjtBQUVBLFFBQU1HLFdBQVcsR0FBR1YsTUFBTSxDQUFDUSxLQUFQLENBQWFHLFdBQWIsR0FDaEJYLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRyxXQUFiLENBQXlCRixLQUF6QixDQUErQixHQUEvQixDQURnQixHQUVoQixFQUZKO0FBR0FKLHdCQUFvQixDQUFDSyxXQUFELENBQXBCO0FBQ0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSxxRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVBLGlFQUFqQjtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBRWI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBZSxxQkFBYSxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0E3QnVCRCxRO1VBQ1BJLGtEOzs7S0FET0osUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNTQzZTUxMGM2YWVmYmZlZTBjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuXHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ0AvY29tcG9uZW50cy9GaWx0ZXJzJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMnO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvaW5kZXgnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBzZWFyY2hSZXN1bHRzLCBleHBlcnRpc2UgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHNldENvbXBhbnlFeHBlcnRpc2VGaWx0ZXIsIHNldENvbXBhbnlTaXplRmlsdGVyIH0gPVxyXG4gICAgdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBleHBlcnRpc2VGaWx0ZXJzID0gcm91dGVyLnF1ZXJ5LmV4cGVydGlzZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5leHBlcnRpc2Uuc3BsaXQoJywnKVxyXG4gICAgICA6IFtdO1xyXG4gICAgc2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcihleHBlcnRpc2VGaWx0ZXJzKTtcclxuXHJcbiAgICBjb25zdCBzaXplRmlsdGVycyA9IHJvdXRlci5xdWVyeS5jb21wYW55U2l6ZVxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5jb21wYW55U2l6ZS5zcGxpdCgnLCcpXHJcbiAgICAgIDogW107XHJcbiAgICBzZXRDb21wYW55U2l6ZUZpbHRlcihzaXplRmlsdGVycyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuSG9tZVBhZ2V9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2ltaWxvPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgPEZpbHRlcnMgZXhwZXJ0aXNlPXtleHBlcnRpc2V9IC8+XHJcbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgc2VhcmNoUmVzdWx0cz17c2VhcmNoUmVzdWx0c30gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyB0ZXJtIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBsZXQgc2VhcmNoUmVzdWx0cztcclxuXHJcbiAgaWYgKCF0ZXJtKSB7XHJcbiAgICBzZWFyY2hSZXN1bHRzID0gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2g/JHtxcy5zdHJpbmdpZnkoY29udGV4dC5xdWVyeSl9YFxyXG4gICAgKTtcclxuXHJcbiAgICBzZWFyY2hSZXN1bHRzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4cGVydGlzZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvZXhwZXJ0aXNlYCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZWFyY2hSZXN1bHRzLFxyXG4gICAgICBleHBlcnRpc2U6IGV4cGVydGlzZS5kYXRhLmRhdGEuZXhwZXJ0aXNlLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=