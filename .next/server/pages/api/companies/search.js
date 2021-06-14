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
  const {
    page
  } = req.query || 0;
  const {
    perPage
  } = req.query || 8;
  const totalCompaniesCount = await Company.count({
    where: {
      [Op.or]: [{
        name: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        HQLocation: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        locations: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        country: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        expertise: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        industry: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }]
    }
  });
  const companies = await Company.findAll({
    where: {
      [Op.or]: [{
        name: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        HQLocation: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        locations: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        country: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        expertise: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }, {
        industry: {
          [Op.iLike]: `%${searchTerm}%`
        }
      }]
    },
    limit: perPage,
    offset: page * perPage
  });
  return res.json({
    status: 'success',
    count: companies.length,
    totalCount: totalCompaniesCount,
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/companies/search/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby8uL3BhZ2VzL2FwaS9jb21wYW5pZXMvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3NpbWlsby9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiIsIkRCX05BTUUiLCJEQl9VU0VSIiwiREJfUEFTUyIsImhvc3QiLCJwb3J0IiwiZGlhbGVjdCIsImZzIiwicGF0aCIsInNlcXVlbGl6ZSIsIm1vZGVscyIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwiY3dkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlTmFtZSIsInRlc3QiLCJmb3JFYWNoIiwibW9kZWwiLCJpbXBvcnQiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIk9wIiwiQ29tcGFueSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInRlcm0iLCJwYWdlIiwicGVyUGFnZSIsInRvdGFsQ29tcGFuaWVzQ291bnQiLCJjb3VudCIsIndoZXJlIiwib3IiLCJpTGlrZSIsIkhRTG9jYXRpb24iLCJsb2NhdGlvbnMiLCJjb3VudHJ5IiwiZXhwZXJ0aXNlIiwiaW5kdXN0cnkiLCJjb21wYW5pZXMiLCJmaW5kQWxsIiwibGltaXQiLCJvZmZzZXQiLCJsZW5ndGgiLCJ0b3RhbENvdW50IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEs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LE9BSk8sRUFLUDtBQUFFYSxpQkFBUyxFQUFFO0FBQUUsV0FBQ3ZCLEVBQUUsQ0FBQ21CLEtBQUosR0FBYSxJQUFHVCxVQUFXO0FBQTdCO0FBQWIsT0FMTyxFQU1QO0FBQUVjLGdCQUFRLEVBQUU7QUFBRSxXQUFDeEIsRUFBRSxDQUFDbUIsS0FBSixHQUFhLElBQUdULFVBQVc7QUFBN0I7QUFBWixPQU5PO0FBREosS0FEK0I7QUFXdENpQixTQUFLLEVBQUViLE9BWCtCO0FBWXRDYyxVQUFNLEVBQUVmLElBQUksR0FBR0M7QUFadUIsR0FBaEIsQ0FBeEI7QUFjQSxTQUFPVixHQUFHLENBQUNJLElBQUosQ0FBUztBQUNkRCxVQUFNLEVBQUUsU0FETTtBQUVkUyxTQUFLLEVBQUVTLFNBQVMsQ0FBQ0ksTUFGSDtBQUdkQyxjQUFVLEVBQUVmLG1CQUhFO0FBSWRnQixRQUFJLEVBQUU7QUFBRU47QUFBRjtBQUpRLEdBQVQsQ0FBUDtBQU1ELEM7Ozs7Ozs7Ozs7O0FDaERELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW5pZXMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gIHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAge1xyXG4gICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcclxuICB9XHJcbik7XHJcbiIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3Qgc2VxdWVsaXplID0gcmVxdWlyZSgnLi4vY29uZmlnL2RiJyk7XHJcblxyXG5jb25zdCBtb2RlbHMgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbW9kZWxzJykpO1xyXG5cclxuZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdtb2RlbHMnKSlcclxuICAuZmlsdGVyKChmaWxlTmFtZSkgPT4gL1xcLmpzJC8udGVzdChmaWxlTmFtZSkgJiYgZmlsZU5hbWUgIT09ICdpbmRleC5qcycpXHJcbiAgLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZS5pbXBvcnQoXHJcbiAgICAgIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbW9kZWxzJywgZmlsZU5hbWUpXHJcbiAgICApO1xyXG4gICAgbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhtb2RlbHMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xyXG4gIGlmIChtb2RlbHNbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIG1vZGVsc1ttb2RlbE5hbWVdLmFzc29jaWF0ZShtb2RlbHMpO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscztcclxuIiwiY29uc3QgeyBPcCB9ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5jb25zdCB7IENvbXBhbnkgfSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL21vZGVscycpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XG4gIH1cblxuICBjb25zdCBzZWFyY2hUZXJtID0gcmVxLnF1ZXJ5LnRlcm07XG4gIGNvbnN0IHsgcGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDA7XG4gIGNvbnN0IHsgcGVyUGFnZSB9ID0gcmVxLnF1ZXJ5IHx8IDg7XG5cbiAgY29uc3QgdG90YWxDb21wYW5pZXNDb3VudCA9IGF3YWl0IENvbXBhbnkuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICBbT3Aub3JdOiBbXG4gICAgICAgIHsgbmFtZTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgSFFMb2NhdGlvbjogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgbG9jYXRpb25zOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBjb3VudHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBleHBlcnRpc2U6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGluZHVzdHJ5OiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY29tcGFuaWVzID0gYXdhaXQgQ29tcGFueS5maW5kQWxsKHtcbiAgICB3aGVyZToge1xuICAgICAgW09wLm9yXTogW1xuICAgICAgICB7IG5hbWU6IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IEhRTG9jYXRpb246IHsgW09wLmlMaWtlXTogYCUke3NlYXJjaFRlcm19JWAgfSB9LFxuICAgICAgICB7IGxvY2F0aW9uczogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgY291bnRyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICAgIHsgZXhwZXJ0aXNlOiB7IFtPcC5pTGlrZV06IGAlJHtzZWFyY2hUZXJtfSVgIH0gfSxcbiAgICAgICAgeyBpbmR1c3RyeTogeyBbT3AuaUxpa2VdOiBgJSR7c2VhcmNoVGVybX0lYCB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGltaXQ6IHBlclBhZ2UsXG4gICAgb2Zmc2V0OiBwYWdlICogcGVyUGFnZSxcbiAgfSk7XG4gIHJldHVybiByZXMuanNvbih7XG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgY291bnQ6IGNvbXBhbmllcy5sZW5ndGgsXG4gICAgdG90YWxDb3VudDogdG90YWxDb21wYW5pZXNDb3VudCxcbiAgICBkYXRhOiB7IGNvbXBhbmllcyB9LFxuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=