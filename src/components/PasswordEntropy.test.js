import { shallow } from 'enzyme'
import React from 'react'

import PasswordEntropy from './PasswordEntropy'

test('PasswordEntropy', () => {
  const handleLength = jest.fn()
  const wrapper = shallow(
    <PasswordEntropy
      length={12}
      onCustom={() => {}}
      onGeneric={() => {}}
      onLength={handleLength}
      onOptionsKey={() => {}}
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
  wrapper.find('Input').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleLength).toHaveBeenCalled()
})
