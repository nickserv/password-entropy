import DicewareOptions from './DicewareOptions'
import { shallow } from 'enzyme'
import React from 'react'

it('renders', () => {
  expect(shallow(<DicewareOptions/>)).toMatchSnapshot()
})
