webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
    case actionTypes.GET_FORECAST:
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
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
}

/***/ })

})
//# sourceMappingURL=index.js.ac7f4dc3919969b2f0ee.hot-update.js.map