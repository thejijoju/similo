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



var CHECKBOX_HEIGHT = 23.3;
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
      setFilterHeight = _useState[1]; // const [listHeight, setListHeight] = useState(defaultSize === 3 ? 70 : 70);


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isListExpanded = _useState2[0],
      setIsListExpanded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isExpanded = _useState3[0],
      setIsExpanded = _useState3[1];

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
        lineNumber: 59,
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
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
            lineNumber: 91,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(index, "CjMbcCUeiavPhwMICU3uGLW/xm4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJsaXN0UmVmIiwiZGVmYXVsdEZpbHRlckhlaWdodCIsImRlZmF1bHRMaXN0SGVpZ2h0IiwiZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb2xsYXBzZUZpbHRlciIsImV4cGFuZEZpbHRlciIsImNvbGxhcHNlTGlzdCIsImV4cGFuZExpc3QiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY2xhc3NuYW1lcyIsImxpc3RIZWlnaHQiLCJtYXAiLCJ2YWx1ZSIsImNoZWNrbWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUcsSUFBeEI7QUFFZSxTQUFTQyxLQUFULE9BQWdFO0FBQUE7O0FBQUE7O0FBQUEsTUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxNQUF3QyxRQUF4Q0EsTUFBd0M7QUFBQSw4QkFBaENDLFdBQWdDO0FBQUEsTUFBaENBLFdBQWdDLGlDQUFsQixDQUFrQjtBQUFBLHlCQUFmQyxNQUFlO0FBQUEsTUFBZkEsTUFBZSw0QkFBTixFQUFNOztBQUFBLGtCQUNyQ0MsK0NBQVEsQ0FBQyxNQUFELENBRDZCO0FBQUEsTUFDdEVDLFlBRHNFO0FBQUEsTUFDeERDLGVBRHdELGlCQUU3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LG1CQUFTLEVBQUVMLHNFQUFsQjtBQUFBLGtDQUNFO0FBQU8sZ0JBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVBLHNFQUFpQk07QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUdHRCxLQUhIO0FBQUEsV0FBMENBLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxPQVJBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCRixlQTZDRTtBQUNFLGVBQVMsRUFBRUwscUVBRGI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYixZQUFJbEIsY0FBSixFQUFvQjtBQUNsQmdCLHNCQUFZO0FBQ2IsU0FGRCxNQUVPO0FBQ0xDLG9CQUFVO0FBQ1g7QUFDRixPQVJIO0FBQUEsOEJBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQUcsaUJBQVMsRUFBRUMseUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2REQ7O0dBdkd1QjFCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ZiZTMyNWM5M2QyNzkzNWJkYjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENIRUNLQk9YX0hFSUdIVCA9IDIzLjM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KHsgdGl0bGUsIHNlYXJjaCwgZGVmYXVsdFNpemUgPSAzLCB2YWx1ZXMgPSBbXSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJIZWlnaHQsIHNldEZpbHRlckhlaWdodF0gPSB1c2VTdGF0ZSgnYXV0bycpO1xuICAvLyBjb25zdCBbbGlzdEhlaWdodCwgc2V0TGlzdEhlaWdodF0gPSB1c2VTdGF0ZShkZWZhdWx0U2l6ZSA9PT0gMyA/IDcwIDogNzApO1xuICBjb25zdCBbaXNMaXN0RXhwYW5kZWQsIHNldElzTGlzdEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZmlsdGVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxpc3RSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVmYXVsdEZpbHRlckhlaWdodCA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0TGlzdEhlaWdodCA9IHVzZVJlZigpO1xuICBjb25zdCBleHBhbmRlZExpc3RIZWlnaHREaWZmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnQgPVxuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VMaXN0ID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRMaXN0ID0gKCkgPT4ge1xuICAgIHNldElzTGlzdEV4cGFuZGVkKHRydWUpO1xuICAgIHNldEZpbHRlckhlaWdodChcbiAgICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCArIGV4cGFuZGVkTGlzdEhlaWdodERpZmYuY3VycmVudFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrQm94ZXN9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogbGlzdEhlaWdodCB9fVxuICAgICAgICByZWY9e2xpc3RSZWZ9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfSAvPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29sbGFwc2VMaXN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlSWNvbn0+c2hvdyBtb3JlIGljb248L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=