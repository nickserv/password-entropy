import { shallow } from 'enzyme'
import React from 'react'

import App from './App'

test('App', () => {
  const handleOptionsKey = jest.fn()
  const wrapper = shallow(
    <App
      length={12}
      onCustom={() => {}}
      onGeneric={() => {}}
      onLength={() => {}}
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
