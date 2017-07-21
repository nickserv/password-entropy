import DicewareOptions from './DicewareOptions'
import { shallow } from 'enzyme'
import React from 'react'

const wrapper = shallow(<DicewareOptions onChange={() => {}}/>)
const instance = wrapper.instance()

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('provides possiblePasswords', () => {
  expect(instance.possiblePasswords()).toBe(7776)
})
