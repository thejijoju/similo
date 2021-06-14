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

  var searchContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // const router = useRouter();
  // eslint-disable-next-line consistent-return

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
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchSuggestions: searchSuggestions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Header, "XD4brxb60c+6BkjvFEEPRqJfvC8=");

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


/***/ }),

/***/ "./helpers/useOnClickOutside.js":
/*!**************************************!*\
  !*** ./helpers/useOnClickOutside.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useOnClickOutside; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


function useOnClickOutside(ref, handler) {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91c2VPbkNsaWNrT3V0c2lkZS5qcyJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwic2VhcmNoQ29udGFpbmVyUmVmIiwidXNlUmVmIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbXBhbmllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlT25DbGlja091dHNpZGUiLCJyZWYiLCJoYW5kbGVyIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxvQkFGSzs7QUFJL0IsTUFBTUMsa0JBQWtCLEdBQUdDLDZDQUFNLEVBQWpDLENBSitCLENBTS9CO0FBRUE7O0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDQyxnQkFBWSxDQUFDVixLQUFELENBQVo7O0FBQ0EsUUFBSUcsVUFBVSxLQUFLLEVBQW5CLEVBQXVCO0FBQ3JCLGFBQU9HLG9CQUFvQixDQUFDLEVBQUQsQ0FBM0I7QUFDRDs7QUFDRE4sU0FBSyxHQUFHVyxVQUFVLENBQUMsWUFBTTtBQUN2QkMsc0RBQUEsV0FDVUMsK0NBRFYsZ0RBQ3VEVixVQUR2RCxHQUVHVyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCVCw0QkFBb0IsQ0FBQ1MsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLFNBQXBCLENBQXBCO0FBQ0QsT0FKSCxXQUtTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsT0FMVDtBQU1ELEtBUGlCLEVBT2YsSUFQZSxDQUFsQjtBQVFELEdBYkQ7O0FBZUEsc0JBQ0U7QUFBUSxhQUFTLEVBQUVHLG1FQUFuQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxpRUFBaEI7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBQyxtQkFBWDtBQUErQixhQUFLLEVBQUUsR0FBdEM7QUFBMkMsY0FBTSxFQUFFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUEsNEVBQWhCO0FBQXlDLFNBQUcsRUFBRWQsa0JBQTlDO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFXLEVBQUMsK0NBRmQ7QUFHRSxpQkFBUyxFQUFFYyxzRUFIYjtBQUlFLGFBQUssRUFBRWxCLFVBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDbUIsS0FBRDtBQUFBLGlCQUFXbEIsYUFBYSxDQUFDa0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBeEI7QUFBQSxTQUxaO0FBTUUsZUFBTyxFQUFFZjtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssaUJBQVMsRUFBRVksdUZBQWhCO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBbUIsMkJBQWlCLEVBQUVoQjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQTVDdUJKLE07O0tBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHhCO0FBRWUsU0FBU3dCLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsT0FBaEMsRUFBeUM7QUFBQTs7QUFDdERDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNQLEtBQUQsRUFBVztBQUMxQjtBQUVBLFVBQUksQ0FBQ0ksR0FBRyxDQUFDSSxPQUFMLElBQWdCSixHQUFHLENBQUNJLE9BQUosQ0FBWUMsUUFBWixDQUFxQlQsS0FBSyxDQUFDQyxNQUEzQixDQUFwQixFQUF3RDtBQUN0RDtBQUNEOztBQUVESSxhQUFPLENBQUNMLEtBQUQsQ0FBUDtBQUNELEtBUkQ7O0FBVUFVLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNKLFFBQXZDO0FBRUFHLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NKLFFBQXhDO0FBRUEsV0FBTyxZQUFNO0FBQ1hHLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENMLFFBQTFDO0FBRUFHLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsWUFBN0IsRUFBMkNMLFFBQTNDO0FBQ0QsS0FKRDtBQUtELEdBcEJRLEVBb0JOLENBQUNILEdBQUQsRUFBTUMsT0FBTixDQXBCTSxDQUFUO0FBcUJEOztHQXRCdUJGLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODZjMWYwYjU2N2UwYjE4YzRiOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAnLi9TZWFyY2hTdWdnZXN0aW9ucyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IFVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdXNlT25DbGlja091dHNpZGUnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdGlvbnMsIHNldFNlYXJjaFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJSZWYgPSB1c2VSZWYoKTtcblxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgY29uc3QgZ2V0U2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBzZXRTZWFyY2hTdWdnZXN0aW9ucyhbXSk7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnM/dGVybT0ke3NlYXJjaFRlcm19YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMocmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5IZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL0xvZ28xLnN2Z1wiIHdpZHRoPXsxOTF9IGhlaWdodD17Nzl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaENvbnRhaW5lcn0gcmVmPXtzZWFyY2hDb250YWluZXJSZWZ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uS2V5VXA9e2dldFNlYXJjaFN1Z2dlc3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hTdWdnZXN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zIHNlYXJjaFN1Z2dlc3Rpb25zPXtzZWFyY2hTdWdnZXN0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT25DbGlja091dHNpZGUocmVmLCBoYW5kbGVyKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgcmVmJ3MgZWxlbWVudCBvciBkZXNjZW5kZW50IGVsZW1lbnRzXG5cbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbcmVmLCBoYW5kbGVyXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9