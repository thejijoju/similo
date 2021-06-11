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
      listRef.current.querySelectorAll('label');
      console.log(checkboxes);
      checkboxes[defaultSize - 1].style.opacity = '0.61';
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
        lineNumber: 67,
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
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 106,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ0hFQ0tCT1hfSEVJR0hUIiwiaW5kZXgiLCJ0aXRsZSIsInNlYXJjaCIsImRlZmF1bHRTaXplIiwidmFsdWVzIiwidXNlU3RhdGUiLCJmaWx0ZXJIZWlnaHQiLCJzZXRGaWx0ZXJIZWlnaHQiLCJpc0xpc3RFeHBhbmRlZCIsInNldElzTGlzdEV4cGFuZGVkIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJmaWx0ZXJSZWYiLCJ1c2VSZWYiLCJsaXN0UmVmIiwiZGVmYXVsdEZpbHRlckhlaWdodCIsImV4cGFuZGVkTGlzdEhlaWdodERpZmYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2JveGVzIiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyxJQUF4QjtBQUVlLFNBQVNDLEtBQVQsT0FBZ0U7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLDhCQUFoQ0MsV0FBZ0M7QUFBQSxNQUFoQ0EsV0FBZ0MsaUNBQWxCLENBQWtCO0FBQUEseUJBQWZDLE1BQWU7QUFBQSxNQUFmQSxNQUFlLDRCQUFOLEVBQU07O0FBQUEsa0JBQ3JDQywrQ0FBUSxD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Rix5RUFEbUIsRUFFbkJ2QixjQUFjLElBQUl1QixtRUFGQyxDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0E3SHVCL0IsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjcxYzFkY2FlYjIwYWEzYzk3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ0hFQ0tCT1hfSEVJR0hUID0gMjMuMztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoeyB0aXRsZSwgc2VhcmNoLCBkZWZhdWx0U2l6ZSA9IDMsIHZhbHVlcyA9IFtdIH0pIHtcbiAgY29uc3QgW2ZpbHRlckhlaWdodCwgc2V0RmlsdGVySGVpZ2h0XSA9IHVzZVN0YXRlKCdhdXRvJyk7XG4gIC8vIGNvbnN0IFtsaXN0SGVpZ2h0LCBzZXRMaXN0SGVpZ2h0XSA9IHVzZVN0YXRlKGRlZmF1bHRTaXplID09PSAzID8gNzAgOiA3MCk7XG4gIGNvbnN0IFtpc0xpc3RFeHBhbmRlZCwgc2V0SXNMaXN0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBmaWx0ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGlzdFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBkZWZhdWx0RmlsdGVySGVpZ2h0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXhwYW5kZWRMaXN0SGVpZ2h0RGlmZi5jdXJyZW50ID1cbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCA9IGZpbHRlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBjb25zb2xlLmxvZyhjaGVja2JveGVzKTtcbiAgICAgIGNoZWNrYm94ZXNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzAuNjEnO1xuICAgIH1cbiAgfSwgW2lzTGlzdEV4cGFuZGVkXSk7XG5cbiAgY29uc3QgY29sbGFwc2VGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KDY3KTtcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcbiAgICBzZXRJc0xpc3RFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kRmlsdGVyID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzRXhwYW5kZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VMaXN0ID0gKCkgPT4ge1xuICAgIHNldEZpbHRlckhlaWdodChkZWZhdWx0RmlsdGVySGVpZ2h0LmN1cnJlbnQpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRMaXN0ID0gKCkgPT4ge1xuICAgIHNldElzTGlzdEV4cGFuZGVkKHRydWUpO1xuICAgIHNldEZpbHRlckhlaWdodChcbiAgICAgIGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCArIGV4cGFuZGVkTGlzdEhlaWdodERpZmYuY3VycmVudFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBmaWx0ZXJIZWlnaHQgfX1cbiAgICAgIHJlZj17ZmlsdGVyUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLmNsb3NlRmlsdGVySWNvbixcbiAgICAgICAgICAgICFpc0V4cGFuZGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUZpbHRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwYW5kRmlsdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENsb3NlIGZpbHRlclxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWFyY2ggJiYgKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbG9jYXRpb24uLi5cIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuY2hlY2tCb3hlcyxcbiAgICAgICAgICAhaXNMaXN0RXhwYW5kZWQgJiYgY2xhc3Nlcy5ub3RFeHBhbmRlZFxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogaXNMaXN0RXhwYW5kZWRcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKHZhbHVlcy5sZW5ndGggKiBDSEVDS0JPWF9IRUlHSFQpICsgMTFcbiAgICAgICAgICAgIDogTWF0aC5jZWlsKGRlZmF1bHRTaXplICogQ0hFQ0tCT1hfSEVJR0hUKSxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtsaXN0UmVmfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrbWFya30gLz5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXN0RXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlTGlzdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRMaXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3Nlcy5zaG93TW9yZUljb24sXG4gICAgICAgICAgICBpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICBzaG93IG1vcmUgaWNvblxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=