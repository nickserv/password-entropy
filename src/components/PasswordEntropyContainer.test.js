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
  expect(wrapper.state()).toMatchObject({ options: { custom: 1 } })
})

test('handleGeneric', () => {
  const wrapper = shallow(<PasswordEntropyContainer />)
  wrapper
    .find('PasswordEntropy')
    .simulate('generic', { target: { checked: false, name: 'letters' } })
  expect(wrapper.state()).toMatchObject({
    options: { generic: { letters: false } }
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
  wrapper.find('PasswordEntropy').simulate('optionsKey', null, 'diceware')
  expect(wrapper.state('optionsKey')).toBe('diceware')
})
