import { shallow } from 'enzyme'
import React from 'react'

import Options from '.'

test('Options', () => {
  const handleLength = jest.fn()
  const wrapper = shallow(
    <Options
      length={12}
      onCustom={() => {}}
      onGeneric={() => {}}
      onLength={handleLength}
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
  wrapper.find('TextField').simulate('change')
  expect(wrapper).toMatchSnapshot()
  expect(handleLength).toHaveBeenCalled()
})
