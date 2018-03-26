import { shallow } from 'enzyme'
import React from 'react'

import PossiblePasswordsContainer from './PossiblePasswordsContainer'

const getWrapper = (optionsKey = 'generic', length = 12) =>
  shallow(
    <PossiblePasswordsContainer
      length={length}
      options={{
        custom: 2,
        generic: {
          letters: true,
          capitalLetters: true,
          numbers: true,
          symbols: true
        }
      }}
      optionsKey={optionsKey}
    />
  )

describe('PossiblePasswordsContainer', () => {
  test('renders generic', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  test('renders diceware', () => {
    expect(getWrapper('diceware')).toMatchSnapshot()
  })

  test('renders custom', () => {
    expect(getWrapper('custom')).toMatchSnapshot()
  })

  test('renders custom with invalid possiblePasswords', () => {
    expect(getWrapper('custom', 0)).toMatchSnapshot()
  })

  test('renders custom with weak possiblePasswords', () => {
    expect(getWrapper('custom', 32)).toMatchSnapshot()
  })

  test('renders custom with strong possiblePasswords', () => {
    expect(getWrapper('custom', 64)).toMatchSnapshot()
  })

  test('renders custom with very strong possiblePasswords', () => {
    expect(getWrapper('custom', 128)).toMatchSnapshot()
  })
})
