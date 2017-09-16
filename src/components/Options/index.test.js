import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import { Options } from '.'

test('Options', () => {
  expect(new Renderer().render(<Options optionsKey="Generic" setOptionsKey={() => {}} />)).toMatchSnapshot()
})
