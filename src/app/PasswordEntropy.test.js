import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps, mapDispatchToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

test('capitalize', () => {
  expect(PasswordEntropy.capitalize('word')).toEqual('Word')
})

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy length={6} onChange={() => {}} onSelect={() => {}} optionsKey="diceware"/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 6, optionsKey: 'diceware' })
})

test('mapDispatchToProps', () => {
  expect(mapDispatchToProps.onChange({ target: { value: '6' } })).toEqual({
    type: 'SET_LENGTH',
    payload: 6
  })

  expect(mapDispatchToProps.onSelect(0)).toEqual({
    type: 'SET_OPTIONS_KEY',
    payload: 0
  })
})
