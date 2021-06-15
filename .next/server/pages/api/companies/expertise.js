(function() {
var exports = {};
exports.id = "pages/api/companies/expertise";
exports.ids = ["pages/api/companies/expertise"];
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

/***/ "./pages/api/companies/expertise.js":
/*!******************************************!*\
  !*** ./pages/api/companies/expertise.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const {
  QueryTypes
} = __webpack_require__(/*! sequelize */ "sequelize");

const sequelize = __webpack_require__(/*! ../../../config/db */ "./config/db.js");

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      message: `Method ${req.method} not allowed`
    });
  }

  const queryString = `SELECT expertise FROM "Companies"`;
  const expertise = await sequelize.query(queryString, {
    type: QueryTypes.SELECT
  });
  const tagsSet = new Set();
  expertise.forEach(elem => {
    if (elem.expertise) {
      const tagsArray = elem.expertise.split(',');
      tagsArray.forEach(tag => {
        if (tag === '') {
          return;
        }

        tagsSet.add(tag.trim());
      });
    }
  });
  return res.json({
    status: 'success',
    data: {
      expertise: Array.from(tagsSet)
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/companies/expertise.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1pbG8vLi9jb25maWcvZGIuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvLy4vcGFnZXMvYXBpL2NvbXBhbmllcy9leHBlcnRpc2UuanMiLCJ3ZWJwYWNrOi8vc2ltaWxvL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiREJfTkFNRSIsIkRCX1VTRVIiLCJEQl9QQVNTIiwiaG9zdCIsInBvcnQiLCJkaWFsZWN0IiwiUXVlcnlUeXBlcyIsInNlcXVlbGl6ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInF1ZXJ5U3RyaW5nIiwiZXhwZXJ0aXNlIiwicXVlcnkiLCJ0eXBlIiwiU0VMRUNUIiwidGFnc1NldCIsIlNldCIsImZvckVhY2giLCJlbGVtIiwidGFnc0FycmF5Iiwic3BsaXQiLCJ0YWciLCJhZGQiLCJ0cmltIiwiZGF0YSIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRCQUFELENBQXpCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSUgsU0FBSixDQUNmSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FERyxFQUVmRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUsT0FGRyxFQUdmSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsT0FIRyxFQUlmO0FBQ0VDLE1BQUksRUFBRSxXQURSO0FBRUVDLE1BQUksRUFBRSxJQUZSO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBSmUsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTTtBQUFFQztBQUFGLElBQWlCWCxtQkFBTyxDQUFDLDRCQUFELENBQTlCOztBQUNBLE1BQU1ZLFNBQVMsR0FBR1osbUJBQU8sQ0FBQywwQ0FBRCxDQUF6Qjs7QUFFZSxlQUFlYSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJELE9BQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0EsV0FBT0YsR0FBRyxDQUNQRyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFHLFVBQVNOLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUZELENBQVA7QUFHRDs7QUFFRCxRQUFNSyxXQUFXLEdBQUksbUNBQXJCO0FBRUEsUUFBTUMsU0FBUyxHQUFHLE1BQU1WLFNBQVMsQ0FBQ1csS0FBVixDQUFnQkYsV0FBaEIsRUFBNkI7QUFDbkRHLFFBQUksRUFBRWIsVUFBVSxDQUFDYztBQURrQyxHQUE3QixDQUF4QjtBQUlBLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxHQUFKLEVBQWhCO0FBRUFMLFdBQVMsQ0FBQ00sT0FBVixDQUFtQkMsSUFBRCxJQUFVO0FBQzFCLFFBQUlBLElBQUksQ0FBQ1AsU0FBVCxFQUFvQjtBQUNsQixZQUFNUSxTQUFTLEdBQUdELElBQUksQ0FBQ1AsU0FBTCxDQUFlUyxLQUFmLENBQXFCLEdBQXJCLENBQWxCO0FBQ0FELGVBQVMsQ0FBQ0YsT0FBVixDQUFtQkksR0FBRCxJQUFTO0FBQ3pCLFlBQUlBLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2Q7QUFDRDs7QUFDRE4sZUFBTyxDQUFDTyxHQUFSLENBQVlELEdBQUcsQ0FBQ0UsSUFBSixFQUFaO0FBQ0QsT0FMRDtBQU1EO0FBQ0YsR0FWRDtBQVlBLFNBQU9uQixHQUFHLENBQUNJLElBQUosQ0FBUztBQUNkRCxVQUFNLEVBQUUsU0FETTtBQUVkaUIsUUFBSSxFQUFFO0FBQUViLGVBQVMsRUFBRWMsS0FBSyxDQUFDQyxJQUFOLENBQVdYLE9BQVg7QUFBYjtBQUZRLEdBQVQsQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7O0FDbkNELHVDIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW5pZXMvZXhwZXJ0aXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gIHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAge1xyXG4gICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbiAgICBwb3J0OiA1NDMyLFxyXG4gICAgZGlhbGVjdDogJ3Bvc3RncmVzJyxcclxuICB9XHJcbik7XHJcbiIsImNvbnN0IHsgUXVlcnlUeXBlcyB9ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25maWcvZGInKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoNDA1KVxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgU0VMRUNUIGV4cGVydGlzZSBGUk9NIFwiQ29tcGFuaWVzXCJgO1xuXG4gIGNvbnN0IGV4cGVydGlzZSA9IGF3YWl0IHNlcXVlbGl6ZS5xdWVyeShxdWVyeVN0cmluZywge1xuICAgIHR5cGU6IFF1ZXJ5VHlwZXMuU0VMRUNULFxuICB9KTtcblxuICBjb25zdCB0YWdzU2V0ID0gbmV3IFNldCgpO1xuXG4gIGV4cGVydGlzZS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgaWYgKGVsZW0uZXhwZXJ0aXNlKSB7XG4gICAgICBjb25zdCB0YWdzQXJyYXkgPSBlbGVtLmV4cGVydGlzZS5zcGxpdCgnLCcpO1xuICAgICAgdGFnc0FycmF5LmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICBpZiAodGFnID09PSAnJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0YWdzU2V0LmFkZCh0YWcudHJpbSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICBkYXRhOiB7IGV4cGVydGlzZTogQXJyYXkuZnJvbSh0YWdzU2V0KSB9LFxuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==