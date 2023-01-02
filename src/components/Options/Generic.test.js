import { shallow } from 'enzyme'
import React from 'react'

import Generic from './Generic'

test('Generic', () => {
  const handleGeneric = jest.fn()
  const wrapper = shallow(
    <Generic
      onGeneric={handleGeneric}
      toggles={{
        'Capital Letters': true,
        Letters: true,
        Numbers: true,
        Symbols: true,
      }}
    />
  )
  wrapper.find({ name: 'Letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleGeneric).toHaveBeenCalled()
})
