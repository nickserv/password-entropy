import { shallow } from 'enzyme'

import PossiblePasswords from './PossiblePasswords'

describe('PossiblePasswords', () => {
  function getWrapper(approximate) {
    return shallow(
      <PossiblePasswords
        approximate={approximate}
        entropyBits={77.54887502163469}
        entropyTip={{ minimum: 64, strength: 'Strong', style: 'info' }}
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
