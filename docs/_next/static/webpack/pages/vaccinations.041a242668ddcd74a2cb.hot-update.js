webpackHotUpdate_N_E("pages/vaccinations",{

/***/ "./src/components/VaccinationStatus.js":
/*!*********************************************!*\
  !*** ./src/components/VaccinationStatus.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentContainer */ \"./src/components/ContentContainer.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/russell/projects/covid-19-dash/src/components/VaccinationStatus.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar VaccinationStatus = function VaccinationStatus(_ref) {\n  var _ref$data = _ref.data,\n      data = _ref$data === void 0 ? [] : _ref$data;\n\n  if (!data.length) {\n    return null;\n  }\n\n  var eligiblePopulation = 14010998; // 5+ population\n\n  var lastUpdate = data[data.length - 1];\n  var totalFullyVaccinated = lastUpdate.total_individuals_fully_vaccinated;\n  var totalWithOneDose = lastUpdate.previous_day_at_least_one;\n  var totalWithThreeDoses = lastUpdate.total_individuals_3doses; // const timeToFullVaccination = ((eligiblePopulation - totalFullyVaccinated) * 2 - totalsWithOneDose) / lastUpdate.new_vaccines_rolling_average;\n  // const timeToOneDose = ((eligiblePopulation - totalFullyVaccinated) - totalsWithOneDose) / lastUpdate.new_vaccines_rolling_average;\n\n  return __jsx(_ContentContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Vaccinations at a glance\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 6\n    }\n  }, Math.round((totalWithOneDose + totalFullyVaccinated) / eligiblePopulation * 100 * 100) / 100, \"%\"), ' ', \"of the \", __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"eligible\"), \" population of Ontario has had at least one shot.\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 6\n    }\n  }, Math.round(totalFullyVaccinated / eligiblePopulation * 100 * 100) / 100, \"%\"), ' ', \"of the \", __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"eligible\"), \" population of Ontario has had at least two shots.\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }\n  }, Math.round(totalWithThreeDoses / eligiblePopulation * 100 * 100) / 100, \"%\"), ' ', \"of the \", __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"eligible\"), \" population of Ontario has had at least two shots.\")), __jsx(\"div\", {\n    className: \"mt16 f12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }\n  }, __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, \"Eligible population\"), \": Everyone 5 and older based on estimates from Statistics Canada on July 1st 2020.\"));\n};\n\n_c = VaccinationStatus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VaccinationStatus);\n\nvar _c;\n\n$RefreshReg$(_c, \"VaccinationStatus\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFjY2luYXRpb25TdGF0dXMuanM/MWNhMCJdLCJuYW1lcyI6WyJWYWNjaW5hdGlvblN0YXR1cyIsImRhdGEiLCJsZW5ndGgiLCJlbGlnaWJsZVBvcHVsYXRpb24iLCJsYXN0VXBkYXRlIiwidG90YWxGdWxseVZhY2NpbmF0ZWQiLCJ0b3RhbF9pbmRpdmlkdWFsc19mdWxseV92YWNjaW5hdGVkIiwidG90YWxXaXRoT25lRG9zZSIsInByZXZpb3VzX2RheV9hdF9sZWFzdF9vbmUiLCJ0b3RhbFdpdGhUaHJlZURvc2VzIiwidG90YWxfaW5kaXZpZHVhbHNfM2Rvc2VzIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQW1CO0FBQUEsdUJBQWhCQyxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiwwQkFBVCxFQUFTOztBQUM1QyxNQUFJLENBQUNBLElBQUksQ0FBQ0MsTUFBVixFQUFrQjtBQUNqQixXQUFPLElBQVA7QUFDQTs7QUFDRCxNQUFNQyxrQkFBa0IsR0FBRyxRQUEzQixDQUo0QyxDQUlQOztBQUVyQyxNQUFNQyxVQUFVLEdBQUdILElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZixDQUF2QjtBQUNBLE1BQU1HLG9CQUFvQixHQUFHRCxVQUFVLENBQUNFLGtDQUF4QztBQUNBLE1BQU1DLGdCQUFnQixHQUFHSCxVQUFVLENBQUNJLHlCQUFwQztBQUNBLE1BQU1DLG1CQUFtQixHQUFHTCxVQUFVLENBQUNNLHdCQUF2QyxDQVQ0QyxDQVU1QztBQUNBOztBQUVBLFNBQ0MsTUFBQyx5REFBRDtBQUFrQixTQUFLLEVBQUMsMEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsSUFBSSxDQUFDQyxLQUFMLENBQVksQ0FBQ0wsZ0JBQWdCLEdBQUdGLG9CQUFwQixJQUE0Q0Ysa0JBQTVDLEdBQWlFLEdBQWpFLEdBQXVFLEdBQW5GLElBQTBGLEdBRDVGLE1BREQsRUFJRSxHQUpGLGFBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMUixzREFERCxFQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VRLElBQUksQ0FBQ0MsS0FBTCxDQUFZUCxvQkFBb0IsR0FBR0Ysa0JBQXhCLEdBQThDLEdBQTlDLEdBQW9ELEdBQS9ELElBQXNFLEdBRHhFLE1BREQsRUFJRSxHQUpGLGFBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMUix1REFSRCxFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VRLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxtQkFBbUIsR0FBR04sa0JBQXZCLEdBQTZDLEdBQTdDLEdBQW1ELEdBQTlELElBQXFFLEdBRHZFLE1BREQsRUFJRSxHQUpGLGFBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMUix1REFmRCxDQURELEVBd0JDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsdUZBeEJELENBREQ7QUE4QkEsQ0EzQ0Q7O0tBQU1ILGlCO0FBNkNTQSxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1ZhY2NpbmF0aW9uU3RhdHVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRlbnRDb250YWluZXIgZnJvbSAnLi9Db250ZW50Q29udGFpbmVyJztcblxuXG5jb25zdCBWYWNjaW5hdGlvblN0YXR1cyA9ICh7IGRhdGEgPSBbXSB9KSA9PiB7XG5cdGlmICghZGF0YS5sZW5ndGgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRjb25zdCBlbGlnaWJsZVBvcHVsYXRpb24gPSAxNDAxMDk5ODsgLy8gNSsgcG9wdWxhdGlvblxuXG5cdGNvbnN0IGxhc3RVcGRhdGUgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cdGNvbnN0IHRvdGFsRnVsbHlWYWNjaW5hdGVkID0gbGFzdFVwZGF0ZS50b3RhbF9pbmRpdmlkdWFsc19mdWxseV92YWNjaW5hdGVkO1xuXHRjb25zdCB0b3RhbFdpdGhPbmVEb3NlID0gbGFzdFVwZGF0ZS5wcmV2aW91c19kYXlfYXRfbGVhc3Rfb25lO1xuXHRjb25zdCB0b3RhbFdpdGhUaHJlZURvc2VzID0gbGFzdFVwZGF0ZS50b3RhbF9pbmRpdmlkdWFsc18zZG9zZXM7XG5cdC8vIGNvbnN0IHRpbWVUb0Z1bGxWYWNjaW5hdGlvbiA9ICgoZWxpZ2libGVQb3B1bGF0aW9uIC0gdG90YWxGdWxseVZhY2NpbmF0ZWQpICogMiAtIHRvdGFsc1dpdGhPbmVEb3NlKSAvIGxhc3RVcGRhdGUubmV3X3ZhY2NpbmVzX3JvbGxpbmdfYXZlcmFnZTtcblx0Ly8gY29uc3QgdGltZVRvT25lRG9zZSA9ICgoZWxpZ2libGVQb3B1bGF0aW9uIC0gdG90YWxGdWxseVZhY2NpbmF0ZWQpIC0gdG90YWxzV2l0aE9uZURvc2UpIC8gbGFzdFVwZGF0ZS5uZXdfdmFjY2luZXNfcm9sbGluZ19hdmVyYWdlO1xuXG5cdHJldHVybiAoXG5cdFx0PENvbnRlbnRDb250YWluZXIgdGl0bGU9XCJWYWNjaW5hdGlvbnMgYXQgYSBnbGFuY2VcIj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxzdHJvbmc+XG5cdFx0XHRcdFx0XHR7TWF0aC5yb3VuZCggKHRvdGFsV2l0aE9uZURvc2UgKyB0b3RhbEZ1bGx5VmFjY2luYXRlZCkgLyBlbGlnaWJsZVBvcHVsYXRpb24gKiAxMDAgKiAxMDApIC8gMTAwfSVcblx0XHRcdFx0XHQ8L3N0cm9uZz5cblx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdG9mIHRoZSA8ZW0+ZWxpZ2libGU8L2VtPiBwb3B1bGF0aW9uIG9mIE9udGFyaW8gaGFzIGhhZCBhdCBsZWFzdCBvbmUgc2hvdC5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PHN0cm9uZz5cblx0XHRcdFx0XHRcdHtNYXRoLnJvdW5kKCh0b3RhbEZ1bGx5VmFjY2luYXRlZCAvIGVsaWdpYmxlUG9wdWxhdGlvbikgKiAxMDAgKiAxMDApIC8gMTAwfSVcblx0XHRcdFx0XHQ8L3N0cm9uZz5cblx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdG9mIHRoZSA8ZW0+ZWxpZ2libGU8L2VtPiBwb3B1bGF0aW9uIG9mIE9udGFyaW8gaGFzIGhhZCBhdCBsZWFzdCB0d28gc2hvdHMuXG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8c3Ryb25nPlxuXHRcdFx0XHRcdFx0e01hdGgucm91bmQoKHRvdGFsV2l0aFRocmVlRG9zZXMgLyBlbGlnaWJsZVBvcHVsYXRpb24pICogMTAwICogMTAwKSAvIDEwMH0lXG5cdFx0XHRcdFx0PC9zdHJvbmc+XG5cdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRvZiB0aGUgPGVtPmVsaWdpYmxlPC9lbT4gcG9wdWxhdGlvbiBvZiBPbnRhcmlvIGhhcyBoYWQgYXQgbGVhc3QgdHdvIHNob3RzLlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQxNiBmMTJcIj5cblx0XHRcdFx0PGVtPkVsaWdpYmxlIHBvcHVsYXRpb248L2VtPjogRXZlcnlvbmUgNSBhbmQgb2xkZXIgYmFzZWQgb24gZXN0aW1hdGVzIGZyb20gU3RhdGlzdGljcyBDYW5hZGEgb24gSnVseSAxc3QgMjAyMC5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQ29udGVudENvbnRhaW5lcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhY2NpbmF0aW9uU3RhdHVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/VaccinationStatus.js\n");

/***/ })

})