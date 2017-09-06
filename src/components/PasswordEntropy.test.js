import { shallow } from 'enzyme'
import React from 'react'

import { PasswordEntropy } from './PasswordEntropy'

test('PasswordEntropy', () => {
  const setLength = jest.fn()
  const wrapper = shallow(<PasswordEntropy length={12} setLength={setLength} />)
  wrapper.find('TextField').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setLength).toHaveBeenCalled()
})
