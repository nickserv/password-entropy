import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps, mapDispatchToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy length={6} onChange={() => {}}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length : 6 })
})

test('mapDispatchToProps', () => {
  expect(mapDispatchToProps.onChange('6')).toEqual({
    type: 'SET_LENGTH',
    payload: 6
  })
})
