webpackHotUpdate_N_E("pages/vaccinations",{

/***/ "./src/data/getVaccineData.js":
/*!************************************!*\
  !*** ./src/data/getVaccineData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _jsonpFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpFetch */ \"./src/data/jsonpFetch.js\");\n\nvar dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000';\n\nvar ensureNumber = function ensureNumber(value) {\n  if (typeof value === 'number') {\n    return value;\n  }\n\n  return Number((value || '0').replace(/,/g, ''));\n};\n\nvar getVaccineData = function getVaccineData() {\n  return new Promise(function (resolve) {\n    Object(_jsonpFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataUrl, function (_ref) {\n      var result = _ref.result;\n      var rawRecords = result.records;\n      rawRecords.sort(function (a, b) {\n        return new Date(a.report_date) - new Date(b.report_date);\n      });\n      var vaccines_last7days = [0, 0, 0, 0, 0, 0, 0]; // Data comes in with gaps for some dates, so fill in the gaps by replicating the previous date's data\n\n      var records = [];\n\n      for (var currentRecordIndex = 1; currentRecordIndex < rawRecords.length; currentRecordIndex++) {\n        // Backfill up to, but not including, the current record\n        var currentRecord = rawRecords[currentRecordIndex];\n        var curRecordTime = new Date(currentRecord.report_date).getTime(); // Always add the previous record in the original data set\n\n        var prevRecord = rawRecords[currentRecordIndex - 1];\n        records.push(prevRecord); // Continue adding copies of the previous record, until it matches the current record\n\n        var dateToFill = new Date(prevRecord.report_date);\n        dateToFill.setDate(dateToFill.getDate() + 1);\n\n        while (dateToFill.getTime() < curRecordTime) {\n          // Create a new record with a date to fill\n          var backfillRecord = Object.assign({}, prevRecord, {\n            report_date: dateToFill.toISOString().replace(/\\.\\d+Z/, '')\n          });\n          records.push(backfillRecord); // Update the date to fill\n\n          dateToFill.setDate(dateToFill.getDate() + 1);\n        }\n      } // Add the last record, which wasn't added by the above loop\n\n\n      records.push(rawRecords[rawRecords.length - 1]);\n      var previous_total_second_doses_administered = 0;\n      var previous_total_one_shot_doses_administered = 0; // Back to your regularly scheduled code\n\n      records.map(function (record) {\n        var report_date = record.report_date,\n            total_doses_administered = record.total_doses_administered,\n            previous_day_total_doses_administered = record.previous_day_total_doses_administered,\n            total_doses_in_fully_vaccinated_individuals = record.total_doses_in_fully_vaccinated_individuals,\n            total_individuals_fully_vaccinated = record.total_individuals_fully_vaccinated;\n        record.date_string = new Date(report_date).toLocaleString('en-us', {\n          month: 'short',\n          day: 'numeric'\n        });\n        record.total_doses_administered = ensureNumber(total_doses_administered);\n        record.previous_day_total_doses_administered = ensureNumber(previous_day_total_doses_administered);\n        record.total_individuals_fully_vaccinated = ensureNumber(total_individuals_fully_vaccinated);\n        var total_doses_in_fully_vax = ensureNumber(total_doses_in_fully_vaccinated_individuals); // Calculate one-shot doses given (JnJ vaccine)\n\n        var total_one_shot_doses_administered = ensureNumber((record.total_individuals_fully_vaccinated - total_doses_in_fully_vax / 2) * 2);\n        var daily_one_shot_doses_administered = ensureNumber(total_one_shot_doses_administered - previous_total_one_shot_doses_administered);\n        previous_total_one_shot_doses_administered = total_one_shot_doses_administered; // Calculate second doses given\n\n        var total_second_doses_administered = Math.floor((total_doses_in_fully_vax - total_one_shot_doses_administered) / 2);\n        var daily_second_doses_administered = total_second_doses_administered - previous_total_second_doses_administered;\n        previous_total_second_doses_administered = total_second_doses_administered; // Calculate first doses given\n\n        var daily_first_doses_administered = record.previous_day_total_doses_administered - (daily_second_doses_administered + daily_one_shot_doses_administered);\n        record.previous_day_one_shot_doses_administered = daily_one_shot_doses_administered;\n        record.previous_day_second_doses_administered = daily_second_doses_administered;\n        record.previous_day_first_doses_administered = daily_first_doses_administered;\n        vaccines_last7days.shift();\n        vaccines_last7days.push(record.previous_day_total_doses_administered);\n        var total_vaccines_last7days = vaccines_last7days.reduce(function (total, cases) {\n          return cases + total;\n        }, 0);\n        record.new_vaccines_rolling_average = Math.round(total_vaccines_last7days / 7);\n        return record;\n      });\n      resolve(records);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getVaccineData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZ2V0VmFjY2luZURhdGEuanM/MDA0MCJdLCJuYW1lcyI6WyJkYXRhVXJsIiwiZW5zdXJlTnVtYmVyIiwidmFsdWUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiZ2V0VmFjY2luZURhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsImpzb25wRmV0Y2giLCJyZXN1bHQiLCJyYXdSZWNvcmRzIiwicmVjb3JkcyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJyZXBvcnRfZGF0ZSIsInZhY2NpbmVzX2xhc3Q3ZGF5cyIsImN1cnJlbnRSZWNvcmRJbmRleCIsImxlbmd0aCIsImN1cnJlbnRSZWNvcmQiLCJjdXJSZWNvcmRUaW1lIiwiZ2V0VGltZSIsInByZXZSZWNvcmQiLCJwdXNoIiwiZGF0ZVRvRmlsbCIsInNldERhdGUiLCJnZXREYXRlIiwiYmFja2ZpbGxSZWNvcmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b0lTT1N0cmluZyIsInByZXZpb3VzX3RvdGFsX3NlY29uZF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJwcmV2aW91c190b3RhbF9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJtYXAiLCJyZWNvcmQiLCJ0b3RhbF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJwcmV2aW91c19kYXlfdG90YWxfZG9zZXNfYWRtaW5pc3RlcmVkIiwidG90YWxfZG9zZXNfaW5fZnVsbHlfdmFjY2luYXRlZF9pbmRpdmlkdWFscyIsInRvdGFsX2luZGl2aWR1YWxzX2Z1bGx5X3ZhY2NpbmF0ZWQiLCJkYXRlX3N0cmluZyIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ0b3RhbF9kb3Nlc19pbl9mdWxseV92YXgiLCJ0b3RhbF9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJkYWlseV9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJ0b3RhbF9zZWNvbmRfZG9zZXNfYWRtaW5pc3RlcmVkIiwiTWF0aCIsImZsb29yIiwiZGFpbHlfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCIsImRhaWx5X2ZpcnN0X2Rvc2VzX2FkbWluaXN0ZXJlZCIsInByZXZpb3VzX2RheV9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJwcmV2aW91c19kYXlfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCIsInByZXZpb3VzX2RheV9maXJzdF9kb3Nlc19hZG1pbmlzdGVyZWQiLCJzaGlmdCIsInRvdGFsX3ZhY2NpbmVzX2xhc3Q3ZGF5cyIsInJlZHVjZSIsInRvdGFsIiwiY2FzZXMiLCJuZXdfdmFjY2luZXNfcm9sbGluZ19hdmVyYWdlIiwicm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FDWCxxSEFERjs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCLFdBQU9BLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxNQUFNLENBQUMsQ0FBQ0QsS0FBSyxJQUFJLEdBQVYsRUFBZUUsT0FBZixDQUF1QixJQUF2QixFQUE2QixFQUE3QixDQUFELENBQWI7QUFDSCxDQUxEOztBQU9BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUNyQixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCQywrREFBVSxDQUFDUixPQUFELEVBQVUsZ0JBQWdCO0FBQUEsVUFBYlMsTUFBYSxRQUFiQSxNQUFhO0FBQ2xDLFVBQU1DLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxPQUExQjtBQUNBRCxnQkFBVSxDQUFDRSxJQUFYLENBQWdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVUsSUFBSUMsSUFBSixDQUFTRixDQUFDLENBQUNHLFdBQVgsSUFBMEIsSUFBSUQsSUFBSixDQUFTRCxDQUFDLENBQUNFLFdBQVgsQ0FBcEM7QUFBQSxPQUFoQjtBQUNBLFVBQUlDLGtCQUFrQixH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OiIuL3NyYy9kYXRhL2dldFZhY2NpbmVEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzb25wRmV0Y2ggZnJvbSAnLi9qc29ucEZldGNoJztcblxuY29uc3QgZGF0YVVybCA9XG4gICdodHRwczovL2RhdGEub250YXJpby5jYS9hcGkvMy9hY3Rpb24vZGF0YXN0b3JlX3NlYXJjaD9yZXNvdXJjZV9pZD04YTg5Y2FhOS01MTFjLTQ1NjgtYWY4OS03ZjIxNzRiNDM3OGMmbGltaXQ9MTAwMDAwJztcblxuY29uc3QgZW5zdXJlTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSB8fCAnMCcpLnJlcGxhY2UoLywvZywgJycpKTtcbn07XG5cbmNvbnN0IGdldFZhY2NpbmVEYXRhID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBqc29ucEZldGNoKGRhdGFVcmwsICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICBjb25zdCByYXdSZWNvcmRzID0gcmVzdWx0LnJlY29yZHM7XG4gICAgICByYXdSZWNvcmRzLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEucmVwb3J0X2RhdGUpIC0gbmV3IERhdGUoYi5yZXBvcnRfZGF0ZSkpO1xuICAgICAgbGV0IHZhY2NpbmVzX2xhc3Q3ZGF5cyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwXTtcblxuICAgICAgLy8gRGF0YSBjb21lcyBpbiB3aXRoIGdhcHMgZm9yIHNvbWUgZGF0ZXMsIHNvIGZpbGwgaW4gdGhlIGdhcHMgYnkgcmVwbGljYXRpbmcgdGhlIHByZXZpb3VzIGRhdGUncyBkYXRhXG4gICAgICBjb25zdCByZWNvcmRzID0gW107XG4gICAgICBmb3IgKGxldCBjdXJyZW50UmVjb3JkSW5kZXggPSAxOyBjdXJyZW50UmVjb3JkSW5kZXggPCByYXdSZWNvcmRzLmxlbmd0aDsgY3VycmVudFJlY29yZEluZGV4KyspIHtcbiAgICAgICAgLy8gQmFja2ZpbGwgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY3VycmVudCByZWNvcmRcbiAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSByYXdSZWNvcmRzW2N1cnJlbnRSZWNvcmRJbmRleF07XG4gICAgICAgIGNvbnN0IGN1clJlY29yZFRpbWUgPSBuZXcgRGF0ZShjdXJyZW50UmVjb3JkLnJlcG9ydF9kYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgLy8gQWx3YXlzIGFkZCB0aGUgcHJldmlvdXMgcmVjb3JkIGluIHRoZSBvcmlnaW5hbCBkYXRhIHNldFxuICAgICAgICBsZXQgcHJldlJlY29yZCA9IHJhd1JlY29yZHNbY3VycmVudFJlY29yZEluZGV4IC0gMV07XG4gICAgICAgIHJlY29yZHMucHVzaChwcmV2UmVjb3JkKTtcblxuICAgICAgICAvLyBDb250aW51ZSBhZGRpbmcgY29waWVzIG9mIHRoZSBwcmV2aW91cyByZWNvcmQsIHVudGlsIGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcmVjb3JkXG4gICAgICAgIGxldCBkYXRlVG9GaWxsID0gbmV3IERhdGUocHJldlJlY29yZC5yZXBvcnRfZGF0ZSk7XG4gICAgICAgIGRhdGVUb0ZpbGwuc2V0RGF0ZShkYXRlVG9GaWxsLmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgIHdoaWxlIChkYXRlVG9GaWxsLmdldFRpbWUoKSA8IGN1clJlY29yZFRpbWUpIHtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcmVjb3JkIHdpdGggYSBkYXRlIHRvIGZpbGxcbiAgICAgICAgICBjb25zdCBiYWNrZmlsbFJlY29yZCA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZSZWNvcmQsIHtcbiAgICAgICAgICAgIHJlcG9ydF9kYXRlOiBkYXRlVG9GaWxsLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkK1ovLCAnJyksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVjb3Jkcy5wdXNoKGJhY2tmaWxsUmVjb3JkKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZGF0ZSB0byBmaWxsXG4gICAgICAgICAgZGF0ZVRvRmlsbC5zZXREYXRlKGRhdGVUb0ZpbGwuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBsYXN0IHJlY29yZCwgd2hpY2ggd2Fzbid0IGFkZGVkIGJ5IHRoZSBhYm92ZSBsb29wXG4gICAgICByZWNvcmRzLnB1c2gocmF3UmVjb3Jkc1tyYXdSZWNvcmRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgbGV0IHByZXZpb3VzX3RvdGFsX3NlY29uZF9kb3Nlc19hZG1pbmlzdGVyZWQgPSAwO1xuICAgICAgbGV0IHByZXZpb3VzX3RvdGFsX29uZV9zaG90X2Rvc2VzX2FkbWluaXN0ZXJlZCA9IDA7XG5cbiAgICAgIC8vIEJhY2sgdG8geW91ciByZWd1bGFybHkgc2NoZWR1bGVkIGNvZGVcbiAgICAgIHJlY29yZHMubWFwKChyZWNvcmQpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJlcG9ydF9kYXRlLFxuICAgICAgICAgIHRvdGFsX2Rvc2VzX2FkbWluaXN0ZXJlZCxcbiAgICAgICAgICBwcmV2aW91c19kYXlfdG90YWxfZG9zZXNfYWRtaW5pc3RlcmVkLFxuICAgICAgICAgIHRvdGFsX2Rvc2VzX2luX2Z1bGx5X3ZhY2NpbmF0ZWRfaW5kaXZpZHVhbHMsXG4gICAgICAgICAgdG90YWxfaW5kaXZpZHVhbHNfZnVsbHlfdmFjY2luYXRlZCxcbiAgICAgICAgfSA9IHJlY29yZDtcbiAgICAgICAgcmVjb3JkLmRhdGVfc3RyaW5nID0gbmV3IERhdGUocmVwb3J0X2RhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlY29yZC50b3RhbF9kb3Nlc19hZG1pbmlzdGVyZWQgPSBlbnN1cmVOdW1iZXIodG90YWxfZG9zZXNfYWRtaW5pc3RlcmVkKTtcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzX2RheV90b3RhbF9kb3Nlc19hZG1pbmlzdGVyZWQgPSBlbnN1cmVOdW1iZXIocHJldmlvdXNfZGF5X3RvdGFsX2Rvc2VzX2FkbWluaXN0ZXJlZCk7XG4gICAgICAgIHJlY29yZC50b3RhbF9pbmRpdmlkdWFsc19mdWxseV92YWNjaW5hdGVkID0gZW5zdXJlTnVtYmVyKHRvdGFsX2luZGl2aWR1YWxzX2Z1bGx5X3ZhY2NpbmF0ZWQpO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsX2Rvc2VzX2luX2Z1bGx5X3ZheCA9IGVuc3VyZU51bWJlcih0b3RhbF9kb3Nlc19pbl9mdWxseV92YWNjaW5hdGVkX2luZGl2aWR1YWxzKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgb25lLXNob3QgZG9zZXMgZ2l2ZW4gKEpuSiB2YWNjaW5lKVxuICAgICAgICBjb25zdCB0b3RhbF9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQgPSBlbnN1cmVOdW1iZXIoKHJlY29yZC50b3RhbF9pbmRpdmlkdWFsc19mdWxseV92YWNjaW5hdGVkIC0gKHRvdGFsX2Rvc2VzX2luX2Z1bGx5X3ZheCAvIDIpKSAqIDIpO1xuICAgICAgICBjb25zdCBkYWlseV9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQgPSBlbnN1cmVOdW1iZXIodG90YWxfb25lX3Nob3RfZG9zZXNfYWRtaW5pc3RlcmVkIC0gcHJldmlvdXNfdG90YWxfb25lX3Nob3RfZG9zZXNfYWRtaW5pc3RlcmVkKTtcbiAgICAgICAgcHJldmlvdXNfdG90YWxfb25lX3Nob3RfZG9zZXNfYWRtaW5pc3RlcmVkID0gdG90YWxfb25lX3Nob3RfZG9zZXNfYWRtaW5pc3RlcmVkO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBzZWNvbmQgZG9zZXMgZ2l2ZW5cbiAgICAgICAgY29uc3QgdG90YWxfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCA9IE1hdGguZmxvb3IoKHRvdGFsX2Rvc2VzX2luX2Z1bGx5X3ZheCAtIHRvdGFsX29uZV9zaG90X2Rvc2VzX2FkbWluaXN0ZXJlZCkgLyAyKTtcbiAgICAgICAgY29uc3QgZGFpbHlfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCA9IHRvdGFsX3NlY29uZF9kb3Nlc19hZG1pbmlzdGVyZWQgLSBwcmV2aW91c190b3RhbF9zZWNvbmRfZG9zZXNfYWRtaW5pc3RlcmVkO1xuICAgICAgICBwcmV2aW91c190b3RhbF9zZWNvbmRfZG9zZXNfYWRtaW5pc3RlcmVkID0gdG90YWxfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZDtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgZmlyc3QgZG9zZXMgZ2l2ZW5cbiAgICAgICAgY29uc3QgZGFpbHlfZmlyc3RfZG9zZXNfYWRtaW5pc3RlcmVkID0gcmVjb3JkLnByZXZpb3VzX2RheV90b3RhbF9kb3Nlc19hZG1pbmlzdGVyZWQgLSAoZGFpbHlfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCArIGRhaWx5X29uZV9zaG90X2Rvc2VzX2FkbWluaXN0ZXJlZCk7XG5cbiAgICAgICAgcmVjb3JkLnByZXZpb3VzX2RheV9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQgPSBkYWlseV9vbmVfc2hvdF9kb3Nlc19hZG1pbmlzdGVyZWQ7XG4gICAgICAgIHJlY29yZC5wcmV2aW91c19kYXlfc2Vjb25kX2Rvc2VzX2FkbWluaXN0ZXJlZCA9IGRhaWx5X3NlY29uZF9kb3Nlc19hZG1pbmlzdGVyZWQ7XG4gICAgICAgIHJlY29yZC5wcmV2aW91c19kYXlfZmlyc3RfZG9zZXNfYWRtaW5pc3RlcmVkID0gIGRhaWx5X2ZpcnN0X2Rvc2VzX2FkbWluaXN0ZXJlZDtcblxuICAgICAgICB2YWNjaW5lc19sYXN0N2RheXMuc2hpZnQoKTtcbiAgICAgICAgdmFjY2luZXNfbGFzdDdkYXlzLnB1c2gocmVjb3JkLnByZXZpb3VzX2RheV90b3RhbF9kb3Nlc19hZG1pbmlzdGVyZWQpO1xuICAgICAgICBjb25zdCB0b3RhbF92YWNjaW5lc19sYXN0N2RheXMgPSB2YWNjaW5lc19sYXN0N2RheXMucmVkdWNlKCh0b3RhbCwgY2FzZXMpID0+IGNhc2VzICsgdG90YWwsIDApO1xuICAgICAgICByZWNvcmQubmV3X3ZhY2NpbmVzX3JvbGxpbmdfYXZlcmFnZSA9IE1hdGgucm91bmQodG90YWxfdmFjY2luZXNfbGFzdDdkYXlzIC8gNyk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZShyZWNvcmRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhY2NpbmVEYXRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/getVaccineData.js\n");

/***/ })

})