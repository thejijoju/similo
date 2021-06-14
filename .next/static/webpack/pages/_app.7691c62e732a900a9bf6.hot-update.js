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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/SearchSuggestions/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Layout\\Header\\SearchSuggestions\\index.jsx",
    _s = $RefreshSig$();




function SearchSuggestions(_ref) {
  _s();

  var _this = this;

  var _ref$searchSuggestion = _ref.searchSuggestions,
      searchSuggestions = _ref$searchSuggestion === void 0 ? [] : _ref$searchSuggestion,
      show = _ref.show,
      onHide = _ref.onHide,
      setSearchTerm = _ref.setSearchTerm;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var search = function search(term) {
    setSearchTerm(term);
    onHide();
    router.push("/?term=".concat(encodeURIComponent(term)));
  };

  return show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().SearchSuggestions),
    children: searchSuggestions.map(function (suggestion) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().suggestion),
        onClick: function onClick() {
          return search(suggestion.name);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
          children: suggestion.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().compenyIndustry),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: "dot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this), suggestion.industry]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, _this)]
      }, suggestion.name, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this) : null;
}

_s(SearchSuggestions, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaFN1Z2dlc3Rpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaFN1Z2dlc3Rpb25zIiwic2hvdyIsIm9uSGlkZSIsInNldFNlYXJjaFRlcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2giLCJ0ZXJtIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNsYXNzZXMiLCJtYXAiLCJzdWdnZXN0aW9uIiwibmFtZSIsImluZHVzdHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxpQkFBVCxPQUtaO0FBQUE7O0FBQUE7O0FBQUEsbUNBSkRDLGlCQUlDO0FBQUEsTUFKREEsaUJBSUMsc0NBSm1CLEVBSW5CO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsYUFDQyxRQUREQSxhQUNDO0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDdkJKLGlCQUFhLENBQUNJLElBQUQsQ0FBYjtBQUNBTCxVQUFNO0FBQ05FLFVBQU0sQ0FBQ0ksSUFBUCxrQkFBc0JDLGtCQUFrQixDQUFDRixJQUFELENBQXhDO0FBQ0QsR0FKRDs7QUFNQSxTQUFPTixJQUFJLGdCQUNUO0FBQUssYUFBUyxFQUFFUyw4RUFBaEI7QUFBQSxjQUNHVixpQkFBaUIsQ0FBQ1csR0FBbEIsQ0FBc0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUNyQywwQkFDRTtBQUNFLGlCQUFTLEVBQUVGLHVFQURiO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1KLE1BQU0sQ0FBQ00sVUFBVSxDQUFDQyxJQUFaLENBQVo7QUFBQSxTQUhYO0FBQUEsZ0NBS0U7QUFBRyxtQkFBUyxFQUFFSCxrRUFBZDtBQUFBLG9CQUE4QkUsVUFBVSxDQUFDQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBTSxtQkFBUyxFQUFFSCw0RUFBakI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHRSxVQUFVLENBQUNFLFFBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsU0FFT0YsVUFBVSxDQUFDQyxJQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFhRCxLQWRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEdBa0JQLElBbEJKO0FBbUJEOztHQWpDdUJkLGlCO1VBTVBNLGtEOzs7S0FOT04saUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NjkxYzYyZTczMmE5MDBhOWJmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hTdWdnZXN0aW9ucyh7XG4gIHNlYXJjaFN1Z2dlc3Rpb25zID0gW10sXG4gIHNob3csXG4gIG9uSGlkZSxcbiAgc2V0U2VhcmNoVGVybSxcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gKHRlcm0pID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xuICAgIG9uSGlkZSgpO1xuICAgIHJvdXRlci5wdXNoKGAvP3Rlcm09JHtlbmNvZGVVUklDb21wb25lbnQodGVybSl9YCk7XG4gIH07XG5cbiAgcmV0dXJuIHNob3cgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoU3VnZ2VzdGlvbnN9PlxuICAgICAge3NlYXJjaFN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWdnZXN0aW9ufVxuICAgICAgICAgICAga2V5PXtzdWdnZXN0aW9uLm5hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWFyY2goc3VnZ2VzdGlvbi5uYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntzdWdnZXN0aW9uLm5hbWV9PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBlbnlJbmR1c3RyeX0+XG4gICAgICAgICAgICAgIDxpPmRvdDwvaT5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uaW5kdXN0cnl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9