import { shallow } from 'enzyme'
import React from 'react'

import { Options } from '.'

test('Options', () => {
  const setOptionsKey = jest.fn()
  const wrapper = shallow(
    <Options optionsKey="generic" setOptionsKey={setOptionsKey} />
  )
  wrapper
    .find('NavLink')
    .first()
    .simulate('click')
  expect(wrapper).toMatchSnapshot()
  expect(setOptionsKey).toHaveBeenCalled()
})
