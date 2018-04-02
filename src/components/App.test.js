import { shallow } from 'enzyme'
import React from 'react'

import App from './App'

test('App', () => {
  const handleLength = jest.fn()
  const handleOptionsKey = jest.fn()
  const wrapper = shallow(
    <App
      length={12}
      onCustom={() => {}}
      onGeneric={() => {}}
      onLength={handleLength}
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
  wrapper.find('TextField').simulate('change')
  wrapper.find('WithStyles(Tabs)').simulate('change')
  expect(wrapper).toMatchSnapshot()
  expect(handleLength).toHaveBeenCalled()
  expect(handleOptionsKey).toHaveBeenCalled()
})
