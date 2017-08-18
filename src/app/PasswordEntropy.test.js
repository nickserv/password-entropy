import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps, mapDispatchToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy length={6} onChange={() => {}} onSelect={() => {}} optionsIndex={0}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 6, optionsIndex: 0 })
})

test('mapDispatchToProps', () => {
  expect(mapDispatchToProps.onChange({ target: { value: '6' } })).toEqual({
    type: 'SET_LENGTH',
    payload: 6
  })

  expect(mapDispatchToProps.onSelect(0)).toEqual({
    type: 'SET_OPTIONS_INDEX',
    payload: 0
  })
})
