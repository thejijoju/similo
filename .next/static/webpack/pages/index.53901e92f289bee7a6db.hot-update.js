self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Filters/index.jsx":
/*!**************************************!*\
  !*** ./components/Filters/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Filters; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/Filters/Filter/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "d:\\Backup\\My\\Work\\Coding\\Devmaxup\\similo-next\\components\\Filters\\index.jsx";



/* const COUNTRIES = [
  'Germany',
  'France',
  'United Kingdom',
  'USA',
  'Spain',
  'Italy',
  'Norway',
];
 */

var COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway', 'Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
var COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,000+'];
var EXPERTISE = ['Hide All', 'Ready to wear', 'Accessories', 'Footwear', 'Something else'];
var REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
function Filters() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filters),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filterButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: EXPERTISE,
      defaultSize: 4,
      title: "Expertise"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Company Type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
_c = Filters;

var _c;

$RefreshReg$(_c, "Filters");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDT1VOVFJJRVMiLCJDT01QQU5ZX1NJWkVTIiwiRVhQRVJUSVNFIiwiUkVWRU5VRSIsIkZpbHRlcnMiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQixTQURnQixFQUVoQixRQUZnQixFQUdoQixnQkFIZ0IsRUFJaEIsS0FKZ0IsRUFLaEIsT0FMZ0IsRUFNaEIsT0FOZ0IsRUFPaEIsUUFQZ0IsRUFRaEIsU0FSZ0IsRUFTaEIsUUFUZ0IsRUFVaEIsZ0JBVmdCLEVBV2hCLEtBWGdCLEVBWWhCLE9BWmdCLEVBYWhCLE9BYmdCLEVBY2hCLFFBZGdCLENBQWxCO0FBaUJBLElBQU1DLGFBQWEsR0FBRyxDQUNwQixPQURvQixFQUVwQixTQUZvQixFQUdwQixXQUhvQixFQUlwQixhQUpvQixFQUtwQixjQUxvQixFQU1wQixTQU5vQixDQUF0QjtBQVNBLElBQU1DLFNBQVMsR0FBRyxDQUNoQixVQURnQixFQUVoQixlQUZnQixFQUdoQixhQUhnQixFQUloQixVQUpnQixFQUtoQixnQkFMZ0IsQ0FBbEI7QUFRQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZCxhQURjLEVBRWQsY0FGYyxFQUdkLGdCQUhjLEVBSWQsaUJBSmMsRUFLZCxtQkFMYyxFQU1kLGNBTmMsRUFPZCxlQVBjLEVBUWQsYUFSYyxDQUFoQjtBQVdlLFNBQVNDLE9BQVQsR0FBbUI7QUFDaEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLG9FQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxvRUFBaEI7QUFBQSw4QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVBLHlFQUFqQztBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFQSwrRUFBakM7QUFBQSxrREFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0UsOERBQUMsNENBQUQ7QUFBUSxXQUFLLEVBQUMsVUFBZDtBQUF5QixZQUFNLEVBQUVMLFNBQWpDO0FBQTRDLGlCQUFXLEVBQUUsQ0FBekQ7QUFBNEQsWUFBTTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSw4REFBQyw0Q0FBRDtBQUFRLFlBQU0sRUFBRUMsYUFBaEI7QUFBK0IsaUJBQVcsRUFBRSxDQUE1QztBQUErQyxXQUFLLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0UsOERBQUMsNENBQUQ7QUFBUSxZQUFNLEVBQUVDLFNBQWhCO0FBQTJCLGlCQUFXLEVBQUUsQ0FBeEM7QUFBMkMsV0FBSyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQVlFLDhEQUFDLDRDQUFEO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBd0IsWUFBTSxFQUFFQyxPQUFoQztBQUF5QyxpQkFBVyxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFLDhEQUFDLDRDQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEO0tBbEJ1QkMsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MzkwMWU5MmYyODliZWU3YTZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuLyogY29uc3QgQ09VTlRSSUVTID0gW1xuICAnR2VybWFueScsXG4gICdGcmFuY2UnLFxuICAnVW5pdGVkIEtpbmdkb20nLFxuICAnVVNBJyxcbiAgJ1NwYWluJyxcbiAgJ0l0YWx5JyxcbiAgJ05vcndheScsXG5dO1xuICovXG5cbmNvbnN0IENPVU5UUklFUyA9IFtcbiAgJ0dlcm1hbnknLFxuICAnRnJhbmNlJyxcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgJ1VTQScsXG4gICdTcGFpbicsXG4gICdJdGFseScsXG4gICdOb3J3YXknLFxuICAnR2VybWFueScsXG4gICdGcmFuY2UnLFxuICAnVW5pdGVkIEtpbmdkb20nLFxuICAnVVNBJyxcbiAgJ1NwYWluJyxcbiAgJ0l0YWx5JyxcbiAgJ05vcndheScsXG5dO1xuXG5jb25zdCBDT01QQU5ZX1NJWkVTID0gW1xuICAnMC0yMDAnLFxuICAnMjAxLTUwMCcsXG4gICc1MDEtMSwwMDAnLFxuICAnMSwwMDEtNSwwMDAnLFxuICAnNSwwMDEtMTAsMDAwJyxcbiAgJzEwLDAwMCsnLFxuXTtcblxuY29uc3QgRVhQRVJUSVNFID0gW1xuICAnSGlkZSBBbGwnLFxuICAnUmVhZHkgdG8gd2VhcicsXG4gICdBY2Nlc3NvcmllcycsXG4gICdGb290d2VhcicsXG4gICdTb21ldGhpbmcgZWxzZScsXG5dO1xuXG5jb25zdCBSRVZFTlVFID0gW1xuICAnMC0xIG1pbGxpb24nLFxuICAnMS0yNSBtaWxsaW9uJyxcbiAgJzI1LTEwMCBtaWxsaW9uJyxcbiAgJzEwMC01MDAgbWlsbGlvbicsXG4gICc1MDEtMSwwMDAgbWlsbGlvbicsXG4gICcxLTEwIGJpbGxpb24nLFxuICAnMTAtNTAgYmlsbGlvbicsXG4gICc1MCsgYmlsbGlvbicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWx0ZXJCdXR0b259PlxuICAgICAgICAgIDxpPmxpbmVzPC9pPkZpbHRlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vc3RSZWxldmFudEJ1dHRvbn0+XG4gICAgICAgICAgTW9zdCByZWxldmFudCA8aT5hcnJvdyBkb3duPC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpbHRlciB0aXRsZT1cIkxvY2F0aW9uXCIgdmFsdWVzPXtDT1VOVFJJRVN9IGRlZmF1bHRTaXplPXszfSBzZWFyY2ggLz5cbiAgICAgIDxGaWx0ZXIgdmFsdWVzPXtDT01QQU5ZX1NJWkVTfSBkZWZhdWx0U2l6ZT17NH0gdGl0bGU9XCJDb21wYW55IHNpemVcIiAvPlxuICAgICAgPEZpbHRlciB2YWx1ZXM9e0VYUEVSVElTRX0gZGVmYXVsdFNpemU9ezR9IHRpdGxlPVwiRXhwZXJ0aXNlXCIgLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJSZXZlbnVlXCIgdmFsdWVzPXtSRVZFTlVFfSBkZWZhdWx0U2l6ZT17M30gLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJDb21wYW55IFR5cGVcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==