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
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/index */ "./constants/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/SearchSuggestions/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
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
    router.push("/?term=".concat(encodeURIComponent(term), "&page=0&=perPage=").concat(constants_index__WEBPACK_IMPORTED_MODULE_3__.COMPANIES_PER_PAGE));
  };

  return show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SearchSuggestions),
    children: searchSuggestions.map(function (suggestion) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().suggestion),
        onClick: function onClick() {
          return search(suggestion.name);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
          children: suggestion.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().compenyIndustry),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: "dot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), suggestion.industry]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)]
      }, suggestion.name, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL1NlYXJjaFN1Z2dlc3Rpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaFN1Z2dlc3Rpb25zIiwic2hvdyIsIm9uSGlkZSIsInNldFNlYXJjaFRlcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2giLCJ0ZXJtIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkNPTVBBTklFU19QRVJfUEFHRSIsImNsYXNzZXMiLCJtYXAiLCJzdWdnZXN0aW9uIiwibmFtZSIsImluZHVzdHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxpQkFBVCxPQUtaO0FBQUE7O0FBQUE7O0FBQUEsbUNBSkRDLGlCQUlDO0FBQUEsTUFKREEsaUJBSUMsc0NBSm1CLEVBSW5CO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsYUFDQyxRQUREQSxhQUNDO0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDdkJKLGlCQUFhLENBQUNJLElBQUQsQ0FBYjtBQUNBTCxVQUFNO0FBQ05FLFVBQU0sQ0FBQ0ksSUFBUCxrQkFDWUMsa0JBQWtCLENBQUNGLElBQUQsQ0FEOUIsOEJBQ3dERywrREFEeEQ7QUFHRCxHQU5EOztBQVFBLFNBQU9ULElBQUksZ0JBQ1Q7QUFBSyxhQUFTLEVBQUVVLDhFQUFoQjtBQUFBLGNBQ0dYLGlCQUFpQixDQUFDWSxHQUFsQixDQUFzQixVQUFDQyxVQUFELEVBQWdCO0FBQ3JDLDBCQUNFO0FBQ0UsaUJBQVMsRUFBRUYsdUVBRGI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsTUFBTSxDQUFDTyxVQUFVLENBQUNDLElBQVosQ0FBWjtBQUFBLFNBSFg7QUFBQSxnQ0FLRTtBQUFHLG1CQUFTLEVBQUVILGtFQUFkO0FBQUEsb0JBQThCRSxVQUFVLENBQUNDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFNLG1CQUFTLEVBQUVILDRFQUFqQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdFLFVBQVUsQ0FBQ0UsUUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxTQUVPRixVQUFVLENBQUNDLElBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELEtBZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsR0FrQlAsSUFsQko7QUFtQkQ7O0dBbkN1QmYsaUI7VUFNUE0sa0Q7OztLQU5PTixpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMyMTBhZDQyOGEzNWY3ODgyY2MwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICdjb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hTdWdnZXN0aW9ucyh7XG4gIHNlYXJjaFN1Z2dlc3Rpb25zID0gW10sXG4gIHNob3csXG4gIG9uSGlkZSxcbiAgc2V0U2VhcmNoVGVybSxcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gKHRlcm0pID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xuICAgIG9uSGlkZSgpO1xuICAgIHJvdXRlci5wdXNoKFxuICAgICAgYC8/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudCh0ZXJtKX0mcGFnZT0wJj1wZXJQYWdlPSR7Q09NUEFOSUVTX1BFUl9QQUdFfWBcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBzaG93ID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFN1Z2dlc3Rpb25zfT5cbiAgICAgIHtzZWFyY2hTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgIGtleT17c3VnZ2VzdGlvbi5uYW1lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VhcmNoKHN1Z2dlc3Rpb24ubmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57c3VnZ2VzdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wZW55SW5kdXN0cnl9PlxuICAgICAgICAgICAgICA8aT5kb3Q8L2k+XG4gICAgICAgICAgICAgIHtzdWdnZXN0aW9uLmluZHVzdHJ5fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICkgOiBudWxsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==