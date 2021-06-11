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



var CHECKBOX_HEIGHT = 27;
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
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var expandedListHeightDiff = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    expandedListHeightDiff.current = listRef.current.scrollHeight - listRef.current.clientHeight;
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!isListExpanded && listRef.current) {
      var labels = listRef.current.querySelectorAll('label');

      if (labels.length) {
        setTimeout(function () {
          labels[defaultSize - 1].style.opacity = '0.61';
        }, 200);
      }
    } else if (isListExpanded && listRef.current) {
      var _labels = listRef.current.querySelectorAll('label');

      if (_labels.length) {
        _labels[defaultSize - 1].style.opacity = '1';
      }
    }
  }, [isListExpanded]);

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
    setFilterHeight(defaultFilterHeight.current + CHECKBOX_HEIGHT * values.length - 11);
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
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes), !isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notExpanded)),
      style: {
        height: isListExpanded ? Math.ceil(values.length * CHECKBOX_HEIGHT) - 11 : Math.ceil(defaultSize * CHECKBOX_HEIGHT)
      },
      ref: listRef,
      children: values.map(function (value) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

_s(index, "SexOVQSXKBaym0sq+wiNtS1Tg9c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJsaXN0UmVmIiwiZGVmYXVsdEZpbHRlckhlaWdodCIsImV4cGFuZGVkTGlzdEhlaWdodERpZmYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibGFiZWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm9wYWNpdHkiLCJjb2xsYXBzZUZpbHRlciIsImV4cGFuZEZpbHRlciIsImNvbGxhcHNlTGlzdCIsImV4cGFuZExpc3QiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY2xhc3NuYW1lcyIsIk1hdGgiLCJjZWlsIiwibWFwIiwidmFsdWUiLCJjaGVja21hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLEVBQXhCO0FBRWUsU0FBU0MsS0FBVCxPQUFnRTtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsOEJBQWhDQyxXQUFnQztBQUFBLE1BQWhDQSxXQUFnQyxpQ0FBbEIsQ0FBa0I7QUFBQSx5QkFBZkMsTUFBZTtBQUFBLE1BQWZBLE1BQWUsNEJBQU4sRUFBTTs7QUFBQSxrQkFDckNDLCtDQUFRLENBQUMsTUFB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LEVBQUVBLHNFQUFpQk87QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUdHRCxLQUhIO0FBQUEsV0FBMENBLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxPQVJBO0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCRixlQW9ERTtBQUNFLGVBQVMsRUFBRU4scUVBRGI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYixZQUFJdkIsY0FBSixFQUFvQjtBQUNsQnFCLHNCQUFZO0FBQ2IsU0FGRCxNQUVPO0FBQ0xDLG9CQUFVO0FBQ1g7QUFDRixPQVJIO0FBQUEsOEJBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQ0UsaUJBQVMsRUFBRUcsaURBQVUsQ0FDbkJGLHlFQURtQixFQUVuQnZCLGNBQWMsSUFBSXVCLG1FQUZDLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOztHQXBJdUIvQixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmNzNlYmMwZWMxNTliMGVlOGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDSEVDS0JPWF9IRUlHSFQgPSAyNztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyB0aXRsZSwgc2VhcmNoLCBkZWZhdWx0U2l6ZSA9IDMsIHZhbHVlcyA9IFtdIH0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKCdhdXRvJyk7XG4gIGNvbnN0IFtpc0xpc3RFeHBhbmRlZCwgc2V0SXNMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBmaWx0ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGlzdFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0RmlsdGVySGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50ID1cbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCA9IGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0xpc3RFeHBhbmRlZCAmJiBsaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGxpc3RSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xuICAgICAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGFiZWxzW2RlZmF1bHRTaXplIC0gMV0uc3R5bGUub3BhY2l0eSA9ICcwLjYxJztcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzTGlzdEV4cGFuZGVkXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VMaXN0ID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRMaXN0ID0gKCkgPT4ge1xuICAgIHNldElzTGlzdEV4cGFuZGVkKHRydWUpO1xuICAgIHNldEZpbHRlckhlaWdodChcbiAgICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCArIENIRUNLQk9YX0hFSUdIVCAqIHZhbHVlcy5sZW5ndGggLSAxMVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuY2hlY2tCb3hlcyxcbiAgICAgICAgICAhaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5ub3RFeHBhbmRlZFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogaXNMaXN0RXhwYW5kZWRcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKHZhbHVlcy5sZW5ndGggKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTFcbiAgICAgICAgICAgIDogTWF0aC5jZWlsKGRlZmF1bHRTaXplICogQ0hFQ0tCT1hfSEVJR0hUKSxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtsaXN0UmVmfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrbWFya30gLz5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlTGlzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3Nlcy5zaG93TW9yZUljb24sXG4gICAgICAgICAgICBpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICBzaG93IG1vcmUgaWNvblxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=