import { shallow } from 'enzyme'
import React from 'react'

import Options from '.'

test('Options', () => {
  const handleOptionsKey = jest.fn()
  const wrapper = shallow(
    <Options
      onCustom={() => {}}
      onGeneric={() => {}}
      onOptionsKey={handleOptionsKey}
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
  wrapper.find('WithStyles(Tabs)').simulate('change')
  expect(wrapper).toMatchSnapshot()
  expect(handleOptionsKey).toHaveBeenCalled()
})
