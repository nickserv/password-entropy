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
        custom: 0,
        generic: {
          letters: true,
          capitalLetters: true,
          numbers: true,
          symbols: true
        }
      }}
      optionsKey="generic"
    />
  )
  wrapper.find('Input').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleLength).toHaveBeenCalled()
})
