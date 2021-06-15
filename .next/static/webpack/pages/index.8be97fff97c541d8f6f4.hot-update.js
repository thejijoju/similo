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
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/index */ "./context/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./components/Filters/Filter/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Filters\\index.jsx",
    _s = $RefreshSig$();





var COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
var COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];
/* const EXPERTISE = [
  'Hide All',
  'Ready to wear',
  'Accessories',
  'Footwear',
  'Something else',
]; */

var REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
var COMPANY_TYPES = ['Public', 'Private', 'Subsidary'];
function Filters(_ref) {
  _s();

  var expertise = _ref.expertise;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.SearchResultsContext),
      companySizeFilter = _useContext.companySizeFilter,
      setCompanySizeFilter = _useContext.setCompanySizeFilter,
      companyLocationFilter = _useContext.companyLocationFilter,
      setCompanyLocationFilter = _useContext.setCompanyLocationFilter,
      companyExpertiseFilter = _useContext.companyExpertiseFilter,
      setCompanyExpertiseFilter = _useContext.setCompanyExpertiseFilter,
      companyRevenueFilter = _useContext.companyRevenueFilter,
      setCompanyRevenueFilter = _useContext.setCompanyRevenueFilter,
      companyTypeFilter = _useContext.companyTypeFilter,
      setCompanyTypeFilter = _useContext.setCompanyTypeFilter;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Filters),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true,
      state: companyLocationFilter,
      setState: setCompanyLocationFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size",
      setState: setCompanySizeFilter,
      state: companySizeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      values: expertise.sort(function (a, b) {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      }),
      defaultSize: 4,
      title: "Expertise",
      state: companyExpertiseFilter,
      setState: setCompanyExpertiseFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3,
      state: companyRevenueFilter,
      setState: setCompanyRevenueFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Company Type",
      values: COMPANY_TYPES,
      defaultSize: 3,
      state: companyTypeFilter,
      setState: setCompanyTypeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(Filters, "rJqNO1ecQnaBfGwMV4+JDfTkYrE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDT1VOVFJJRVMiLCJDT01QQU5ZX1NJWkVTIiwiUkVWRU5VRSIsIkNPTVBBTllfVFlQRVMiLCJGaWx0ZXJzIiwiZXhwZXJ0aXNlIiwidXNlQ29udGV4dCIsIlNlYXJjaFJlc3VsdHNDb250ZXh0IiwiY29tcGFueVNpemVGaWx0ZXIiLCJzZXRDb21wYW55U2l6ZUZpbHRlciIsImNvbXBhbnlMb2NhdGlvbkZpbHRlciIsInNldENvbXBhbnlMb2NhdGlvbkZpbHRlciIsImNvbXBhbnlFeHBlcnRpc2VGaWx0ZXIiLCJzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyIiwiY29tcGFueVJldmVudWVGaWx0ZXIiLCJzZXRDb21wYW55UmV2ZW51ZUZpbHRlciIsImNvbXBhbnlUeXBlRmlsdGVyIiwic2V0Q29tcGFueVR5cGVGaWx0ZXIiLCJjbGFzc2VzIiwic29ydCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQixTQURnQixFQUVoQixRQUZnQixFQUdoQixnQkFIZ0IsRUFJaEIsS0FKZ0IsRUFLaEIsT0FMZ0IsRUFNaEIsT0FOZ0IsRUFPaEIsUUFQZ0IsQ0FBbEI7QUFVQSxJQUFNQyxhQUFhLEdBQUcsQ0FDcEIsT0FEb0IsRUFFcEIsU0FGb0IsRUFHcEIsV0FIb0IsRUFJcEIsYUFKb0IsRUFLcEIsY0FMb0IsRUFNcEIsU0FOb0IsQ0FBdEI7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZCxhQURjLEVBRWQsY0FGYyxFQUdkLGdCQUhjLEVBSWQsaUJBSmMsRUFLZCxtQkFMYyxFQU1kLGNBTmMsRUFPZCxlQVBjLEVBUWQsYUFSYyxDQUFoQjtBQVdBLElBQU1DLGFBQWEsR0FBRyxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLFdBQXRCLENBQXRCO0FBRWUsU0FBU0MsT0FBVCxPQUFnQztBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxvQkFZekNDLGlEQUFVLENBQUNDLGdFQUFELENBWitCO0FBQUEsTUFFM0NDLGlCQUYyQyxlQUUzQ0EsaUJBRjJDO0FBQUEsTUFHM0NDLG9CQUgyQyxlQUczQ0Esb0JBSDJDO0FBQUEsTUFJM0NDLHFCQUoyQyxlQUkzQ0EscUJBSjJDO0FBQUEsTUFLM0NDLHdCQUwyQyxlQUszQ0Esd0JBTDJDO0FBQUEsTUFNM0NDLHNCQU4yQyxlQU0zQ0Esc0JBTjJDO0FBQUEsTUFPM0NDLHlCQVAyQyxlQU8zQ0EseUJBUDJDO0FBQUEsTUFRM0NDLG9CQVIyQyxlQVEzQ0Esb0JBUjJDO0FBQUEsTUFTM0NDLHVCQVQyQyxlQVMzQ0EsdUJBVDJDO0FBQUEsTUFVM0NDLGlCQVYyQyxlQVUzQ0EsaUJBVjJDO0FBQUEsTUFXM0NDLG9CQVgyQyxlQVczQ0Esb0JBWDJDOztBQWM3QyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsb0VBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG9FQUFoQjtBQUFBLDhCQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRUEseUVBQWpDO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVBLCtFQUFqQztBQUFBLGtEQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSw4REFBQyw0Q0FBRDtBQUNFLFdBQUssRUFBQyxVQURSO0FBRUUsWUFBTSxFQUFFbEIsU0FGVjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLFlBQU0sTUFKUjtBQUtFLFdBQUssRUFBRVUscUJBTFQ7QUFNRSxjQUFRLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBaUJFLDhEQUFDLDRDQUFEO0FBQ0UsWUFBTSxFQUFFVixhQURWO0FBRUUsaUJBQVcsRUFBRSxDQUZmO0FBR0UsV0FBSyxFQUFDLGNBSFI7QUFJRSxjQUFRLEVBQUVRLG9CQUpaO0FBS0UsV0FBSyxFQUFFRDtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF3QkUsOERBQUMsNENBQUQ7QUFDRSxZQUFNLEVBQUVILFNBQVMsQ0FBQ2MsSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQy9CLFlBQUlELENBQUMsR0FBR0MsQ0FBUixFQUFXO0FBQ1QsaUJBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsWUFBSUQsQ0FBQyxHQUFHQyxDQUFSLEVBQVc7QUFDVCxpQkFBTyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxDQUFQO0FBQ0QsT0FSTyxDQURWO0FBVUUsaUJBQVcsRUFBRSxDQVZmO0FBV0UsV0FBSyxFQUFDLFdBWFI7QUFZRSxXQUFLLEVBQUVULHNCQVpUO0FBYUUsY0FBUSxFQUFFQztBQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUF1Q0UsOERBQUMsNENBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLFlBQU0sRUFBRVgsT0FGVjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLFdBQUssRUFBRVksb0JBSlQ7QUFLRSxjQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRixlQThDRSw4REFBQyw0Q0FBRDtBQUNFLFdBQUssRUFBQyxjQURSO0FBRUUsWUFBTSxFQUFFWixhQUZWO0FBR0UsaUJBQVcsRUFBRSxDQUhmO0FBSUUsV0FBSyxFQUFFYSxpQkFKVDtBQUtFLGNBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztHQXRFdUJiLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGJlOTdmZmY5N2M1NDFkOGY2ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9pbmRleCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDT1VOVFJJRVMgPSBbXG4gICdHZXJtYW55JyxcbiAgJ0ZyYW5jZScsXG4gICdVbml0ZWQgS2luZ2RvbScsXG4gICdVU0EnLFxuICAnU3BhaW4nLFxuICAnSXRhbHknLFxuICAnTm9yd2F5Jyxcbl07XG5cbmNvbnN0IENPTVBBTllfU0laRVMgPSBbXG4gICcwLTIwMCcsXG4gICcyMDEtNTAwJyxcbiAgJzUwMS0xLDAwMCcsXG4gICcxLDAwMS01LDAwMCcsXG4gICc1LDAwMS0xMCwwMDAnLFxuICAnMTAsMDAxKycsXG5dO1xuXG4vKiBjb25zdCBFWFBFUlRJU0UgPSBbXG4gICdIaWRlIEFsbCcsXG4gICdSZWFkeSB0byB3ZWFyJyxcbiAgJ0FjY2Vzc29yaWVzJyxcbiAgJ0Zvb3R3ZWFyJyxcbiAgJ1NvbWV0aGluZyBlbHNlJyxcbl07ICovXG5cbmNvbnN0IFJFVkVOVUUgPSBbXG4gICcwLTEgbWlsbGlvbicsXG4gICcxLTI1IG1pbGxpb24nLFxuICAnMjUtMTAwIG1pbGxpb24nLFxuICAnMTAwLTUwMCBtaWxsaW9uJyxcbiAgJzUwMS0xLDAwMCBtaWxsaW9uJyxcbiAgJzEtMTAgYmlsbGlvbicsXG4gICcxMC01MCBiaWxsaW9uJyxcbiAgJzUwKyBiaWxsaW9uJyxcbl07XG5cbmNvbnN0IENPTVBBTllfVFlQRVMgPSBbJ1B1YmxpYycsICdQcml2YXRlJywgJ1N1YnNpZGFyeSddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJzKHsgZXhwZXJ0aXNlIH0pIHtcbiAgY29uc3Qge1xuICAgIGNvbXBhbnlTaXplRmlsdGVyLFxuICAgIHNldENvbXBhbnlTaXplRmlsdGVyLFxuICAgIGNvbXBhbnlMb2NhdGlvbkZpbHRlcixcbiAgICBzZXRDb21wYW55TG9jYXRpb25GaWx0ZXIsXG4gICAgY29tcGFueUV4cGVydGlzZUZpbHRlcixcbiAgICBzZXRDb21wYW55RXhwZXJ0aXNlRmlsdGVyLFxuICAgIGNvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIHNldENvbXBhbnlSZXZlbnVlRmlsdGVyLFxuICAgIGNvbXBhbnlUeXBlRmlsdGVyLFxuICAgIHNldENvbXBhbnlUeXBlRmlsdGVyLFxuICB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsdGVyQnV0dG9ufT5cbiAgICAgICAgICA8aT5saW5lczwvaT5GaWx0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3N0UmVsZXZhbnRCdXR0b259PlxuICAgICAgICAgIE1vc3QgcmVsZXZhbnQgPGk+YXJyb3cgZG93bjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJMb2NhdGlvblwiXG4gICAgICAgIHZhbHVlcz17Q09VTlRSSUVTfVxuICAgICAgICBkZWZhdWx0U2l6ZT17M31cbiAgICAgICAgc2VhcmNoXG4gICAgICAgIHN0YXRlPXtjb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55TG9jYXRpb25GaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPEZpbHRlclxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfU0laRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkNvbXBhbnkgc2l6ZVwiXG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55U2l6ZUZpbHRlcn1cbiAgICAgICAgc3RhdGU9e2NvbXBhbnlTaXplRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdmFsdWVzPXtleHBlcnRpc2Uuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSl9XG4gICAgICAgIGRlZmF1bHRTaXplPXs0fVxuICAgICAgICB0aXRsZT1cIkV4cGVydGlzZVwiXG4gICAgICAgIHN0YXRlPXtjb21wYW55RXhwZXJ0aXNlRmlsdGVyfVxuICAgICAgICBzZXRTdGF0ZT17c2V0Q29tcGFueUV4cGVydGlzZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8RmlsdGVyXG4gICAgICAgIHRpdGxlPVwiUmV2ZW51ZVwiXG4gICAgICAgIHZhbHVlcz17UkVWRU5VRX1cbiAgICAgICAgZGVmYXVsdFNpemU9ezN9XG4gICAgICAgIHN0YXRlPXtjb21wYW55UmV2ZW51ZUZpbHRlcn1cbiAgICAgICAgc2V0U3RhdGU9e3NldENvbXBhbnlSZXZlbnVlRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgdGl0bGU9XCJDb21wYW55IFR5cGVcIlxuICAgICAgICB2YWx1ZXM9e0NPTVBBTllfVFlQRVN9XG4gICAgICAgIGRlZmF1bHRTaXplPXszfVxuICAgICAgICBzdGF0ZT17Y29tcGFueVR5cGVGaWx0ZXJ9XG4gICAgICAgIHNldFN0YXRlPXtzZXRDb21wYW55VHlwZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9