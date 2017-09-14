import { shallow } from 'enzyme'
import React from 'react'

import { Options } from '.'

test('Options', () => {
  expect(shallow(<Options optionsKey="generic" setOptionsKey={() => {}} />)).toMatchSnapshot()
})
