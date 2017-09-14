import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import { PasswordEntropy } from './PasswordEntropy'

test('PasswordEntropy', () => {
  expect(
    new Renderer().render(<PasswordEntropy length={12} setLength={() => {}} />)
  ).toMatchSnapshot()
})
