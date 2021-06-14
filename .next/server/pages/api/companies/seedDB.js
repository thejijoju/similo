(function() {
var exports = {};
exports.id = "pages/api/companies/seedDB";
exports.ids = ["pages/api/companies/seedDB"];
exports.modules = {

/***/ "./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres'
});

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const sequelize = __webpack_require__(/*! ../config/db */ "./config/db.js");

const models = {};
console.log(path.join(process.cwd(), 'models'));
fs.readdirSync(path.join(process.cwd(), 'models')).filter(fileName => /\.js$/.test(fileName) && fileName !== 'index.js').forEach(fileName => {
  const model = sequelize.import(path.join(process.cwd(), 'models', fileName));
  models[model.name] = model;
});
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
module.exports = models;

/***/ }),

/***/ "./pages/api/companies/seedDB.js":
/*!***************************************!*\
  !*** ./pages/api/companies/seedDB.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */
const fs = __webpack_require__(/*! fs */ "fs");

const {
  Company
} = __webpack_require__(/*! ../../../models */ "./models/index.js");

function handler() {
  const data = JSON.parse(fs.readFileSync(`${process.cwd()}/pages/api/companies/output.json`, 'utf8'));
  data.forEach(company => {
    const companyData = company;

    for (const key in companyData) {
      if (companyData[key] === '') {
        // eslint-disable-next-line no-unused-expressions
        companyData[key] = null;
      }
    }

    Company.create(companyData);
  });
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("sequelize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/companies/seedDB.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL3BhZ2VzL2FwaS9jb21wYW5pZXMvc2VlZERCLmpzIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiIsIkRCX05BTUUiLCJEQl9VU0VSIiwiREJfUEFTUyIsImhvc3QiLCJwb3J0IiwiZGlhbGVjdCIsImZzIiwicGF0aCIsInNlcXVlbGl6ZSIsIm1vZGVscyIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY3dkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlTmFtZSIsInRlc3QiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIkNvbXBhbnkiLCJoYW5kbGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImNvbXBhbnkiLCJjb21wYW55RGF0YSIsImtleSIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRCQUFELENBQXpCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSUgsU0FBSixDQUNmSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FERyxFQUVmRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUsT0FGRyxFQUdmSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsT0FIRyxFQUlmO0FBQ0VDLE1BQUksRUFBRSxXQURSO0FBRUVDLE1BQUksRUFBRSxJQUZSO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBSmUsQ0FBakIsQzs7Ozs7Ozs7OztBQ0ZBLE1BQU1DLEVBQUUsR0FBR1gsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQU1ZLElBQUksR0FBR1osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNYSxTQUFTLEdBQUdiLG1CQUFPLENBQUMsb0NBQUQsQ0FBekI7O0FBRUEsTUFBTWMsTUFBTSxHQUFHLEVBQWY7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0ssSUFBTCxDQUFVZCxPQUFPLENBQUNlLEdBQVIsRUFBVixFQUF5QixRQUF6QixDQUFaO0FBRUFQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlUCxJQUFJLENBQUNLLElBQUwsQ0FBVWQsT0FBTyxDQUFDZSxHQUFSLEVBQVYsRUFBeUIsUUFBekIsQ0FBZixFQUNHRSxNQURILENBQ1dDLFFBQUQsSUFBYyxRQUFRQyxJQUFSLENBQWFELFFBQWIsS0FBMEJBLFFBQVEsS0FBSyxVQUQvRCxFQUVHRSxPQUZILENBRVlGLFFBQUQsSUFBYztBQUNyQixRQUFNRyxLQUFLLEdBQUdYLFNBQVMsQ0FBQ1ksTUFBVixDQUNaYixJQUFJLENBQUNLLElBQUwsQ0FBVWQsT0FBTyxDQUFDZSxHQUFSLEVBQVYsRUFBeUIsUUFBekIsRUFBbUNHLFFBQW5DLENBRFksQ0FBZDtBQUdBUCxRQUFNLENBQUNVLEtBQUssQ0FBQ0UsSUFBUCxDQUFOLEdBQXFCRixLQUFyQjtBQUNELENBUEg7QUFTQUcsTUFBTSxDQUFDQyxJQUFQLENBQVlkLE1BQVosRUFBb0JTLE9BQXBCLENBQTZCTSxTQUFELElBQWU7QUFDekMsTUFBSWYsTUFBTSxDQUFDZSxTQUFELENBQU4sQ0FBa0JDLFNBQXRCLEVBQWlDO0FBQy9CaEIsVUFBTSxDQUFDZSxTQUFELENBQU4sQ0FBa0JDLFNBQWxCLENBQTRCaEIsTUFBNUI7QUFDRDtBQUNGLENBSkQ7QUFNQWIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWSxNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBQ0E7QUFDQSxNQUFNSCxFQUFFLEdBQUdYLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFDQSxNQUFNO0FBQUUrQjtBQUFGLElBQWMvQixtQkFBTyxDQUFDLDBDQUFELENBQTNCOztBQUVlLFNBQVNnQyxPQUFULEdBQW1CO0FBQ2hDLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQ1h4QixFQUFFLENBQUN5QixZQUFILENBQWlCLEdBQUVqQyxPQUFPLENBQUNlLEdBQVIsRUFBYyxrQ0FBakMsRUFBb0UsTUFBcEUsQ0FEVyxDQUFiO0FBR0FlLE1BQUksQ0FBQ1YsT0FBTCxDQUFjYyxPQUFELElBQWE7QUFDeEIsVUFBTUMsV0FBVyxHQUFHRCxPQUFwQjs7QUFFQSxTQUFLLE1BQU1FLEdBQVgsSUFBa0JELFdBQWxCLEVBQStCO0FBQzdCLFVBQUlBLFdBQVcsQ0FBQ0MsR0FBRCxDQUFYLEtBQXFCLEVBQXpCLEVBQTZCO0FBQzNCO0FBQ0FELG1CQUFXLENBQUNDLEdBQUQsQ0FBWCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7O0FBQ0RSLFdBQU8sQ0FBQ1MsTUFBUixDQUFlRixXQUFmO0FBQ0QsR0FWRDtBQVdELEM7Ozs7Ozs7Ozs7O0FDcEJELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW5pZXMvc2VlZERCLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gIHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAge1xyXG4gICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcclxuICB9XHJcbik7XHJcbiIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3Qgc2VxdWVsaXplID0gcmVxdWlyZSgnLi4vY29uZmlnL2RiJyk7XHJcblxyXG5jb25zdCBtb2RlbHMgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbW9kZWxzJykpO1xyXG5cclxuZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdtb2RlbHMnKSlcclxuICAuZmlsdGVyKChmaWxlTmFtZSkgPT4gL1xcLmpzJC8udGVzdChmaWxlTmFtZSkgJiYgZmlsZU5hbWUgIT09ICdpbmRleC5qcycpXHJcbiAgLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZS5pbXBvcnQoXHJcbiAgICAgIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbW9kZWxzJywgZmlsZU5hbWUpXHJcbiAgICApO1xyXG4gICAgbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhtb2RlbHMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xyXG4gIGlmIChtb2RlbHNbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIG1vZGVsc1ttb2RlbE5hbWVdLmFzc29jaWF0ZShtb2RlbHMpO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgeyBDb21wYW55IH0gPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RlbHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoXG4gICAgZnMucmVhZEZpbGVTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3BhZ2VzL2FwaS9jb21wYW5pZXMvb3V0cHV0Lmpzb25gLCAndXRmOCcpXG4gICk7XG4gIGRhdGEuZm9yRWFjaCgoY29tcGFueSkgPT4ge1xuICAgIGNvbnN0IGNvbXBhbnlEYXRhID0gY29tcGFueTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBhbnlEYXRhKSB7XG4gICAgICBpZiAoY29tcGFueURhdGFba2V5XSA9PT0gJycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBjb21wYW55RGF0YVtrZXldID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgQ29tcGFueS5jcmVhdGUoY29tcGFueURhdGEpO1xuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=