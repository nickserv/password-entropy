import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import { Custom } from './Custom'

test('Custom', () => {
  expect(new Renderer().render(<Custom possibleItems={1} setCustom={() => {}} />)).toMatchSnapshot()
})
