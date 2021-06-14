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
      onShow = _ref.onShow;
  return searchSuggestions.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaFN1Z2dlc3Rpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaFN1Z2dlc3Rpb25zIiwib25TaG93IiwibGVuZ3RoIiwiY2xhc3NlcyIsIm1hcCIsInN1Z2dlc3Rpb24iLCJuYW1lIiwiaW5kdXN0cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsaUJBQVQsT0FBK0Q7QUFBQTs7QUFBQSxtQ0FBbENDLGlCQUFrQztBQUFBLE1BQWxDQSxpQkFBa0Msc0NBQWQsRUFBYztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM1RSxTQUFPRCxpQkFBaUIsQ0FBQ0UsTUFBbEIsZ0JBQ0w7QUFBSyxhQUFTLEVBQUVDLDhFQUFoQjtBQUFBLGNBQ0dILGlCQUFpQixDQUFDSSxHQUFsQixDQUFzQixVQUFDQyxVQUFELEVBQWdCO0FBQ3JDLDBCQUNFO0FBQUssaUJBQVMsRUFBRUYsdUVBQWhCO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFFQSxrRUFBZDtBQUFBLG9CQUE4QkUsVUFBVSxDQUFDQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFFSCw0RUFBakI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHRSxVQUFVLENBQUNFLFFBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBeUNGLFVBQVUsQ0FBQ0MsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsS0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESyxHQWNILElBZEo7QUFlRDtLQWhCdUJQLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzJjMmY3ZDVlNWI0ODUxY2QxOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoU3VnZ2VzdGlvbnMoeyBzZWFyY2hTdWdnZXN0aW9ucyA9IFtdLCBvblNob3cgfSkge1xuICByZXR1cm4gc2VhcmNoU3VnZ2VzdGlvbnMubGVuZ3RoID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFN1Z2dlc3Rpb25zfT5cbiAgICAgIHtzZWFyY2hTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWdnZXN0aW9ufSBrZXk9e3N1Z2dlc3Rpb24ubmFtZX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntzdWdnZXN0aW9uLm5hbWV9PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBlbnlJbmR1c3RyeX0+XG4gICAgICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uaW5kdXN0cnl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9