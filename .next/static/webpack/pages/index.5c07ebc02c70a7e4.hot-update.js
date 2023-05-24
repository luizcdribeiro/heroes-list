"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/services/HeroesService.ts":
/*!***************************************!*\
  !*** ./src/services/HeroesService.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHero\": function() { return /* binding */ addHero; },\n/* harmony export */   \"deleteHero\": function() { return /* binding */ deleteHero; },\n/* harmony export */   \"getHeroById\": function() { return /* binding */ getHeroById; },\n/* harmony export */   \"getHeroes\": function() { return /* binding */ getHeroes; },\n/* harmony export */   \"updateHero\": function() { return /* binding */ updateHero; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.ts\");\n\n\n\nvar getHeroes = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/api/Heroes\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data.Items\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getHeroes() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getHeroById = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/api/Heroes/\".concat(id))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getHeroById(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar addHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(heroData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/Heroes\", heroData)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    console.log(\"Error:\", \"N\\xe3o \\xe9 poss\\xedvel criar o heroi\");\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function addHero(heroData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar updateHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id, heroData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/api/Heroes/\".concat(id), heroData)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function updateHero(id, heroData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id) {\n        var error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        _api_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"/api/Heroes/\".concat(id))\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        3,\n                        3\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function deleteHero(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvSGVyb2VzU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBR3RCLElBQU1DO2VBQVksOEVBQVk7WUFFM0JDLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsb0RBQU8sQ0FBRTs7O29CQUExQkUsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJLENBQUNDLEtBQUs7OztvQkFDbkJIO29CQUNQSSxRQUFRSixLQUFLLENBQUMsVUFBVUE7b0JBQ3hCLE1BQU1BLE1BQU07Ozs7Ozs7SUFFaEI7b0JBUmFGOzs7SUFRWDtBQUVLLElBQU1PO2VBQWMsNEVBQU9DLElBQWU7WUFFdkNQLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsb0RBQU8sQ0FBQyxlQUFrQixPQUFIUzs7O29CQUF4Q1AsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJOzs7b0JBQ2JGO29CQUNQSSxRQUFRSixLQUFLLENBQUMsVUFBVUE7b0JBQ3hCLE1BQU1BLE1BQU07Ozs7Ozs7SUFFaEI7b0JBUmFLLFlBQXFCQzs7O0lBUWhDO0FBRUssSUFBTUM7ZUFBVSw0RUFBT0MsVUFBMEI7WUFFOUNULFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgscURBQVEsQ0FBQyxlQUFlVzs7O29CQUF6Q1QsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJOzs7b0JBQ2JGO29CQUNQSSxRQUFRSixLQUFLLENBQUMsVUFBVUE7b0JBRXhCSSxRQUFRTSxHQUFHLENBQUMsVUFBVTtvQkFDdEIsTUFBTVYsTUFBTTs7Ozs7OztJQUVoQjtvQkFWYU8sUUFBaUJDOzs7SUFVNUI7QUFFSyxJQUFNRztlQUFhLDRFQUFPTCxJQUFZRSxVQUFrQjtZQUVyRFQsVUFFQ0M7Ozs7Ozs7Ozs7b0JBRlU7O3dCQUFNSCxvREFBTyxDQUFDLGVBQWtCLE9BQUhTLEtBQU1FOzs7b0JBQTlDVCxXQUFXO29CQUNqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1BJLFFBQVFKLEtBQUssQ0FBQyxVQUFVQTtvQkFDeEIsTUFBTUEsTUFBTTs7Ozs7OztJQUVoQjtvQkFSYVcsV0FBb0JMLElBQVlFOzs7SUFRM0M7QUFFSyxJQUFNSztlQUFhLDRFQUFPUCxJQUFlO1lBR3JDTjs7Ozs7Ozs7OztvQkFEUDs7d0JBQU1ILDBEQUFVLENBQUMsZUFBa0IsT0FBSFM7OztvQkFBaEM7Ozs7OztvQkFDT047b0JBQ1BJLFFBQVFKLEtBQUssQ0FBQyxVQUFVQTtvQkFDeEIsTUFBTUEsTUFBTTs7Ozs7OztJQUVoQjtvQkFQYWEsV0FBb0JQOzs7SUFPL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0hlcm9lc1NlcnZpY2UudHM/YmJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gXCIuLi9hcGkvYXBpXCI7XG5pbXBvcnQgeyBIZXJvLCBIZXJvUmVxdWVzdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRIZXJvZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGAvYXBpL0hlcm9lc2ApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLkl0ZW1zO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEhlcm9CeUlkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9hcGkvSGVyb2VzLyR7aWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkSGVybyA9IGFzeW5jIChoZXJvRGF0YTogSGVyb1JlcXVlc3QpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvYXBpL0hlcm9lcycsIGhlcm9EYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgJ07Do28gw6kgcG9zc8OtdmVsIGNyaWFyIG8gaGVyb2knKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUhlcm8gPSBhc3luYyAoaWQ6IG51bWJlciwgaGVyb0RhdGE6IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnB1dChgL2FwaS9IZXJvZXMvJHtpZH1gLCBoZXJvRGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlSGVybyA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpLmRlbGV0ZShgL2FwaS9IZXJvZXMvJHtpZH1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXBpIiwiZ2V0SGVyb2VzIiwicmVzcG9uc2UiLCJlcnJvciIsImdldCIsImRhdGEiLCJJdGVtcyIsImNvbnNvbGUiLCJnZXRIZXJvQnlJZCIsImlkIiwiYWRkSGVybyIsImhlcm9EYXRhIiwicG9zdCIsImxvZyIsInVwZGF0ZUhlcm8iLCJwdXQiLCJkZWxldGVIZXJvIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/HeroesService.ts\n"));

/***/ })

});