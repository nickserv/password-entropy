import { shallow } from 'enzyme'
import { PasswordEntropy, mapStateToProps } from './PasswordEntropy'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

test('capitalize', () => {
  expect(PasswordEntropy.capitalize('word')).toEqual('Word')
})

it('renders', () => {
  const setLength = jest.fn()
  const setOptionsKey = jest.fn()
  const wrapper = shallow(
    <PasswordEntropy
      length={6}
      optionsKey="diceware"
      setLength={setLength}
      setOptionsKey={setOptionsKey}
    />
  )
  wrapper.find('FormControl').simulate('change')
  wrapper.find('Uncontrolled(Tabs)').simulate('select')

  expect(wrapper).toMatchSnapshot()
  expect(setLength).toHaveBeenCalled()
  expect(setOptionsKey).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ length: 6, optionsKey: 'diceware' })
})
