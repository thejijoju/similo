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
              children: company.parentCompany
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
              children: company.founder
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
              children: company.yearOfFoundation
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
              lineNumber: 107,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.revenue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
          lineNumber: 111,
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
              lineNumber: 114,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Michael Burke (Chairman & CEO), Nicolas Ghesqui\xE8re, Virgil Abloh (Creative directors)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Number of employees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: company.revenue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infoBlock),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
              children: "Area served"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
              children: "Worldwide"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiY29tcGFueSIsInVzZVN0YXRlIiwiaXNDb21wYW55Q2FyZEV4cGFuZGVkIiwic2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkIiwiY29tcGFueUNhcmRIZWlnaHQiLCJzZXRDb21wYW55Q2FyZEhlaWdodCIsImlzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQiLCJzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkIiwiY29tcGFueUNhcmRSZWYiLCJ1c2VSZWYiLCJjb21wYW55Q2FyZEluaXRpYWxIZWlnaHQiLCJ1c2VDb250ZXh0IiwiU2VhcmNoUmVzdWx0c0NvbnRleHQiLCJhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCIsImV4cGFuZENvbXBhbnlDYXJkIiwiY29sbGFwc2VDb21wYW55Q2FyZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwidXNlRWZmZWN0Iiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInNjcm9sbEhlaWdodCIsImNsYXNzZXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2dvUGF0aCIsIm5hbWUiLCJpbmR1c3RyeSIsImV4cGVydGlzZSIsInNwbGl0IiwibWFwIiwidGFnIiwid2Vic2l0ZVVybCIsIkhRTG9jYXRpb24iLCJwYXJlbnRDb21wYW55IiwiZm91bmRlciIsInllYXJPZkZvdW5kYXRpb24iLCJyZXZlbnVlIiwiZGl2aWRlciIsImNsYXNzbmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUMsS0FBRCxDQURsQjtBQUFBLE1BQ3pDQyxx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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHQoeyBjb21wYW55IH0pIHtcbiAgY29uc3QgW2lzQ29tcGFueUNhcmRFeHBhbmRlZCwgc2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbXBhbnlDYXJkSGVpZ2h0LCBzZXRDb21wYW55Q2FyZEhlaWdodF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkLCBzZXRJc0V4cGFuZENhcmRCdXR0b25Sb3RhdGVkXSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNvbXBhbnlDYXJkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodCA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgYXJlQ29tcGFueUNhcmRzRXhwYW5kZWQgfSA9IHVzZUNvbnRleHQoU2VhcmNoUmVzdWx0c0NvbnRleHQpO1xuXG4gIGNvbnN0IGV4cGFuZENvbXBhbnlDYXJkID0gKCkgPT4ge1xuICAgIHNldElzRXhwYW5kQ2FyZEJ1dHRvblJvdGF0ZWQodHJ1ZSk7XG4gICAgc2V0SXNDb21wYW55Q2FyZEV4cGFuZGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbGxhcHNlQ29tcGFueUNhcmQgPSAoKSA9PiB7XG4gICAgc2V0SXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZChmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0NvbXBhbnlDYXJkRXhwYW5kZWQoZmFsc2UpO1xuICAgIH0sIDIwMCk7XG4gICAgc2V0Q29tcGFueUNhcmRIZWlnaHQoY29tcGFueUNhcmRJbml0aWFsSGVpZ2h0LmN1cnJlbnQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldENvbXBhbnlDYXJkSGVpZ2h0KGNvbXBhbnlDYXJkUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIGNvbXBhbnlDYXJkSW5pdGlhbEhlaWdodC5jdXJyZW50ID0gY29tcGFueUNhcmRSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNDb21wYW55Q2FyZEV4cGFuZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb21wYW55Q2FyZFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCk7XG4gICAgICBzZXRDb21wYW55Q2FyZEhlaWdodChjb21wYW55Q2FyZFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCArIDQyKTtcbiAgICB9XG4gIH0sIFtpc0NvbXBhbnlDYXJkRXhwYW5kZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmVDb21wYW55Q2FyZHNFeHBhbmRlZCkge1xuICAgICAgZXhwYW5kQ29tcGFueUNhcmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGFwc2VDb21wYW55Q2FyZCgpO1xuICAgIH1cbiAgfSwgW2FyZUNvbXBhbnlDYXJkc0V4cGFuZGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuU2VhcmNoUmVzdWx0fVxuICAgICAgcmVmPXtjb21wYW55Q2FyZFJlZn1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogY29tcGFueUNhcmRIZWlnaHQgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvbXBhbnkubG9nb1BhdGh9KWAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueUluZm99PlxuICAgICAgICA8aDE+e2NvbXBhbnkubmFtZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW5kdXN0cnl9Pntjb21wYW55LmluZHVzdHJ5fTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAge2NvbXBhbnkuZXhwZXJ0aXNlICYmXG4gICAgICAgICAgICBjb21wYW55LmV4cGVydGlzZS5zcGxpdCgnLCcpLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9IGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0NvbXBhbnlDYXJkRXhwYW5kZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkRldGFpbHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+V2Vic2l0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly8ke2NvbXBhbnkud2Vic2l0ZVVybH1gfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbXBhbnkud2Vic2l0ZVVybH1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+SGVhZHF1YXJ0ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5IUUxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5QYXJlbnQgT3JnYW5pemF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5wYXJlbnRDb21wYW55fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Gb3VuZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y29tcGFueS5mb3VuZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9CbG9ja30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Gb3VuZGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIHtjb21wYW55LnllYXJPZkZvdW5kYXRpb259XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlJldmVudWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LnJldmVudWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZGl0aW9uYWxEZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMua2V5UGVvcGxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PktleSBwZW9wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgTWljaGFlbCBCdXJrZSAoQ2hhaXJtYW4gJiBDRU8pLCBOaWNvbGFzIEdoZXNxdWnDqHJlLCBWaXJnaWxcbiAgICAgICAgICAgICAgICAgIEFibG9oIChDcmVhdGl2ZSBkaXJlY3RvcnMpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pk51bWJlciBvZiBlbXBsb3llZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntjb21wYW55LnJldmVudWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkFyZWEgc2VydmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5Xb3JsZHdpZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICBjbGFzc2VzLmV4cGFuZENhcmQsXG4gICAgICAgICAgaXNFeHBhbmRDYXJkQnV0dG9uUm90YXRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQ29tcGFueUNhcmRFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29sbGFwc2VDb21wYW55Q2FyZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRDb21wYW55Q2FyZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgRXhwYW5kIGNhcmRcbiAgICAgIDwvaT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=