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
      style: {
        height: companyCardHeight
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo),
        style: {
          backgroundImage: "url(".concat(company.logoPath, ")")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: company.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().industry),
          children: company.industry
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tags),
          children: company.expertise && company.expertise.split(',').map(function (tag) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tag),
              children: tag
            }, tag, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2VsZXRvbkxvYWRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiU2tlbGV0b25Mb2FkZXIiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY29tcGFueUNhcmRIZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wYW55IiwibG9nb1BhdGgiLCJuYW1lIiwiaW5kdXN0cnkiLCJleHBlcnRpc2UiLCJzcGxpdCIsIm1hcCIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3ZDLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyRUFBaEI7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBRUEseUVBRGI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFQztBQUFWLE9BRlQ7QUFBQSw4QkFJRTtBQUNFLGlCQUFTLEVBQUVGLGlFQURiO0FBRUUsYUFBSyxFQUFFO0FBQ0xHLHlCQUFlLGdCQUFTQyxPQUFPLENBQUNDLFFBQWpCO0FBRFY7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFVRTtBQUFLLGlCQUFTLEVBQUVMLHdFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtJLE9BQU8sQ0FBQ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFFTixxRUFBakI7QUFBQSxvQkFBb0NJLE9BQU8sQ0FBQ0c7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUssbUJBQVMsRUFBRVAsaUVBQWhCO0FBQUEsb0JBQ0dJLE9BQU8sQ0FBQ0ksU0FBUixJQUNDSixPQUFPLENBQUNJLFNBQVIsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixDQUFpQyxVQUFDQyxHQUFEO0FBQUEsZ0NBQy9CO0FBQU0sdUJBQVMsRUFBRVgsZ0VBQWpCO0FBQUEsd0JBQ0dXO0FBREgsZUFBbUNBLEdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRCtCO0FBQUEsV0FBakM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDtLQTNDdUJaLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4zYTQ0NzM4NzQ2ZjU2ZGZkNTRkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXRvbkxvYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ta2VsZXRvbkxvYWRlcn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5TZWFyY2hSZXN1bHR9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogY29tcGFueUNhcmRIZWlnaHQgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb21wYW55LmxvZ29QYXRofSlgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgICA8aDE+e2NvbXBhbnkubmFtZX08L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmR1c3RyeX0+e2NvbXBhbnkuaW5kdXN0cnl9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgICAge2NvbXBhbnkuZXhwZXJ0aXNlICYmXG4gICAgICAgICAgICAgIGNvbXBhbnkuZXhwZXJ0aXNlLnNwbGl0KCcsJykubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGJveCBjbGFzc05hbWU9e2NsYXNzZXMuc2hpbmV9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cGhvdG8gY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgPHBob3RvIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGluZX0gLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJveCBjbGFzc05hbWU9e2NsYXNzZXMuc2hpbmV9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgICA8bGluZXMgY2xhc3NOYW1lPXtjbGFzc2VzLnNoaW5lfSAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==