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
        lineNumber: 46,
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
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
            lineNumber: 77,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0RmlsdGVySGVpZ2h0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImNvbGxhcHNlRmlsdGVyIiwiZXhwYW5kRmlsdGVyIiwiY29sbGFwc2VMaXN0IiwiZXhwYW5kTGlzdCIsImNsYXNzZXMiLCJoZWlnaHQiLCJjbGFzc25hbWVzIiwibWFwIiwidmFsdWUiLCJjaGVja21hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxPQUFnRTtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsOEJBQWhDQyxXQUFnQztBQUFBLE1BQWhDQSxXQUFnQyxpQ0FBbEIsQ0FBa0I7QUFBQSx5QkFBZkMsTUFBZTtBQUFBLE1BQWZBLE1BQWUsNEJBQU4sRUFBTTs7QUFBQSxrQkFDckNDLCtDQUFRLENBQUMsTUFBRCxDQUQ2QjtBQUFBLE1BQ3RFQyxZQURzRTtBQUFBLE1BQ3hEQyxlQUR3RDs7QUFBQSxtQkFFakNGLCtDQUFRLENBQUMsS0FBRCxDQUZ5QjtBQUFBLE1BRXRFRyxjQUZzRTtBQUFBLE1BRXREQyxpQkFGc0Q7O0FBQUEsbUJBR3pDSiwrQ0FBUSxDQUFDLElBQUQsQ0FIaUM7QUFBQSxNQUd0RUssVUFIc0U7QUFBQSxN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O0FBQUE7QUFBQSxZQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRERDs7R0EzRnVCdEIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OGM4OWQ1YjVkZGQ0MGY4MTU5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyB0aXRsZSwgc2VhcmNoLCBkZWZhdWx0U2l6ZSA9IDMsIHZhbHVlcyA9IFtdIH0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKCdhdXRvJyk7XG4gIGNvbnN0IFtpc0xpc3RFeHBhbmRlZCwgc2V0SXNMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBmaWx0ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVmYXVsdEZpbHRlckhlaWdodCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUxpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZExpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrQm94ZXN9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogaXNMaXN0RXhwYW5kZWQgPyAnYXV0bycgOiA3MCB9fVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrbWFya30gLz5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlTGlzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZUljb259PnNob3cgbW9yZSBpY29uPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9