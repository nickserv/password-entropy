import { shallow } from 'enzyme'
import React from 'react'

import Diceware from './Diceware'

test('Diceware', () => {
  expect(shallow(<Diceware />)).toMatchSnapshot()
})
