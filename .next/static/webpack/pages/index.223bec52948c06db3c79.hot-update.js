self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchResults/SearchResult/index.jsx":
/*!*********************************************************!*\
  !*** ./components/SearchResults/SearchResult/index.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResult; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchResults/SearchResult/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index */ "./context/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "c:\\Work\\Coding\\Web\\Devmaxup\\similo-next\\components\\SearchResults\\SearchResult\\index.jsx",
    _s = $RefreshSig$();





function SearchResult(_ref) {
  _s();

  var _this = this;

  var company = _ref.company;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isCompanyCardExpanded = _useState[0],
      setIsCompanyCardExpanded = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      companyCardHeight = _useState2[0],
      setCompanyCardHeight = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isExpandCardButtonRotated = _useState3[0],
      setIsExpandCardButtonRotated = _useState3[1];

  var companyCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var companyCardInitialHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.SearchResultsContext),
      areCompanyCardsExpanded = _useContext.areCompanyCardsExpanded;

  var expandCompanyCard = function expandCompanyCard() {
    setIsExpandCardButtonRotated(true);
    setIsCompanyCardExpanded(true);
  };

  var collapseCompanyCard = function collapseCompanyCard() {
    setIsExpandCardButtonRotated(false);
    setTimeout(function () {
      setIsCompanyCardExpanded(false);
    }, 200);
    setCompanyCardHeight(companyCardInitialHeight.current);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (companyCardRef.current) {
      setCompanyCardHeight(companyCardRef.current.offsetHeight);
      companyCardInitialHeight.current = companyCardRef.current.offsetHeight;
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (isCompanyCardExpanded) {
      console.log(companyCardRef.current.scrollHeight);
      setCompanyCardHeight(companyCardRef.current.scrollHeight + 42);
    }
  }, [isCompanyCardExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (areCompanyCardsExpanded) {
      expandCompanyCard();
    } else {
      collapseCompanyCard();
    }
  }, [areCompanyCardsExpanded]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SearchResult),
    ref: companyCardRef,
    style: {
      height: companyCardHeight
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
      style: {
        backgroundImage: "url(".concat(company.logoPath, ")")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: company.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().industry),
        children: company.industry
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tags),
        children: company.expertise && company.expertise.split(',').map(function (tag) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tag),
            children: tag
          }, tag, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), isCompanyCardExpanded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainDetails),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Website"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://".concat(company.websiteUrl),
                children: company.websiteUrl
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Headquarters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.HQLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Parent Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "LVMH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founder"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Louis Vuitton"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Founded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "1854"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "\u20AC14 billion (2020)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divider)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalDetails),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().keyPeople),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Key people"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Michael Burke (Chairman & CEO), Nicolas Ghesqui\xE8re, Virgil Abloh (Creative directors)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Number of employees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "121,289 (2014)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Area served"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Worldwide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().expandCard), isExpandCardButtonRotated && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rotate)),
      onClick: function onClick() {
        if (isCompanyCardExpanded) {
          collapseCompanyCard();
        } else {
          expandCompanyCard();
        }
      },
      children: "Expand card"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(SearchResult, "ubwZkalcElmp+fZM8BF1ue1SN1A=");

_c = SearchResult;

var _c;

$RefreshReg$(_c, "SearchResult");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiY29tcGFueSIsInVzZVN0YXRlIiwiaXNDb21wYW55Q2FyZEV4cGFuZGVkIiwic2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkIiwiY29tcGFueUNhcmRIZWlnaHQiLCJzZXRDb21wYW55Q2FyZEhlaWdodCIsImlzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQiLCJzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkIiwiY29tcGFueUNhcmRSZWYiLCJ1c2VSZWYiLCJjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImV4cGFuZENvbXBhbnlDYXJkIiwiY29sbGFwc2VDb21wYW55Q2FyZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwidXNlRWZmZWN0Iiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInNjcm9sbEhlaWdodCIsImNsYXNzZXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2dvUGF0aCIsIm5hbWUiLCJpbmR1c3RyeSIsImV4cGVydGlzZSIsInNwbGl0IiwibWFwIiwidGFnIiwid2Vic2l0ZVVybCIsIkhRTG9jYXRpb24iLCJkaXZpZGVyIiwiY2xhc3NuYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDekNDLHFCQUR5QztBQUFBLE1BQ2xCQyx3QkFEa0I7O0FBQUEsbUJBRUVGLCtDQUFRLENBQUMsRUFBRCxD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QSxvQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBRUEsb0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQVlFO0FBQUsscUJBQVMsRUFBRUEsc0VBQWhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFQSxrRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVBLG9FQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQTJFRTtBQUNFLGVBQVMsRUFBRWEsaURBQVUsQ0FDbkJiLHVFQURtQixFQUVuQmpCLHlCQUF5QixJQUFJaUIsbUVBRlYsQ0FEdkI7QUFLRSxhQUFPLEVBQUUsbUJBQU07QUFDYixZQUFJckIscUJBQUosRUFBMkI7QUFDekJhLDZCQUFtQjtBQUNwQixTQUZELE1BRU87QUFDTEQsMkJBQWlCO0FBQ2xCO0FBQ0YsT0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZGRDs7R0EzSXVCZixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyM2JlYzUyOTQ4YzA2ZGIzYzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHsgY29tcGFueSB9KSB7XG4gIGNvbnN0IFtpc0NvbXBhbnlDYXJkRXhwYW5kZWQsIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wYW55Q2FyZEhlaWdodCwgc2V0Q29tcGFueUNhcmRIZWlnaHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCwgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZF0gPVxuICAgIHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb21wYW55Q2FyZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IGFyZUNvbXBhbnlDYXJkc0V4cGFuZGVkIH0gPSB1c2VDb250ZXh0KFNlYXJjaFJlc3VsdHNDb250ZXh0KTtcblxuICBjb25zdCBleHBhbmRDb21wYW55Q2FyZCA9ICgpID0+IHtcbiAgICBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkKHRydWUpO1xuICAgIHNldElzQ29tcGFueUNhcmRFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUNvbXBhbnlDYXJkID0gKCkgPT4ge1xuICAgIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQoZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkKGZhbHNlKTtcbiAgICB9LCAyMDApO1xuICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodC5jdXJyZW50KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21wYW55Q2FyZFJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZFJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICBjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQuY3VycmVudCA9IGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29tcGFueUNhcmRFeHBhbmRlZCkge1xuICAgICAgY29uc29sZS5sb2coY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuICAgICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgKyA0Mik7XG4gICAgfVxuICB9LCBbaXNDb21wYW55Q2FyZEV4cGFuZGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQpIHtcbiAgICAgIGV4cGFuZENvbXBhbnlDYXJkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxhcHNlQ29tcGFueUNhcmQoKTtcbiAgICB9XG4gIH0sIFthcmVDb21wYW55Q2FyZHNFeHBhbmRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlNlYXJjaFJlc3VsdH1cbiAgICAgIHJlZj17Y29tcGFueUNhcmRSZWZ9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGNvbXBhbnlDYXJkSGVpZ2h0IH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb21wYW55LmxvZ29QYXRofSlgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlJbmZvfT5cbiAgICAgICAgPGgxPntjb21wYW55Lm5hbWV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmluZHVzdHJ5fT57Y29tcGFueS5pbmR1c3RyeX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgIHtjb21wYW55LmV4cGVydGlzZSAmJlxuICAgICAgICAgICAgY29tcGFueS5leHBlcnRpc2Uuc3BsaXQoJywnKS5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNDb21wYW55Q2FyZEV4cGFuZGVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5EZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PldlYnNpdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vJHtjb21wYW55LndlYnNpdGVVcmx9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wYW55LndlYnNpdGVVcmx9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkhlYWRxdWFydGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NvbXBhbnkuSFFMb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UGFyZW50IE9yZ2FuaXphdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+TFZNSDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Gb3VuZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5Mb3VpcyBWdWl0dG9uPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkZvdW5kZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PjE4NTQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UmV2ZW51ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+4oKsMTQgYmlsbGlvbiAoMjAyMCk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkaXRpb25hbERldGFpbHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5rZXlQZW9wbGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+S2V5IHBlb3BsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICBNaWNoYWVsIEJ1cmtlIChDaGFpcm1hbiAmIENFTyksIE5pY29sYXMgR2hlc3F1acOocmUsIFZpcmdpbFxuICAgICAgICAgICAgICAgICAgQWJsb2ggKENyZWF0aXZlIGRpcmVjdG9ycylcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+TnVtYmVyIG9mIGVtcGxveWVlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+MTIxLDI4OSAoMjAxNCk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+QXJlYSBzZXJ2ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pldvcmxkd2lkZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGlcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuZXhwYW5kQ2FyZCxcbiAgICAgICAgICBpc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkICYmIGNsYXNzZXMucm90YXRlXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoaXNDb21wYW55Q2FyZEV4cGFuZGVkKSB7XG4gICAgICAgICAgICBjb2xsYXBzZUNvbXBhbnlDYXJkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZENvbXBhbnlDYXJkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBFeHBhbmQgY2FyZFxuICAgICAgPC9pPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==