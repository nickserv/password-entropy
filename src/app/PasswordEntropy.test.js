import { shallow } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'

import { PasswordEntropy, mapStateToProps } from './PasswordEntropy'
import reducers from '../reducers'

test('PasswordEntropy', () => {
  const setLength = jest.fn()
  const wrapper = shallow(<PasswordEntropy length={12} setLength={setLength} />)
  wrapper.find('TextField').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setLength).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 12 })
})
