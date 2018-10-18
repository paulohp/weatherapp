module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SwitchTemp.js":
/*!**********************************!*\
  !*** ./components/SwitchTemp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paulopires/Code/paulohp/tests/weatherapp/components/SwitchTemp.js";



var SwitchTemp = function SwitchTemp(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    checked: props.celciusChecked,
    offColor: "#E1E1E1",
    onColor: "#E1E1E1",
    offHandleColor: "#FDFDFD",
    onHandleColor: "#FDFDFD",
    height: 30,
    width: 80,
    onChange: props.handleTempChoice,
    checkedIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "black",
        paddingRight: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "\xB0C"),
    uncheckedIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "black",
        paddingRight: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\xB0F"),
    className: "react-switch",
    id: "icon-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SwitchTemp);

/***/ }),

/***/ "./components/styles/BackButton.js":
/*!*****************************************!*\
  !*** ./components/styles/BackButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BackButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "BackButton",
  componentId: "ubqbho-0"
})(["display:inline-block;border:none;outline:none;padding:0;background-image:url('../static/back.svg');width:24px;height:24px;margin-right:2rem;cursor:pointer;"]);
/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./components/styles/BodyWrapper.js":
/*!******************************************!*\
  !*** ./components/styles/BodyWrapper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BodyWrapper",
  componentId: "sc-119ngh9-0"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (BodyWrapper);

/***/ }),

/***/ "./components/styles/CityTitle.js":
/*!****************************************!*\
  !*** ./components/styles/CityTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CityTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "CityTitle",
  componentId: "d450c9-0"
})(["display:inline-block;margin:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CityTitle);

/***/ }),

/***/ "./components/styles/ConditionTitle.js":
/*!*********************************************!*\
  !*** ./components/styles/ConditionTitle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ConditionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "ConditionTitle",
  componentId: "du3h3q-0"
})(["color:", ";margin-top:0;font-weight:100;"], function (props) {
  return props.theme.grey;
});
/* harmony default export */ __webpack_exports__["default"] = (ConditionTitle);

/***/ }),

/***/ "./components/styles/DailyBody.js":
/*!****************************************!*\
  !*** ./components/styles/DailyBody.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DailyBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DailyBody",
  componentId: "aklxv8-0"
})(["display:inline-block;@media (max-width:600px){font-size:1.25rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (DailyBody);

/***/ }),

/***/ "./components/styles/DailyCondition.js":
/*!*********************************************!*\
  !*** ./components/styles/DailyCondition.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DailyCondition = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DailyCondition",
  componentId: "sc-1rqbpx9-0"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (DailyCondition);

/***/ }),

/***/ "./components/styles/HeaderWrapper.js":
/*!********************************************!*\
  !*** ./components/styles/HeaderWrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HeaderWrapper",
  componentId: "sc-12xqpd6-0"
})([".react-switch{float:right;}"]);
/* harmony default export */ __webpack_exports__["default"] = (HeaderWrapper);

/***/ }),

/***/ "./components/styles/TemperatureBody.js":
/*!**********************************************!*\
  !*** ./components/styles/TemperatureBody.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TemperatureBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TemperatureBody",
  componentId: "sc-1bf7n53-0"
})(["color:", ";display:flex;justify-content:flex-start;"], function (props) {
  return props.theme.orange;
});
/* harmony default export */ __webpack_exports__["default"] = (TemperatureBody);

/***/ }),

/***/ "./components/styles/TemperatureIcon.js":
/*!**********************************************!*\
  !*** ./components/styles/TemperatureIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TemperatureIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i.withConfig({
  displayName: "TemperatureIcon",
  componentId: "sc-12g1jlh-0"
})(["font-size:12rem;margin-right:5rem;@media (max-width:600px){font-size:5rem;margin-right:3rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (TemperatureIcon);

/***/ }),

/***/ "./components/styles/TemperatureTitle.js":
/*!***********************************************!*\
  !*** ./components/styles/TemperatureTitle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TemperatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "TemperatureTitle",
  componentId: "sc-5mnbsq-0"
})(["display:inline-block;font-size:12rem;margin:0;line-height:1;font-weight:300;margin-right:5rem;@media (max-width:600px){font-size:5rem;margin-right:3rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (TemperatureTitle);

/***/ }),

/***/ "./components/styles/WeatherTitle.js":
/*!*******************************************!*\
  !*** ./components/styles/WeatherTitle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WeatherTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WeatherTitle",
  componentId: "rvyp26-0"
})(["margin-bottom:0;line-height:1.2;font-weight:300;color:", ";@media (max-width:600px){font-size:1.8rem;}"], function (props) {
  return props.theme.grey;
});
/* harmony default export */ __webpack_exports__["default"] = (WeatherTitle);

/***/ }),

/***/ "./components/styles/WeatherWrapper.js":
/*!*********************************************!*\
  !*** ./components/styles/WeatherWrapper.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WeatherWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WeatherWrapper",
  componentId: "sc-1h3fegy-0"
})(["padding:2rem 4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (WeatherWrapper);

/***/ }),

/***/ "./components/styles/WeeklyBody.js":
/*!*****************************************!*\
  !*** ./components/styles/WeeklyBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WeeklyBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "WeeklyBody",
  componentId: "sc-3q6y77-0"
})(["padding:0;margin:0 auto;display:flex;justify-content:space-between;"]);
/* harmony default export */ __webpack_exports__["default"] = (WeeklyBody);

/***/ }),

/***/ "./components/styles/WeeklyCondition.js":
/*!**********************************************!*\
  !*** ./components/styles/WeeklyCondition.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WeeklyCondition = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "WeeklyCondition",
  componentId: "sc-137vmhc-0"
})(["display:inline-block;text-align:center;i{font-size:5rem;color:", ";@media (max-width:600px){font-size:3rem;}}@media (max-width:600px){font-size:1.25rem;}"], function (props) {
  return props.theme.grey;
});
/* harmony default export */ __webpack_exports__["default"] = (WeeklyCondition);

/***/ }),

/***/ "./lib/utils/map-code-to-class.js":
/*!****************************************!*\
  !*** ./lib/utils/map-code-to-class.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var codesAndClasses = [{
  code: 1000,
  classNeutral: "wi-day-sunny",
  classSun: "wi-day-sunny",
  classNight: "wi-night-clear"
}, {
  code: 1003,
  classNeutral: "wi-cloudy",
  classSun: "wi-day-cloudy",
  classNight: "wi-night-partly-cloudy"
}, {
  code: 1006,
  classNeutral: "wi-cloudy",
  classSun: "wi-day-cloudy",
  classNight: "wi-night-alt-cloudy"
}, {
  code: 1009,
  classNeutral: "wi-cloudy",
  classSun: "wi-day-sunny-overcast",
  classNight: "wi-night-partly-cloudy"
}, {
  code: 1030,
  classNeutral: "wi-fog",
  classSun: "wi-day-fog",
  classNight: "wi-night-fog"
}, {
  code: 1063,
  classNeutral: "wi-rain-mix",
  classSun: "wi-day-rain-mix",
  classNight: "wi-night-alt-rain-mix"
}, {
  code: 1066,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1069,
  classNeutral: "wi-sleet",
  classSun: "wi-day-sleet",
  classNight: "wi-night-alt-sleet"
}, {
  code: 1072,
  classNeutral: "wi-snow-wind",
  classSun: "wi-day-snow-wind",
  classNight: "wi-night-snow-wind"
}, {
  code: 1087,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-snow-thunderstorm",
  classNight: "wi-night-storm-showers"
}, {
  code: 1114,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-snow-thunderstorm",
  classNight: "wi-night-storm-showers"
}, {
  code: 1117,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1135,
  classNeutral: "wi-day-snow-wind",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow-wind"
}, {
  code: 1147,
  classNeutral: "wi-fog",
  classSun: "wi-day-fog",
  classNight: "wi-night-fog"
}, {
  code: 1150,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1153,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1168,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1171,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1180,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1183,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1186,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1189,
  classNeutral: "wi-sprinkle",
  classSun: "wi-day-hail",
  classNight: "wi-night-hail"
}, {
  code: 1192,
  classNeutral: "wi-rain",
  classSun: "wi-day-rain",
  classNight: "wi-night-rain"
}, {
  code: 1195,
  classNeutral: "wi-rain",
  classSun: "wi-day-rain",
  classNight: "wi-night-rain"
}, {
  code: 1198,
  classNeutral: "wi-rain-mix",
  classSun: "wi-day-rain-mix",
  classNight: "wi-night-alt-rain-mix"
}, {
  code: 1201,
  classNeutral: "wi-rain-mix",
  classSun: "wi-day-rain-mix",
  classNight: "wi-night-alt-rain-mix"
}, {
  code: 1204,
  classNeutral: "wi-sleet",
  classSun: "wi-day-sleet",
  classNight: "wi-night-sleet"
}, {
  code: 1207,
  classNeutral: "wi-sleet",
  classSun: "wi-day-sleet",
  classNight: "wi-night-sleet"
}, {
  code: 1210,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1213,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1216,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1219,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1222,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1225,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1237,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1240,
  classNeutral: "wi-rain",
  classSun: "wi-day-rain",
  classNight: "wi-night-rain"
}, {
  code: 1243,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-storm-showers",
  classNight: "wi-night-storm-showers"
}, {
  code: 1246,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-storm-showers",
  classNight: "wi-night-storm-showers"
}, {
  code: 1249,
  classNeutral: "wi-sleet",
  classSun: "wi-day-sleet",
  classNight: "wi-night-alt-sleet"
}, {
  code: 1252,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1255,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1258,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1258,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1264,
  classNeutral: "wi-snow",
  classSun: "wi-day-snow",
  classNight: "wi-night-alt-snow"
}, {
  code: 1273,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-thunderstorm",
  classNight: "wi-thunderstorm"
}, {
  code: 1276,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-thunderstorm",
  classNight: "wi-thunderstorm"
}, {
  code: 1279,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-thunderstorm",
  classNight: "wi-thunderstorm"
}, {
  code: 1282,
  classNeutral: "wi-thunderstorm",
  classSun: "wi-day-thunderstorm",
  classNight: "wi-thunderstorm"
}];
/* harmony default export */ __webpack_exports__["default"] = (function (code, isDay, neutral) {
  if (!code) {
    return;
  }

  var cl = codesAndClasses.find(function (cl) {
    return cl.code === code;
  });

  if (neutral) {
    return cl.classNeutral;
  }

  if (isDay) {
    return cl.classSun;
  }

  return cl.classNight;
});

/***/ }),

/***/ "./pages/weather.js":
/*!**************************!*\
  !*** ./pages/weather.js ***!
  \**************************/
/*! exports provided: Weather, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _lib_utils_map_code_to_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils/map-code-to-class */ "./lib/utils/map-code-to-class.js");
/* harmony import */ var _components_SwitchTemp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SwitchTemp */ "./components/SwitchTemp.js");
/* harmony import */ var _components_styles_WeatherWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/WeatherWrapper */ "./components/styles/WeatherWrapper.js");
/* harmony import */ var _components_styles_HeaderWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/HeaderWrapper */ "./components/styles/HeaderWrapper.js");
/* harmony import */ var _components_styles_BodyWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/styles/BodyWrapper */ "./components/styles/BodyWrapper.js");
/* harmony import */ var _components_styles_BackButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/styles/BackButton */ "./components/styles/BackButton.js");
/* harmony import */ var _components_styles_CityTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/styles/CityTitle */ "./components/styles/CityTitle.js");
/* harmony import */ var _components_styles_WeatherTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/styles/WeatherTitle */ "./components/styles/WeatherTitle.js");
/* harmony import */ var _components_styles_ConditionTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/styles/ConditionTitle */ "./components/styles/ConditionTitle.js");
/* harmony import */ var _components_styles_TemperatureBody__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/styles/TemperatureBody */ "./components/styles/TemperatureBody.js");
/* harmony import */ var _components_styles_TemperatureTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/styles/TemperatureTitle */ "./components/styles/TemperatureTitle.js");
/* harmony import */ var _components_styles_TemperatureIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/styles/TemperatureIcon */ "./components/styles/TemperatureIcon.js");
/* harmony import */ var _components_styles_DailyBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/styles/DailyBody */ "./components/styles/DailyBody.js");
/* harmony import */ var _components_styles_DailyCondition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/styles/DailyCondition */ "./components/styles/DailyCondition.js");
/* harmony import */ var _components_styles_WeeklyBody__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/styles/WeeklyBody */ "./components/styles/WeeklyBody.js");
/* harmony import */ var _components_styles_WeeklyCondition__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/styles/WeeklyCondition */ "./components/styles/WeeklyCondition.js");

var _jsxFileName = "/Users/paulopires/Code/paulohp/tests/weatherapp/pages/weather.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var Weather =
/*#__PURE__*/
function (_Component) {
  _inherits(Weather, _Component);

  function Weather() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Weather);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Weather)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTempChoice", function (checked) {
      var switchTemp = _this.props.switchTemp;
      switchTemp(checked);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBack", function () {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, location, query, getForecast;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, location = _this$props.state.location, query = _this$props.query, getForecast = _this$props.getForecast;

              if (!(location.name === "")) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return getForecast(query.city);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(Weather, [{
    key: "render",
    value: function render() {
      var state = this.props.state;
      var location = state.location,
          current = state.current,
          forecast = state.forecast;

      var _forecast$forecastday = _toArray(forecast.forecastday),
          _ = _forecast$forecastday[0],
          forecastDays = _forecast$forecastday.slice(1);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_WeatherWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_HeaderWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_BackButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.handleBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_CityTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "cityTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, location.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SwitchTemp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        celciusChecked: state.celciusChecked,
        handleTempChoice: this.handleTempChoice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_BodyWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_WeatherTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "weatherTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(location.localtime, 'dddd, MMMM Do YYYY')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_ConditionTitle__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "conditionTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, current.condition.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_TemperatureBody__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_TemperatureTitle__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, state.celciusChecked ? "".concat(current.temp_c, "\xB0C") : "".concat(current.temp_f, "\xB0F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_TemperatureIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "wi ".concat(Object(_lib_utils_map_code_to_class__WEBPACK_IMPORTED_MODULE_7__["default"])(current.condition.code, current.is_day, false)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_DailyBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_DailyCondition__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Wind "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, current.wind_kph, "km/h")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_DailyCondition__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Humidity"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, current.humidity, "%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_DailyCondition__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Feels Like"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, state.celciusChecked ? "".concat(current.feelslike_c, "\xB0C") : "".concat(current.feelslike_f, "\xB0F"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_WeeklyBody__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, forecastDays.map(function (forecast, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_WeeklyCondition__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(forecast.date, 'dddd')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "wi ".concat(Object(_lib_utils_map_code_to_class__WEBPACK_IMPORTED_MODULE_7__["default"])(current.condition.code, false, true)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, state.celciusChecked ? "".concat(forecast.day.maxtemp_c, "\xB0C") : "".concat(forecast.day.maxtemp_f, "\xB0F")));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var query = _ref2.query;
      return {
        query: query
      };
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    switchTemp: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_6__["switchTemp"], dispatch),
    getForecast: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_6__["getForecast"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Weather));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, getForecast, switchTemp, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForecast", function() { return getForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTemp", function() { return switchTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var API_URL = "https://api.apixu.com/v1/forecast.json?days=7&key=b2ad22b693a945919ab120150161310";
var initialState = {
  celciusChecked: true,
  location: {
    name: "",
    lat: 0,
    lon: 0
  },
  current: {
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "",
      code: 0
    }
  },
  forecast: {
    forecastday: []
  }
};
var actionTypes = {
  GET_FORECAST: 'GET_FORECAST',
  FETCH_FORECAST_SUCCESS: 'GET_FORECAST_SUCCESS',
  FETCH_FORECAST_REQUEST: 'FETCH_FORECAST_REQUEST',
  SWITCH_TEMP: 'SWITCH_TEMP' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.FETCH_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        location: action.location,
        current: action.current,
        forecast: action.forecast
      });

    case actionTypes.SWITCH_TEMP:
      return Object.assign({}, state, {
        celciusChecked: action.celciusChecked
      });

    default:
      return state;
  }
}; // ACTIONS

var fetchForecastRequest = function fetchForecastRequest() {
  return {
    type: actionTypes.FETCH_FORECAST_REQUEST
  };
};

var fetchForecastSuccess = function fetchForecastSuccess(data) {
  return {
    type: actionTypes.FETCH_FORECAST_SUCCESS,
    location: data.location,
    current: data.current,
    forecast: data.forecast
  };
};

var getForecast = function getForecast(query) {
  return function (dispatch) {
    dispatch(fetchForecastRequest());
    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(API_URL, "&q=").concat(query)).then(function (_ref) {
      var data = _ref.data;
      return dispatch(fetchForecastSuccess(data));
    });
  };
};
var switchTemp = function switchTemp(checked) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SWITCH_TEMP,
      celciusChecked: checked
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/weather.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/weather.js */"./pages/weather.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=weather.js.map