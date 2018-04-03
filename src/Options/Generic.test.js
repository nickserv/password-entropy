import { shallow } from 'enzyme'
import React from 'react'

import Generic from './Generic'

test('Generic', () => {
  const wrapper = shallow(
    <Generic
      onGeneric={() => {}}
      toggles={{
        'Lowercase Letters': true,
        'Uppercase Letters': true,
        Numbers: true,
        Symbols: true
      }}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
