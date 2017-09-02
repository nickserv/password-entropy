import { shallow } from 'enzyme'
import React from 'react'

import DicewareOptions from './DicewareOptions'

test('DicewareOptions', () => {
  expect(shallow(<DicewareOptions />)).toMatchSnapshot()
})
