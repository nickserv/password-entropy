import blue from 'material-ui/colors/blue'
import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import { PossiblePasswords } from './PossiblePasswords'

describe('PossiblePasswords', () => {
  function getOutput(approximate) {
    return new Renderer().render(<PossiblePasswords approximate={approximate} entropyBits={77.54887502163469} entropyTip={{ color: blue, minimum: 64, strength: 'Strong' }} possiblePasswords={2.2107391972073336e+23} />)
  }

  test('approximate', () => {
    expect(getOutput(true)).toMatchSnapshot()
  })

  test('exact', () => {
    expect(getOutput(false)).toMatchSnapshot()
  })
})
