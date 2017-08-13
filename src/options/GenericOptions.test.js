import { shallow } from 'enzyme'
import GenericOptions from './GenericOptions'
import React from 'react'
import { change } from '../util'

const wrapper = shallow(<GenericOptions onChange={() => {}}/>)
const instance = wrapper.instance()

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('sets state and provides possiblePasswords', () => {
  expect(wrapper).toHaveState('letters', true)
  expect(wrapper).toHaveState('capitalLetters', true)
  expect(wrapper).toHaveState('numbers', true)
  expect(wrapper).toHaveState('symbols', true)
  expect(instance.possiblePasswords()).toBe(70)

  change(wrapper.find({ name: 'letters' }), { checked: false })
  expect(wrapper).not.toHaveState('letters', true)
  expect(instance.possiblePasswords()).toBe(44)
})
