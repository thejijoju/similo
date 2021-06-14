self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/SkeletonLoader/index.jsx":
/*!*********************************************!*\
  !*** ./components/SkeletonLoader/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SkeletonLoader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SkeletonLoader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SkeletonLoader\\index.jsx";


function SkeletonLoader() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SkeletonLoader),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().SearchResult),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo),
        style: {
          backgroundImage: "url(".concat(company.logoPath, ")")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: company.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().industry),
          children: company.industry
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tags),
          children: company.expertise && company.expertise.split(',').map(function (tag) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tag),
              children: tag
            }, tag, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = SkeletonLoader;

var _c;

$RefreshReg$(_c, "SkeletonLoader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiU2tlbGV0b25Mb2FkZXIiLCJjbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGFueSIsImxvZ29QYXRoIiwibmFtZSIsImluZHVzdHJ5IiwiZXhwZXJ0aXNlIiwic3BsaXQiLCJtYXAiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUN2QyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMkVBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLHlFQUFoQjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBRUEsaUVBRGI7QUFFRSxhQUFLLEVBQUU7QUFDTEMseUJBQWUsZ0JBQVNDLE9BQU8sQ0FBQ0MsUUFBakI7QUFEVjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBRUgsd0VBQWhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0UsT0FBTyxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUVKLHFFQUFqQjtBQUFBLG9CQUFvQ0UsT0FBTyxDQUFDRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBSyxtQkFBUyxFQUFFTCxpRUFBaEI7QUFBQSxvQkFDR0UsT0FBTyxDQUFDSSxTQUFSLElBQ0NKLE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLEdBQTdCLENBQWlDLFVBQUNDLEdBQUQ7QUFBQSxnQ0FDL0I7QUFBTSx1QkFBUyxFQUFFVCxnRUFBakI7QUFBQSx3QkFDR1M7QUFESCxlQUFtQ0EsR0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEK0I7QUFBQSxXQUFqQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEO0tBeEN1QlYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmI1NjIwMGM0MTU1OTNhMTkwMzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNrZWxldG9uTG9hZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNrZWxldG9uTG9hZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y29tcGFueS5sb2dvUGF0aH0pYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55SW5mb30+XG4gICAgICAgICAgPGgxPntjb21wYW55Lm5hbWV9PC9oMT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW5kdXN0cnl9Pntjb21wYW55LmluZHVzdHJ5fTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICAgIHtjb21wYW55LmV4cGVydGlzZSAmJlxuICAgICAgICAgICAgICBjb21wYW55LmV4cGVydGlzZS5zcGxpdCgnLCcpLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30ga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxib3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHBob3RvIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgIDxwaG90byBjbGFzc05hbWU9e2NsYXNzZXMuc2hpbmV9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxib3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgICAgPGxpbmVzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=