import { shallow } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'

import { defaultToggles, GenericOptions, mapStateToProps } from './GenericOptions'
import reducers from '../reducers'

test('GenericOptions', () => {
  const toggleGeneric = jest.fn()
  const wrapper = shallow(<GenericOptions toggleGeneric={toggleGeneric} {...defaultToggles} />)
  wrapper.find({ name: 'letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(toggleGeneric).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual(defaultToggles)
})
