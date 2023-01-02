import { shallow } from 'enzyme'
import React from 'react'

import PasswordEntropyContainer from './PasswordEntropyContainer'

test('PasswordEntropyContainer', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  expect(wrapper).toMatchSnapshot()
})

test('handleCustom', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  wrapper.find('PasswordEntropy').simulate('custom', { target: { value: '1' } })
  expect(wrapper.state()).toMatchObject({ options: { Custom: 1 } })
})

test('handleGeneric', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  wrapper
    .find('PasswordEntropy')
    .simulate('generic', { target: { checked: false, name: 'Letters' } })
  expect(wrapper.state()).toMatchObject({
    options: { Generic: { Letters: false } },
  })
})

test('handleLength', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  wrapper
    .find('PasswordEntropy')
    .simulate('length', { target: { value: '13' } })
  expect(wrapper.state('length')).toBe(13)
})

test('handleOptionsKey', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  wrapper.find('PasswordEntropy').simulate('optionsKey', 'Diceware')
  expect(wrapper.state('optionsKey')).toBe('Diceware')
})
