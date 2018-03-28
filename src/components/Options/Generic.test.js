import { shallow } from 'enzyme'
import React from 'react'

import Generic from './Generic'

test('Generic', () => {
  const wrapper = shallow(
    <Generic
      capitalLetters={true}
      letters={true}
      numbers={true}
      onGeneric={() => {}}
      symbols={true}
    />
  )

  expect(wrapper).toMatchSnapshot()
})
