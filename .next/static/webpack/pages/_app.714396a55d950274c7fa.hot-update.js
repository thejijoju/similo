self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header/index.jsx":
/*!********************************************!*\
  !*** ./components/Layout/Header/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchSuggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchSuggestions */ "./components/Layout/Header/SearchSuggestions/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Layout\\Header\\index.jsx",
    _s = $RefreshSig$();








var timer;
function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      searchSuggestions = _useState2[0],
      setSearchSuggestions = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // eslint-disable-next-line consistent-return

  var getSearchSuggestions = function getSearchSuggestions() {
    console.log('aaa');
    clearTimeout(timer);

    if (searchTerm === '') {
      return setSearchSuggestions([]);
    }

    timer = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL, "/companies/search/suggestions?term=").concat(searchTerm)).then(function (response) {
        setSearchSuggestions(response.data.data.companies);
      })["catch"](function (error) {
        return console.log(error);
      });
    }, 1000);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/images/Logo1.svg",
        width: 191,
        height: 79
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "What company or brand do you want to compare?",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchBar),
        value: searchTerm,
        onChange: function onChange(event) {
          return setSearchTerm(event.target.value);
        },
        onKeyUp: getSearchSuggestions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_5__.default, {
          searchSuggestions: searchSuggestions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(Header, "haOgVyrvOMrgFSHjfQXaDo1a6M8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImF4aW9zIiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb21wYW5pZXMiLCJlcnJvciIsImNsYXNzZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxvQkFGSzs7QUFHL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUgrQixDQUsvQjs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUMsZ0JBQVksQ0FBQ1osS0FBRCxDQUFaOztBQUNBLFFBQUlHLFVBQVUsS0FBSyxFQUFuQixFQUF1QjtBQUNyQixhQUFPRyxvQkFBb0IsQ0FBQyxFQUFELENBQTNCO0FBQ0Q7O0FBQ0ROLFNBQUssR0FBR2EsVUFBVSxDQUFDLFlBQU07QUFDdkJDLHNEQUFBLFdBQ1VDLCtDQURWLGdEQUN1RFosVUFEdkQsR0FFR2EsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlgsNEJBQW9CLENBQUNXLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxTQUFwQixDQUFwQjtBQUNELE9BSkgsV0FLUyxVQUFDQyxLQUFEO0FBQUEsZUFBV1YsT0FBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVosQ0FBWDtBQUFBLE9BTFQ7QUFNRCxLQVBpQixFQU9mLElBUGUsQ0FBbEI7QUFRRCxHQWREOztBQWdCQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUMsbUVBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLGlFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLG1CQUFYO0FBQStCLGFBQUssRUFBRSxHQUF0QztBQUEyQyxjQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFQSw0RUFBaEI7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQywrQ0FGZDtBQUdFLGlCQUFTLEVBQUVBLHNFQUhiO0FBSUUsYUFBSyxFQUFFbEIsVUFKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNtQixLQUFEO0FBQUEsaUJBQVdsQixhQUFhLENBQUNrQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUF4QjtBQUFBLFNBTFo7QUFNRSxlQUFPLEVBQUVmO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFFWSx1RkFBaEI7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUFtQiwyQkFBaUIsRUFBRWhCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBMUN1QkosTTtVQUdQTyxrRDs7O0tBSE9QLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MTQzOTZhNTVkOTUwMjc0YzdmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAnLi9TZWFyY2hTdWdnZXN0aW9ucyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdGlvbnMsIHNldFNlYXJjaFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGNvbnN0IGdldFNlYXJjaFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xuICAgICAgcmV0dXJuIHNldFNlYXJjaFN1Z2dlc3Rpb25zKFtdKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaC9zdWdnZXN0aW9ucz90ZXJtPSR7c2VhcmNoVGVybX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hTdWdnZXN0aW9ucyhyZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLkhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvTG9nbzEuc3ZnXCIgd2lkdGg9ezE5MX0gaGVpZ2h0PXs3OX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQ29udGFpbmVyfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBjb21wYW55IG9yIGJyYW5kIGRvIHlvdSB3YW50IHRvIGNvbXBhcmU/XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleVVwPXtnZXRTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoU3VnZ2VzdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgIDxTZWFyY2hTdWdnZXN0aW9ucyBzZWFyY2hTdWdnZXN0aW9ucz17c2VhcmNoU3VnZ2VzdGlvbnN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9