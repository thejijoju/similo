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



var COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
var COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,000+'];
var EXPERTISE = ['Hide All', 'Ready to wear', 'Accessories', 'Footwear', 'Something else'];
var REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
var COMPANY_TYPES = ['Public', 'Private', 'Subsidiary'];
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
          lineNumber: 52,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: EXPERTISE,
      defaultSize: 4,
      title: "Expertise"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Company Type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDT1VOVFJJRVMiLCJDT01QQU5ZX1NJWkVTIiwiRVhQRVJUSVNFIiwiUkVWRU5VRSIsIkNPTVBBTllfVFlQRVMiLCJGaWx0ZXJzIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEIsU0FEZ0IsRUFFaEIsUUFGZ0IsRUFHaEIsZ0JBSGdCLEVBSWhCLEtBSmdCLEVBS2hCLE9BTGdCLEVBTWhCLE9BTmdCLEVBT2hCLFFBUGdCLENBQWxCO0FBVUEsSUFBTUMsYUFBYSxHQUFHLENBQ3BCLE9BRG9CLEVBRXBCLFNBRm9CLEVBR3BCLFdBSG9CLEVBSXBCLGFBSm9CLEVBS3BCLGNBTG9CLEVBTXBCLFNBTm9CLENBQXRCO0FBU0EsSUFBTUMsU0FBUyxHQUFHLENBQ2hCLFVBRGdCLEVBRWhCLGVBRmdCLEVBR2hCLGFBSGdCLEVBSWhCLFVBSmdCLEVBS2hCLGdCQUxnQixDQUFsQjtBQVFBLElBQU1DLE9BQU8sR0FBRyxDQUNkLGFBRGMsRUFFZCxjQUZjLEVBR2QsZ0JBSGMsRUFJZCxpQkFKYyxFQUtkLG1CQUxjLEVBTWQsY0FOYyxFQU9kLGVBUGMsRUFRZCxhQVJjLENBQWhCO0FBV0EsSUFBTUMsYUFBYSxHQUFHLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsWUFBdEIsQ0FBdEI7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxvRUFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsOEJBQ0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFQSx5RUFBakM7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRUEsK0VBQWpDO0FBQUEsa0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLDRDQUFEO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBeUIsWUFBTSxFQUFFTixTQUFqQztBQUE0QyxpQkFBVyxFQUFFLENBQXpEO0FBQTRELFlBQU07QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUUsOERBQUMsNENBQUQ7QUFBUSxZQUFNLEVBQUVDLGFBQWhCO0FBQStCLGlCQUFXLEVBQUUsQ0FBNUM7QUFBK0MsV0FBSyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFLDhEQUFDLDRDQUFEO0FBQVEsWUFBTSxFQUFFQyxTQUFoQjtBQUEyQixpQkFBVyxFQUFFLENBQXhDO0FBQTJDLFdBQUssRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRSw4REFBQyw0Q0FBRDtBQUFRLFdBQUssRUFBQyxTQUFkO0FBQXdCLFlBQU0sRUFBRUMsT0FBaEM7QUFBeUMsaUJBQVcsRUFBRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFhRSw4REFBQyw0Q0FBRDtBQUFRLFdBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJFLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWFkZmY2NGUzYzI2ZGEyNjdmYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENPVU5UUklFUyA9IFtcbiAgJ0dlcm1hbnknLFxuICAnRnJhbmNlJyxcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgJ1VTQScsXG4gICdTcGFpbicsXG4gICdJdGFseScsXG4gICdOb3J3YXknLFxuXTtcblxuY29uc3QgQ09NUEFOWV9TSVpFUyA9IFtcbiAgJzAtMjAwJyxcbiAgJzIwMS01MDAnLFxuICAnNTAxLTEsMDAwJyxcbiAgJzEsMDAxLTUsMDAwJyxcbiAgJzUsMDAxLTEwLDAwMCcsXG4gICcxMCwwMDArJyxcbl07XG5cbmNvbnN0IEVYUEVSVElTRSA9IFtcbiAgJ0hpZGUgQWxsJyxcbiAgJ1JlYWR5IHRvIHdlYXInLFxuICAnQWNjZXNzb3JpZXMnLFxuICAnRm9vdHdlYXInLFxuICAnU29tZXRoaW5nIGVsc2UnLFxuXTtcblxuY29uc3QgUkVWRU5VRSA9IFtcbiAgJzAtMSBtaWxsaW9uJyxcbiAgJzEtMjUgbWlsbGlvbicsXG4gICcyNS0xMDAgbWlsbGlvbicsXG4gICcxMDAtNTAwIG1pbGxpb24nLFxuICAnNTAxLTEsMDAwIG1pbGxpb24nLFxuICAnMS0xMCBiaWxsaW9uJyxcbiAgJzEwLTUwIGJpbGxpb24nLFxuICAnNTArIGJpbGxpb24nLFxuXTtcblxuY29uc3QgQ09NUEFOWV9UWVBFUyA9IFsnUHVibGljJywgJ1ByaXZhdGUnLCAnU3Vic2lkaWFyeSddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcnN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWx0ZXJCdXR0b259PlxuICAgICAgICAgIDxpPmxpbmVzPC9pPkZpbHRlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vc3RSZWxldmFudEJ1dHRvbn0+XG4gICAgICAgICAgTW9zdCByZWxldmFudCA8aT5hcnJvdyBkb3duPC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpbHRlciB0aXRsZT1cIkxvY2F0aW9uXCIgdmFsdWVzPXtDT1VOVFJJRVN9IGRlZmF1bHRTaXplPXszfSBzZWFyY2ggLz5cbiAgICAgIDxGaWx0ZXIgdmFsdWVzPXtDT01QQU5ZX1NJWkVTfSBkZWZhdWx0U2l6ZT17NH0gdGl0bGU9XCJDb21wYW55IHNpemVcIiAvPlxuICAgICAgPEZpbHRlciB2YWx1ZXM9e0VYUEVSVElTRX0gZGVmYXVsdFNpemU9ezR9IHRpdGxlPVwiRXhwZXJ0aXNlXCIgLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJSZXZlbnVlXCIgdmFsdWVzPXtSRVZFTlVFfSBkZWZhdWx0U2l6ZT17M30gLz5cbiAgICAgIDxGaWx0ZXIgdGl0bGU9XCJDb21wYW55IFR5cGVcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==