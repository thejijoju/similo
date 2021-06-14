self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header/SearchSuggestions/index.jsx":
/*!**************************************************************!*\
  !*** ./components/Layout/Header/SearchSuggestions/index.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchSuggestions; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/SearchSuggestions/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Layout\\Header\\SearchSuggestions\\index.jsx";


function SearchSuggestions(_ref) {
  var _this = this;

  var _ref$searchSuggestion = _ref.searchSuggestions,
      searchSuggestions = _ref$searchSuggestion === void 0 ? [] : _ref$searchSuggestion,
      show = _ref.show;
  returnshow ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SearchSuggestions),
    children: searchSuggestions.map(function (suggestion) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().suggestion),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
          children: suggestion.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().compenyIndustry),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: "dot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, _this), suggestion.industry]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this)]
      }, suggestion.name, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this) : null;
}
_c = SearchSuggestions;

var _c;

$RefreshReg$(_c, "SearchSuggestions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaFN1Z2dlc3Rpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaFN1Z2dlc3Rpb25zIiwic2hvdyIsInJldHVybnNob3ciLCJjbGFzc2VzIiwibWFwIiwic3VnZ2VzdGlvbiIsIm5hbWUiLCJpbmR1c3RyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxpQkFBVCxPQUE2RDtBQUFBOztBQUFBLG1DQUFoQ0MsaUJBQWdDO0FBQUEsTUFBaENBLGlCQUFnQyxzQ0FBWixFQUFZO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFFQyxZQUFVLGdCQUNSO0FBQUssYUFBUyxFQUFFQyw4RUFBaEI7QUFBQSxjQUNHSCxpQkFBaUIsQ0FBQ0ksR0FBbEIsQ0FBc0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUNyQywwQkFDRTtBQUFLLGlCQUFTLEVBQUVGLHVFQUFoQjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBRUEsa0VBQWQ7QUFBQSxvQkFBOEJFLFVBQVUsQ0FBQ0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBRUgsNEVBQWpCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0UsVUFBVSxDQUFDRSxRQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQXlDRixVQUFVLENBQUNDLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELEtBVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFEsR0FjTixJQWRKO0FBZUQ7S0FoQnVCUCxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY5OThjYzI4NzQyMzUyZDg1NGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFN1Z2dlc3Rpb25zKHsgc2VhcmNoU3VnZ2VzdGlvbnMgPSBbXSwgc2hvdyB9KSB7XG4gIHJldHVybnNob3cgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoU3VnZ2VzdGlvbnN9PlxuICAgICAge3NlYXJjaFN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Z2dlc3Rpb259IGtleT17c3VnZ2VzdGlvbi5uYW1lfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3N1Z2dlc3Rpb24ubmFtZX08L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGVueUluZHVzdHJ5fT5cbiAgICAgICAgICAgICAgPGk+ZG90PC9pPlxuICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5pbmR1c3RyeX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApIDogbnVsbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=