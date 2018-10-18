/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Weather from '../pages/weather'

const initialState = {
  celciusChecked: true,
  location: {
    name: "Tallinn",
    lat: 0,
    lon: 0,
    localtime: "2018-10-18 19:49"
  },
  current: {
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "Clear",
      code: 0
    }
  },
  forecast: {
    forecastday: []
  }
}
const mockStore = configureStore()
let store

describe('With Enzyme', () => {
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('Weather shows Tallinn as City title', () => {
    const app = shallow(<Weather store={store} />).dive()

    expect(app.find('#cityTitle').first().text()).toEqual('Tallinn')
  })

  it('Weather shows "Thursday, October 18th 2018" as date', () => {
    const app = shallow(<Weather store={store} />).dive()
    expect(app.find('#weatherTitle').first().text()).toEqual('Thursday, October 18th 2018')
  })

  it('Weather shows Clear as condition text', () => {
    const app = shallow(<Weather store={store} />).dive()
    expect(app.find('#conditionTitle').first().text()).toEqual('Clear')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<Weather store={store} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})