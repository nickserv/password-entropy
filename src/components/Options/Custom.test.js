import { shallow } from 'enzyme'
import React from 'react'

import Custom from './Custom'

test('Custom', () => {
  const handleCustom = jest.fn()
  const wrapper = shallow(<Custom custom={1} onCustom={handleCustom} />)
  wrapper.find('TextField').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleCustom).toHaveBeenCalled()
})
