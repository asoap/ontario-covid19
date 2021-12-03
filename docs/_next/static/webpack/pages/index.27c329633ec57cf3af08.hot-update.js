webpackHotUpdate_N_E("pages/index",{

/***/ "./src/chartConfig/vaccinations/dailyDoses.js":
/*!****************************************************!*\
  !*** ./src/chartConfig/vaccinations/dailyDoses.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _vaccineChartIDs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaccineChartIDs */ \"./src/chartConfig/vaccinations/vaccineChartIDs.js\");\n\nvar dailyDoses = {\n  id: _vaccineChartIDs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dailyDoses,\n  dataKeyX: 'date_string',\n  title: 'Daily vaccines administered',\n  syncId: 'vaccineCharts',\n  bars: [{\n    dataKey: 'previous_day_at_least_one',\n    name: 'Daily first doses administered',\n    fill: '#509ee3'\n  }, {\n    dataKey: 'previous_day_fully_vaccinated',\n    name: 'Daily second doses administered',\n    fill: '#82ca9d'\n  }],\n  lines: [{\n    dataKey: 'new_vaccines_rolling_average',\n    name: '7 day rolling average',\n    stroke: 'black',\n    strokeWidth: 2,\n    dot: false\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dailyDoses);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NoYXJ0Q29uZmlnL3ZhY2NpbmF0aW9ucy9kYWlseURvc2VzLmpzPzkwNTgiXSwibmFtZXMiOlsiZGFpbHlEb3NlcyIsImlkIiwidmFjY2luZUNoYXJ0cyIsImRhdGFLZXlYIiwidGl0bGUiLCJzeW5jSWQiLCJiYXJzIiwiZGF0YUtleSIsIm5hbWUiLCJmaWxsIiwibGluZXMiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImRvdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxJQUFFLEVBQUVDLHdEQUFhLENBQUNGLFVBREQ7QUFFakJHLFVBQVEsRUFBRSxhQUZPO0FBR2pCQyxPQUFLLEVBQUUsNkJBSFU7QUFJakJDLFFBQU0sRUFBRSxlQUpTO0FBS2pCQyxNQUFJLEVBQUUsQ0FDSjtBQUNFQyxXQUFPLEVBQUUsMkJBRFg7QUFFRUMsUUFBSSxFQUFFLGdDQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBREksRUFNSjtBQUNFRixXQUFPLEVBQUUsK0JBRFg7QUFFRUMsUUFBSSxFQUFFLGlDQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTkksQ0FMVztBQWlCakJDLE9BQUssRUFBRSxDQUNMO0FBQ0VILFdBQU8sRUFBRSw4QkFEWDtBQUVFQyxRQUFJLEVBQUUsdUJBRlI7QUFHRUcsVUFBTSxFQUFFLE9BSFY7QUFJRUMsZUFBVyxFQUFFLENBSmY7QUFLRUMsT0FBRyxFQUFFO0FBTFAsR0FESztBQWpCVSxDQUFuQjtBQTRCZWIseUVBQWYiLCJmaWxlIjoiLi9zcmMvY2hhcnRDb25maWcvdmFjY2luYXRpb25zL2RhaWx5RG9zZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFjY2luZUNoYXJ0cyBmcm9tICcuL3ZhY2NpbmVDaGFydElEcyc7XG5cbmNvbnN0IGRhaWx5RG9zZXMgPSB7XG4gIGlkOiB2YWNjaW5lQ2hhcnRzLmRhaWx5RG9zZXMsXG4gIGRhdGFLZXlYOiAnZGF0ZV9zdHJpbmcnLFxuICB0aXRsZTogJ0RhaWx5IHZhY2NpbmVzIGFkbWluaXN0ZXJlZCcsXG4gIHN5bmNJZDogJ3ZhY2NpbmVDaGFydHMnLFxuICBiYXJzOiBbXG4gICAge1xuICAgICAgZGF0YUtleTogJ3ByZXZpb3VzX2RheV9hdF9sZWFzdF9vbmUnLFxuICAgICAgbmFtZTogJ0RhaWx5IGZpcnN0IGRvc2VzIGFkbWluaXN0ZXJlZCcsXG4gICAgICBmaWxsOiAnIzUwOWVlMycsXG4gICAgfSxcbiAgICB7XG4gICAgICBkYXRhS2V5OiAncHJldmlvdXNfZGF5X2Z1bGx5X3ZhY2NpbmF0ZWQnLFxuICAgICAgbmFtZTogJ0RhaWx5IHNlY29uZCBkb3NlcyBhZG1pbmlzdGVyZWQnLFxuICAgICAgZmlsbDogJyM4MmNhOWQnLFxuICAgIH0sXG4gIF0sXG4gIGxpbmVzOiBbXG4gICAge1xuICAgICAgZGF0YUtleTogJ25ld192YWNjaW5lc19yb2xsaW5nX2F2ZXJhZ2UnLFxuICAgICAgbmFtZTogJzcgZGF5IHJvbGxpbmcgYXZlcmFnZScsXG4gICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgIGRvdDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhaWx5RG9zZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/chartConfig/vaccinations/dailyDoses.js\n");

/***/ })

})