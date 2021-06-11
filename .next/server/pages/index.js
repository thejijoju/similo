(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Filters/Filter/index.jsx":
/*!*********************************************!*\
  !*** ./components/Filters/Filter/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/Filter/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "d:\\Backup\\My\\Work\\Coding\\Devmaxup\\similo-next\\components\\Filters\\Filter\\index.jsx";

/* eslint-disable jsx-a11y/label-has-associated-control */



const CHECKBOX_HEIGHT = 27;
function index({
  title,
  search,
  defaultSize = 3,
  values = []
}) {
  const {
    0: filterHeight,
    1: setFilterHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('auto');
  const {
    0: isListExpanded,
    1: setIsListExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const defaultFilterHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const expandedListHeightDiff = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    expandedListHeightDiff.current = listRef.current.scrollHeight - listRef.current.clientHeight;
    defaultFilterHeight.current = filterRef.current.clientHeight;
    setFilterHeight(filterRef.current.clientHeight);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (values.length <= defaultSize) {
      return;
    }

    if (!isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');

      if (labels.length) {
        setTimeout(() => {
          labels[defaultSize - 1].style.opacity = '0.61';
        }, 200);
      }
    } else if (isListExpanded && listRef.current) {
      const labels = listRef.current.querySelectorAll('label');

      if (labels.length) {
        labels[defaultSize - 1].style.opacity = '1';
      }
    }
  }, [isListExpanded]);

  const collapseFilter = () => {
    setFilterHeight(67);
    setIsExpanded(false);
    setIsListExpanded(false);
  };

  const expandFilter = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsExpanded(true);
  };

  const collapseList = () => {
    setFilterHeight(defaultFilterHeight.current);
    setIsListExpanded(false);
  };

  const expandList = () => {
    setIsListExpanded(true);
    setFilterHeight(defaultFilterHeight.current + CHECKBOX_HEIGHT * values.length - CHECKBOX_HEIGHT * defaultSize);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filter),
    style: {
      height: filterHeight,
      borderBottom: defaultSize >= values.length ? 'none' : ''
    },
    ref: filterRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeFilterIcon), !isExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        onClick: () => {
          if (isExpanded) {
            collapseFilter();
          } else {
            expandFilter();
          }
        },
        children: "Close filter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), search && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      placeholder: "enter a location..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBoxes), !isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notExpanded)),
      style: {
        height: isListExpanded ? Math.ceil(values.length * CHECKBOX_HEIGHT) - 11 : Math.ceil(defaultSize * CHECKBOX_HEIGHT) - 11
      },
      ref: listRef,
      children: values.map(value => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkmark)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), value]
        }, value, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), defaultSize < values.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMore),
      onClick: () => {
        if (isListExpanded) {
          collapseList();
        } else {
          expandList();
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Show more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().showMoreIcon), isListExpanded && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rotate)),
        children: "show more icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Filters/index.jsx":
/*!**************************************!*\
  !*** ./components/Filters/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Filters; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/Filters/Filter/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Filters/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "d:\\Backup\\My\\Work\\Coding\\Devmaxup\\similo-next\\components\\Filters\\index.jsx";



const COUNTRIES = ['Germany', 'France', 'United Kingdom', 'USA', 'Spain', 'Italy', 'Norway'];
const COMPANY_SIZES = ['0-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,000+'];
const EXPERTISE = ['Hide All', 'Ready to wear', 'Accessories', 'Footwear', 'Something else'];
const REVENUE = ['0-1 million', '1-25 million', '25-100 million', '100-500 million', '501-1,000 million', '1-10 billion', '10-50 billion', '50+ billion'];
const COMPANY_TYPES = ['Public', 'Private', 'Subsidiary'];
function Filters() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Filters),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filterButton),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), "Filter"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mostRelevantButton),
        children: ["Most relevant ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: "arrow down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Location",
      values: COUNTRIES,
      defaultSize: 3,
      search: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: COMPANY_SIZES,
      defaultSize: 4,
      title: "Company size"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      values: EXPERTISE,
      defaultSize: 4,
      title: "Expertise"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Revenue",
      values: REVENUE,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Filter__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Company Type",
      values: COMPANY_TYPES,
      defaultSize: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Filters */ "./components/Filters/index.jsx");

var _jsxFileName = "d:\\Backup\\My\\Work\\Coding\\Devmaxup\\similo-next\\pages\\index.jsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Filters/Filter/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/Filters/Filter/styles.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Filter": "styles_Filter__2y9v2",
	"header": "styles_header__33OKB",
	"closeFilterIcon": "styles_closeFilterIcon__1niCJ",
	"rotate": "styles_rotate__1HEPo",
	"search": "styles_search__MIbSG",
	"checkBoxes": "styles_checkBoxes__BOKt9",
	"container": "styles_container__bUKO9",
	"checkmark": "styles_checkmark__1nCDe",
	"showMore": "styles_showMore__1v-yW",
	"showMoreIcon": "styles_showMoreIcon__1sv2m"
};


/***/ }),

/***/ "./components/Filters/styles.module.scss":
/*!***********************************************!*\
  !*** ./components/Filters/styles.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Filters": "styles_Filters__3lGcR",
	"buttons": "styles_buttons__2JBqQ",
	"filterButton": "styles_filterButton__2Imej",
	"mostRelevantButton": "styles_mostRelevantButton__11H8B"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovL3NpbWlsby8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaW1pbG8vLi9jb21wb25lbnRzL0ZpbHRlcnMvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9zaW1pbG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNIRUNLQk9YX0hFSUdIVCIsImluZGV4IiwidGl0bGUiLCJzZWFyY2giLCJkZWZhdWx0U2l6ZSIsInZhbHVlcyIsImZpbHRlckhlaWdodCIsInNldEZpbHRlckhlaWdodCIsInVzZVN0YXRlIiwiaXNMaXN0RXhwYW5kZWQiLCJzZXRJc0xpc3RFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiZmlsdGVyUmVmIiwidXNlUmVmIiwibGlzdFJlZiIsImRlZmF1bHRGaWx0ZXJIZWlnaHQiLCJleHBhbmRlZExpc3RIZWlnaHREaWZmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImxlbmd0aCIsImxhYmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiY29sbGFwc2VGaWx0ZXIiLCJleHBhbmRGaWx0ZXIiLCJjb2xsYXBzZUxpc3QiLCJleHBhbmRMaXN0IiwiY2xhc3NlcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImNsYXNzbmFtZXMiLCJNYXRoIiwiY2VpbCIsIm1hcCIsInZhbHVlIiwiY2hlY2ttYXJrIiwiQ09VTlRSSUVTIiwiQ09NUEFOWV9TSVpFUyIsIkVYUEVSVElTRSIsIlJFVkVOVUUiLCJDT01QQU5ZX1RZUEVTIiwiRmlsdGVycyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxFQUF4QjtBQUVlLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxPQUFGO0FBQVNDLFFBQVQ7QUFBaUJDLGFBQVcsR0FBRyxDQUEvQjtBQUFrQ0MsUUFBTSxHQUFHO0FBQTNDLENBQWYsRUFBZ0U7QUFDN0UsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQywrQ0FBUSxDQUFDLE1BQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0YsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7QUFFQSxRQUFNSyxTQUFTLEdBQUdDLDZDQUFNLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHRCw2Q0FBTSxFQUF0QjtBQUNBLFFBQU1FLG1CQUFtQixHQUFHRiw2Q0FBTSxFQUFsQztBQUVBLFFBQU1HLHNCQUFzQixHQUFHSCw2Q0FBTSxFQUFyQztBQUVBSSxrREFBUyxDQUFDLE1BQU07QUFDZEQsMEJBQXNCLENBQUNFLE9BQXZCLEdBQ0VKLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsWUFBaEIsR0FBK0JMLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkUsWUFEakQ7QUFFQUwsdUJBQW1CLENBQUNHLE9BQXBCLEdBQThCTixTQUFTLENBQUNNLE9BQVYsQ0FBa0JFLFlBQWhEO0FBQ0FkLG1CQUFlLENBQUNNLFNBQVMsQ0FBQ00sT0FBVixD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Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENIRUNLQk9YX0hFSUdIVCA9IDI3O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IHRpdGxlLCBzZWFyY2gsIGRlZmF1bHRTaXplID0gMywgdmFsdWVzID0gW10gfSkge1xuICBjb25zdCBbZmlsdGVySGVpZ2h0LCBzZXRGaWx0ZXJIZWlnaHRdID0gdXNlU3RhdGUoJ2F1dG8nKTtcbiAgY29uc3QgW2lzTGlzdEV4cGFuZGVkLCBzZXRJc0xpc3RFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlZmF1bHRGaWx0ZXJIZWlnaHQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBleHBhbmRlZExpc3RIZWlnaHREaWZmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBleHBhbmRlZExpc3RIZWlnaHREaWZmLmN1cnJlbnQgPVxuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGxpc3RSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ID0gZmlsdGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNldEZpbHRlckhlaWdodChmaWx0ZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSBkZWZhdWx0U2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzTGlzdEV4cGFuZGVkICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgbGFiZWxzID0gbGlzdFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYWJlbHNbZGVmYXVsdFNpemUgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzAuNjEnO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNMaXN0RXhwYW5kZWQgJiYgbGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBsaXN0UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwnKTtcbiAgICAgIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgIGxhYmVsc1tkZWZhdWx0U2l6ZSAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNMaXN0RXhwYW5kZWRdKTtcblxuICBjb25zdCBjb2xsYXBzZUZpbHRlciA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJIZWlnaHQoNjcpO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgIHNldElzTGlzdEV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBleHBhbmRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNFeHBhbmRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjb2xsYXBzZUxpc3QgPSAoKSA9PiB7XG4gICAgc2V0RmlsdGVySGVpZ2h0KGRlZmF1bHRGaWx0ZXJIZWlnaHQuY3VycmVudCk7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGV4cGFuZExpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNMaXN0RXhwYW5kZWQodHJ1ZSk7XG4gICAgc2V0RmlsdGVySGVpZ2h0KFxuICAgICAgZGVmYXVsdEZpbHRlckhlaWdodC5jdXJyZW50ICtcbiAgICAgICAgQ0hFQ0tCT1hfSEVJR0hUICogdmFsdWVzLmxlbmd0aCAtXG4gICAgICAgIENIRUNLQk9YX0hFSUdIVCAqIGRlZmF1bHRTaXplXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5GaWx0ZXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IGZpbHRlckhlaWdodCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBkZWZhdWx0U2l6ZSA+PSB2YWx1ZXMubGVuZ3RoID8gJ25vbmUnIDogJycsXG4gICAgICB9fVxuICAgICAgcmVmPXtmaWx0ZXJSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMuY2xvc2VGaWx0ZXJJY29uLFxuICAgICAgICAgICAgIWlzRXhwYW5kZWQgJiYgY2xhc3Nlcy5yb3RhdGVcbiAgICAgICAgICApfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgIGNvbGxhcHNlRmlsdGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBhbmRGaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2xvc2UgZmlsdGVyXG4gICAgICAgIDwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlYXJjaCAmJiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBsb2NhdGlvbi4uLlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5jaGVja0JveGVzLFxuICAgICAgICAgICFpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLm5vdEV4cGFuZGVkXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBpc0xpc3RFeHBhbmRlZFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAqIENIRUNLQk9YX0hFSUdIVCkgLSAxMVxuICAgICAgICAgICAgOiBNYXRoLmNlaWwoZGVmYXVsdFNpemUgKiBDSEVDS0JPWF9IRUlHSFQpIC0gMTEsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17bGlzdFJlZn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBrZXk9e3ZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja21hcmt9IC8+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkZWZhdWx0U2l6ZSA8IHZhbHVlcy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xpc3RFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb2xsYXBzZUxpc3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cGFuZExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIGNsYXNzZXMuc2hvd01vcmVJY29uLFxuICAgICAgICAgICAgICBpc0xpc3RFeHBhbmRlZCAmJiBjbGFzc2VzLnJvdGF0ZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBzaG93IG1vcmUgaWNvblxuICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ09VTlRSSUVTID0gW1xuICAnR2VybWFueScsXG4gICdGcmFuY2UnLFxuICAnVW5pdGVkIEtpbmdkb20nLFxuICAnVVNBJyxcbiAgJ1NwYWluJyxcbiAgJ0l0YWx5JyxcbiAgJ05vcndheScsXG5dO1xuXG5jb25zdCBDT01QQU5ZX1NJWkVTID0gW1xuICAnMC0yMDAnLFxuICAnMjAxLTUwMCcsXG4gICc1MDEtMSwwMDAnLFxuICAnMSwwMDEtNSwwMDAnLFxuICAnNSwwMDEtMTAsMDAwJyxcbiAgJzEwLDAwMCsnLFxuXTtcblxuY29uc3QgRVhQRVJUSVNFID0gW1xuICAnSGlkZSBBbGwnLFxuICAnUmVhZHkgdG8gd2VhcicsXG4gICdBY2Nlc3NvcmllcycsXG4gICdGb290d2VhcicsXG4gICdTb21ldGhpbmcgZWxzZScsXG5dO1xuXG5jb25zdCBSRVZFTlVFID0gW1xuICAnMC0xIG1pbGxpb24nLFxuICAnMS0yNSBtaWxsaW9uJyxcbiAgJzI1LTEwMCBtaWxsaW9uJyxcbiAgJzEwMC01MDAgbWlsbGlvbicsXG4gICc1MDEtMSwwMDAgbWlsbGlvbicsXG4gICcxLTEwIGJpbGxpb24nLFxuICAnMTAtNTAgYmlsbGlvbicsXG4gICc1MCsgYmlsbGlvbicsXG5dO1xuXG5jb25zdCBDT01QQU5ZX1RZUEVTID0gWydQdWJsaWMnLCAnUHJpdmF0ZScsICdTdWJzaWRpYXJ5J107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRmlsdGVyc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbHRlckJ1dHRvbn0+XG4gICAgICAgICAgPGk+bGluZXM8L2k+RmlsdGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMubW9zdFJlbGV2YW50QnV0dG9ufT5cbiAgICAgICAgICBNb3N0IHJlbGV2YW50IDxpPmFycm93IGRvd248L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8RmlsdGVyIHRpdGxlPVwiTG9jYXRpb25cIiB2YWx1ZXM9e0NPVU5UUklFU30gZGVmYXVsdFNpemU9ezN9IHNlYXJjaCAvPlxuICAgICAgPEZpbHRlciB2YWx1ZXM9e0NPTVBBTllfU0laRVN9IGRlZmF1bHRTaXplPXs0fSB0aXRsZT1cIkNvbXBhbnkgc2l6ZVwiIC8+XG4gICAgICA8RmlsdGVyIHZhbHVlcz17RVhQRVJUSVNFfSBkZWZhdWx0U2l6ZT17NH0gdGl0bGU9XCJFeHBlcnRpc2VcIiAvPlxuICAgICAgPEZpbHRlciB0aXRsZT1cIlJldmVudWVcIiB2YWx1ZXM9e1JFVkVOVUV9IGRlZmF1bHRTaXplPXszfSAvPlxuICAgICAgPEZpbHRlciB0aXRsZT1cIkNvbXBhbnkgVHlwZVwiIHZhbHVlcz17Q09NUEFOWV9UWVBFU30gZGVmYXVsdFNpemU9ezN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZpbHRlcnMgZnJvbSAnQC9jb21wb25lbnRzL0ZpbHRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZpbHRlcnMgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmlsdGVyXCI6IFwic3R5bGVzX0ZpbHRlcl9fMnk5djJcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18zM09LQlwiLFxuXHRcImNsb3NlRmlsdGVySWNvblwiOiBcInN0eWxlc19jbG9zZUZpbHRlckljb25fXzFuaUNKXCIsXG5cdFwicm90YXRlXCI6IFwic3R5bGVzX3JvdGF0ZV9fMUhFUG9cIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX19NSWJTR1wiLFxuXHRcImNoZWNrQm94ZXNcIjogXCJzdHlsZXNfY2hlY2tCb3hlc19fQk9LdDlcIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19iVUtPOVwiLFxuXHRcImNoZWNrbWFya1wiOiBcInN0eWxlc19jaGVja21hcmtfXzFuQ0RlXCIsXG5cdFwic2hvd01vcmVcIjogXCJzdHlsZXNfc2hvd01vcmVfXzF2LXlXXCIsXG5cdFwic2hvd01vcmVJY29uXCI6IFwic3R5bGVzX3Nob3dNb3JlSWNvbl9fMXN2Mm1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZpbHRlcnNcIjogXCJzdHlsZXNfRmlsdGVyc19fM2xHY1JcIixcblx0XCJidXR0b25zXCI6IFwic3R5bGVzX2J1dHRvbnNfXzJKQnFRXCIsXG5cdFwiZmlsdGVyQnV0dG9uXCI6IFwic3R5bGVzX2ZpbHRlckJ1dHRvbl9fMkltZWpcIixcblx0XCJtb3N0UmVsZXZhbnRCdXR0b25cIjogXCJzdHlsZXNfbW9zdFJlbGV2YW50QnV0dG9uX18xMUg4QlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==