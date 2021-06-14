(function() {
var exports = {};
exports.id = "pages/api/companies/search/suggestions";
exports.ids = ["pages/api/companies/search/suggestions"];
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

/***/ "./pages/api/companies/search/suggestions.js":
/*!***************************************************!*\
  !*** ./pages/api/companies/search/suggestions.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const {
  Op
} = __webpack_require__(/*! sequelize */ "sequelize");

const {
  Company
} = __webpack_require__(/*! ../../../../models */ "./models/index.js");

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }

  const searchTerm = req.query.term;
  const companies = await Company.findAll({
    where: {
      name: {
        [Op.iLike]: `%${searchTerm}%`
      }
    },
    attributes: ['name', 'industry'],
    limit: 6
  });
  return res.json({
    status: 'success',
    count: companies.length,
    data: {
      companies
    }
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/companies/search/suggestions.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL3BhZ2VzL2FwaS9jb21wYW5pZXMvc2VhcmNoL3N1Z2dlc3Rpb25zLmpzIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiIsIkRCX05BTUUiLCJEQl9VU0VSIiwiREJfUEFTUyIsImhvc3QiLCJwb3J0IiwiZGlhbGVjdCIsImZzIiwicGF0aCIsInNlcXVlbGl6ZSIsIm1vZGVscyIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY3dkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlTmFtZSIsInRlc3QiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIk9wIiwiQ29tcGFueSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInRlcm0iLCJjb21wYW5pZXMiLCJmaW5kQWxsIiwid2hlcmUiLCJpTGlrZSIsImF0dHJpYnV0ZXMiLCJsaW1pdCIsImNvdW50IiwibGVuZ3RoIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRCQUFELENBQXpCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSUgsU0FBSixDQUNmSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FERyxFQUVmRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUsT0FGRyxFQUdmSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsT0FIRyxFQUlmO0FBQ0VDLE1BQUksRUFBRSxXQURSO0FBRUVDLE1BQUksRUFBRSxJQUZSO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBSmUsQ0FBakIsQzs7Ozs7Ozs7OztBQ0ZBLE1BQU1DLEVBQUUsR0FBR1gsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQU1ZLElBQUksR0FBR1osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNYSxTQUFTLEdBQUdiLG1CQUFPLENBQUMsb0NBQUQsQ0FBekI7O0FBRUEsTUFBTWMsTUFBTSxHQUFHLEVBQWY7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0ssSUFBTCxDQUFVZCxPQUFPLENBQUNlLEdBQVIsRUFBVixFQUF5QixRQUF6QixDQUFaO0FBRUFQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlUCxJQUFJLENBQUNLLElBQUwsQ0FBVWQsT0FBTyxDQUFDZSxHQUFSLEVBQVYsRUFBeUIsUUFBekIsQ0FBZixFQUNHRSxNQURILENBQ1dDLFFBQUQsSUFBYyxRQUFRQyxJQUFSLENBQWFELFFBQWIsS0FBMEJBLFFBQVEsS0FBSyxVQUQvRCxFQUVHRSxPQUZILENBRVlGLFFBQUQsSUFBYztBQUNyQixRQUFNRyxLQUFLLEdBQUdYLFNBQVMsQ0FBQ1ksTUFBVixDQUNaYixJQUFJLENBQUNLLElBQUwsQ0FBVWQsT0FBTyxDQUFDZSxHQUFSLEVBQVYsRUFBeUIsUUFBekIsRUFBbUNHLFFBQW5DLENBRFksQ0FBZDtBQUdBUCxRQUFNLENBQUNVLEtBQUssQ0FBQ0UsSUFBUCxDQUFOLEdBQXFCRixLQUFyQjtBQUNELENBUEg7QUFTQUcsTUFBTSxDQUFDQyxJQUFQLENBQVlkLE1BQVosRUFBb0JTLE9BQXBCLENBQTZCTSxTQUFELElBQWU7QUFDekMsTUFBSWYsTUFBTSxDQUFDZSxTQUFELENBQU4sQ0FBa0JDLFNBQXRCLEVBQWlDO0FBQy9CaEIsVUFBTSxDQUFDZSxTQUFELENBQU4sQ0FBa0JDLFNBQWxCLENBQTRCaEIsTUFBNUI7QUFDRDtBQUNGLENBSkQ7QUFNQWIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWSxNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsTUFBTTtBQUFFaUI7QUFBRixJQUFTL0IsbUJBQU8sQ0FBQyw0QkFBRCxDQUF0Qjs7QUFDQSxNQUFNO0FBQUVnQztBQUFGLElBQWNoQyxtQkFBTyxDQUFDLDZDQUFELENBQTNCOztBQUVlLGVBQWVpQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJELE9BQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0EsV0FBT0YsR0FBRyxDQUNQRyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFHLFVBQVNOLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUZELENBQVA7QUFHRDs7QUFFRCxRQUFNSyxVQUFVLEdBQUdQLEdBQUcsQ0FBQ1EsS0FBSixDQUFVQyxJQUE3QjtBQUVBLFFBQU1DLFNBQVMsR0FBRyxNQUFNWixPQUFPLENBQUNhLE9BQVIsQ0FBZ0I7QUFDdENDLFNBQUssRUFBRTtBQUFFcEIsVUFBSSxFQUFFO0FBQUUsU0FBQ0ssRUFBRSxDQUFDZ0IsS0FBSixHQUFhLElBQUdOLFVBQVc7QUFBN0I7QUFBUixLQUQrQjtBQUV0Q08sY0FBVSxFQUFFLENBQUMsTUFBRCxFQUFTLFVBQVQsQ0FGMEI7QUFHdENDLFNBQUssRUFBRTtBQUgrQixHQUFoQixDQUF4QjtBQUtBLFNBQU9kLEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQ2RELFVBQU0sRUFBRSxTQURNO0FBRWRZLFNBQUssRUFBRU4sU0FBUyxDQUFDTyxNQUZIO0FBR2RDLFFBQUksRUFBRTtBQUFFUjtBQUFGO0FBSFEsR0FBVCxDQUFQO0FBS0QsQzs7Ozs7Ozs7Ozs7QUN2QkQsZ0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvYXBpL2NvbXBhbmllcy9zZWFyY2gvc3VnZ2VzdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IFNlcXVlbGl6ZShcclxuICBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gIHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICB7XHJcbiAgICBob3N0OiAnMTI3LjAuMC4xJyxcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxyXG4gIH1cclxuKTtcclxuIiwiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcuLi9jb25maWcvZGInKTtcclxuXHJcbmNvbnN0IG1vZGVscyA9IHt9O1xyXG5cclxuY29uc29sZS5sb2cocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdtb2RlbHMnKSk7XHJcblxyXG5mcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ21vZGVscycpKVxyXG4gIC5maWx0ZXIoKGZpbGVOYW1lKSA9PiAvXFwuanMkLy50ZXN0KGZpbGVOYW1lKSAmJiBmaWxlTmFtZSAhPT0gJ2luZGV4LmpzJylcclxuICAuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcclxuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplLmltcG9ydChcclxuICAgICAgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdtb2RlbHMnLCBmaWxlTmFtZSlcclxuICAgICk7XHJcbiAgICBtb2RlbHNbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKG1vZGVscykuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XHJcbiAgaWYgKG1vZGVsc1ttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgbW9kZWxzW21vZGVsTmFtZV0uYXNzb2NpYXRlKG1vZGVscyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9kZWxzO1xyXG4iLCJjb25zdCB7IE9wIH0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IHsgQ29tcGFueSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbW9kZWxzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDQwNSlcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSByZXEucXVlcnkudGVybTtcblxuICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBDb21wYW55LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7IG5hbWU6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgIGF0dHJpYnV0ZXM6IFsnbmFtZScsICdpbmR1c3RyeSddLFxuICAgIGxpbWl0OiA2LFxuICB9KTtcbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICBjb3VudDogY29tcGFuaWVzLmxlbmd0aCxcbiAgICBkYXRhOiB7IGNvbXBhbmllcyB9LFxuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=