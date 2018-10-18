import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios);

import { getForecast, switchTemp, actionTypes } from '../store'

describe('actions', () => {
  it('should create an action to switch temp', () => {
    const celciusChecked = true
    const expectedAction = {
      type: actionTypes.SWITCH_TEMP,
      celciusChecked
    }
    const store = mockStore({ celciusChecked: true })
    expect(store.dispatch(switchTemp(celciusChecked))).toEqual(expectedAction)
  })

  it('should create an action to get forecast', () => {
    mock.onGet('https://api.apixu.com/v1/forecast.json?days=7&key=b2ad22b693a945919ab120150161310&q=Tallinn').reply(200, {
      location: {
        name: "Tallinn",
      },
      current: {
        temp_c: 16,
        temp_f: 60.8,
        condition: {
          text: "Clear",
          code: 1000
        }
      },
      forecast: {
        forecastday: []
      }
    })
    const expectedActions = [{ type: actionTypes.FETCH_FORECAST_REQUEST }, {
      type: actionTypes.FETCH_FORECAST_SUCCESS,
      location: {
        name: "Tallinn",
      },
      current: {
        temp_c: 16,
        temp_f: 60.8,
        condition: {
          text: "Clear",
          code: 1000
        },
      },
      forecast: {
        forecastday: []
      }
    }]
    const store = mockStore({
      location: {
        name: "",
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
    })
    return store.dispatch(getForecast('Tallinn')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})