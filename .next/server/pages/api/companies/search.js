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

/***/ "./helpers/convertStringRangesToNumberRanges.js":
/*!******************************************************!*\
  !*** ./helpers/convertStringRangesToNumberRanges.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ convertStringRangesToNumberRanges; }
/* harmony export */ });
function convertStringRangesToNumberRanges(ranges) {
  if (ranges[0] === '') {
    return null;
  }

  const numberRanges = [];
  ranges.forEach(range => {
    if (range === '50+ billion') {
      numberRanges.push([50 * 1000000000, 9223372036854775807]);
      return;
    }

    let multiplier = 1000;
    const stringMultiplier = range.split(' ')[1];

    if (stringMultiplier === 'million') {
      multiplier = 1000000;
    } else if (stringMultiplier === 'billion') {
      multiplier = 1000000000;
    }

    const minValue = range.split(' ')[0].split('-')[0].replace(/,/g, '') * multiplier;
    const maxValue = range.split(' ')[0].split('-')[1].replace(/,/g, '') * multiplier;
    numberRanges.push([minValue, maxValue]);
  });
  return numberRanges;
}

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
/* harmony import */ var _helpers_convertStringRangesToNumberRanges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/convertStringRangesToNumberRanges */ "./helpers/convertStringRangesToNumberRanges.js");


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
  let revenue = req.query.revenue || '';
  revenue = revenue.split(',|');
  const revenueRange = (0,_helpers_convertStringRangesToNumberRanges__WEBPACK_IMPORTED_MODULE_0__.default)(revenue);
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
  }

  let companyRevenueQuery = '';

  if (revenueRange) {
    companyRevenueQuery = `AND \n(`;
    revenueRange.forEach((range, index) => {
      if (index !== revenueRange.length - 1) {
        companyRevenueQuery += ` "revenue" BETWEEN ${range[0]} AND ${range[1]} OR`;
      } else {
        companyRevenueQuery += ` "revenue" BETWEEN ${range[0]} AND ${range[1]} )`;
      }
    });
  } // console.log(expertiseQuery);


  const query = `SELECT * FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}
  LIMIT ${perPage} OFFSET ${page * perPage}`;
  const countQuery = `SELECT COUNT(*) FROM "Companies" WHERE (LOWER("name") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("HQLocation") LIKE LOWER('%${searchTerm}%') OR LOWER("locations") LIKE LOWER('%${searchTerm}%') 
  OR LOWER("expertise") LIKE LOWER('%${searchTerm}%') OR LOWER("industry") LIKE LOWER('%${searchTerm}%'))
  ${companySizeQuery}
  ${expertiseQuery}
  ${companyTypeQuery}
  ${companyRevenueQuery}`;
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
  /*   return res.json({
    status: 'success',
    count: 0,
    totalCount: 0,
    data: { companies: [] },
  }); */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vaGVscGVycy9jb252ZXJ0U3RyaW5nUmFuZ2VzVG9OdW1iZXJSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvYXBpL2NvbXBhbmllcy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiREJfTkFNRSIsIkRCX1VTRVIiLCJEQl9QQVNTIiwiaG9zdCIsInBvcnQiLCJkaWFsZWN0IiwiY29udmVydFN0cmluZ1Jhbmdlc1RvTnVtYmVyUmFuZ2VzIiwicmFuZ2VzIiwibnVtYmVyUmFuZ2VzIiwiZm9yRWFjaCIsInJhbmdlIiwicHVzaCIsIm11bHRpcGxpZXIiLCJzdHJpbmdNdWx0aXBsaWVyIiwic3BsaXQiLCJtaW5WYWx1ZSIsInJlcGxhY2UiLCJtYXhWYWx1ZSIsIlF1ZXJ5VHlwZXMiLCJzZXF1ZWxpemUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZWFyY2hUZXJtIiwicXVlcnkiLCJ0ZXJtIiwicGFnZSIsInBlclBhZ2UiLCJjb21wYW55U2l6ZSIsImV4cGVydGlzZSIsImNvbXBhbnlUeXBlIiwicmV2ZW51ZSIsInJldmVudWVSYW5nZSIsImNvbXBhbnlTaXplUXVlcnkiLCJzaXplIiwiaW5kZXgiLCJsZW5ndGgiLCJleHBlcnRpc2VRdWVyeSIsInRhZyIsImNvbXBhbnlUeXBlUXVlcnkiLCJ0eXBlIiwiY29tcGFueVJldmVudWVRdWVyeSIsImNvdW50UXVlcnkiLCJyb3dzIiwiU0VMRUNUIiwidG90YWxDb21wYW5pZXNDb3VudCIsImNvdW50IiwidG90YWxDb3VudCIsImRhdGEiLCJj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LEVBQUUsQ0FBQ0YsbUJBQW1CLENBQUMsQ0FBRCxDQUFuQixDQUF1QkMsS0FIdEI7QUFJZEUsUUFBSSxFQUFFO0FBQUVDLGVBQVMsRUFBRU47QUFBYjtBQUpRLEdBQVQsQ0FBUDtBQU9BO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLEM7Ozs7Ozs7Ozs7O0FDaEpELHVDIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW5pZXMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gIHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAge1xyXG4gICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcclxuICB9XHJcbik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdSYW5nZXNUb051bWJlclJhbmdlcyhyYW5nZXMpIHtcbiAgaWYgKHJhbmdlc1swXSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBudW1iZXJSYW5nZXMgPSBbXTtcbiAgcmFuZ2VzLmZvckVhY2goKHJhbmdlKSA9PiB7XG4gICAgaWYgKHJhbmdlID09PSAnNTArIGJpbGxpb24nKSB7XG4gICAgICBudW1iZXJSYW5nZXMucHVzaChbNTAgKiAxMDAwMDAwMDAwLCA5MjIzMzcyMDM2ODU0Nzc1ODA3XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtdWx0aXBsaWVyID0gMTAwMDtcbiAgICBjb25zdCBzdHJpbmdNdWx0aXBsaWVyID0gcmFuZ2Uuc3BsaXQoJyAnKVsxXTtcbiAgICBpZiAoc3RyaW5nTXVsdGlwbGllciA9PT0gJ21pbGxpb24nKSB7XG4gICAgICBtdWx0aXBsaWVyID0gMTAwMDAwMDtcbiAgICB9IGVsc2UgaWYgKHN0cmluZ011bHRpcGxpZXIgPT09ICdiaWxsaW9uJykge1xuICAgICAgbXVsdGlwbGllciA9IDEwMDAwMDAwMDA7XG4gICAgfVxuICAgIGNvbnN0IG1pblZhbHVlID1cbiAgICAgIHJhbmdlLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKVswXS5yZXBsYWNlKC8sL2csICcnKSAqIG11bHRpcGxpZXI7XG4gICAgY29uc3QgbWF4VmFsdWUgPVxuICAgICAgcmFuZ2Uuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpWzFdLnJlcGxhY2UoLywvZywgJycpICogbXVsdGlwbGllcjtcblxuICAgIG51bWJlclJhbmdlcy5wdXNoKFttaW5WYWx1ZSwgbWF4VmFsdWVdKTtcbiAgfSk7XG4gIHJldHVybiBudW1iZXJSYW5nZXM7XG59XG4iLCJpbXBvcnQgY29udmVydFN0cmluZ1Jhbmdlc1RvTnVtYmVyUmFuZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvY29udmVydFN0cmluZ1Jhbmdlc1RvTnVtYmVyUmFuZ2VzJztcblxuY29uc3QgeyBRdWVyeVR5cGVzIH0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbi8vIGNvbnN0IHsgQ29tcGFueSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbW9kZWxzJyk7XG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9jb25maWcvZGInKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2VhcmNoVGVybSA9IHJlcS5xdWVyeS50ZXJtO1xuICBjb25zdCB7IHBhZ2UgfSA9IHJlcS5xdWVyeSB8fCAwO1xuICBjb25zdCB7IHBlclBhZ2UgfSA9IHJlcS5xdWVyeSB8fCA4O1xuXG4gIGxldCBjb21wYW55U2l6ZSA9IHJlcS5xdWVyeS5jb21wYW55U2l6ZSB8fCAnJztcbiAgY29tcGFueVNpemUgPSBjb21wYW55U2l6ZS5zcGxpdCgnLHwnKTtcblxuICBsZXQgZXhwZXJ0aXNlID0gcmVxLnF1ZXJ5LmV4cGVydGlzZSB8fCAnJztcbiAgZXhwZXJ0aXNlID0gZXhwZXJ0aXNlLnNwbGl0KCcsJyk7XG5cbiAgbGV0IGNvbXBhbnlUeXBlID0gcmVxLnF1ZXJ5LmNvbXBhbnlUeXBlIHx8ICcnO1xuICBjb21wYW55VHlwZSA9IGNvbXBhbnlUeXBlLnNwbGl0KCcsJyk7XG5cbiAgbGV0IHJldmVudWUgPSByZXEucXVlcnkucmV2ZW51ZSB8fCAnJztcbiAgcmV2ZW51ZSA9IHJldmVudWUuc3BsaXQoJyx8Jyk7XG5cbiAgY29uc3QgcmV2ZW51ZVJhbmdlID0gY29udmVydFN0cmluZ1Jhbmdlc1RvTnVtYmVyUmFuZ2VzKHJldmVudWUpO1xuXG4gIGxldCBjb21wYW55U2l6ZVF1ZXJ5ID0gJyc7XG4gIGlmIChjb21wYW55U2l6ZVswXSAhPT0gJycpIHtcbiAgICBjb21wYW55U2l6ZVF1ZXJ5ID0gYEFORCBcXG4oYDtcbiAgICBjb21wYW55U2l6ZS5mb3JFYWNoKChzaXplLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBjb21wYW55U2l6ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbXBhbnlTaXplUXVlcnkgKz0gYCBcInNpemVcIiBMSUtFICclJHtzaXplfSUnIE9SYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBhbnlTaXplUXVlcnkgKz0gYCBcInNpemVcIiBMSUtFICclJHtzaXplfSUnIClgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGV4cGVydGlzZVF1ZXJ5ID0gJyc7XG4gIGlmIChleHBlcnRpc2VbMF0gIT09ICcnKSB7XG4gICAgZXhwZXJ0aXNlUXVlcnkgPSBgQU5EIFxcbihgO1xuICAgIGV4cGVydGlzZS5mb3JFYWNoKCh0YWcsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IGV4cGVydGlzZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGV4cGVydGlzZVF1ZXJ5ICs9IGAgXCJleHBlcnRpc2VcIiBMSUtFICclJHt0YWd9JScgT1JgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwZXJ0aXNlUXVlcnkgKz0gYCBcImV4cGVydGlzZVwiIExJS0UgJyUke3RhZ30lJyApYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCBjb21wYW55VHlwZVF1ZXJ5ID0gJyc7XG4gIGlmIChjb21wYW55VHlwZVswXSAhPT0gJycpIHtcbiAgICBjb21wYW55VHlwZVF1ZXJ5ID0gYEFORCBcXG4oYDtcbiAgICBjb21wYW55VHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBjb21wYW55VHlwZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbXBhbnlUeXBlUXVlcnkgKz0gYCBcInR5cGVcIiBMSUtFICclJHt0eXBlfSUnIE9SYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBhbnlUeXBlUXVlcnkgKz0gYCBcInR5cGVcIiBMSUtFICclJHt0eXBlfSUnIClgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGNvbXBhbnlSZXZlbnVlUXVlcnkgPSAnJztcbiAgaWYgKHJldmVudWVSYW5nZSkge1xuICAgIGNvbXBhbnlSZXZlbnVlUXVlcnkgPSBgQU5EIFxcbihgO1xuICAgIHJldmVudWVSYW5nZS5mb3JFYWNoKChyYW5nZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gcmV2ZW51ZVJhbmdlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29tcGFueVJldmVudWVRdWVyeSArPSBgIFwicmV2ZW51ZVwiIEJFVFdFRU4gJHtyYW5nZVswXX0gQU5EICR7cmFuZ2VbMV19IE9SYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBhbnlSZXZlbnVlUXVlcnkgKz0gYCBcInJldmVudWVcIiBCRVRXRUVOICR7cmFuZ2VbMF19IEFORCAke3JhbmdlWzFdfSApYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKGV4cGVydGlzZVF1ZXJ5KTtcblxuICBjb25zdCBxdWVyeSA9IGBTRUxFQ1QgKiBGUk9NIFwiQ29tcGFuaWVzXCIgV0hFUkUgKExPV0VSKFwibmFtZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBcbiAgT1IgTE9XRVIoXCJIUUxvY2F0aW9uXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIE9SIExPV0VSKFwibG9jYXRpb25zXCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpIFxuICBPUiBMT1dFUihcImV4cGVydGlzZVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBPUiBMT1dFUihcImluZHVzdHJ5XCIpIExJS0UgTE9XRVIoJyUke3NlYXJjaFRlcm19JScpKVxuICAke2NvbXBhbnlTaXplUXVlcnl9XG4gICR7ZXhwZXJ0aXNlUXVlcnl9XG4gICR7Y29tcGFueVR5cGVRdWVyeX1cbiAgJHtjb21wYW55UmV2ZW51ZVF1ZXJ5fVxuICBMSU1JVCAke3BlclBhZ2V9IE9GRlNFVCAke3BhZ2UgKiBwZXJQYWdlfWA7XG5cbiAgY29uc3QgY291bnRRdWVyeSA9IGBTRUxFQ1QgQ09VTlQoKikgRlJPTSBcIkNvbXBhbmllc1wiIFdIRVJFIChMT1dFUihcIm5hbWVcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgXG4gIE9SIExPV0VSKFwiSFFMb2NhdGlvblwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBPUiBMT1dFUihcImxvY2F0aW9uc1wiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSBcbiAgT1IgTE9XRVIoXCJleHBlcnRpc2VcIikgTElLRSBMT1dFUignJSR7c2VhcmNoVGVybX0lJykgT1IgTE9XRVIoXCJpbmR1c3RyeVwiKSBMSUtFIExPV0VSKCclJHtzZWFyY2hUZXJtfSUnKSlcbiAgJHtjb21wYW55U2l6ZVF1ZXJ5fVxuICAke2V4cGVydGlzZVF1ZXJ5fVxuICAke2NvbXBhbnlUeXBlUXVlcnl9XG4gICR7Y29tcGFueVJldmVudWVRdWVyeX1gO1xuXG4gIGNvbnN0IHJvd3MgPSBhd2FpdCBzZXF1ZWxpemUucXVlcnkocXVlcnksIHsgdHlwZTogUXVlcnlUeXBlcy5TRUxFQ1QgfSk7XG4gIGNvbnN0IHRvdGFsQ29tcGFuaWVzQ291bnQgPSBhd2FpdCBzZXF1ZWxpemUucXVlcnkoY291bnRRdWVyeSwge1xuICAgIHR5cGU6IFF1ZXJ5VHlwZXMuU0VMRUNULFxuICB9KTtcblxuICAvKiBjb25zdCB0b3RhbENvbXBhbmllc0NvdW50ID0gYXdhaXQgQ29tcGFueS5jb3VudCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIFtPcC5vcl06IFtcbiAgICAgICAgeyBuYW1lOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBIUUxvY2F0aW9uOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBsb2NhdGlvbnM6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGNvdW50cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGV4cGVydGlzZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgaW5kdXN0cnk6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBjb21wYW5pZXMgPSBhd2FpdCBDb21wYW55LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbT3Aub3JdOiBbXG4gICAgICAgIHsgbmFtZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgSFFMb2NhdGlvbjogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgbG9jYXRpb25zOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBjb3VudHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBleHBlcnRpc2U6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGluZHVzdHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaW1pdDogcGVyUGFnZSxcbiAgICBvZmZzZXQ6IHBhZ2UgKiBwZXJQYWdlLFxuICB9KTsgKi9cbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICBjb3VudDogcm93cy5sZW5ndGgsXG4gICAgdG90YWxDb3VudDogK3RvdGFsQ29tcGFuaWVzQ291bnRbMF0uY291bnQsXG4gICAgZGF0YTogeyBjb21wYW5pZXM6IHJvd3MgfSxcbiAgfSk7XG5cbiAgLyogICByZXR1cm4gcmVzLmpzb24oe1xuICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgIGNvdW50OiAwLFxuICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgZGF0YTogeyBjb21wYW5pZXM6IFtdIH0sXG4gIH0pOyAqL1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9