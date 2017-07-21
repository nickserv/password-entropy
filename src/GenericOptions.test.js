import change from './change'
import { shallow } from 'enzyme'
import GenericOptions from './GenericOptions'
import React from 'react'

const wrapper = shallow(<GenericOptions onChange={() => {}}/>)

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('sets state and provides possiblePasswords', () => {
  expect(wrapper.state()).toEqual({
    "letters": true,
    "capitalLetters": true,
    "numbers": true,
    "symbols": true
  })
  expect(wrapper.instance().possiblePasswords()).toBe(70)

  change(wrapper.find({ name: 'letters' }), { checked: false })
  expect(wrapper.state()).toEqual({
    "letters": false,
    "capitalLetters": true,
    "numbers": true,
    "symbols": true
  })
  expect(wrapper.instance().possiblePasswords()).toBe(44)
})
