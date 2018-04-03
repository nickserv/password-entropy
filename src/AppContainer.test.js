import { shallow } from 'enzyme'
import React from 'react'

import AppContainer from './AppContainer'

test('AppContainer', () => {
  const wrapper = shallow(<AppContainer />)
  expect(wrapper).toMatchSnapshot()
})

test('handleCustom', () => {
  const wrapper = shallow(<AppContainer />)
  wrapper.find('App').simulate('custom', { target: { value: '1' } })
  expect(wrapper.state()).toMatchObject({ options: { Custom: 1 } })
})

test('handleGeneric', () => {
  const wrapper = shallow(<AppContainer />)
  wrapper.find('App').simulate('generic', {
    target: { checked: false, name: 'Lowercase Letters' }
  })
  expect(wrapper.state()).toMatchObject({
    options: { Generic: { 'Lowercase Letters': false } }
  })
})

test('handleLength', () => {
  const wrapper = shallow(<AppContainer />)
  wrapper.find('App').simulate('length', { target: { value: '13' } })
  expect(wrapper.state('length')).toBe(13)
})

test('handleOptionsKey', () => {
  const wrapper = shallow(<AppContainer />)
  wrapper.find('App').simulate('optionsKey', null, 'Diceware')
  expect(wrapper.state('optionsKey')).toBe('Diceware')
})
