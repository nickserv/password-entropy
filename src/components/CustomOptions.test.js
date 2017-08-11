import change from '../change'
import CustomOptions from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'

const wrapper = shallow(<CustomOptions onChange={() => {}}/>)
const instance = wrapper.instance()

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('sets state and provides possiblePasswords', () => {
  expect(wrapper.state('possibleItems')).toBe(1)
  expect(instance.possiblePasswords()).toBe(1)

  change(wrapper.find({ name: 'possibleItems' }), { value: 2 })
  expect(change(wrapper).state('possibleItems')).toBe(2)
  expect(instance.possiblePasswords()).toBe(2)
})
