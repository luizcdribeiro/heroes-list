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

/***/ "./src/repositories/HeroesRepository.ts":
/*!**********************************************!*\
  !*** ./src/repositories/HeroesRepository.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddHero\": function() { return /* binding */ fetchAddHero; },\n/* harmony export */   \"fetchHeroById\": function() { return /* binding */ fetchHeroById; },\n/* harmony export */   \"fetchHeroes\": function() { return /* binding */ fetchHeroes; },\n/* harmony export */   \"fetchUpdateHero\": function() { return /* binding */ fetchUpdateHero; },\n/* harmony export */   \"removeHero\": function() { return /* binding */ removeHero; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var _services_HeroesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/HeroesService */ \"./src/services/HeroesService.ts\");\n\n\n\nvar fetchHeroes = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function() {\n        var heroes, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        (0,_services_HeroesService__WEBPACK_IMPORTED_MODULE_0__.getHeroes)()\n                    ];\n                case 1:\n                    heroes = _state.sent();\n                    return [\n                        2,\n                        heroes\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchHeroes() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchHeroById = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id) {\n        var hero, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        (0,_services_HeroesService__WEBPACK_IMPORTED_MODULE_0__.getHeroById)(id)\n                    ];\n                case 1:\n                    hero = _state.sent();\n                    return [\n                        2,\n                        hero\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchHeroById(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchAddHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(heroData) {\n        var newHero, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        (0,_services_HeroesService__WEBPACK_IMPORTED_MODULE_0__.addHero)(heroData)\n                    ];\n                case 1:\n                    newHero = _state.sent();\n                    return [\n                        2,\n                        newHero\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    console.log(\"Error:\", \"N\\xe3o \\xe9 poss\\xedvel criar o heroi\");\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchAddHero(heroData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchUpdateHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id, heroData) {\n        var updatedHero, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        (0,_services_HeroesService__WEBPACK_IMPORTED_MODULE_0__.updateHero)(id, heroData)\n                    ];\n                case 1:\n                    updatedHero = _state.sent();\n                    return [\n                        2,\n                        updatedHero\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    console.log(\"Error:\", \"N\\xe3o \\xe9 poss\\xedvel atualizar o heroi\");\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchUpdateHero(id, heroData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar removeHero = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(id) {\n        var error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        (0,_services_HeroesService__WEBPACK_IMPORTED_MODULE_0__.deleteHero)(id)\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        3,\n                        3\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function removeHero(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL0hlcm9lc1JlcG9zaXRvcnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNvRztBQUU3RixJQUFNSztlQUFjLDhFQUE2QjtZQUU5Q0MsUUFFQ0M7Ozs7Ozs7Ozs7b0JBRlE7O3dCQUFNUCxrRUFBU0E7OztvQkFBeEJNLFNBQVM7b0JBQ2Y7O3dCQUFPQTs7O29CQUNBQztvQkFDUEMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO29CQUN4QixNQUFNQSxNQUFNOzs7Ozs7O0lBRWhCO29CQVJhRjs7O0lBUVg7QUFFSyxJQUFNSTtlQUFnQiw0RUFBT0MsSUFBOEI7WUFFeERDLE1BRUNKOzs7Ozs7Ozs7O29CQUZNOzt3QkFBTU4sb0VBQVdBLENBQUNTOzs7b0JBQXpCQyxPQUFPO29CQUNiOzt3QkFBT0E7OztvQkFDQUo7b0JBQ1BDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtvQkFDeEIsTUFBTUEsTUFBTTs7Ozs7OztJQUVoQjtvQkFSYUUsY0FBdUJDOzs7SUFRbEM7QUFFSyxJQUFNRTtlQUFlLDRFQUFPQyxVQUF5QztZQUVsRUMsU0FFQ1A7Ozs7Ozs7Ozs7b0JBRlM7O3dCQUFNTCxnRUFBT0EsQ0FBQ1c7OztvQkFBeEJDLFVBQVU7b0JBQ2hCOzt3QkFBT0E7OztvQkFDQVA7b0JBQ1BDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtvQkFDeEJDLFFBQVFPLEdBQUcsQ0FBQyxVQUFVO29CQUV0QixNQUFNUixNQUFNOzs7Ozs7O0lBRWhCO29CQVZhSyxhQUFzQkM7OztJQVVqQztBQUVLLElBQU1HO2VBQWtCLDRFQUFPTixJQUFZRyxVQUFrQztZQUUxRUksYUFFQ1Y7Ozs7Ozs7Ozs7b0JBRmE7O3dCQUFNSixtRUFBVUEsQ0FBQ08sSUFBSUc7OztvQkFBbkNJLGNBQWM7b0JBQ3BCOzt3QkFBT0E7OztvQkFDQVY7b0JBQ1BDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtvQkFDeEJDLFFBQVFPLEdBQUcsQ0FBQyxVQUFVO29CQUV0QixNQUFNUixNQUFNOzs7Ozs7O0lBRWhCO29CQVZhUyxnQkFBeUJOLElBQVlHOzs7SUFVaEQ7QUFFSyxJQUFNSztlQUFhLDRFQUFPUixJQUE4QjtZQUdwREg7Ozs7Ozs7Ozs7b0JBRFA7O3dCQUFNSCxtRUFBVUEsQ0FBQ007OztvQkFBakI7Ozs7OztvQkFDT0g7b0JBQ1BDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtvQkFDeEIsTUFBTUEsTUFBTTs7Ozs7OztJQUVoQjtvQkFQYVcsV0FBb0JSOzs7SUFPL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlcG9zaXRvcmllcy9IZXJvZXNSZXBvc2l0b3J5LnRzP2M1ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybywgSGVyb1JlcXVlc3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldEhlcm9lcywgZ2V0SGVyb0J5SWQsIGFkZEhlcm8sIHVwZGF0ZUhlcm8sIGRlbGV0ZUhlcm8gfSBmcm9tICcuLi9zZXJ2aWNlcy9IZXJvZXNTZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IGZldGNoSGVyb2VzID0gYXN5bmMgKCk6IFByb21pc2U8SGVyb1tdPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaGVyb2VzID0gYXdhaXQgZ2V0SGVyb2VzKCk7XG4gICAgcmV0dXJuIGhlcm9lcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEhlcm9CeUlkID0gYXN5bmMgKGlkOiBudW1iZXIpOiBQcm9taXNlPEhlcm8+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBoZXJvID0gYXdhaXQgZ2V0SGVyb0J5SWQoaWQpO1xuICAgIHJldHVybiBoZXJvO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQWRkSGVybyA9IGFzeW5jIChoZXJvRGF0YTogSGVyb1JlcXVlc3QpOiBQcm9taXNlPEhlcm8+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdIZXJvID0gYXdhaXQgYWRkSGVybyhoZXJvRGF0YSk7XG4gICAgcmV0dXJuIG5ld0hlcm87XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCAnTsOjbyDDqSBwb3Nzw612ZWwgY3JpYXIgbyBoZXJvaScpO1xuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVwZGF0ZUhlcm8gPSBhc3luYyAoaWQ6IG51bWJlciwgaGVyb0RhdGE6IEhlcm8pOiBQcm9taXNlPEhlcm8+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGVkSGVybyA9IGF3YWl0IHVwZGF0ZUhlcm8oaWQsIGhlcm9EYXRhKTtcbiAgICByZXR1cm4gdXBkYXRlZEhlcm87XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKCdFcnJvcjonLCAnTsOjbyDDqSBwb3Nzw612ZWwgYXR1YWxpemFyIG8gaGVyb2knKTtcblxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGVybyA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZGVsZXRlSGVybyhpZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImdldEhlcm9lcyIsImdldEhlcm9CeUlkIiwiYWRkSGVybyIsInVwZGF0ZUhlcm8iLCJkZWxldGVIZXJvIiwiZmV0Y2hIZXJvZXMiLCJoZXJvZXMiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaEhlcm9CeUlkIiwiaWQiLCJoZXJvIiwiZmV0Y2hBZGRIZXJvIiwiaGVyb0RhdGEiLCJuZXdIZXJvIiwibG9nIiwiZmV0Y2hVcGRhdGVIZXJvIiwidXBkYXRlZEhlcm8iLCJyZW1vdmVIZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/repositories/HeroesRepository.ts\n"));

/***/ })

});