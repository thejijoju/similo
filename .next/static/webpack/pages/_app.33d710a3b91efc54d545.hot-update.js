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
      setCUrrentPage = _useContext.setCUrrentPage;

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

_s(Header, "49aTp79k2aNY/sSEs14vLZTihgA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJzZXRDVXJyZW50UGFnZSIsInNlYXJjaENvbnRhaW5lclJlZiIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwidGVybSIsInNob3dTZWFyY2hTdWdnZXN0aW9ucyIsImhpZGVTZWFyY2hTdWdnZXN0aW9ucyIsInNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwic2V0Q3VycmVudFBhZ2UiLCJjbGVhclRpbWVvdXQiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiQ09NUEFOSUVTX1BFUl9QQUdFIiwibGVuZ3RoIiwiY2xlYXJTZWFyY2giLCJ1c2VPbkNsaWNrT3V0c2lkZSIsImdldFNlYXJjaFN1Z2dlc3Rpb25zIiwia2V5Iiwic2V0VGltZW91dCIsImF4aW9zIiwiQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb21wYW5pZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSjtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxF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QTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FoSHVCOUIsTTtVQVVQYyxrRCxFQWtEZmlCLCtEOzs7S0E1RHNCL0IsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMzZDcxMGEzYjkxZWZjNTRkNTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAnLi9TZWFyY2hTdWdnZXN0aW9ucyc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEFQSV9VUkwsIENPTVBBTklFU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAnLi4vLi4vLi4vaGVscGVycy91c2VPbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5sZXQgdGltZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoU3VnZ2VzdGlvbnMsIHNldFNlYXJjaFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUsIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGVdID1cbiAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBzZXRDVXJyZW50UGFnZSB9ID0gdXNlQ29udGV4dChTZWFyY2hSZXN1bHRzQ29udGV4dCk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRlcm0pIHtcbiAgICAgIHNldFNlYXJjaFRlcm0ocm91dGVyLnF1ZXJ5LnRlcm0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNob3dTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVTZWFyY2hTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWFyY2hUZXJtLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Q3VycmVudFBhZ2UoMCk7XG4gICAgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByb3V0ZXIucHVzaChcbiAgICAgIGAvP3Rlcm09JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHNlYXJjaFRlcm1cbiAgICAgICl9JnBhZ2U9MCZwZXJQYWdlPSR7Q09NUEFOSUVTX1BFUl9QQUdFfWAgLyogLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgeyBzaGFsbG93OiB0cnVlIH0gKi9cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGhpZGVTZWFyY2hTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSwgW3NlYXJjaFN1Z2dlc3Rpb25zXSk7XG5cbiAgY29uc3QgY2xlYXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgc2V0U2VhcmNoVGVybSgnJyk7XG4gICAgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzaG93U2VhcmNoU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hTdWdnZXN0aW9uc10pO1xuXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHNlYXJjaENvbnRhaW5lclJlZiwgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKTtcblxuICBjb25zdCBnZXRTZWFyY2hTdWdnZXN0aW9ucyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgICByZXR1cm4gc2V0U2VhcmNoU3VnZ2VzdGlvbnMoW10pO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtBUElfVVJMfS9jb21wYW5pZXMvc2VhcmNoL3N1Z2dlc3Rpb25zP3Rlcm09JHtzZWFyY2hUZXJtfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFN1Z2dlc3Rpb25zKHJlc3BvbnNlLmRhdGEuZGF0YS5jb21wYW5pZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuSGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9Mb2dvMS5zdmdcIiB3aWR0aD17MTkxfSBoZWlnaHQ9ezc5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hDb250YWluZXJ9IHJlZj17c2VhcmNoQ29udGFpbmVyUmVmfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgY29tcGFueSBvciBicmFuZCBkbyB5b3Ugd2FudCB0byBjb21wYXJlP1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleVVwPXtnZXRTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaFN1Z2dlc3Rpb25zQ29udGFpbmVyfT5cbiAgICAgICAgICA8U2VhcmNoU3VnZ2VzdGlvbnNcbiAgICAgICAgICAgIHNlYXJjaFN1Z2dlc3Rpb25zPXtzZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgICAgIHNob3c9e2lzU2VhcmNoU3VnZ2VzdGlvblZpc2libGV9XG4gICAgICAgICAgICBvbkhpZGU9e2hpZGVTZWFyY2hTdWdnZXN0aW9uc31cbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUljb259IG9uQ2xpY2s9e2NsZWFyU2VhcmNofT5cbiAgICAgICAgICBDbG9zZVxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=