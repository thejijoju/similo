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
  QueryTypes
} = __webpack_require__(/*! sequelize */ "sequelize"); // const { Company } = require('../../../../models');


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
  let companySize = req.query.companySize || '';
  companySize = companySize.split(',|');
  let expertise = req.query.expertise || '';
  expertise = expertise.split(',');
  let companySizeQuery = '';

  if (companySize[0] !== '') {
    companySizeQuery = `AND \n(`;
    companySize.forEach((size, index) => {
      if (index !== companySize.length - 1) {
        companySizeQuery += ` "size" LIKE '%${size}%' OR`;
      } else {
        companySizeQuery += ` "size" LIKE '%${size}%' )`;
      }
    });
  }

  let expertiseQuery = '';

  if (expertise[0] !== '') {
    expertiseQuery = `AND \n(`;
    expertise.forEach((size, index) => {
      if (index !== expertise.length - 1) {
        expertiseQuery += ` "expertise" LIKE '%${size}%' OR`;
      } else {
        expertiseQuery += ` "expertise" LIKE '%${size}%' )`;
      }
    });
  } // console.log(expertiseQuery);


  const query = `SELECT * FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;
  const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}`;
  const rows = await sequelize.query(query, {
    type: QueryTypes.SELECT
  });
  const totalCompaniesCount = await sequelize.query(countQuery, {
    type: QueryTypes.SELECT
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvYXBpL2NvbXBhbmllcy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiREJfTkFNRSIsIkRCX1VTRVIiLCJEQl9QQVNTIiwiaG9zdCIsInBvcnQiLCJkaWFsZWN0IiwiUXVlcnlUeXBlcyIsInNlcXVlbGl6ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInRlcm0iLCJwYWdlIiwicGVyUGFnZSIsImNvbXBhbnlTaXplIiwic3BsaXQiLCJleHBlcnRpc2UiLCJjb21wYW55U2l6ZVF1ZXJ5IiwiZm9yRWFjaCIsInNpemUiLCJpbmRleCIsImxlbmd0aCIsImV4cGVydGlzZVF1ZXJ5IiwiY291bnRRdWVyeSIsInJvd3MiLCJ0eXBlIiwiU0VMRUNUIiwidG90YWxDb21wYW5pZXNDb3VudCIsImNvdW50IiwidG90YWxDb3VudCIsImRhdGEiLCJjb21wYW5pZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlILFNBQUosQ0FDZkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BREcsRUFFZkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLE9BRkcsRUFHZkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLE9BSEcsRUFJZjtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFQyxNQUFJLEVBQUUsSUFGUjtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQUpl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QUFnQkEsS0FBaEIsRUFBdUI7QUFBRWUsUUFBSSxFQUFFMUIsVUFBVSxDQUFDMkI7QUFBbkIsR0FBdkIsQ0FBbkI7QUFDQSxRQUFNQyxtQkFBbUIsR0FBRyxNQUFNM0IsU0FBUyxDQUFDVSxLQUFWLENBQWdCYSxVQUFoQixFQUE0QjtBQUM1REUsUUFBSSxFQUFFMUIsVUFBVSxDQUFDMkI7QUFEMkMsR0FBNUIsQ0FBbEM7QUFJQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLFNBQU92QixHQUFHLENBQUNJLElBQUosQ0FBUztBQUNkRCxVQUFNLEVBQUUsU0FETTtBQUVkc0IsU0FBSyxFQUFFSixJQUFJLENBQUNILE1BRkU7QUFHZFEsY0FBVSxFQUFFLENBQUNGLG1CQUFtQixDQUFDLENBQUQsQ0FBbkIsQ0FBdUJDLEtBSHRCO0FBSWRFLFFBQUksRUFBRTtBQUFFQyxlQUFTLEVBQUVQO0FBQWI7QUFKUSxHQUFULENBQVA7QUFNRCxDOzs7Ozs7Ozs7OztBQ2xHRCx1QyIsImZpbGUiOiJwYWdlcy9hcGkvY29tcGFuaWVzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2VxdWVsaXplKFxyXG4gIHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gIHtcclxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxyXG4gICAgcG9ydDogNTQzMixcclxuICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXHJcbiAgfVxyXG4pO1xyXG4iLCJjb25zdCB7IFF1ZXJ5VHlwZXMgfSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuLy8gY29uc3QgeyBDb21wYW55IH0gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9tb2RlbHMnKTtcbmNvbnN0IHNlcXVlbGl6ZSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2NvbmZpZy9kYicpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XG4gIH1cblxuICBjb25zdCBzZWFyY2hUZXJtID0gcmVxLnF1ZXJ5LnRlcm07XG4gIGNvbnN0IHsgcGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDA7XG4gIGNvbnN0IHsgcGVyUGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDg7XG5cbiAgbGV0IGNvbXBhbnlTaXplID0gcmVxLnF1ZXJ5LmNvbXBhbnlTaXplIHx8ICcnO1xuICBjb21wYW55U2l6ZSA9IGNvbXBhbnlTaXplLnNwbGl0KCcsfCcpO1xuICBsZXQgZXhwZXJ0aXNlID0gcmVxLnF1ZXJ5LmV4cGVydGlzZSB8fCAnJztcbiAgZXhwZXJ0aXNlID0gZXhwZXJ0aXNlLnNwbGl0KCcsJyk7XG5cbiAgbGV0IGNvbXBhbnlTaXplUXVlcnkgPSAnJztcbiAgaWYgKGNvbXBhbnlTaXplWzBdICE9PSAnJykge1xuICAgIGNvbXBhbnlTaXplUXVlcnkgPSBgQU5EIFxcbihgO1xuICAgIGNvbXBhbnlTaXplLmZvckVhY2goKHNpemUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IGNvbXBhbnlTaXplLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29tcGFueVNpemVRdWVyeSArPSBgIFwic2l6ZVwiIExJS0UgJyUke3NpemV9JScgT1JgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGFueVNpemVRdWVyeSArPSBgIFwic2l6ZVwiIExJS0UgJyUke3NpemV9JScgKWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsZXQgZXhwZXJ0aXNlUXVlcnkgPSAnJztcbiAgaWYgKGV4cGVydGlzZVswXSAhPT0gJycpIHtcbiAgICBleHBlcnRpc2VRdWVyeSA9IGBBTkQgXFxuKGA7XG4gICAgZXhwZXJ0aXNlLmZvckVhY2goKHNpemUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IGV4cGVydGlzZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGV4cGVydGlzZVF1ZXJ5ICs9IGAgXCJleHBlcnRpc2VcIiBMSUtFICclJHtzaXplfSUnIE9SYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGVydGlzZVF1ZXJ5ICs9IGAgXCJleHBlcnRpc2VcIiBMSUtFICclJHtzaXplfSUnIClgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coZXhwZXJ0aXNlUXVlcnkpO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gYFNFTEVDVCAqIEZST00gXCJDb21wYW5pZXNcIiBXSEVSRSAoTE9XRVIoXCJuYW1lXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIFxuICBPUiBMT1dFUihcIkhRTG9jYXRpb25cIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgT1IgTE9XRVIoXCJsb2NhdGlvbnNcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgXG4gIE9SIExPV0VSKFwiZXhwZXJ0aXNlXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwiaW5kdXN0cnlcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykpXG4gICR7Y29tcGFueVNpemVRdWVyeX1cbiAgJHtleHBlcnRpc2VRdWVyeX1cbiAgTElNSVQgJHtwZXJQYWdlfSBPRkZTRVQgJHtwYWdlICogcGVyUGFnZX1gO1xuXG4gIGNvbnN0IGNvdW50UXVlcnkgPSBgU0VMRUNUIENPVU5UKCopIEZST00gXCJDb21wYW5pZXNcIiBXSEVSRSAoTE9XRVIoXCJuYW1lXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIFxuICBPUiBMT1dFUihcIkhRTG9jYXRpb25cIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgT1IgTE9XRVIoXCJsb2NhdGlvbnNcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgXG4gIE9SIExPV0VSKFwiZXhwZXJ0aXNlXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwiaW5kdXN0cnlcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykpXG4gICR7Y29tcGFueVNpemVRdWVyeX1cbiAgJHtleHBlcnRpc2VRdWVyeX1gO1xuXG4gIGNvbnN0IHJvd3MgPSBhd2FpdCBzZXF1ZWxpemUucXVlcnkocXVlcnksIHsgdHlwZTogUXVlcnlUeXBlcy5TRUxFQ1QgfSk7XG4gIGNvbnN0IHRvdGFsQ29tcGFuaWVzQ291bnQgPSBhd2FpdCBzZXF1ZWxpemUucXVlcnkoY291bnRRdWVyeSwge1xuICAgIHR5cGU6IFF1ZXJ5VHlwZXMuU0VMRUNULFxuICB9KTtcblxuICAvKiBjb25zdCB0b3RhbENvbXBhbmllc0NvdW50ID0gYXdhaXQgQ29tcGFueS5jb3VudCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIFtPcC5vcl06IFtcbiAgICAgICAgeyBuYW1lOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBIUUxvY2F0aW9uOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBsb2NhdGlvbnM6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGNvdW50cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGV4cGVydGlzZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgaW5kdXN0cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBDb21wYW55LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbT3Aub3JdOiBbXG4gICAgICAgIHsgbmFtZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgSFFMb2NhdGlvbjogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgbG9jYXRpb25zOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBjb3VudHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBleHBlcnRpc2U6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGluZHVzdHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaW1pdDogcGVyUGFnZSxcbiAgICBvZmZzZXQ6IHBhZ2UgKiBwZXJQYWdlLFxuICB9KTsgKi9cbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICBjb3VudDogcm93cy5sZW5ndGgsXG4gICAgdG90YWxDb3VudDogK3RvdGFsQ29tcGFuaWVzQ291bnRbMF0uY291bnQsXG4gICAgZGF0YTogeyBjb21wYW5pZXM6IHJvd3MgfSxcbiAgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=