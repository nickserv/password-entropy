import { shallow } from 'enzyme'
import React from 'react'

import { Custom } from './Custom'

test('Custom', () => {
  const setCustom = jest.fn()
  const wrapper = shallow(<Custom possibleItems={1} setCustom={setCustom} />)
  wrapper.find('TextField').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setCustom).toHaveBeenCalled()
})
