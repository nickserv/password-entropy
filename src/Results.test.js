import { shallow } from 'enzyme'
import { colors } from '@material-ui/core'
import React from 'react'

import Results from './Results'

describe('Results', () => {
  function getWrapper(approximate) {
    return shallow(
      <Results
        approximate={approximate}
        entropyBits={77.54887502163469}
        entropyTip={{ color: colors.blue, minimum: 64, strength: 'Strong' }}
        possiblePasswords={2.2107391972073336e23}
      />
    )
  }

  test('approximate', () => {
    expect(getWrapper(true)).toMatchSnapshot()
  })

  test('exact', () => {
    expect(getWrapper(false)).toMatchSnapshot()
  })
})
