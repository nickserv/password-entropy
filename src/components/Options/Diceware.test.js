import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import Diceware from './Diceware'

test('Diceware', () => {
  expect(new Renderer().render(<Diceware />)).toMatchSnapshot()
})
