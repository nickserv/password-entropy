import { shallow } from 'enzyme'
import React from 'react'

import Options from '.'

test('Options', () => {
  const wrapper = shallow(
    <Options
      onCustom={() => {}}
      onGeneric={() => {}}
      options={{
        Custom: 0,
        Generic: {
          'Lowercase Letters': true,
          'Uppercase Letters': true,
          Numbers: true,
          Symbols: true
        }
      }}
      optionsKey="Generic"
    />
  )
  expect(wrapper).toMatchSnapshot()
})
