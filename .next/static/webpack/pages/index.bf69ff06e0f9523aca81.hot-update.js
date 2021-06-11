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
    if (!isListExpanded) {
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes[defaultSize].style.opacity = '0.61';
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
        lineNumber: 66,
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
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
            lineNumber: 105,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJsaXN0UmVmIiwiZGVmYXVsdEZpbHRlckhlaWdodCIsImV4cGFuZGVkTGlzdEhlaWdodERpZmYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2hlY2tib3hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlIiwib3BhY2l0eSIsImNvbGxhcHNlRmlsdGVyIiwiZXhwYW5kRmlsdGVyIiwiY29sbGFwc2VMaXN0IiwiZXhwYW5kTGlzdCIsImNsYXNzZXMiLCJoZWlnaHQiLCJjbGFzc25hbWVzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJtYXAiLCJ2YWx1ZSIsImNoZWNrbWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUcsSUFBeEI7QUFFZSxTQUFTQyxLQUFULE9BQWdFO0FBQUE7O0FBQUE7O0FBQUEsTUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxNQUF3QyxRQUF4Q0EsTUFBd0M7QUFBQSw4QkFBaENDLFdBQWdDO0FBQUEsTUFBaENBLFdBQWdDLGlDQUFsQixDQUFrQjtBQUFBLHlCQUFmQyxNQUFlO0FBQUEsTUFBZkEsTUFBZSw0QkFBTixFQUFNOztBQUFBLGtCQUNyQ0MsK0NBQVEsQ0FBQyxN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dkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQ7O0dBNUh1QjlCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmY2OWZmMDZlMGY5NTIzYWNhODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENIRUNLQk9YX0hFSUdIVCA9IDIzLjM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KHsgdGl0bGUsIHNlYXJjaCwgZGVmYXVsdFNpemUgPSAzLCB2YWx1ZXMgPSBbXSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJIZWlnaHQsIHNldEZpbHRlckhlaWdodF0gPSB1c2VTdGF0ZSgnYXV0bycpO1xuICAvLyBjb25zdCBbbGlzdEhlaWdodCwgc2V0TGlzdEhlaWdodF0gPSB1c2VTdGF0ZShkZWZhdWx0U2l6ZSA9PT0gMyA/IDcwIDogNzApO1xuICBjb25zdCBbaXNMaXN0RXhwYW5kZWQsIHNldElzTGlzdEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZmlsdGVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxpc3RSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVmYXVsdEZpbHRlckhlaWdodCA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGV4cGFuZGVkTGlzdEhlaWdodERpZmYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGV4cGFuZGVkTGlzdEhlaWdodERpZmYuY3VycmVudCA9XG4gICAgICBsaXN0UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gbGlzdFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQgPSBmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgIGNoZWNrYm94ZXNbZGVmYXVsdFNpemVdLnN0eWxlLm9wYWNpdHkgPSAnMC42MSc7XG4gICAgfVxuICB9LCBbaXNMaXN0RXhwYW5kZWRdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUxpc3QgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZExpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQodHJ1ZSk7XG4gICAgc2V0RmlsdGVySGVpZ2h0KFxuICAgICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ICsgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJ9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGZpbHRlckhlaWdodCB9fVxuICAgICAgcmVmPXtmaWx0ZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuY2xvc2VGaWx0ZXJJY29uLFxuICAgICAgICAgICAgIWlzRXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIGNvbGxhcHNlRmlsdGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xvc2UgZmlsdGVyXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaCAmJiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBsb2NhdGlvbi4uLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5jaGVja0JveGVzLFxuICAgICAgICAgICFpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLm5vdEV4cGFuZGVkXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBpc0xpc3RFeHBhbmRlZFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAqIENIRUNLQk9YX0hFSUdIVCkgKyAxMVxuICAgICAgICAgICAgOiBNYXRoLmNlaWwoZGVmYXVsdFNpemUgKiBDSEVDS0JPWF9IRUlHSFQpLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e2xpc3RSZWZ9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0ga2V5PXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfSAvPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29sbGFwc2VMaXN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLnNob3dNb3JlSWNvbixcbiAgICAgICAgICAgIGlzTGlzdEV4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIHNob3cgbW9yZSBpY29uXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==