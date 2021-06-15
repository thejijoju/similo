self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SkeletonLoader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/index */ "./constants/index.js");
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/index */ "./context/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SkeletonLoader\\index.jsx";





function SkeletonLoader(_ref) {
  var totalCount = _ref.totalCount;
  var elements = [];
  var elementsCount = totalCount - (_context_index__WEBPACK_IMPORTED_MODULE_5__.currentPage + 1) * _constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE;

  if (elementsCount > _constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE) {
    elementsCount = ((0,c_Work_Coding_Web_Devmaxup_similo_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("elementsCount"), _constants_index__WEBPACK_IMPORTED_MODULE_4__.COMPANIES_PER_PAGE);
  } // eslint-disable-next-line no-plusplus


  for (var i = 0; i < elementsCount; i++) {
    elements.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchResult),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shine))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().companyInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shine), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tags),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tag), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shine))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().SkeletonLoader),
    children: elements
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tlbGV0b25Mb2FkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIlNrZWxldG9uTG9hZGVyIiwidG90YWxDb3VudCIsImVsZW1lbnRzIiwiZWxlbWVudHNDb3VudCIsImN1cnJlbnRQYWdlIiwiQ09NUEFOSUVTX1BFUl9QQUdFIiwiaSIsInB1c2giLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxPQUF3QztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUNyRCxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFNQyxhQUFhLEdBQUdGLFVBQVUsR0FBRyxDQUFDRyx1REFBVyxHQUFHLENBQWYsSUFBb0JDLGdFQUF2RDs7QUFDQSxNQUFJRixhQUFhLEdBQUdFLGdFQUFwQixFQUF3QztBQUN0Q0YsaUJBQWEsMkpBQUdFLGdFQUFILENBQWI7QUFDRCxHQUxvRCxDQU1yRDs7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxhQUFwQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q0osWUFBUSxDQUFDSyxJQUFULGVBQ0U7QUFBSyxlQUFTLEVBQUVDLHlFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUMsaURBQVUsQ0FBQ0QsaUVBQUQsRUFBZUEsa0VBQWY7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVDLGlEQUFVLENBQUNELGtFQUFELEVBQWdCQSxrRUFBaEI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUEsaUVBQWhCO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFFQyxpREFBVSxDQUFDRCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFQyxpREFBVSxDQUFDRCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBTSxxQkFBUyxFQUFFQyxpREFBVSxDQUFDRCxnRUFBRCxFQUFjQSxrRUFBZDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLE9BQTJDRixDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFhRDs7QUFDRCxzQkFBTztBQUFLLGFBQVMsRUFBRUUsMkVBQWhCO0FBQUEsY0FBeUNOO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0tBdkJ1QkYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOWU2ZTA3NjNmZTkxYjhjMWRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xuaW1wb3J0IHsgY3VycmVudFBhZ2UgfSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b25Mb2FkZXIoeyB0b3RhbENvdW50IH0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgZWxlbWVudHNDb3VudCA9IHRvdGFsQ291bnQgLSAoY3VycmVudFBhZ2UgKyAxKSAqIENPTVBBTklFU19QRVJfUEFHRTtcbiAgaWYgKGVsZW1lbnRzQ291bnQgPiBDT01QQU5JRVNfUEVSX1BBR0UpIHtcbiAgICBlbGVtZW50c0NvdW50ID0gQ09NUEFOSUVTX1BFUl9QQUdFO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzQ291bnQ7IGkrKykge1xuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hSZXN1bHR9IGtleT17aX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMubG9nbywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnNoaW5lLCBjbGFzc2VzLnRpdGxlKX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLnRhZywgY2xhc3Nlcy5zaGluZSl9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcy50YWcsIGNsYXNzZXMuc2hpbmUpfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMudGFnLCBjbGFzc2VzLnNoaW5lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Ta2VsZXRvbkxvYWRlcn0+e2VsZW1lbnRzfTwvZGl2Pjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=