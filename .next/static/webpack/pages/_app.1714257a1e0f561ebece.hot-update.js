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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Layout/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/useOnClickOutside */ "./helpers/useOnClickOutside.js");
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/index */ "./context/index.js");
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

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_8__.SearchResultsContext),
      setCurrentPage = _useContext.setCurrentPage;

  var searchContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (router.query.term) {
      setSearchTerm(router.query.term);
    }
  }, []);

  var showSearchSuggestions = function showSearchSuggestions() {
    setIsSearchSuggestionVisible(true);
  };

  var hideSearchSuggestions = function hideSearchSuggestions() {
    setIsSearchSuggestionVisible(false);
  };

  var search = function search(event) {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      return;
    }

    setCurrentPage(0);
    hideSearchSuggestions();
    clearTimeout(timer);
    router.push("/?term=".concat(encodeURIComponent(searchTerm), "&page=0&perPage=").concat(_constants__WEBPACK_IMPORTED_MODULE_6__.COMPANIES_PER_PAGE)
    /* ,
    undefined,
    { shallow: true } */
    );
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
  (0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__.default)(searchContainerRef, hideSearchSuggestions);

  var getSearchSuggestions = function getSearchSuggestions(event) {
    if (event.key === 'Enter') {
      return;
    }

    clearTimeout(timer);

    if (searchTerm === '') {
      // eslint-disable-next-line consistent-return
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
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().Header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/images/Logo1.svg",
        width: 191,
        height: 79
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().searchContainer),
      ref: searchContainerRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: search,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "What company or brand do you want to compare?",
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().searchBar),
          value: searchTerm,
          onChange: function onChange(event) {
            return setSearchTerm(event.target.value);
          },
          onKeyUp: getSearchSuggestions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_5__.default, {
          searchSuggestions: searchSuggestions,
          show: isSearchSuggestionVisible,
          onHide: hideSearchSuggestions,
          setSearchTerm: setSearchTerm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closeIcon),
        onClick: clearSearch,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

_s(Header, "kRZD7vtX5D2kh2zVTzoXe+QrWmk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzZXRDdXJyZW50UGFnZSIsInNlYXJjaENvbnRhaW5lclJlZiIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwidGVybSIsInNob3dTZWFyY2hTdWdnZXN0aW9ucyIsImhpZGVTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiY2xlYXJUaW1lb3V0IiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkNPTVBBTklFU19QRVJfUEFHRSIsImxlbmd0aCIsImNsZWFyU2VhcmNoIiwidXNlT25DbGlja091dHNpZGUiLCJnZXRTZWFyY2hTdWdnZXN0aW9ucyIsImtleSIsInNldFRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29tcGFuaWVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBaEh1QjdCLE07VUFVUGMsa0QsRUFrRGZnQiwrRDs7O0tBNURzQjlCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNzE0MjU3YTFlMGY1NjFlYmVjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFNlYXJjaFN1Z2dlc3Rpb25zIGZyb20gJy4vU2VhcmNoU3VnZ2VzdGlvbnMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMLCBDT01QQU5JRVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdXNlT25DbGlja091dHNpZGUnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4JztcblxubGV0IHRpbWVyO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaFN1Z2dlc3Rpb25zLCBzZXRTZWFyY2hTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlLCBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlXSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgc2V0Q3VycmVudFBhZ2UgfSA9IHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeS50ZXJtKSB7XG4gICAgICBzZXRTZWFyY2hUZXJtKHJvdXRlci5xdWVyeS50ZXJtKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaG93U2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEN1cnJlbnRQYWdlKDApO1xuICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICBgLz90ZXJtPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBzZWFyY2hUZXJtXG4gICAgICApfSZwYWdlPTAmcGVyUGFnZT0ke0NPTVBBTklFU19QRVJfUEFHRX1gIC8qICxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9ICovXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VhcmNoU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICBoaWRlU2VhcmNoU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hTdWdnZXN0aW9uc10pO1xuXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oJycpO1xuICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgc2hvd1NlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9LCBbc2VhcmNoU3VnZ2VzdGlvbnNdKTtcblxuICB1c2VPbkNsaWNrT3V0c2lkZShzZWFyY2hDb250YWluZXJSZWYsIGhpZGVTZWFyY2hTdWdnZXN0aW9ucyk7XG5cbiAgY29uc3QgZ2V0U2VhcmNoU3VnZ2VzdGlvbnMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gJycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgICAgcmV0dXJuIHNldFNlYXJjaFN1Z2dlc3Rpb25zKFtdKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYCR7QVBJX1VSTH0vY29tcGFuaWVzL3NlYXJjaC9zdWdnZXN0aW9ucz90ZXJtPSR7c2VhcmNoVGVybX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hTdWdnZXN0aW9ucyhyZXNwb25zZS5kYXRhLmRhdGEuY29tcGFuaWVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLkhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvTG9nbzEuc3ZnXCIgd2lkdGg9ezE5MX0gaGVpZ2h0PXs3OX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQ29udGFpbmVyfSByZWY9e3NlYXJjaENvbnRhaW5lclJlZn0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2h9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlVcD17Z2V0U2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hTdWdnZXN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zXG4gICAgICAgICAgICBzZWFyY2hTdWdnZXN0aW9ucz17c2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICBzaG93PXtpc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlfVxuICAgICAgICAgICAgb25IaWRlPXtoaWRlU2VhcmNoU3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICBzZXRTZWFyY2hUZXJtPXtzZXRTZWFyY2hUZXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufSBvbkNsaWNrPXtjbGVhclNlYXJjaH0+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9