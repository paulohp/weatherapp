import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const API_URL = "https://api.apixu.com/v1/forecast.json?days=7&key=b2ad22b693a945919ab120150161310"

const initialState = {
  celciusChecked: true,
  location: {
    name: "",
    lat: 0,
    lon: 0,
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
}

export const actionTypes = {
  GET_FORECAST: 'GET_FORECAST',
  FETCH_FORECAST_SUCCESS: 'GET_FORECAST_SUCCESS',
  FETCH_FORECAST_REQUEST: 'FETCH_FORECAST_REQUEST',
  SWITCH_TEMP: 'SWITCH_TEMP',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        location: action.location,
        current: action.current,
        forecast: action.forecast
      })
    case actionTypes.SWITCH_TEMP:
      return Object.assign({}, state, {
        celciusChecked: action.celciusChecked
      })
    default: return state
  }
}

// ACTIONS
const fetchForecastRequest = () => {
  return {
    type: actionTypes.FETCH_FORECAST_REQUEST
  }
}

const fetchForecastSuccess = data => {
  return {
    type: actionTypes.FETCH_FORECAST_SUCCESS,
    location: data.location,
    current: data.current,
    forecast: data.forecast
  }
}
export const getForecast = (query) => dispatch => {
  dispatch(fetchForecastRequest())
  return axios.get(`${API_URL}&q=${query}`)
    .then(({data}) => {
      return dispatch(fetchForecastSuccess(data))
    })
}

export const switchTemp = (checked) => dispatch => {
  return dispatch({
    type: actionTypes.SWITCH_TEMP,
    celciusChecked: checked
  })
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}