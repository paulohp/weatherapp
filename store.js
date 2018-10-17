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
  SWITCH_TEMP: 'SWITCH_TEMP'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FORECAST:
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
export const getForecast = (query) => dispatch => {
  return axios.get(`${API_URL}&q=${query}`)
    .then(({data}) => {
      return dispatch({
        type: actionTypes.GET_FORECAST,
        location: data.location,
        current: data.current,
        forecast: data.forecast
      })
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