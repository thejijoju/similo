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

  var showSearchSuggestion = function showSearchSuggestion() {
    setIsSearchSuggestionVisible(true);
  };

  var hideSearchSuggestions = function hideSearchSuggestions() {
    setIsSearchSuggestionVisible(false);
  };

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
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().searchSuggestionsContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchSuggestions: searchSuggestions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(Header, "L3eX/GExsq9YPaEzRib9fzu4Dv4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ0aW1lciIsIkhlYWRlciIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hTdWdnZXN0aW9ucyIsInNldFNlYXJjaFN1Z2dlc3Rpb25zIiwiaXNTZWFyY2hTdWdnZXN0aW9uVmlzaWJsZSIsInNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUiLCJzZWFyY2hDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzaG93U2VhcmNoU3VnZ2VzdGlvbiIsImhpZGVTZWFyY2hTdWdnZXN0aW9ucyIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiZ2V0U2VhcmNoU3VnZ2VzdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbXBhbmllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFbUJGLCtDQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRXhCRyxpQkFGd0I7QUFBQSxNQUVMQyxvQkFGSzs7QUFBQSxtQkFJN0JKLCtDQUFRLENBQUMsS0FBRCxDQUpxQjtBQUFBLE1BR3hCSyx5QkFId0I7QUFBQSxNQUdHQyw0QkFISDs7QUFNL0IsTUFBTUMsa0JBQWtCLEdBQUdDLDZDQUFNLEVBQWpDLENBTitCLENBUS9COztBQUVBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0gsZ0NBQTRCLENBQUMsSUFBRCxDQUE1QjtBQUNELEdBRkQ7O0FBSUEsTUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDSixnQ0FBNEIsQ0FBQyxLQUFELENBQTVCO0FBQ0QsR0FGRDs7QUFJQUsscUVBQWlCLENBQUNKLGtCQUFELEVBQXFCRyxxQkFBckIsQ0FBakIsQ0FsQitCLENBb0IvQjs7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakNDLGdCQUFZLENBQUNmLEtBQUQsQ0FBWjs7QUFDQSxRQUFJRyxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDckIsYUFBT0csb0JBQW9CLENBQUMsRUFBRCxDQUEzQjtBQUNEOztBQUNETixTQUFLLEdBQUdnQixVQUFVLENBQUMsWUFBTTtBQUN2QkMsc0RBQUEsV0FDVUMsK0NBRFYsZ0RBQ3VEZixVQUR2RCxHQUVHZ0IsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQmQsNEJBQW9CLENBQUNjLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxTQUFwQixDQUFwQjtBQUNELE9BSkgsV0FLUyxVQUFDQyxLQUFEO0FBQUEsZUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLE9BTFQ7QUFNRCxLQVBpQixFQU9mLElBUGUsQ0FBbEI7QUFRRCxHQWJEOztBQWVBLHNCQUNFO0FBQVEsYUFBUyxFQUFFRyxtRUFBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsaUVBQWhCO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUMsbUJBQVg7QUFBK0IsYUFBSyxFQUFFLEdBQXRDO0FBQTJDLGNBQU0sRUFBRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVBLDRFQUFoQjtBQUF5QyxTQUFHLEVBQUVqQixrQkFBOUM7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQywrQ0FGZDtBQUdFLGlCQUFTLEVBQUVpQixzRUFIYjtBQUlFLGFBQUssRUFBRXZCLFVBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDd0IsS0FBRDtBQUFBLGlCQUFXdkIsYUFBYSxDQUFDdUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBeEI7QUFBQSxTQUxaO0FBTUUsZUFBTyxFQUFFZjtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssaUJBQVMsRUFBRVksdUZBQWhCO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBbUIsMkJBQWlCLEVBQUVyQjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQXhEdUJKLE07VUFrQnRCWSwrRDs7O0tBbEJzQlosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFiOGI0Y2M4YTQ5MmJiYjVkOTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFNlYXJjaFN1Z2dlc3Rpb25zIGZyb20gJy4vU2VhcmNoU3VnZ2VzdGlvbnMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3VzZU9uQ2xpY2tPdXRzaWRlJztcblxubGV0IHRpbWVyO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaFN1Z2dlc3Rpb25zLCBzZXRTZWFyY2hTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlLCBzZXRJc1NlYXJjaFN1Z2dlc3Rpb25WaXNpYmxlXSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNob3dTZWFyY2hTdWdnZXN0aW9uID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoU3VnZ2VzdGlvblZpc2libGUoZmFsc2UpO1xuICB9O1xuXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHNlYXJjaENvbnRhaW5lclJlZiwgaGlkZVNlYXJjaFN1Z2dlc3Rpb25zKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgY29uc3QgZ2V0U2VhcmNoU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBzZXRTZWFyY2hTdWdnZXN0aW9ucyhbXSk7XG4gICAgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke0FQSV9VUkx9L2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnM/dGVybT0ke3NlYXJjaFRlcm19YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoU3VnZ2VzdGlvbnMocmVzcG9uc2UuZGF0YS5kYXRhLmNvbXBhbmllcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5IZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL0xvZ28xLnN2Z1wiIHdpZHRoPXsxOTF9IGhlaWdodD17Nzl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaENvbnRhaW5lcn0gcmVmPXtzZWFyY2hDb250YWluZXJSZWZ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGNvbXBhbnkgb3IgYnJhbmQgZG8geW91IHdhbnQgdG8gY29tcGFyZT9cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uS2V5VXA9e2dldFNlYXJjaFN1Z2dlc3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hTdWdnZXN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zIHNlYXJjaFN1Z2dlc3Rpb25zPXtzZWFyY2hTdWdnZXN0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=