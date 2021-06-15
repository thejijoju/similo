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
  let companyType = req.query.companyType || '';
  companyType = companyType.split(',');
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
    expertise.forEach((tag, index) => {
      if (index !== expertise.length - 1) {
        expertiseQuery += ` "expertise" LIKE '%${tag}%' OR`;
      } else {
        expertiseQuery += ` "expertise" LIKE '%${tag}%' )`;
      }
    });
  }

  let companyTypeQuery = '';

  if (companyType[0] !== '') {
    companyTypeQuery = `AND \n(`;
    companyType.forEach((type, index) => {
      if (index !== companyType.length - 1) {
        companyTypeQuery += ` "type" LIKE '%${type}%' OR`;
      } else {
        companyTypeQuery += ` "type" LIKE '%${type}%' )`;
      }
    });
  } // console.log(expertiseQuery);


  const query = `SELECT * FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;
  const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvYXBpL2NvbXBhbmllcy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiREJfTkFNRSIsIkRCX1VTRVIiLCJEQl9QQVNTIiwiaG9zdCIsInBvcnQiLCJkaWFsZWN0IiwiUXVlcnlUeXBlcyIsInNlcXVlbGl6ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInRlcm0iLCJwYWdlIiwicGVyUGFnZSIsImNvbXBhbnlTaXplIiwic3BsaXQiLCJleHBlcnRpc2UiLCJjb21wYW55VHlwZSIsImNvbXBhbnlTaXplUXVlcnkiLCJmb3JFYWNoIiwic2l6ZSIsImluZGV4IiwibGVuZ3RoIiwiZXhwZXJ0aXNlUXVlcnkiLCJ0YWciLCJjb21wYW55VHlwZVF1ZXJ5IiwidHlwZSIsImNvdW50UXVlcnkiLCJyb3dzIiwiU0VMRUNUIiwidG90YWxDb21wYW5pZXNDb3VudCIsImNvdW50IiwidG90YWxDb3VudCIsImRhdGEiLCJjb21wYW5pZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBRCxDQUF6Qjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlILFNBQUosQ0FDZkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BREcsRUFFZkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLE9BRkcsRUFHZkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLE9BSEcsRUFJZjtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFQyxN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RUgsSUFBSSxDQUFDTixNQUZFO0FBR2RVLGNBQVUsRUFBRSxDQUFDRixtQkFBbUIsQ0FBQyxDQUFELENBQW5CLENBQXVCQyxLQUh0QjtBQUlkRSxRQUFJLEVBQUU7QUFBRUMsZUFBUyxFQUFFTjtBQUFiO0FBSlEsR0FBVCxDQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7QUNsSEQsdUMiLCJmaWxlIjoicGFnZXMvYXBpL2NvbXBhbmllcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IFNlcXVlbGl6ZShcclxuICBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gIHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICB7XHJcbiAgICBob3N0OiAnMTI3LjAuMC4xJyxcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkaWFsZWN0OiAncG9zdGdyZXMnLFxyXG4gIH1cclxuKTtcclxuIiwiY29uc3QgeyBRdWVyeVR5cGVzIH0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbi8vIGNvbnN0IHsgQ29tcGFueSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbW9kZWxzJyk7XG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9jb25maWcvZGInKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2VhcmNoVGVybSA9IHJlcS5xdWVyeS50ZXJtO1xuICBjb25zdCB7IHBhZ2UgfSA9IHJlcS5xdWVyeSB8fCAwO1xuICBjb25zdCB7IHBlclBhZ2UgfSA9IHJlcS5xdWVyeSB8fCA4O1xuXG4gIGxldCBjb21wYW55U2l6ZSA9IHJlcS5xdWVyeS5jb21wYW55U2l6ZSB8fCAnJztcbiAgY29tcGFueVNpemUgPSBjb21wYW55U2l6ZS5zcGxpdCgnLHwnKTtcbiAgbGV0IGV4cGVydGlzZSA9IHJlcS5xdWVyeS5leHBlcnRpc2UgfHwgJyc7XG4gIGV4cGVydGlzZSA9IGV4cGVydGlzZS5zcGxpdCgnLCcpO1xuICBsZXQgY29tcGFueVR5cGUgPSByZXEucXVlcnkuY29tcGFueVR5cGUgfHwgJyc7XG4gIGNvbXBhbnlUeXBlID0gY29tcGFueVR5cGUuc3BsaXQoJywnKTtcblxuICBsZXQgY29tcGFueVNpemVRdWVyeSA9ICcnO1xuICBpZiAoY29tcGFueVNpemVbMF0gIT09ICcnKSB7XG4gICAgY29tcGFueVNpemVRdWVyeSA9IGBBTkQgXFxuKGA7XG4gICAgY29tcGFueVNpemUuZm9yRWFjaCgoc2l6ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gY29tcGFueVNpemUubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb21wYW55U2l6ZVF1ZXJ5ICs9IGAgXCJzaXplXCIgTElLRSAnJSR7c2l6ZX0lJyBPUmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wYW55U2l6ZVF1ZXJ5ICs9IGAgXCJzaXplXCIgTElLRSAnJSR7c2l6ZX0lJyApYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCBleHBlcnRpc2VRdWVyeSA9ICcnO1xuICBpZiAoZXhwZXJ0aXNlWzBdICE9PSAnJykge1xuICAgIGV4cGVydGlzZVF1ZXJ5ID0gYEFORCBcXG4oYDtcbiAgICBleHBlcnRpc2UuZm9yRWFjaCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBleHBlcnRpc2UubGVuZ3RoIC0gMSkge1xuICAgICAgICBleHBlcnRpc2VRdWVyeSArPSBgIFwiZXhwZXJ0aXNlXCIgTElLRSAnJSR7dGFnfSUnIE9SYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGVydGlzZVF1ZXJ5ICs9IGAgXCJleHBlcnRpc2VcIiBMSUtFICclJHt0YWd9JScgKWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsZXQgY29tcGFueVR5cGVRdWVyeSA9ICcnO1xuICBpZiAoY29tcGFueVR5cGVbMF0gIT09ICcnKSB7XG4gICAgY29tcGFueVR5cGVRdWVyeSA9IGBBTkQgXFxuKGA7XG4gICAgY29tcGFueVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gY29tcGFueVR5cGUubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb21wYW55VHlwZVF1ZXJ5ICs9IGAgXCJ0eXBlXCIgTElLRSAnJSR7dHlwZX0lJyBPUmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wYW55VHlwZVF1ZXJ5ICs9IGAgXCJ0eXBlXCIgTElLRSAnJSR7dHlwZX0lJyApYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKGV4cGVydGlzZVF1ZXJ5KTtcblxuICBjb25zdCBxdWVyeSA9IGBTRUxFQ1QgKiBGUk9NIFwiQ29tcGFuaWVzXCIgV0hFUkUgKExPV0VSKFwibmFtZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBcbiAgT1IgTE9XRVIoXCJIUUxvY2F0aW9uXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwibG9jYXRpb25zXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIFxuICBPUiBMT1dFUihcImV4cGVydGlzZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBPUiBMT1dFUihcImluZHVzdHJ5XCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpKVxuICAke2NvbXBhbnlTaXplUXVlcnl9XG4gICR7ZXhwZXJ0aXNlUXVlcnl9XG4gICR7Y29tcGFueVR5cGVRdWVyeX1cbiAgTElNSVQgJHtwZXJQYWdlfSBPRkZTRVQgJHtwYWdlICogcGVyUGFnZX1gO1xuXG4gIGNvbnN0IGNvdW50UXVlcnkgPSBgU0VMRUNUIENPVU5UKCopIEZST00gXCJDb21wYW5pZXNcIiBXSEVSRSAoTE9XRVIoXCJuYW1lXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIFxuICBPUiBMT1dFUihcIkhRTG9jYXRpb25cIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgT1IgTE9XRVIoXCJsb2NhdGlvbnNcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgXG4gIE9SIExPV0VSKFwiZXhwZXJ0aXNlXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwiaW5kdXN0cnlcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykpXG4gICR7Y29tcGFueVNpemVRdWVyeX1cbiAgJHtleHBlcnRpc2VRdWVyeX1cbiAgJHtjb21wYW55VHlwZVF1ZXJ5fWA7XG5cbiAgY29uc3Qgcm93cyA9IGF3YWl0IHNlcXVlbGl6ZS5xdWVyeShxdWVyeSwgeyB0eXBlOiBRdWVyeVR5cGVzLlNFTEVDVCB9KTtcbiAgY29uc3QgdG90YWxDb21wYW5pZXNDb3VudCA9IGF3YWl0IHNlcXVlbGl6ZS5xdWVyeShjb3VudFF1ZXJ5LCB7XG4gICAgdHlwZTogUXVlcnlUeXBlcy5TRUxFQ1QsXG4gIH0pO1xuXG4gIC8qIGNvbnN0IHRvdGFsQ29tcGFuaWVzQ291bnQgPSBhd2FpdCBDb21wYW55LmNvdW50KHtcbiAgICB3aGVyZToge1xuICAgICAgW09wLm9yXTogW1xuICAgICAgICB7IG5hbWU6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IEhRTG9jYXRpb246IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGxvY2F0aW9uczogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgY291bnRyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgZXhwZXJ0aXNlOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBpbmR1c3RyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNvbXBhbmllcyA9IGF3YWl0IENvbXBhbnkuZmluZEFsbCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIFtPcC5vcl06IFtcbiAgICAgICAgeyBuYW1lOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBIUUxvY2F0aW9uOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBsb2NhdGlvbnM6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGNvdW50cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGV4cGVydGlzZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgaW5kdXN0cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpbWl0OiBwZXJQYWdlLFxuICAgIG9mZnNldDogcGFnZSAqIHBlclBhZ2UsXG4gIH0pOyAqL1xuICByZXR1cm4gcmVzLmpzb24oe1xuICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgIGNvdW50OiByb3dzLmxlbmd0aCxcbiAgICB0b3RhbENvdW50OiArdG90YWxDb21wYW5pZXNDb3VudFswXS5jb3VudCxcbiAgICBkYXRhOiB7IGNvbXBhbmllczogcm93cyB9LFxuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==