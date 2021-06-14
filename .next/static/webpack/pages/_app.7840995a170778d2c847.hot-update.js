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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchSuggestions */ "./components/Layout/Header/SearchSuggestions/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/useOnClickOutside */ "./helpers/useOnClickOutside.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\Layout\\Header\\index.jsx",
    _s = $RefreshSig$();


 // import { useRouter } from 'next/router';






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

  var searchContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // const router = useRouter();

  var showSearchSuggestions = function showSearchSuggestions() {
    setIsSearchSuggestionVisible(true);
  };

  var hideSearchSuggestions = function hideSearchSuggestions() {
    setIsSearchSuggestionVisible(false);
  };

  var clearSearch = function clearSearch() {
    setSearchTerm('');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (searchSuggestions.length) {
      showSearchSuggestions();
    }
  }, [searchSuggestions]);
  (0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_6__.default)(searchContainerRef, hideSearchSuggestions); // eslint-disable-next-line consistent-return

  var getSearchSuggestions = function getSearchSuggestions() {
    clearTimeout(timer);

    if (searchTerm === '') {
      return setSearchSuggestions([]);
    }

    timer = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__.API_URL, "/companies/search/suggestions?term=").concat(searchTerm)).then(function (response) {
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
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchContainer),
      ref: searchContainerRef,
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
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchSuggestions: searchSuggestions,
          show: isSearchSuggestionVisible
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().closeIcon),
        onClick: clearSearch,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s(Header, "Mj1HWXfaNVoJyLuhiTi7ARCZOPY=", false, function () {
  return [_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_6__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJzZWFyY2hDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzaG93U2VhcmNoU3VnZ2VzdGlvbnMiLCJoaWRlU2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclNlYXJjaCIsInVzZUVmZmVjdCIsImxlbmd0aCIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbXBhbmllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxvQkFGSzs7QUFBQSxtQkFJN0JKLCtDQUFRLENBQUMsS0FBRCxDQUpxQjtBQUFBLE1BR3hCSyx5QkFId0I7QUFBQSxNQUdHQyw0QkFISDs7QUFNL0IsTUFBTUMsa0JBQWtCLEdBQUdDLDZDQUFNLEVBQWpDLENBTitCLENBUS9COztBQUVBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQ0gsZ0NBQTRCLENBQUMsSUFBRCxDQUE1QjtBQUNELEdBRkQ7O0FBSUEsTUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDSixnQ0FBNEIsQ0FBQyxLQUFELENBQTVCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCVCxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUFVLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULGlCQUFpQixDQUFDVSxNQUF0QixFQUE4QjtBQUM1QkosMkJBQXFCO0FBQ3RCO0FBQ0YsR0FKUSxFQUlOLENBQUNOLGlCQUFELENBSk0sQ0FBVDtBQU1BVyxxRUFBaUIsQ0FBQ1Asa0JBQUQsRUFBcUJHLHFCQUFyQixDQUFqQixDQTVCK0IsQ0E4Qi9COztBQUNBLE1BQU1LLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0MsZ0JBQVksQ0FBQ2xCLEtBQUQsQ0FBWjs7QUFDQSxRQUFJRyxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDckIsYUFBT0csb0JBQW9CLENBQUMsRUFBRCxDQUEzQjtBQUNEOztBQUNETixTQUFLLEdBQUdtQixVQUFVLENBQUMsWUFBTTtBQUN2QkMsc0RBQUEsV0FDVUMsK0NBRFYsZ0RBQ3VEbEIsVUFEdkQsR0FFR21CLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJqQiw0QkFBb0IsQ0FBQ2lCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxTQUFwQixDQUFwQjtBQUNELE9BSkgsV0FLUyxVQUFDQyxLQUFEO0FBQUEsZUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLE9BTFQ7QUFNRCxLQVBpQixFQU9mLElBUGUsQ0FBbEI7QUFRRCxHQWJEOztBQWVBLHNCQUNFO0FBQVEsYUFBUyxFQUFFRyxtRUFBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsaUVBQWhCO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUMsbUJBQVg7QUFBK0IsYUFBSyxFQUFFLEdBQXRDO0FBQTJDLGNBQU0sRUFBRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVBLDRFQUFoQjtBQUF5QyxTQUFHLEVBQUVwQixrQkFBOUM7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQywrQ0FGZDtBQUdFLGlCQUFTLEVBQUVvQixzRUFIYjtBQUlFLGFBQUssRUFBRTFCLFVBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDMkIsS0FBRDtBQUFBLGlCQUFXMUIsYUFBYSxDQUFDMEIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBeEI7QUFBQSxTQUxaO0FBTUUsZUFBTyxFQUFFZjtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssaUJBQVMsRUFBRVksdUZBQWhCO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFDRSwyQkFBaUIsRUFBRXhCLGlCQURyQjtBQUVFLGNBQUksRUFBRUU7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBZUU7QUFBRyxpQkFBUyxFQUFFc0Isc0VBQWQ7QUFBaUMsZUFBTyxFQUFFaEIsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0F4RXVCWixNO1VBNEJ0QmUsK0Q7OztLQTVCc0JmLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ODQwOTk1YTE3MDc3OGQyYzg0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFNlYXJjaFN1Z2dlc3Rpb25zIGZyb20gJy4vU2VhcmNoU3VnZ2VzdGlvbnMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3VzZU9uQ2xpY2tPdXRzaWRlJztcblxubGV0IHRpbWVyO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaFN1Z2dlc3Rpb25zLCBzZXRTZWFyY2hTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlLCBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlXSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNob3dTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKCcnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHNob3dTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSwgW3NlYXJjaFN1Z2dlc3Rpb25zXSk7XG5cbiAgdXNlT25DbGlja091dHNpZGUoc2VhcmNoQ29udGFpbmVyUmVmLCBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBjb25zdCBnZXRTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xuICAgICAgcmV0dXJuIHNldFNlYXJjaFN1Z2dlc3Rpb25zKFtdKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaC9zdWdnZXN0aW9ucz90ZXJtPSR7c2VhcmNoVGVybX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hTdWdnZXN0aW9ucyhyZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLkhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvTG9nbzEuc3ZnXCIgd2lkdGg9ezE5MX0gaGVpZ2h0PXs3OX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQ29udGFpbmVyfSByZWY9e3NlYXJjaENvbnRhaW5lclJlZn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgY29tcGFueSBvciBicmFuZCBkbyB5b3Ugd2FudCB0byBjb21wYXJlP1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25LZXlVcD17Z2V0U2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaFN1Z2dlc3Rpb25zQ29udGFpbmVyfT5cbiAgICAgICAgICA8U2VhcmNoU3VnZ2VzdGlvbnNcbiAgICAgICAgICAgIHNlYXJjaFN1Z2dlc3Rpb25zPXtzZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgICAgIHNob3c9e2lzU2VhcmNoU3VnZ2VzdGlvblZpc2libGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUljb259IG9uQ2xpY2s9e2NsZWFyU2VhcmNofT5cbiAgICAgICAgICBDbG9zZVxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=