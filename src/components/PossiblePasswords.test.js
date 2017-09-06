import { shallow } from 'enzyme'
import { colors } from 'material-ui/styles'
import React from 'react'

import { PossiblePasswords } from './PossiblePasswords'

describe('PossiblePasswords', () => {
  function getWrapper(approximate) {
    return shallow(<PossiblePasswords approximate={approximate} entropyBits={77.54887502163469} entropyTip={{ color: colors.blue500, minimum: 64, strength: 'Strong' }} possiblePasswords={2.2107391972073336e+23} />)
  }

  test('approximate', () => {
    expect(getWrapper(true)).toMatchSnapshot()
  })

  test('exact', () => {
    expect(getWrapper(false)).toMatchSnapshot()
  })
})
