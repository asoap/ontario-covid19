webpackHotUpdate_N_E("pages/index",{

/***/ "./src/data/getOntarioStatuses.js":
/*!****************************************!*\
  !*** ./src/data/getOntarioStatuses.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _jsonpFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpFetch */ \"./src/data/jsonpFetch.js\");\n\nvar dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000';\nvar hospitalField = 'Number of patients hospitalized with COVID-19';\nvar icuField = 'Number of patients in ICU due to COVID-19';\n\nvar getOntarioStatuses = function getOntarioStatuses() {\n  return new Promise(function (resolve) {\n    Object(_jsonpFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataUrl, function (data) {\n      var records = data.result.records;\n      records.sort(function (a, b) {\n        return new Date(a['Reported Date']) - new Date(b['Reported Date']);\n      });\n      var cases_last7days = [0, 0, 0, 0, 0, 0, 0];\n      var deaths_last7days = [0, 0, 0, 0, 0, 0, 0];\n      var tests_last7days = [0, 0, 0, 0, 0, 0, 0];\n      var percentTestsPositive_last7days = [0, 0, 0, 0, 0, 0, 0];\n      var yesterdayCases = 0;\n      var yesterdayDeaths = 0;\n      var yesterdayActiveCases = 0;\n      var yesterdayResolvedCases = 0;\n      var yesterdayHospital = 0;\n      var yesterdayIcu = 0;\n      records.map(function (record) {\n        record.new_cases = record['Total Cases'] - yesterdayCases;\n        record.new_deaths = Math.max(record['Deaths'] - yesterdayDeaths, 0);\n        record.icu_no_ventilator = record[icuField] - record['Number of patients in ICU on a ventilator due to COVID-19'];\n        record.date_string = new Date(record['Reported Date']).toLocaleString('en-us', {\n          month: 'short',\n          day: 'numeric'\n        });\n        record.active_cases = record['Total Cases'] - record['Resolved'] - record['Deaths'];\n        record.new_active_cases = record.active_cases - yesterdayActiveCases;\n        record.new_resolved = record['Resolved'] - yesterdayResolvedCases;\n        record.new_hospital = record[hospitalField] - yesterdayHospital;\n        record.new_icu = record[icuField] - yesterdayIcu;\n        record.percent_positive = (record['new_cases'] / record['Total tests completed in the last day'] * 100).toFixed(2);\n\n        if (record.percent_positive > 100) {\n          record.percent_positive = 0;\n        } else if (isNaN(record.percent_positive)) {\n          record.percent_positive = 0;\n        }\n\n        percentTestsPositive_last7days.shift();\n        percentTestsPositive_last7days.push(Number(record.percent_positive || 0));\n        record.tests_positive_rolling_average = (percentTestsPositive_last7days.reduce(function (total, cases) {\n          return cases + total;\n        }, 0) / 7.0).toFixed(2);\n        tests_last7days.shift();\n        tests_last7days.push(record['Total tests completed in the last day'] || 0);\n        record.tests_rolling_average = Math.round(tests_last7days.reduce(function (total, cases) {\n          return cases + total;\n        }, 0) / 7.0);\n        cases_last7days.shift();\n        cases_last7days.push(record.new_cases);\n        var total_cases_last7days = cases_last7days.reduce(function (total, cases) {\n          return cases + total;\n        }, 0);\n        record.new_cases_rolling_average = Math.round(total_cases_last7days / 7);\n        deaths_last7days.shift();\n        deaths_last7days.push(record.new_deaths);\n        var total_deaths_last7days = deaths_last7days.reduce(function (total, cases) {\n          return cases + total;\n        }, 0);\n        record.new_deaths_rolling_average = Math.round(total_deaths_last7days / 7);\n        yesterdayIcu = record[icuField];\n        yesterdayHospital = record[hospitalField];\n        yesterdayCases = record['Total Cases'];\n        yesterdayDeaths = record['Deaths'];\n        yesterdayResolvedCases = record['Resolved'];\n        yesterdayActiveCases = record['active_cases'];\n        record.totalNonVOC = record['Total Cases'] - record.vocsTotal;\n        return record;\n      });\n      resolve(records);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getOntarioStatuses);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZ2V0T250YXJpb1N0YXR1c2VzLmpzPzYxMGQiXSwibmFtZXMiOlsiZGF0YVVybCIsImhvc3BpdGFsRmllbGQiLCJpY3VGaWVsZCIsImdldE9udGFyaW9TdGF0dXNlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwianNvbnBGZXRjaCIsImRhdGEiLCJyZWNvcmRzIiwicmVzdWx0Iiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImNhc2VzX2xhc3Q3ZGF5cyIsImRlYXRoc19sYXN0N2RheXMiLCJ0ZXN0c19sYXN0N2RheXMiLCJwZXJjZW50VGVzdHNQb3NpdGl2ZV9sYXN0N2RheXMiLCJ5ZXN0ZXJkYXlDYXNlcyIsInllc3RlcmRheURlYXRocyIsInllc3RlcmRheUFjdGl2ZUNhc2VzIiwieWVzdGVyZGF5UmVzb2x2ZWRDYXNlcyIsInllc3RlcmRheUhvc3BpdGFsIiwieWVzdGVyZGF5SWN1IiwibWFwIiwicmVjb3JkIiwibmV3X2Nhc2VzIiwibmV3X2RlYXRocyIsIk1hdGgiLCJtYXgiLCJpY3Vfbm9fdmVudGlsYXRvciIsImRhdGVfc3RyaW5nIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheSIsImFjdGl2ZV9jYXNlcyIsIm5ld19hY3RpdmVfY2FzZXMiLCJuZXdfcmVzb2x2ZWQiLCJuZXdfaG9zcGl0YWwiLCJuZXdfaWN1IiwicGVyY2VudF9wb3NpdGl2ZSIsInRvRml4ZWQiLCJpc05hTiIsInNoaWZ0IiwicHVzaCIsIk51bWJlciIsInRlc3RzX3Bvc2l0aXZlX3JvbGxpbmdfYXZlcmFnZSIsInJlZHVjZSIsInRvdGFsIiwiY2FzZXMiLCJ0ZXN0c19yb2xsaW5nX2F2ZXJhZ2UiLCJyb3VuZCIsInRvdGFsX2Nhc2VzX2xhc3Q3ZGF5cyIsIm5ld19jYXNlc19yb2xsaW5nX2F2ZXJhZ2UiLCJ0b3RhbF9kZWF0aHNfbGFzdDdkYXlzIiwibmV3X2RlYXRoc19yb2xsaW5nX2F2ZXJhZ2UiLCJ0b3RhbE5vblZPQyIsInZv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QUNnQyxTQUFwRDtBQUNBLGVBQU9oQyxNQUFQO0FBQ0EsT0EvQ0Q7QUFnREFwQixhQUFPLENBQUNHLE9BQUQsQ0FBUDtBQUNBLEtBaEVTLENBQVY7QUFpRUEsR0FsRU0sQ0FBUDtBQW1FQSxDQXBFRDs7QUFzRWVMLGlGQUFmIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZ2V0T250YXJpb1N0YXR1c2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzb25wRmV0Y2ggZnJvbSAnLi9qc29ucEZldGNoJztcblxuY29uc3QgZGF0YVVybCA9ICdodHRwczovL2RhdGEub250YXJpby5jYS9hcGkvMy9hY3Rpb24vZGF0YXN0b3JlX3NlYXJjaD9yZXNvdXJjZV9pZD1lZDI3MGJiOC0zNDBiLTQxZjktYTdjNi1lOGVmNTg3ZTZkMTEmbGltaXQ9MTAwMCc7XG5jb25zdCBob3NwaXRhbEZpZWxkID0gJ051bWJlciBvZiBwYXRpZW50cyBob3NwaXRhbGl6ZWQgd2l0aCBDT1ZJRC0xOSc7XG5jb25zdCBpY3VGaWVsZCA9ICdOdW1iZXIgb2YgcGF0aWVudHMgaW4gSUNVIGR1ZSB0byBDT1ZJRC0xOSc7XG5cbmNvbnN0IGdldE9udGFyaW9TdGF0dXNlcyA9ICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0anNvbnBGZXRjaChkYXRhVXJsLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRjb25zdCByZWNvcmRzID0gZGF0YS5yZXN1bHQucmVjb3Jkcztcblx0XHRcdHJlY29yZHMuc29ydCgoYSxiKSA9PiBuZXcgRGF0ZShhWydSZXBvcnRlZCBEYXRlJ10pIC0gbmV3IERhdGUoYlsnUmVwb3J0ZWQgRGF0ZSddKSk7XG5cblx0XHRcdGxldCBjYXNlc19sYXN0N2RheXMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cdFx0XHRsZXQgZGVhdGhzX2xhc3Q3ZGF5cyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwXTtcblx0XHRcdGxldCB0ZXN0c19sYXN0N2RheXMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cdFx0XHRsZXQgcGVyY2VudFRlc3RzUG9zaXRpdmVfbGFzdDdkYXlzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuXHRcdFx0bGV0IHllc3RlcmRheUNhc2VzID0gMDtcblx0XHRcdGxldCB5ZXN0ZXJkYXlEZWF0aHMgPSAwO1xuXHRcdFx0bGV0IHllc3RlcmRheUFjdGl2ZUNhc2VzID0gMDtcblx0XHRcdGxldCB5ZXN0ZXJkYXlSZXNvbHZlZENhc2VzID0gMDtcblx0XHRcdGxldCB5ZXN0ZXJkYXlIb3NwaXRhbCA9IDA7XG5cdFx0XHRsZXQgeWVzdGVyZGF5SWN1ID0gMDtcblxuXHRcdFx0cmVjb3Jkcy5tYXAocmVjb3JkID0+IHtcblx0XHRcdFx0cmVjb3JkLm5ld19jYXNlcyA9IHJlY29yZFsnVG90YWwgQ2FzZXMnXSAtIHllc3RlcmRheUNhc2VzO1xuXHRcdFx0XHRyZWNvcmQubmV3X2RlYXRocyA9IE1hdGgubWF4KHJlY29yZFsnRGVhdGhzJ10gLSB5ZXN0ZXJkYXlEZWF0aHMsIDApO1xuXHRcdFx0XHRyZWNvcmQuaWN1X25vX3ZlbnRpbGF0b3IgPSByZWNvcmRbaWN1RmllbGRdIC0gcmVjb3JkWydOdW1iZXIgb2YgcGF0aWVudHMgaW4gSUNVIG9uIGEgdmVudGlsYXRvciBkdWUgdG8gQ09WSUQtMTknXTtcblx0XHRcdFx0cmVjb3JkLmRhdGVfc3RyaW5nID0gbmV3IERhdGUocmVjb3JkWydSZXBvcnRlZCBEYXRlJ10pLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHtcblx0XHRcdFx0XHRtb250aDogJ3Nob3J0Jyxcblx0XHRcdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlY29yZC5hY3RpdmVfY2FzZXMgPSByZWNvcmRbJ1RvdGFsIENhc2VzJ10gLSByZWNvcmRbJ1Jlc29sdmVkJ10gLSByZWNvcmRbJ0RlYXRocyddO1xuXHRcdFx0XHRyZWNvcmQubmV3X2FjdGl2ZV9jYXNlcyA9IHJlY29yZC5hY3RpdmVfY2FzZXMgLSB5ZXN0ZXJkYXlBY3RpdmVDYXNlcztcblx0XHRcdFx0cmVjb3JkLm5ld19yZXNvbHZlZCA9IHJlY29yZFsnUmVzb2x2ZWQnXSAtIHllc3RlcmRheVJlc29sdmVkQ2FzZXM7XG5cdFx0XHRcdHJlY29yZC5uZXdfaG9zcGl0YWwgPSByZWNvcmRbaG9zcGl0YWxGaWVsZF0gLSB5ZXN0ZXJkYXlIb3NwaXRhbDtcblx0XHRcdFx0cmVjb3JkLm5ld19pY3UgPSByZWNvcmRbaWN1RmllbGRdIC0geWVzdGVyZGF5SWN1O1xuXHRcdFx0XHRyZWNvcmQucGVyY2VudF9wb3NpdGl2ZSA9ICgocmVjb3JkWyduZXdfY2FzZXMnXSAvIHJlY29yZFsnVG90YWwgdGVzdHMgY29tcGxldGVkIGluIHRoZSBsYXN0IGRheSddKSAqIDEwMCkudG9GaXhlZCgyKTtcblx0XHRcdFx0aWYgKHJlY29yZC5wZXJjZW50X3Bvc2l0aXZlID4gMTAwKSB7XG5cdFx0XHRcdFx0cmVjb3JkLnBlcmNlbnRfcG9zaXRpdmUgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzTmFOKHJlY29yZC5wZXJjZW50X3Bvc2l0aXZlKSkge1xuXHRcdFx0XHRcdHJlY29yZC5wZXJjZW50X3Bvc2l0aXZlID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBlcmNlbnRUZXN0c1Bvc2l0aXZlX2xhc3Q3ZGF5cy5zaGlmdCgpO1xuXHRcdFx0XHRwZXJjZW50VGVzdHNQb3NpdGl2ZV9sYXN0N2RheXMucHVzaChOdW1iZXIocmVjb3JkLnBlcmNlbnRfcG9zaXRpdmUgfHwgMCkpO1xuXHRcdFx0XHRyZWNvcmQudGVzdHNfcG9zaXRpdmVfcm9sbGluZ19hdmVyYWdlID0gKHBlcmNlbnRUZXN0c1Bvc2l0aXZlX2xhc3Q3ZGF5cy5yZWR1Y2UoKHRvdGFsLCBjYXNlcykgPT4gY2FzZXMgKyB0b3RhbCwgMCkgLyA3LjApLnRvRml4ZWQoMik7XG5cblx0XHRcdFx0dGVzdHNfbGFzdDdkYXlzLnNoaWZ0KCk7XG5cdFx0XHRcdHRlc3RzX2xhc3Q3ZGF5cy5wdXNoKHJlY29yZFsnVG90YWwgdGVzdHMgY29tcGxldGVkIGluIHRoZSBsYXN0IGRheSddIHx8IDApO1xuXHRcdFx0XHRyZWNvcmQudGVzdHNfcm9sbGluZ19hdmVyYWdlID0gTWF0aC5yb3VuZCh0ZXN0c19sYXN0N2RheXMucmVkdWNlKCh0b3RhbCwgY2FzZXMpID0+IGNhc2VzICsgdG90YWwsIDApIC8gNy4wKTtcblxuXHRcdFx0XHRjYXNlc19sYXN0N2RheXMuc2hpZnQoKTtcblx0XHRcdFx0Y2FzZXNfbGFzdDdkYXlzLnB1c2gocmVjb3JkLm5ld19jYXNlcyk7XG5cdFx0XHRcdGNvbnN0IHRvdGFsX2Nhc2VzX2xhc3Q3ZGF5cyA9IGNhc2VzX2xhc3Q3ZGF5cy5yZWR1Y2UoKHRvdGFsLCBjYXNlcykgPT4gY2FzZXMgKyB0b3RhbCwgMCk7XG5cdFx0XHRcdHJlY29yZC5uZXdfY2FzZXNfcm9sbGluZ19hdmVyYWdlID0gTWF0aC5yb3VuZCh0b3RhbF9jYXNlc19sYXN0N2RheXMgLyA3KTtcblxuXHRcdFx0XHRkZWF0aHNfbGFzdDdkYXlzLnNoaWZ0KCk7XG5cdFx0XHRcdGRlYXRoc19sYXN0N2RheXMucHVzaChyZWNvcmQubmV3X2RlYXRocyk7XG5cdFx0XHRcdGNvbnN0IHRvdGFsX2RlYXRoc19sYXN0N2RheXMgPSBkZWF0aHNfbGFzdDdkYXlzLnJlZHVjZSgodG90YWwsIGNhc2VzKSA9PiBjYXNlcyArIHRvdGFsLCAwKTtcblx0XHRcdFx0cmVjb3JkLm5ld19kZWF0aHNfcm9sbGluZ19hdmVyYWdlID0gTWF0aC5yb3VuZCh0b3RhbF9kZWF0aHNfbGFzdDdkYXlzIC8gNyk7XG5cblx0XHRcdFx0eWVzdGVyZGF5SWN1ID0gcmVjb3JkW2ljdUZpZWxkXTtcblx0XHRcdFx0eWVzdGVyZGF5SG9zcGl0YWwgPSByZWNvcmRbaG9zcGl0YWxGaWVsZF07XG5cdFx0XHRcdHllc3RlcmRheUNhc2VzID0gcmVjb3JkWydUb3RhbCBDYXNlcyddO1xuXHRcdFx0XHR5ZXN0ZXJkYXlEZWF0aHMgPSByZWNvcmRbJ0RlYXRocyddO1xuXHRcdFx0XHR5ZXN0ZXJkYXlSZXNvbHZlZENhc2VzID0gcmVjb3JkWydSZXNvbHZlZCddO1xuXHRcdFx0XHR5ZXN0ZXJkYXlBY3RpdmVDYXNlcyA9IHJlY29yZFsnYWN0aXZlX2Nhc2VzJ107XG5cblx0XHRcdFx0cmVjb3JkLnRvdGFsTm9uVk9DID0gcmVjb3JkWydUb3RhbCBDYXNlcyddIC0gcmVjb3JkLnZvY3NUb3RhbDtcblx0XHRcdFx0cmV0dXJuIHJlY29yZDtcblx0XHRcdH0pO1xuXHRcdFx0cmVzb2x2ZShyZWNvcmRzKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRPbnRhcmlvU3RhdHVzZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/getOntarioStatuses.js\n");

/***/ })

})