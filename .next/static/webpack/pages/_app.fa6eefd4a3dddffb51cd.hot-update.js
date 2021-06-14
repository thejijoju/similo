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
    hideSearchSuggestions();
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
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchSuggestions: searchSuggestions,
          show: isSearchSuggestionVisible
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().closeIcon),
        onClick: clearSearch,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJzZWFyY2hDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzaG93U2VhcmNoU3VnZ2VzdGlvbnMiLCJoaWRlU2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclNlYXJjaCIsInVzZUVmZmVjdCIsImxlbmd0aCIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbXBhbmllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxvQkFGSzs7QUFBQSxtQkFJN0JKLCtDQUFRLENBQUMsS0FBRCxDQUpxQjtBQUFBLE1BR3hCSyx5QkFId0I7QUFBQSxNQUdHQyw0QkFISDs7QUFNL0IsTUFBTUMsa0JBQWtC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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAnLi9TZWFyY2hTdWdnZXN0aW9ucyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdXNlT25DbGlja091dHNpZGUnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdGlvbnMsIHNldFNlYXJjaFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUsIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGVdID1cbiAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc2hvd1NlYXJjaFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oJycpO1xuICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgc2hvd1NlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9LCBbc2VhcmNoU3VnZ2VzdGlvbnNdKTtcblxuICB1c2VPbkNsaWNrT3V0c2lkZShzZWFyY2hDb250YWluZXJSZWYsIGhpZGVTZWFyY2hTdWdnZXN0aW9ucyk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGNvbnN0IGdldFNlYXJjaFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gc2V0U2VhcmNoU3VnZ2VzdGlvbnMoW10pO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoL3N1Z2dlc3Rpb25zP3Rlcm09JHtzZWFyY2hUZXJtfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFN1Z2dlc3Rpb25zKHJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuSGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9Mb2dvMS5zdmdcIiB3aWR0aD17MTkxfSBoZWlnaHQ9ezc5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hDb250YWluZXJ9IHJlZj17c2VhcmNoQ29udGFpbmVyUmVmfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBjb21wYW55IG9yIGJyYW5kIGRvIHlvdSB3YW50IHRvIGNvbXBhcmU/XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleVVwPXtnZXRTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoU3VnZ2VzdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgIDxTZWFyY2hTdWdnZXN0aW9uc1xuICAgICAgICAgICAgc2VhcmNoU3VnZ2VzdGlvbnM9e3NlYXJjaFN1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgc2hvdz17aXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlSWNvbn0gb25DbGljaz17Y2xlYXJTZWFyY2h9PlxuICAgICAgICAgIENsb3NlXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==