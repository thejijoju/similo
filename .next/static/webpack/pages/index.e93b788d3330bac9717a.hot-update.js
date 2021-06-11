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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSize === 3 ? 70 : 70),
      listHeight = _useState2[0],
      setListHeight = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isListExpanded = _useState3[0],
      setIsListExpanded = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isExpanded = _useState4[0],
      setIsExpanded = _useState4[1];

  var filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var defaultListHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var expandedListHeightDiff = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    expandedListHeightDiff.current = listRef.current.scrollHeight - listRef.current.clientHeight;
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);

  var collapseFilter = function collapseFilter() {
    setFilterHeight(67);
    setIsExpanded(false);
    setIsListExpanded(false);
  };

  var expandFilter = function expandFilter() {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
  };

  var collapseList = function collapseList() {
    setFilterHeight(defaultFilterHeight.current);
    setIsListExpanded(false);
  };

  var expandList = function expandList() {
    setIsListExpanded(true);
    setFilterHeight(defaultFilterHeight.current + expandedListHeightDiff.current);
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
        lineNumber: 57,
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
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes),
      style: {
        height: listHeight
      },
      ref: listRef,
      children: values.map(function (value) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(index, "8C1IrMpDC7enAFCYeuUN+ry8w94=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJsaXN0SGVpZ2h0Iiwic2V0TGlzdEhlaWdodCIsImlzTGlzdEV4cGFuZGVkIiwic2V0SXNMaXN0RXhwYW5kZWQiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsImZpbHRlclJlZiIsInVzZVJlZiIsImxpc3RSZWYiLCJkZWZhdWx0RmlsdGVySGVpZ2h0IiwiZGVmYXVsdExpc3RIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbGxhcHNlRmlsdGVyIiwiZXhwYW5kRmlsdGVyIiwiY29sbGFwc2VMaXN0IiwiZXhwYW5kTGlzdCIsImNsYXNzZXMiLCJoZWlnaHQiLCJjbGFzc25hbWVzIiwibWFwIiwidmFsdWUiLCJjaGVja21hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxPQUFnRTtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsOEJBQWhDQyxXQUFnQztBQUFBLE1BQWhDQSxXQUFnQyxpQ0FBbEIsQ0FBa0I7QUFBQSx5QkFBZkMsTUFBZTtBQUFBLE1BQWZBLE1BQWUsNEJBQU4sRUFBTTs7QUFBQSxrQkFDckNDLCtDQUFRLENBQUMsTUFBRCxDQUQ2QjtBQUFBLE1BQ3RFQyxZQURzRTtBQUFBLE1BQ3hEQyxlQUR3RDs7QUFBQSxtQkFFekNGLCtDQUFRLENBQUNGLFdBQVcsS0FB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USxPQUhQO0FBQUEsZ0JBS0daLE1BQU0sQ0FBQzJCLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDckIsNEJBQ0U7QUFBTyxtQkFBUyxFQUFFSixzRUFBbEI7QUFBQSxrQ0FDRTtBQUFPLGdCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFQSxzRUFBaUJLO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHR0QsS0FISDtBQUFBLFdBQTBDQSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsT0FSQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUE2Q0U7QUFDRSxlQUFTLEVBQUVKLHFFQURiO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2IsWUFBSWxCLGNBQUosRUFBb0I7QUFDbEJnQixzQkFBWTtBQUNiLFNBRkQsTUFFTztBQUNMQyxvQkFBVTtBQUNYO0FBQ0YsT0FSSDtBQUFBLDhCQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRTtBQUFHLGlCQUFTLEVBQUVDLHlFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkREOztHQXZHdUI1QixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5M2I3ODhkMzMzMGJhYzk3MTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHRpdGxlLCBzZWFyY2gsIGRlZmF1bHRTaXplID0gMywgdmFsdWVzID0gW10gfSkge1xuICBjb25zdCBbZmlsdGVySGVpZ2h0LCBzZXRGaWx0ZXJIZWlnaHRdID0gdXNlU3RhdGUoJ2F1dG8nKTtcbiAgY29uc3QgW2xpc3RIZWlnaHQsIHNldExpc3RIZWlnaHRdID0gdXNlU3RhdGUoZGVmYXVsdFNpemUgPT09IDMgPyA3MCA6IDcwKTtcbiAgY29uc3QgW2lzTGlzdEV4cGFuZGVkLCBzZXRJc0xpc3RFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVmYXVsdExpc3RIZWlnaHQgPSB1c2VSZWYoKTtcbiAgY29uc3QgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50ID1cbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCA9IGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbGxhcHNlRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodCg2Nyk7XG4gICAgc2V0SXNFeHBhbmRlZChmYWxzZSk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZEZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0V4cGFuZGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbGxhcHNlTGlzdCA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kTGlzdCA9ICgpID0+IHtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZCh0cnVlKTtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoXG4gICAgICBkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQgKyBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnRcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcn1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogZmlsdGVySGVpZ2h0IH19XG4gICAgICByZWY9e2ZpbHRlclJlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3Nlcy5jbG9zZUZpbHRlckljb24sXG4gICAgICAgICAgICAhaXNFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgY29sbGFwc2VGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZEZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDbG9zZSBmaWx0ZXJcbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoICYmIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIGxvY2F0aW9uLi4uXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja0JveGVzfVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGxpc3RIZWlnaHQgfX1cbiAgICAgICAgcmVmPXtsaXN0UmVmfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrbWFya30gLz5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlTGlzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZUljb259PnNob3cgbW9yZSBpY29uPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9