import { shallow } from 'enzyme'
import React from 'react'

import Generic from './Generic'

test('Generic', () => {
  const handleGeneric = jest.fn()
  const wrapper = shallow(
    <Generic
      capitalLetters={true}
      letters={true}
      numbers={true}
      onGeneric={handleGeneric}
      symbols={true}
    />
  )
  wrapper.find({ name: 'letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleGeneric).toHaveBeenCalled()
})
