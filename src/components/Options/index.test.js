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
  wrapper.find('WithStyles(Tabs)').simulate('change')
  expect(wrapper).toMatchSnapshot()
  expect(handleOptionsKey).toHaveBeenCalled()
})
