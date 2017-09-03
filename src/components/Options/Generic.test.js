import { shallow } from 'enzyme'
import React from 'react'

import { Generic } from './Generic'
import { defaultToggles } from '../../reducers/generic'

test('Generic', () => {
  const toggleGeneric = jest.fn()
  const wrapper = shallow(<Generic toggleGeneric={toggleGeneric} {...defaultToggles} />)
  wrapper.find({ name: 'letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(toggleGeneric).toHaveBeenCalled()
})
