webpackHotUpdate_N_E("pages/vaccinations",{

/***/ "./src/data/getVaccineAgeData.js":
/*!***************************************!*\
  !*** ./src/data/getVaccineAgeData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _jsonpFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpFetch */ \"./src/data/jsonpFetch.js\");\n\nvar dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=775ca815-5028-4e9b-9dd4-6975ff1be021&limit=11&sort=_id desc';\n\nvar ensureNumber = function ensureNumber(value) {\n  if (typeof value === 'number') {\n    return value;\n  }\n\n  return Number((value || '0').replace(/,/g, ''));\n};\n\nvar beautifyAge = function beautifyAge(age) {\n  switch (age) {\n    case '12-17yrs':\n      return '12-17';\n\n    case '18-29yrs':\n      return '18-29';\n\n    case '30-39yrs':\n      return '30s';\n\n    case '40-49yrs':\n      return '40s';\n\n    case '50-59yrs':\n      return '50s';\n\n    case '60-69yrs':\n      return '60s';\n\n    case '70-79yrs':\n      return '70s';\n\n    case 'Adults_18plus':\n      return '18+';\n\n    case 'Ontario_12plus':\n      return '12+';\n\n    case 'Ontario_5plus':\n      return '5+';\n\n    default:\n      return age;\n  }\n};\n\nvar getVaccineAgeData = function getVaccineAgeData() {\n  return new Promise(function (resolve) {\n    Object(_jsonpFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataUrl, function (_ref) {\n      var result = _ref.result;\n      var records = result.records.filter(function (a) {\n        return a.Agegroup != 'Undisclosed_or_missing';\n      });\n      result.records.sort(function (a, b) {\n        return a._id - b._id;\n      });\n      result.records.map(function (record) {\n        var Agegroup = record.Agegroup,\n            Percent_at_least_one_dose = record.Percent_at_least_one_dose,\n            Percent_fully_vaccinated = record.Percent_fully_vaccinated;\n        record.Agegroup = beautifyAge(Agegroup);\n        record.Percent_at_least_one_dose = ensureNumber(Percent_at_least_one_dose) * 100;\n        record.Percent_fully_vaccinated = ensureNumber(Percent_fully_vaccinated) * 100;\n        record.percent_partially_vaccinated = record.Percent_at_least_one_dose - record.Percent_fully_vaccinated;\n        record.percent_not_vaccinated = 100 - record.Percent_at_least_one_dose;\n        return record;\n      });\n      resolve(records);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getVaccineAgeData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZ2V0VmFjY2luZUFnZURhdGEuanM/MTBjNCJdLCJuYW1lcyI6WyJkYXRhVXJsIiwiZW5zdXJlTnVtYmVyIiwidmFsdWUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiYmVhdXRpZnlBZ2UiLCJhZ2UiLCJnZXRWYWNjaW5lQWdlRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwianNvbnBGZXRjaCIsInJlc3VsdCIsInJlY29yZHMiLCJmaWx0ZXIiLCJhIiwiQWdlZ3JvdXAiLCJzb3J0IiwiYiIsIl9pZCIsIm1hcCIsInJlY29yZCIsIlBlcmNlbnRfYXRfbGVhc3Rfb25lX2Rvc2UiLCJQZXJjZW50X2Z1bGx5X3ZhY2NpbmF0ZWQiLCJwZXJjZW50X3BhcnRpYWxseV92YWNjaW5hdGVkIiwicGVyY2VudF9ub3RfdmFjY2luYXRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUNYLCtIQURGOztBQUdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0IsV0FBT0EsS0FBUDtBQUNIOztBQUNELFNBQU9DLE1BQU0sQ0FBQyxDQUFDRCxLQUFLLElBQUksR0FBVixFQUFlRSxPQUFmLENBQXVCLElBQXZCLEVBQTZCLEVBQTdCLENBQUQsQ0FBYjtBQUNILENBTEQ7O0FBT0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQzNCLFVBQVFBLEdBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxVQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssVUFBTDtBQUNFLGFBQU8sS0FBUDs7QUFDRixTQUFLLFVBQUw7QUFDRSxhQUFPLEtBQVA7O0FBQ0YsU0FBSyxVQUFMO0FBQ0UsYUFBTyxLQUFQOztBQUNGLFNBQUssVUFBTDtBQUNFLGFBQU8sS0FBUDs7QUFDRixTQUFLLFVBQUw7QUFDRSxhQUFPLEtBQVA7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsYUFBTyxLQUFQOztBQUNGLFNBQUssZ0JBQUw7QUFDRSxhQUFPLEtBQVA7O0FBQ0osU0FBSyxlQUFMO0FBQ0MsYUFBTyxJQUFQOztBQUNDO0FBQ0UsYUFBT0EsR0FBUDtBQXRCSjtBQXdCRCxDQXpCRDs7QUEyQkEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQ3hCLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkJDLCtEQUFVLENBQUNWLE9BQUQsRUFBVSxnQkFBZ0I7QUFBQSxVQUFiVyxNQUFhLFFBQWJBLE1BQWE7QUFDbEMsVUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsTUFBZixDQUFzQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxRQUFGLElBQWMsd0JBQWxCO0FBQUEsT0FBdkIsQ0FBaEI7QUFDQUosWUFBTSxDQUFDQyxPQUFQLENBQWVJLElBQWYsQ0FBb0IsVUFBQ0YsQ0FBRCxFQUFJRyxDQUFKO0FBQUEsZUFBVUgsQ0FBQyxDQUFDSSxHQUFGLEdBQVFELENBQUMsQ0FBQ0MsR0FBcEI7QUFBQSxPQUFwQjtBQUVBUCxZQUFNLENBQUNDLE9BQVAsQ0FBZU8sR0FBZixDQUFtQixVQUFDQyxNQUFELEVBQVk7QUFBQSxZQUUzQkwsUUFGMkIsR0FLekJLLE1BTHlCLENBRTNCTCxRQUYyQjtBQUFBLFlBRzNCTSx5QkFIMkIsR0FLekJELE1BTHlCLENBRzNCQyx5QkFIMkI7QUFBQSxZQUkzQkMsd0JBSjJCLEdBS3pCRixNQUx5QixDQUkzQkUsd0JBSjJCO0FBTzdCRixjQUFNLENBQUNMLFFBQVAsR0FBa0JWLFdBQVcsQ0FBQ1UsUUFBRCxDQUE3QjtBQUVBSyxjQUFNLENBQUNDLHlCQUFQLEdBQW1DcEIsWUFBWSxDQUFDb0IseUJBQUQsQ0FBWixHQUEwQyxHQUE3RTtBQUNBRCxjQUFNLENBQUNFLHdCQUFQLEdBQWtDckIsWUFBWSxDQUFDcUIsd0JBQUQsQ0FBWixHQUF5QyxHQUEzRTtBQUVBRixjQUFNLENBQUNHLDRCQUFQLEdBQXNDSCxNQUFNLENBQUNDLHlCQUFQLEdBQW1DRCxNQUFNLENBQUNFLHdCQUFoRjtBQUNBRixjQUFNLENBQUNJLHNCQUFQLEdBQWdDLE1BQU9KLE1BQU0sQ0FBQ0MseUJBQTlDO0FBRUEsZUFBT0QsTUFBUDtBQUNELE9BaEJEO0FBaUJBWCxhQUFPLENBQUNHLE9BQUQsQ0FBUDtBQUNELEtBdEJTLENBQVY7QUF1QkQsR0F4QkQsQ0FEd0I7QUFBQSxDQUExQjs7QUEyQmVMLGdGQUFmIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZ2V0VmFjY2luZUFnZURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNvbnBGZXRjaCBmcm9tICcuL2pzb25wRmV0Y2gnO1xuXG5jb25zdCBkYXRhVXJsID1cbiAgJ2h0dHBzOi8vZGF0YS5vbnRhcmlvLmNhL2FwaS8zL2FjdGlvbi9kYXRhc3RvcmVfc2VhcmNoP3Jlc291cmNlX2lkPTc3NWNhODE1LTUwMjgtNGU5Yi05ZGQ0LTY5NzVmZjFiZTAyMSZsaW1pdD0xMSZzb3J0PV9pZCBkZXNjJztcblxuY29uc3QgZW5zdXJlTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSB8fCAnMCcpLnJlcGxhY2UoLywvZywgJycpKTtcbn07XG5cbmNvbnN0IGJlYXV0aWZ5QWdlID0gKGFnZSkgPT4ge1xuICBzd2l0Y2ggKGFnZSkge1xuICAgIGNhc2UgJzEyLTE3eXJzJzpcbiAgICAgIHJldHVybiAnMTItMTcnO1xuICAgIGNhc2UgJzE4LTI5eXJzJzpcbiAgICAgIHJldHVybiAnMTgtMjknO1xuICAgIGNhc2UgJzMwLTM5eXJzJzpcbiAgICAgIHJldHVybiAnMzBzJztcbiAgICBjYXNlICc0MC00OXlycyc6XG4gICAgICByZXR1cm4gJzQwcyc7XG4gICAgY2FzZSAnNTAtNTl5cnMnOlxuICAgICAgcmV0dXJuICc1MHMnO1xuICAgIGNhc2UgJzYwLTY5eXJzJzpcbiAgICAgIHJldHVybiAnNjBzJztcbiAgICBjYXNlICc3MC03OXlycyc6XG4gICAgICByZXR1cm4gJzcwcyc7XG4gICAgY2FzZSAnQWR1bHRzXzE4cGx1cyc6XG4gICAgICByZXR1cm4gJzE4Kyc7XG4gICAgY2FzZSAnT250YXJpb18xMnBsdXMnOlxuICAgICAgcmV0dXJuICcxMisnO1xuXHRcdGNhc2UgJ09udGFyaW9fNXBsdXMnOlxuXHRcdFx0cmV0dXJuICc1Kyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhZ2U7XG4gIH1cbn07XG5cbmNvbnN0IGdldFZhY2NpbmVBZ2VEYXRhID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBqc29ucEZldGNoKGRhdGFVcmwsICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICBjb25zdCByZWNvcmRzID0gcmVzdWx0LnJlY29yZHMuZmlsdGVyKGEgPT4gYS5BZ2Vncm91cCAhPSAnVW5kaXNjbG9zZWRfb3JfbWlzc2luZycpO1xuICAgICAgcmVzdWx0LnJlY29yZHMuc29ydCgoYSwgYikgPT4gYS5faWQgLSBiLl9pZCk7XG5cbiAgICAgIHJlc3VsdC5yZWNvcmRzLm1hcCgocmVjb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBBZ2Vncm91cCxcbiAgICAgICAgICBQZXJjZW50X2F0X2xlYXN0X29uZV9kb3NlLFxuICAgICAgICAgIFBlcmNlbnRfZnVsbHlfdmFjY2luYXRlZFxuICAgICAgICB9ID0gcmVjb3JkO1xuXG4gICAgICAgIHJlY29yZC5BZ2Vncm91cCA9IGJlYXV0aWZ5QWdlKEFnZWdyb3VwKTtcblxuICAgICAgICByZWNvcmQuUGVyY2VudF9hdF9sZWFzdF9vbmVfZG9zZSA9IGVuc3VyZU51bWJlcihQZXJjZW50X2F0X2xlYXN0X29uZV9kb3NlKSAqIDEwMDtcbiAgICAgICAgcmVjb3JkLlBlcmNlbnRfZnVsbHlfdmFjY2luYXRlZCA9IGVuc3VyZU51bWJlcihQZXJjZW50X2Z1bGx5X3ZhY2NpbmF0ZWQpICogMTAwO1xuXG4gICAgICAgIHJlY29yZC5wZXJjZW50X3BhcnRpYWxseV92YWNjaW5hdGVkID0gcmVjb3JkLlBlcmNlbnRfYXRfbGVhc3Rfb25lX2Rvc2UgLSByZWNvcmQuUGVyY2VudF9mdWxseV92YWNjaW5hdGVkO1xuICAgICAgICByZWNvcmQucGVyY2VudF9ub3RfdmFjY2luYXRlZCA9IDEwMCAtIChyZWNvcmQuUGVyY2VudF9hdF9sZWFzdF9vbmVfZG9zZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZShyZWNvcmRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhY2NpbmVBZ2VEYXRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/getVaccineAgeData.js\n");

/***/ })

})