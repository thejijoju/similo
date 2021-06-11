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
  var expandedListHeightDiff = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    expandedListHeightDiff.current = listRef.current.scrollHeight - listRef.current.clientHeight;
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!isListExpanded && listRef.current) {
      var labels = listRef.current.querySelectorAll('label');
      console.log(labels);

      if (labels.length) {
        labels[defaultSize - 1].style.opacity = '0.61';
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
        lineNumber: 69,
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
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes), !isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notExpanded)),
      style: {
        height: isListExpanded ? Math.ceil(values.length * CHECKBOX_HEIGHT) + 11 : Math.ceil(defaultSize * CHECKBOX_HEIGHT)
      },
      ref: listRef,
      children: values.map(function (value) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJsaXN0UmVmIiwiZGVmYXVsdEZpbHRlckhlaWdodCIsImV4cGFuZGVkTGlzdEhlaWdodERpZmYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibGFiZWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzdHlsZSIsIm9wYWNpdHkiLCJjb2xsYXBzZUZpbHRlciIsImV4cGFuZEZpbHRlciIsImNvbGxhcHNlTGlzdCIsImV4cGFuZExpc3QiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY2xhc3NuYW1lcyIsIk1hdGgiLCJjZWlsIiwibWFwIiwidmFsdWUiLCJjaGVja21hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLElBQXhCO0FBRWUsU0FBU0MsS0FBVCxPQUFnRTtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsOEJBQWhDQyxXQUFnQztBQUFBLE1BQWhDQSxXQUFnQyxpQ0FBbEIsQ0FBa0I7QUFBQSx5QkFBZkMsTUFBZTtBQUFBLE1BQWZBLE1BQWUsNEJBQU4sRUFBTTs7QUFBQSxrQkFDckNDLCtDQUFRLENBQUMs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O0FBQUEsOEJBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQ0UsaUJBQVMsRUFBRUcsaURBQVUsQ0FDbkJGLHlFQURtQixFQUVuQnhCLGNBQWMsSUFBSXdCLG1FQUZDLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOztHQS9IdUJoQyxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwNDIxZTVhMTRkNDYyOWE3NDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDSEVDS0JPWF9IRUlHSFQgPSAyMy4zO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHRpdGxlLCBzZWFyY2gsIGRlZmF1bHRTaXplID0gMywgdmFsdWVzID0gW10gfSkge1xuICBjb25zdCBbZmlsdGVySGVpZ2h0LCBzZXRGaWx0ZXJIZWlnaHRdID0gdXNlU3RhdGUoJ2F1dG8nKTtcbiAgLy8gY29uc3QgW2xpc3RIZWlnaHQsIHNldExpc3RIZWlnaHRdID0gdXNlU3RhdGUoZGVmYXVsdFNpemUgPT09IDMgPyA3MCA6IDcwKTtcbiAgY29uc3QgW2lzTGlzdEV4cGFuZGVkLCBzZXRJc0xpc3RFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBleHBhbmRlZExpc3RIZWlnaHREaWZmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnQgPVxuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBjb25zb2xlLmxvZyhsYWJlbHMpO1xuICAgICAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgbGFiZWxzW2RlZmF1bHRTaXplIC0gMV0uc3R5bGUub3BhY2l0eSA9ICcwLjYxJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc0xpc3RFeHBhbmRlZF0pO1xuXG4gIGNvbnN0IGNvbGxhcHNlRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodCg2Nyk7XG4gICAgc2V0SXNFeHBhbmRlZChmYWxzZSk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZEZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0V4cGFuZGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbGxhcHNlTGlzdCA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kTGlzdCA9ICgpID0+IHtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZCh0cnVlKTtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoXG4gICAgICBkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQgKyBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnRcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcn1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogZmlsdGVySGVpZ2h0IH19XG4gICAgICByZWY9e2ZpbHRlclJlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3Nlcy5jbG9zZUZpbHRlckljb24sXG4gICAgICAgICAgICAhaXNFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgY29sbGFwc2VGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZEZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDbG9zZSBmaWx0ZXJcbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoICYmIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIGxvY2F0aW9uLi4uXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBjbGFzc2VzLmNoZWNrQm94ZXMsXG4gICAgICAgICAgIWlzTGlzdEV4cGFuZGVkICYmIGNsYXNzZXMubm90RXhwYW5kZWRcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IGlzTGlzdEV4cGFuZGVkXG4gICAgICAgICAgICA/IE1hdGguY2VpbCh2YWx1ZXMubGVuZ3RoICogQ0hFQ0tCT1hfSEVJR0hUKSArIDExXG4gICAgICAgICAgICA6IE1hdGguY2VpbChkZWZhdWx0U2l6ZSAqIENIRUNLQk9YX0hFSUdIVCksXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17bGlzdFJlZn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja21hcmt9IC8+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGlzdEV4cGFuZGVkKSB7XG4gICAgICAgICAgICBjb2xsYXBzZUxpc3QoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwYW5kTGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuc2hvd01vcmVJY29uLFxuICAgICAgICAgICAgaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgc2hvdyBtb3JlIGljb25cbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9