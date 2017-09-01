import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

test('PasswordEntropy', () => {
  const setLength = jest.fn()
  const wrapper = shallow(<PasswordEntropy length={12} setLength={setLength}/>)
  wrapper.find('FormControl').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setLength).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 12 })
})
