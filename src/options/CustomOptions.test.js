import { CustomOptions, mapStateToProps } from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const wrapper = shallow(<CustomOptions possibleItems={1} setCustom={() => {}}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ possibleItems: 1 })
})
