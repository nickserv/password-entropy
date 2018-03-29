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
          Letters: true,
          'Capital Letters': true,
          Numbers: true,
          Symbols: true
        }
      }}
      optionsKey="Generic"
    />
  )
  wrapper
    .find('NavLink')
    .first()
    .simulate('click')
  expect(wrapper).toMatchSnapshot()
  expect(handleOptionsKey).toHaveBeenCalled()
})
