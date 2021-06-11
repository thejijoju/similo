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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(210),
      filterHeight = _useState[0],
      setFilterHeight = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    /* defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight); */
  }, []);

  var collapseFilter = function collapseFilter() {
    setFilterHeight(67);
    setIsExpanded(false);
  };

  var expandFilter = function expandFilter() {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
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
        lineNumber: 37,
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
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes),
      style: {
        height: 70
      },
      children: values.map(function (value) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMore),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Show more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(index, "jGrKt69sjCRrCBAQkSmeR33Lmds=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsImZpbHRlclJlZiIsInVzZVJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJjb2xsYXBzZUZpbHRlciIsImV4cGFuZEZpbHRlciIsImN1cnJlbnQiLCJjbGFzc2VzIiwiaGVpZ2h0IiwiY2xhc3NuYW1lcyIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBZ0U7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLDhCQUFoQ0MsV0FBZ0M7QUFBQSxNQUFoQ0EsV0FBZ0MsaUNBQWxCLENBQWtCO0FBQUEseUJBQWZDLE1BQWU7QUFBQSxNQUFmQSxNQUFlLDRCQUFOLEVBQU07O0FBQUEsa0JBQ3JDQywrQ0FBUSxDQUFDLEdBQUQsQ0FENkI7QUFBQSxNQUN0RUMsWUFEc0U7QUFBQSxNQUN4REMsZUFEd0Q7O0FBQUEsbUJBRXpDRiwrQ0FBUSxDQUFDLElBQUQsQ0FGaUM7QUFBQSxNQUV0RUcsVUFGc0U7QUFBQSxNQUUxREMsYUFGMEQ7O0FBSTdFLE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sRUFBeEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBR0QsNkNBQU0sRUFBbEM7QUFFQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDSjtBQUNHLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCUCxtQkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBRSxpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QlIsbUJBQWUsQ0FBQ0ssbUJBQW1CLENBQUNJLE9BQXJCLENBQWY7QUFDQVAsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFUSxtRUFEYjtBQUVFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUVaO0FBQVYsS0FGVDtBQUdFLE9BQUcsRUFBRUksU0FIUDtBQUFBLDRCQUtFO0FBQUssZUFBUyxFQUFFTyxtRUFBaEI7QUFBQSw4QkFDRTtBQUFBLGtCQUFLaEI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLGlCQUFTLEVBQUVrQixpREFBVSxDQUNuQkYsNEVBRG1CLEVBRW5CLENBQUNULFVBQUQsSUFBZVMsbUVBRkksQ0FEdkI7QUFLRSxlQUFPLEVBQUUsbUJBQU07QUFDYixjQUFJVCxVQUFKLEVBQWdCO0FBQ2RNLDBCQUFjO0FBQ2YsV0FGRCxNQUVPO0FBQ0xDLHdCQUFZO0FBQ2I7QUFDRixTQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUF1QkdiLE1BQU0saUJBQ0w7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGVBQVMsRUFBRWUsbUVBRmI7QUFHRSxpQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSixlQThCRTtBQUFLLGVBQVMsRUFBRUEsdUVBQWhCO0FBQW9DLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUEzQztBQUFBLGdCQUNHZCxNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCLDRCQUNFO0FBQU8sbUJBQVMsRUFBRUosc0VBQWxCO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0scUJBQVMsRUFBRUEsc0VBQWlCSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0dELEtBSEg7QUFBQSxXQUEwQ0EsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELE9BUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGLGVBeUNFO0FBQUssZUFBUyxFQUFFSixxRUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFFQSx5RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7R0F0RXVCakIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjdlMDM4Yzc4MzJiYjE0ZDgzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyB0aXRsZSwgc2VhcmNoLCBkZWZhdWx0U2l6ZSA9IDMsIHZhbHVlcyA9IFtdIH0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKDIxMCk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0RmlsdGVySGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvKiBkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQgPSBmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCk7ICovXG4gIH0sIFtdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZEZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50KTtcbiAgICBzZXRJc0V4cGFuZGVkKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkZpbHRlcn1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogZmlsdGVySGVpZ2h0IH19XG4gICAgICByZWY9e2ZpbHRlclJlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3Nlcy5jbG9zZUZpbHRlckljb24sXG4gICAgICAgICAgICAhaXNFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgY29sbGFwc2VGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZEZpbHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDbG9zZSBmaWx0ZXJcbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2VhcmNoICYmIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIGxvY2F0aW9uLi4uXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja0JveGVzfSBzdHlsZT17eyBoZWlnaHQ6IDcwIH19PlxuICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrbWFya30gLz5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmV9PlxuICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93TW9yZUljb259PnNob3cgbW9yZSBpY29uPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9