import DicewareOptions from './DicewareOptions'
import { shallow } from 'enzyme'
import React from 'react'

const wrapper = shallow(<DicewareOptions onChange={() => {}}/>)

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('provides possiblePasswords', () => {
  expect(wrapper.instance().possiblePasswords()).toBe(7776)
})
