self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Filters/Filter/index.jsx":
/*!*********************************************!*\
  !*** ./components/Filters/Filter/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/Filter/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "d:\\Backup\\My\\Work\\Coding\\Devmaxup\\similo-next\\components\\Filters\\Filter\\index.jsx",
    _s = $RefreshSig$();

/* eslint-disable jsx-a11y/label-has-associated-control */



function index(_ref) {
  _s();

  var _this = this;

  var title = _ref.title,
      search = _ref.search,
      _ref$defaultSize = _ref.defaultSize,
      defaultSize = _ref$defaultSize === void 0 ? 3 : _ref$defaultSize,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('auto'),
      filterHeight = _useState[0],
      setFilterHeight = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isListExpanded = _useState2[0],
      setIsListExpanded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isExpanded = _useState3[0],
      setIsExpanded = _useState3[1];

  var filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(filterRef.current.scrollHeight, filterRef.current.clientHeight);
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);

  var collapseFilter = function collapseFilter() {
    setFilterHeight(67);
    setIsExpanded(false);
  };

  var expandFilter = function expandFilter() {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
  };

  var collapseList = function collapseList() {
    setIsListExpanded(false);
  };

  var expandList = function expandList() {
    setIsListExpanded(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filter),
    style: {
      height: filterHeight
    },
    ref: filterRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeFilterIcon), !isExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        onClick: function onClick() {
          if (isExpanded) {
            collapseFilter();
          } else {
            expandFilter();
          }
        },
        children: "Close filter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes),
      style: {
        height: isListExpanded ? 'auto' : 70
      },
      children: values.map(function (value) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMore),
      onClick: function onClick() {
        if (isListExpanded) {
          collapseList();
        } else {
          expandList();
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Show more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(index, "UHMIeRBsirOBGWUBSjHNaCNxBNM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0RmlsdGVySGVpZ2h0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb2xsYXBzZUZpbHRlciIsImV4cGFuZEZpbHRlciIsImNvbGxhcHNlTGlzdCIsImV4cGFuZExpc3QiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY2xhc3NuYW1lcyIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBZ0U7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLDhCQUFoQ0MsV0FBZ0M7QUFBQSxNQUFoQ0EsV0FBZ0MsaUNBQWxCLENBQWtCO0FBQUEseUJBQWZDLE1BQWU7QUFBQSxNQUFmQSxNQUFlLDRCQUFOLEVBQU07O0FBQUEsa0JBQ3JDQywrQ0FBUSxDQUFDLE1BQUQsQ0FENkI7QUFBQSxNQUN0RUMsWUFEc0U7QUFBQSxNQUN4REMsZUFEd0Q7O0FBQUEsbUJBRWpDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGeUI7QUFBQSxNQUV0RUcsY0FGc0U7QUFBQSxNQUV0REMsaUJBRnNEOztBQUFBLG1CQUd6Q0osK0NBQVEsQ0FBQyxJQUFELENBSGlDO0FBQUEsTUFHdEVLLFVBSHNFO0FBQUEsTUFHMURDLGFBSDBEOztBQUs3RSxNQUFNQyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdELDZDQUFNLEVBQWxDO0FBRUFFLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsU0FBUyxDQUFDTSxPQUFWLENBQWtCQyxZQUE5QixFQUE0Q1AsU0FBUyxDQUFDTSxPQUFWLENBQWtCRSxZQUE5RDtBQUNBTix1QkFBbUIsQ0FBQ0ksT0FBcEIsR0FBOEJOLFNBQVMsQ0FBQ00sT0FBVixDQUFrQkUsWUFBaEQ7QUFDQWIsbUJBQWUsQ0FBQ0ssU0FBUyxDQUFDTSxPQUFWLENBQWtCRSxZQUFuQixDQUFmO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JkLG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FJLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCZixtQkFBZSxDQUFDTyxtQkFBbUIsQ0FBQ0ksT0FBckIsQ0FBZjtBQUNBUCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsTUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmQscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsTUFBTWUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QmYscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFDRSxhQUFTLEVBQUVnQixtRUFEYjtBQUVFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUVwQjtBQUFWLEtBRlQ7QUFHRSxPQUFHLEVBQUVNLFNBSFA7QUFBQSw0QkFLRTtBQUFLLGVBQVMsRUFBRWEsbUVBQWhCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS3hCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxpQkFBUyxFQUFFMEIsaURBQVUsQ0FDbkJGLDRFQURtQixFQUVuQixDQUFDZixVQUFELElBQWVlLG1FQUZJLENBRHZCO0FBS0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsY0FBSWYsVUFBSixFQUFnQjtBQUNkVywwQkFBYztBQUNmLFdBRkQsTUFFTztBQUNMQyx3QkFBWTtBQUNiO0FBQ0YsU0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBdUJHcEIsTUFBTSxpQkFDTDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsZUFBUyxFQUFFdUIsbUVBRmI7QUFHRSxpQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSixlQThCRTtBQUNFLGVBQVMsRUFBRUEsdUVBRGI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFbEIsY0FBYyxHQUFHLE1BQUgsR0FBWTtBQUFwQyxPQUZUO0FBQUEsZ0JBSUdKLE1BQU0sQ0FBQ3dCLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDckIsNEJBQ0U7QUFBTyxtQkFBUyxFQUFFSixzRUFBbEI7QUFBQSxrQ0FDRTtBQUFPLGdCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFQSxzRUFBaUJLO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHR0QsS0FISDtBQUFBLFdBQTBDQSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsT0FSQTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUE0Q0U7QUFDRSxlQUFTLEVBQUVKLHFFQURiO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2IsWUFBSWpCLGNBQUosRUFBb0I7QUFDbEJlLHNCQUFZO0FBQ2IsU0FGRCxNQUVPO0FBQ0xDLG9CQUFVO0FBQ1g7QUFDRixPQVJIO0FBQUEsOEJBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQUcsaUJBQVMsRUFBRUMseUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0REQ7O0dBNUZ1QnpCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThmMzYwN2E5ZWZkOTQyN2NlNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KHsgdGl0bGUsIHNlYXJjaCwgZGVmYXVsdFNpemUgPSAzLCB2YWx1ZXMgPSBbXSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJIZWlnaHQsIHNldEZpbHRlckhlaWdodF0gPSB1c2VTdGF0ZSgnYXV0bycpO1xuICBjb25zdCBbaXNMaXN0RXhwYW5kZWQsIHNldElzTGlzdEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZmlsdGVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpbHRlclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCwgZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQgPSBmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZEZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0V4cGFuZGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbGxhcHNlTGlzdCA9ICgpID0+IHtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kTGlzdCA9ICgpID0+IHtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJ9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGZpbHRlckhlaWdodCB9fVxuICAgICAgcmVmPXtmaWx0ZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuY2xvc2VGaWx0ZXJJY29uLFxuICAgICAgICAgICAgIWlzRXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIGNvbGxhcHNlRmlsdGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xvc2UgZmlsdGVyXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaCAmJiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBsb2NhdGlvbi4uLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tCb3hlc31cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBpc0xpc3RFeHBhbmRlZCA/ICdhdXRvJyA6IDcwIH19XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfSAvPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29sbGFwc2VMaXN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlSWNvbn0+c2hvdyBtb3JlIGljb248L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=