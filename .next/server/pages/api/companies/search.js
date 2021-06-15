(function() {
var exports = {};
exports.id = "pages/api/companies/search";
exports.ids = ["pages/api/companies/search"];
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

/***/ "./pages/api/companies/search/index.js":
/*!*********************************************!*\
  !*** ./pages/api/companies/search/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const {
  Op,
  QueryTypes
} = __webpack_require__(/*! sequelize */ "sequelize");

const {
  Company
} = __webpack_require__(/*! ../../../../models */ "./models/index.js");

const sequelize = __webpack_require__(/*! ../../../../config/db */ "./config/db.js");

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }

  const searchTerm = req.query.term;
  const {
    page
  } = req.query || 0;
  const {
    perPage
  } = req.query || 8;
  const companySize = req.query.companySize.split(',|');
  console.log(companySize.length);
  let companySizeQuery = '';

  if (companySize[0] !== '') {
    companySizeQuery = `AND \n`;
    companySize.forEach((size, index) => {
      if (index !== companySize.length - 1) {
        companySizeQuery += ` "size" LIKE '%${size}%' OR`;
      } else {
        companySizeQuery += ` "size" LIKE '%${size}%'`;
      }
    });
  }

  const query = `SELECT * FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') OR LOWER("country") LIKE LOWER('%${searchTerm}%')
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;
  const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') OR LOWER("country") LIKE LOWER('%${searchTerm}%')
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}`;
  const rows = await sequelize.query(query, {
    type: QueryTypes.SELECT
  });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT
  });
  console.log(totalCompaniesCount[0]);
  /* const totalCompaniesCount = await Company.count({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchTerm}%` } },
        { HQLocation: { [Op.iLike]: `%${searchTerm}%` } },
        { locations: { [Op.iLike]: `%${searchTerm}%` } },
        { country: { [Op.iLike]: `%${searchTerm}%` } },
        { expertise: { [Op.iLike]: `%${searchTerm}%` } },
        { industry: { [Op.iLike]: `%${searchTerm}%` } },
      ],
    },
  });
   const companies = await Company.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchTerm}%` } },
        { HQLocation: { [Op.iLike]: `%${searchTerm}%` } },
        { locations: { [Op.iLike]: `%${searchTerm}%` } },
        { country: { [Op.iLike]: `%${searchTerm}%` } },
        { expertise: { [Op.iLike]: `%${searchTerm}%` } },
        { industry: { [Op.iLike]: `%${searchTerm}%` } },
      ],
    },
    limit: perPage,
    offset: page * perPage,
  }); */

  return res.json({
    status: 'success',
    count: rows.length,
    totalCount: +totalCompaniesCount[0].count,
    data: {
      companies: rows
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/companies/search/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL3BhZ2VzL2FwaS9jb21wYW5pZXMvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiIsIkRCX05BTUUiLCJEQl9VU0VSIiwiREJfUEFTUyIsImhvc3QiLCJwb3J0IiwiZGlhbGVjdCIsImZzIiwicGF0aCIsInNlcXVlbGl6ZSIsIm1vZGVscyIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY3dkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlTmFtZSIsInRlc3QiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIk9wIiwiUXVlcnlUeXBlcyIsIkNvbXBhbnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZWFyY2hUZXJtIiwicXVlcnkiLCJ0ZXJtIiwicGFnZSIsInBlclBhZ2UiLCJjb21wYW55U2l6ZSIsInNwbGl0IiwibGVuZ3RoIiwiY29tcGFueVNpemVRdWVyeSIsInNpemUiLCJpbmRleCIsImNvdW50UXVlcnkiLCJyb3dzIiwidHlwZSIsIlNFTEVDVCIsInRvdGFsQ29tcGFuaWVzQ291bnQiLCJjb3VudCIsInRvdGFsQ291bnQiLCJkYXRhIiwiY29tcGFuaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxN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LENBQWxDO0FBSUF6QyxTQUFPLENBQUNDLEdBQVIsQ0FBWXlDLG1CQUFtQixDQUFDLENBQUQsQ0FBL0I7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLFNBQU9yQixHQUFHLENBQUNJLElBQUosQ0FBUztBQUNkRCxVQUFNLEVBQUUsU0FETTtBQUVkbUIsU0FBSyxFQUFFSixJQUFJLENBQUNMLE1BRkU7QUFHZFUsY0FBVSxFQUFFLENBQUNGLG1CQUFtQixDQUFDLENBQUQsQ0FBbkIsQ0FBdUJDLEtBSHRCO0FBSWRFLFFBQUksRUFBRTtBQUFFQyxlQUFTLEVBQUVQO0FBQWI7QUFKUSxHQUFULENBQVA7QUFNRCxDOzs7Ozs7Ozs7OztBQ2xGRCxnQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9hcGkvY29tcGFuaWVzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2VxdWVsaXplKFxyXG4gIHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gIHtcclxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXHJcbiAgfVxyXG4pO1xyXG4iLCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9kYicpO1xyXG5cclxuY29uc3QgbW9kZWxzID0ge307XHJcblxyXG5jb25zb2xlLmxvZyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ21vZGVscycpKTtcclxuXHJcbmZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbW9kZWxzJykpXHJcbiAgLmZpbHRlcigoZmlsZU5hbWUpID0+IC9cXC5qcyQvLnRlc3QoZmlsZU5hbWUpICYmIGZpbGVOYW1lICE9PSAnaW5kZXguanMnKVxyXG4gIC5mb3JFYWNoKChmaWxlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KFxyXG4gICAgICBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ21vZGVscycsIGZpbGVOYW1lKVxyXG4gICAgKTtcclxuICAgIG1vZGVsc1ttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG4gIH0pO1xyXG5cclxuT2JqZWN0LmtleXMobW9kZWxzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcclxuICBpZiAobW9kZWxzW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICBtb2RlbHNbbW9kZWxOYW1lXS5hc3NvY2lhdGUobW9kZWxzKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb2RlbHM7XHJcbiIsImNvbnN0IHsgT3AsIFF1ZXJ5VHlwZXMgfSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuY29uc3QgeyBDb21wYW55IH0gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9tb2RlbHMnKTtcbmNvbnN0IHNlcXVlbGl6ZSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2NvbmZpZy9kYicpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XG4gIH1cblxuICBjb25zdCBzZWFyY2hUZXJtID0gcmVxLnF1ZXJ5LnRlcm07XG4gIGNvbnN0IHsgcGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDA7XG4gIGNvbnN0IHsgcGVyUGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDg7XG4gIGNvbnN0IGNvbXBhbnlTaXplID0gcmVxLnF1ZXJ5LmNvbXBhbnlTaXplLnNwbGl0KCcsfCcpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXBhbnlTaXplLmxlbmd0aCk7XG5cbiAgbGV0IGNvbXBhbnlTaXplUXVlcnkgPSAnJztcbiAgaWYgKGNvbXBhbnlTaXplWzBdICE9PSAnJykge1xuICAgIGNvbXBhbnlTaXplUXVlcnkgPSBgQU5EIFxcbmA7XG4gICAgY29tcGFueVNpemUuZm9yRWFjaCgoc2l6ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gY29tcGFueVNpemUubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb21wYW55U2l6ZVF1ZXJ5ICs9IGAgXCJzaXplXCIgTElLRSAnJSR7c2l6ZX0lJyBPUmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wYW55U2l6ZVF1ZXJ5ICs9IGAgXCJzaXplXCIgTElLRSAnJSR7c2l6ZX0lJ2A7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBxdWVyeSA9IGBTRUxFQ1QgKiBGUk9NIFwiQ29tcGFuaWVzXCIgV0hFUkUgKExPV0VSKFwibmFtZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBcbiAgT1IgTE9XRVIoXCJIUUxvY2F0aW9uXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwibG9jYXRpb25zXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwiY291bnRyeVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKVxuICBPUiBMT1dFUihcImV4cGVydGlzZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBPUiBMT1dFUihcImluZHVzdHJ5XCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpKVxuICAke2NvbXBhbnlTaXplUXVlcnl9XG4gIExJTUlUICR7cGVyUGFnZX0gT0ZGU0VUICR7cGFnZSAqIHBlclBhZ2V9YDtcblxuICBjb25zdCBjb3VudFF1ZXJ5ID0gYFNFTEVDVCBDT1VOVCgqKSBGUk9NIFwiQ29tcGFuaWVzXCIgV0hFUkUgKExPV0VSKFwibmFtZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBcbiAgT1IgTE9XRVIoXCJIUUxvY2F0aW9uXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwibG9jYXRpb25zXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwiY291bnRyeVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKVxuICBPUiBMT1dFUihcImV4cGVydGlzZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBPUiBMT1dFUihcImluZHVzdHJ5XCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpKVxuICAke2NvbXBhbnlTaXplUXVlcnl9YDtcblxuICBjb25zdCByb3dzID0gYXdhaXQgc2VxdWVsaXplLnF1ZXJ5KHF1ZXJ5LCB7IHR5cGU6IFF1ZXJ5VHlwZXMuU0VMRUNUIH0pO1xuICBjb25zdCB0b3RhbENvbXBhbmllc0NvdW50ID0gYXdhaXQgc2VxdWVsaXplLnF1ZXJ5KGNvdW50UXVlcnksIHtcbiAgICB0eXBlOiBRdWVyeVR5cGVzLlNFTEVDVCxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2codG90YWxDb21wYW5pZXNDb3VudFswXSk7XG5cbiAgLyogY29uc3QgdG90YWxDb21wYW5pZXNDb3VudCA9IGF3YWl0IENvbXBhbnkuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbT3Aub3JdOiBbXG4gICAgICAgIHsgbmFtZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgSFFMb2NhdGlvbjogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgbG9jYXRpb25zOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBjb3VudHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBleHBlcnRpc2U6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGluZHVzdHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgQ29tcGFueS5maW5kQWxsKHtcbiAgICB3aGVyZToge1xuICAgICAgW09wLm9yXTogW1xuICAgICAgICB7IG5hbWU6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IEhRTG9jYXRpb246IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGxvY2F0aW9uczogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgY291bnRyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgZXhwZXJ0aXNlOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBpbmR1c3RyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGltaXQ6IHBlclBhZ2UsXG4gICAgb2Zmc2V0OiBwYWdlICogcGVyUGFnZSxcbiAgfSk7ICovXG4gIHJldHVybiByZXMuanNvbih7XG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgY291bnQ6IHJvd3MubGVuZ3RoLFxuICAgIHRvdGFsQ291bnQ6ICt0b3RhbENvbXBhbmllc0NvdW50WzBdLmNvdW50LFxuICAgIGRhdGE6IHsgY29tcGFuaWVzOiByb3dzIH0sXG4gIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==