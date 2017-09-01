import DicewareOptions from './DicewareOptions'
import { shallow } from 'enzyme'
import React from 'react'

test('DicewareOptions', () => {
  expect(shallow(<DicewareOptions/>)).toMatchSnapshot()
})
