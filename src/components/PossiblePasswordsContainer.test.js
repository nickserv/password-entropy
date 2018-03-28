import { shallow } from 'enzyme'
import { mergeDeepRight } from 'ramda'
import React from 'react'

import PossiblePasswordsContainer from './PossiblePasswordsContainer'

const initialState = {
  length: 12,
  options: {
    custom: 0,
    generic: {
      letters: true,
      capitalLetters: true,
      numbers: true,
      symbols: true
    }
  },
  optionsKey: 'generic'
}

const getWrapper = (state = {}) =>
  shallow(
    <PossiblePasswordsContainer {...mergeDeepRight(initialState, state)} />
  )

describe('PossiblePasswordsContainer', () => {
  test('renders generic', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  test('renders diceware', () => {
    expect(getWrapper({ optionsKey: 'diceware' })).toMatchSnapshot()
  })

  test('renders custom', () => {
    expect(getWrapper({ optionsKey: 'custom' })).toMatchSnapshot()
  })

  test('renders custom when invalid', () => {
    expect(
      getWrapper({ options: { custom: 0 }, optionsKey: 'custom' })
    ).toMatchSnapshot()
  })

  test('renders custom with weak possiblePasswords', () => {
    expect(
      getWrapper({
        length: 32,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with strong possiblePasswords', () => {
    expect(
      getWrapper({
        length: 64,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with very strong possiblePasswords', () => {
    expect(
      getWrapper({
        length: 128,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })
})
