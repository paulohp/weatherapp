/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import { Index } from '../pages/index.js'

describe('With Enzyme', () => {
  it('Index shows "Current Location" button', () => {
    const app = shallow(<Index />)
    expect(app.find('p').text()).toEqual('or')
    expect(app.find('#locationButton').text()).toEqual('current position')
  })

  it('Index shows "City" input', () => {
    const app = shallow(<Index />)

    expect(app.find('#cityInput').name()).toEqual('CityInput')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})