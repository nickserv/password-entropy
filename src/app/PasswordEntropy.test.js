import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

test('capitalize', () => {
  expect(PasswordEntropy.capitalize('word')).toEqual('Word')
})

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy length={6} optionsKey="diceware" setLength={() => {}} setOptionsKey={() => {}}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 6, optionsKey: 'diceware' })
})
