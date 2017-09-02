import { shallow } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'

import { CustomOptions, mapStateToProps } from './CustomOptions'
import reducers from '../reducers'

test('CustomOptions', () => {
  const setCustom = jest.fn()
  const wrapper = shallow(<CustomOptions possibleItems={1} setCustom={setCustom} />)
  wrapper.find('FormControl').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setCustom).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ possibleItems: 0 })
})
