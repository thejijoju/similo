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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/useOnClickOutside */ "./helpers/useOnClickOutside.js");
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isSearchSuggestionVisible = _useState3[0],
      setIsSearchSuggestionVisible = _useState3[1];

  var searchContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (router.query.term) {
      setSearchTerm(router.query.term);
    }
  }, []);

  var search = function search(event) {
    event.preventDefault();
    router.push("/?term=".concat(encodeURIComponent(searchTerm)));
  };

  var showSearchSuggestions = function showSearchSuggestions() {
    setIsSearchSuggestionVisible(true);
  };

  var hideSearchSuggestions = function hideSearchSuggestions() {
    setIsSearchSuggestionVisible(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!searchSuggestions.length) {
      hideSearchSuggestions();
    }
  }, [searchSuggestions]);

  var clearSearch = function clearSearch() {
    setSearchTerm('');
    hideSearchSuggestions();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (searchSuggestions.length) {
      showSearchSuggestions();
    }
  }, [searchSuggestions]);
  (0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__.default)(searchContainerRef, hideSearchSuggestions); // eslint-disable-next-line consistent-return

  var getSearchSuggestions = function getSearchSuggestions() {
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
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/images/Logo1.svg",
        width: 191,
        height: 79
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchContainer),
      ref: searchContainerRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: search,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "What company or brand do you want to compare?",
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchBar),
          value: searchTerm,
          onChange: function onChange(event) {
            return setSearchTerm(event.target.value);
          },
          onKeyUp: getSearchSuggestions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_5__.default, {
          searchSuggestions: searchSuggestions,
          show: isSearchSuggestionVisible,
          onHide: hideSearchSuggestions,
          setSearchTerm: setSearchTerm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().closeIcon),
        onClick: clearSearch,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Header, "vfX+D4tLTtyKS0XB9uwcEzGA4yA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJzZWFyY2hDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsInRlcm0iLCJzZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInNob3dTZWFyY2hTdWdnZXN0aW9ucyIsImhpZGVTZWFyY2hTdWdnZXN0aW9ucyIsImxlbmd0aCIsImNsZWFyU2VhcmNoIiwidXNlT25DbGlja091dHNpZGUiLCJnZXRTZWFyY2hTdWdnZXN0aW9ucyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxv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RUFIYjtBQUlFLGVBQUssRUFBRW5DLFVBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDYyxLQUFEO0FBQUEsbUJBQVdiLGFBQWEsQ0FBQ2EsS0FBSyxDQUFDc0IsTUFBTixDQUFhQyxLQUFkLENBQXhCO0FBQUEsV0FMWjtBQU1FLGlCQUFPLEVBQUVkO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBRVksdUZBQWhCO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFDRSwyQkFBaUIsRUFBRWpDLGlCQURyQjtBQUVFLGNBQUksRUFBRUUseUJBRlI7QUFHRSxnQkFBTSxFQUFFZSxxQkFIVjtBQUlFLHVCQUFhLEVBQUVsQjtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBbUJFO0FBQUcsaUJBQVMsRUFBRWtDLHNFQUFkO0FBQWlDLGVBQU8sRUFBRWQsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBOUZ1QnZCLE07VUFRUFcsa0QsRUFzQ2ZhLCtEOzs7S0E5Q3NCeEIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNhMDgwOWEyMGUwNjM2MGZlODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAnLi9TZWFyY2hTdWdnZXN0aW9ucyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdXNlT25DbGlja091dHNpZGUnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdGlvbnMsIHNldFNlYXJjaFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUsIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGVdID1cbiAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRlcm0pIHtcbiAgICAgIHNldFNlYXJjaFRlcm0ocm91dGVyLnF1ZXJ5LnRlcm0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goYC8/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hUZXJtKX1gKTtcbiAgfTtcblxuICBjb25zdCBzaG93U2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlYXJjaFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9LCBbc2VhcmNoU3VnZ2VzdGlvbnNdKTtcblxuICBjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKCcnKTtcbiAgICBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHNob3dTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSwgW3NlYXJjaFN1Z2dlc3Rpb25zXSk7XG5cbiAgdXNlT25DbGlja091dHNpZGUoc2VhcmNoQ29udGFpbmVyUmVmLCBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBjb25zdCBnZXRTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xuICAgICAgcmV0dXJuIHNldFNlYXJjaFN1Z2dlc3Rpb25zKFtdKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaC9zdWdnZXN0aW9ucz90ZXJtPSR7c2VhcmNoVGVybX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hTdWdnZXN0aW9ucyhyZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLkhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvTG9nbzEuc3ZnXCIgd2lkdGg9ezE5MX0gaGVpZ2h0PXs3OX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQ29udGFpbmVyfSByZWY9e3NlYXJjaENvbnRhaW5lclJlZn0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2h9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlVcD17Z2V0U2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hTdWdnZXN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zXG4gICAgICAgICAgICBzZWFyY2hTdWdnZXN0aW9ucz17c2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICBzaG93PXtpc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlfVxuICAgICAgICAgICAgb25IaWRlPXtoaWRlU2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICBzZXRTZWFyY2hUZXJtPXtzZXRTZWFyY2hUZXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufSBvbkNsaWNrPXtjbGVhclNlYXJjaH0+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9