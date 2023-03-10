"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/GlobalContext.tsx":
/*!***********************************!*\
  !*** ./context/GlobalContext.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; },\n/* harmony export */   \"GlobalProvider\": function() { return /* binding */ GlobalProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_Dee_Desktop_IntentHQ_NextJs_Apollo_UserDetails_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _AppData_GraphQL_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppData/GraphQL/constant */ \"./AppData/GraphQL/constant.ts\");\n/* harmony import */ var _graphql_queries_getUserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/getUserDetails */ \"./graphql/queries/getUserDetails.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/Dee/Desktop/IntentHQ/NextJs-Apollo-UserDetails/client/context/GlobalContext.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar initialState = {\n  userList: [],\n  loading: false,\n  error: '',\n  hasNextPage: true,\n  handleLoadMore: function handleLoadMore() {},\n  setLoading: function setLoading() {}\n};\n// setting up global context for user details API response\nvar GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nvar GlobalProvider = function GlobalProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      userList = _useState[0],\n      setUserList = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      hasNextPage = _useState5[0],\n      setHasNext = _useState5[1]; // to fetch additional user on load more button click\n\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_graphql_queries_getUserDetails__WEBPACK_IMPORTED_MODULE_3__.getUserDetails, {\n    variables: {\n      count: 0,\n      page: 1\n    },\n    fetchPolicy: 'cache-and-network',\n    skip: true\n  }),\n      fetchMore = _useQuery.fetchMore; // eslint-disable-next-line react-hooks/exhaustive-deps\n\n\n  var handleLoadMore = function handleLoadMore() {\n    fetchMore({\n      variables: {\n        count: _AppData_GraphQL_constant__WEBPACK_IMPORTED_MODULE_2__.loadDataCount,\n        page: page\n      }\n    }).then(function (res) {\n      var _res$data, _res$data$UsersList, _res$data2, _res$data$UsersList2;\n\n      var users = res.data && ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.UsersList) && ((_res$data$UsersList = res.data.UsersList) === null || _res$data$UsersList === void 0 ? void 0 : _res$data$UsersList.users) || [];\n      setUserList(function (list) {\n        return [].concat((0,_Users_Dee_Desktop_IntentHQ_NextJs_Apollo_UserDetails_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list), (0,_Users_Dee_Desktop_IntentHQ_NextJs_Apollo_UserDetails_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(users));\n      });\n      var isNextpage = res.data && ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.UsersList) && ((_res$data$UsersList2 = res.data.UsersList) === null || _res$data$UsersList2 === void 0 ? void 0 : _res$data$UsersList2.hasNextPage);\n      isNextpage && setPage(function (index) {\n        return index + 1;\n      });\n      setHasNext(isNextpage);\n      setLoading(false);\n    })[\"catch\"](function (e) {\n      setError(e);\n      setLoading(false);\n    });\n  };\n\n  var providerValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return {\n      userList: userList,\n      loading: loading,\n      setLoading: setLoading,\n      error: error,\n      hasNextPage: hasNextPage,\n      handleLoadMore: handleLoadMore\n    };\n  }, [userList, loading, setLoading, error, hasNextPage, handleLoadMore]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GlobalContext.Provider, {\n    value: providerValue,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(GlobalProvider, \"mMjLANjK2rjOuavg5zvo6RCjR1o=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = GlobalProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GlobalProvider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FDekM7SUFBQSxPQUFPO01BQ0hNLFFBQVEsRUFBUkEsUUFERztNQUVIQyxPQUFPLEVBQVBBLE9BRkc7TUFHSEksVUFBVSxFQUFWQSxVQUhHO01BSUhILEtBQUssRUFBTEEsS0FKRztNQUtIQyxXQUFXLEVBQVhBLFdBTEc7TUFNSEMsY0FBYyxFQUFkQTtJQU5HLENBQVA7RUFBQSxDQUR5QyxFQVN6QyxDQUFDSixRQUFELEVBQVdDLE9BQVgsRUFBb0JJLFVBQXBCLEVBQWdDSCxLQUFoQyxFQUF1Q0MsV0FBdkMsRUFBb0RDLGNBQXBELENBVHlDLENBQTdDO0VBWUEsb0JBQ0ksOERBQUMsYUFBRCxDQUFlLFFBQWY7SUFBd0IsS0FBSyxFQUFFd0IsYUFBL0I7SUFBQSxVQUNLcEI7RUFETDtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFLSCxDQTdETTs7R0FBTUQ7VUFRYVg7OztLQVJiVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0dsb2JhbENvbnRleHQudHN4P2VkNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBsb2FkRGF0YUNvdW50IH0gZnJvbSAnLi4vQXBwRGF0YS9HcmFwaFFML2NvbnN0YW50JztcbmltcG9ydCB7IGdldFVzZXJEZXRhaWxzIH0gZnJvbSAnLi4vZ3JhcGhxbC9xdWVyaWVzL2dldFVzZXJEZXRhaWxzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc3JjL3NjaGVtYS90eXBlcy90eXBlcydcblxuaW50ZXJmYWNlIElHbG9iYWxDb250ZXh0IHtcbiAgICB1c2VyTGlzdDogVXNlcltdO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBoYXNOZXh0UGFnZTogYm9vbGVhbjtcbiAgICBoYW5kbGVMb2FkTW9yZTogKCkgPT4gdm9pZDtcbiAgICBzZXRMb2FkaW5nOiAobG9hZGluZzogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJR2xvYmFsQ29udGV4dCA9IHtcbiAgICB1c2VyTGlzdDogW10sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6ICcnLFxuICAgIGhhc05leHRQYWdlOiB0cnVlLFxuICAgIGhhbmRsZUxvYWRNb3JlOiAoKSA9PiB7IH0sXG4gICAgc2V0TG9hZGluZzogKCkgPT4geyB9LFxufTtcblxuaW50ZXJmYWNlIElHbG9iYWxQcm92aWRlciB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cbi8vIHNldHRpbmcgdXAgZ2xvYmFsIGNvbnRleHQgZm9yIHVzZXIgZGV0YWlscyBBUEkgcmVzcG9uc2VcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID1cbiAgICBjcmVhdGVDb250ZXh0PElHbG9iYWxDb250ZXh0Pihpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXI6IEZDPElHbG9iYWxQcm92aWRlcj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3VzZXJMaXN0LCBzZXRVc2VyTGlzdF0gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICAgIGNvbnN0IFtoYXNOZXh0UGFnZSwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICAvLyB0byBmZXRjaCBhZGRpdGlvbmFsIHVzZXIgb24gbG9hZCBtb3JlIGJ1dHRvbiBjbGlja1xuICAgIGNvbnN0IHsgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShnZXRVc2VyRGV0YWlscywge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICdjYWNoZS1hbmQtbmV0d29yaycsXG4gICAgICAgIHNraXA6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoTW9yZSh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBjb3VudDogbG9hZERhdGFDb3VudCxcbiAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9XG4gICAgICAgICAgICAgICAgICAgIChyZXMuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGE/LlVzZXJzTGlzdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuVXNlcnNMaXN0Py51c2VycykgfHxcbiAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgc2V0VXNlckxpc3QoKGxpc3QpID0+IFsuLi5saXN0LCAuLi51c2Vyc10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTmV4dHBhZ2UgPVxuICAgICAgICAgICAgICAgICAgICByZXMuZGF0YSAmJiByZXMuZGF0YT8uVXNlcnNMaXN0ICYmIHJlcy5kYXRhLlVzZXJzTGlzdD8uaGFzTmV4dFBhZ2U7XG4gICAgICAgICAgICAgICAgaXNOZXh0cGFnZSAmJiBzZXRQYWdlKChpbmRleCkgPT4gaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBzZXRIYXNOZXh0KGlzTmV4dHBhZ2UpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb3ZpZGVyVmFsdWU6IElHbG9iYWxDb250ZXh0ID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgIHVzZXJMaXN0LFxuICAgICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICAgIHNldExvYWRpbmcsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIGhhc05leHRQYWdlLFxuICAgICAgICAgICAgaGFuZGxlTG9hZE1vcmUsXG4gICAgICAgIH0pLFxuICAgICAgICBbdXNlckxpc3QsIGxvYWRpbmcsIHNldExvYWRpbmcsIGVycm9yLCBoYXNOZXh0UGFnZSwgaGFuZGxlTG9hZE1vcmVdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlclZhbHVlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VRdWVyeSIsImxvYWREYXRhQ291bnQiLCJnZXRVc2VyRGV0YWlscyIsImluaXRpYWxTdGF0ZSIsInVzZXJMaXN0IiwibG9hZGluZyIsImVycm9yIiwiaGFzTmV4dFBhZ2UiLCJoYW5kbGVMb2FkTW9yZSIsInNldExvYWRpbmciLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXJMaXN0Iiwic2V0RXJyb3IiLCJwYWdlIiwic2V0UGFnZSIsInNldEhhc05leHQiLCJ2YXJpYWJsZXMiLCJjb3VudCIsImZldGNoUG9saWN5Iiwic2tpcCIsImZldGNoTW9yZSIsInRoZW4iLCJyZXMiLCJ1c2VycyIsImRhdGEiLCJVc2Vyc0xpc3QiLCJsaXN0IiwiaXNOZXh0cGFnZSIsImluZGV4IiwiZSIsInByb3ZpZGVyVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/GlobalContext.tsx\n"));

/***/ }),

/***/ "./graphql/apollo-client.tsx":
/*!***********************************!*\
  !*** ./graphql/apollo-client.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ \"./node_modules/@apollo/client/link/error/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AppData_GraphQL_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppData/GraphQL/constant */ \"./AppData/GraphQL/constant.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/Dee/Desktop/IntentHQ/NextJs-Apollo-UserDetails/client/graphql/apollo-client.tsx\",\n    _this = undefined;\n\n\n\n\n // error handling : API\n\n\nvar errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__.onError)(function (_ref) {\n  var graphQLErrors = _ref.graphQLErrors,\n      networkError = _ref.networkError;\n\n  if (graphQLErrors) {\n    graphQLErrors.map(function (_ref2) {\n      var message = _ref2.message,\n          locations = _ref2.locations,\n          path = _ref2.path;\n      alert(\"GraphQL error message \".concat(message));\n    });\n  }\n});\nvar link = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.from)([errorLink, new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.HttpLink({\n  uri: _AppData_GraphQL_constant__WEBPACK_IMPORTED_MODULE_1__.uri\n})]); // Creating Apollo Provider Component\n\nvar ApolloProviderComponent = function ApolloProviderComponent(_ref3) {\n  var children = _ref3.children;\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({\n    link: link,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache()\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n    client: client,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 13\n  }, _this);\n};\n\n_c = ApolloProviderComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApolloProviderComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ApolloProviderComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Fwb2xsby1jbGllbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7OztBQUNBLElBQU1RLFNBQVMsR0FBR0gsa0VBQU8sQ0FBQyxnQkFBcUM7RUFBQSxJQUFsQ0ksYUFBa0MsUUFBbENBLGFBQWtDO0VBQUEsSUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7RUFDM0QsSUFBSUQsYUFBSixFQUFtQjtJQUNmQSxhQUFhLENBQUNFLEdBQWQsQ0FBa0IsaUJBQWtDO01BQUEsSUFBL0JDLE9BQStCLFNBQS9CQSxPQUErQjtNQUFBLElBQXRCQyxTQUFzQixTQUF0QkEsU0FBc0I7TUFBQSxJQUFYQyxJQUFXLFNBQVhBLElBQVc7TUFDaERDLEtBQUssaUNBQTBCSCxPQUExQixFQUFMO0lBQ0gsQ0FGRDtFQUdIO0FBQ0osQ0FOd0IsQ0FBekI7QUFRQSxJQUFNSSxJQUFJLEdBQUdkLG9EQUFJLENBQUMsQ0FDZE0sU0FEYyxFQUVkLElBQUlMLG9EQUFKLENBQWE7RUFBRUksR0FBRyxFQUFFQSwwREFBR0E7QUFBVixDQUFiLENBRmMsQ0FBRCxDQUFqQixFQUtBOztBQUNBLElBQU1VLHVCQUF3RCxHQUFHLFNBQTNEQSx1QkFBMkQsUUFBa0I7RUFBQSxJQUFmQyxRQUFlLFNBQWZBLFFBQWU7RUFDL0UsSUFBTUMsTUFBTSxHQUFHLElBQUluQix3REFBSixDQUFpQjtJQUM1QmdCLElBQUksRUFBSkEsSUFENEI7SUFFNUJJLEtBQUssRUFBRSxJQUFJaEIseURBQUo7RUFGcUIsQ0FBakIsQ0FBZjtFQUlBLG9CQUFRLDhEQUFDLDBEQUFEO0lBQWdCLE1BQU0sRUFBRWUsTUFBeEI7SUFBQSxVQUFpQ0Q7RUFBakM7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFSO0FBQ0gsQ0FORDs7S0FBTUQ7QUFRTiwrREFBZUEsdUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzeD85ZTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvUHJvdmlkZXIsIGZyb20sIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3InO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXJpIH0gZnJvbSAnLi4vQXBwRGF0YS9HcmFwaFFML2NvbnN0YW50JztcblxuLy8gZXJyb3IgaGFuZGxpbmcgOiBBUElcbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgICAgICBncmFwaFFMRXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYEdyYXBoUUwgZXJyb3IgbWVzc2FnZSAke21lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pXG5cbmNvbnN0IGxpbmsgPSBmcm9tKFtcbiAgICBlcnJvckxpbmssXG4gICAgbmV3IEh0dHBMaW5rKHsgdXJpOiB1cmkgfSlcbl0pXG5cbi8vIENyZWF0aW5nIEFwb2xsbyBQcm92aWRlciBDb21wb25lbnRcbmNvbnN0IEFwb2xsb1Byb3ZpZGVyQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbjx7fT4+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICBsaW5rLFxuICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxuICAgIH0pO1xuICAgIHJldHVybiAoPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT57Y2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcG9sbG9Qcm92aWRlckNvbXBvbmVudDtcblxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiZnJvbSIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsIm9uRXJyb3IiLCJSZWFjdCIsInVyaSIsImVycm9yTGluayIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJtYXAiLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImFsZXJ0IiwibGluayIsIkFwb2xsb1Byb3ZpZGVyQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJjbGllbnQiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/apollo-client.tsx\n"));

/***/ })

});