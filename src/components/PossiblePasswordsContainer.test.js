import { shallow } from 'enzyme'
import React from 'react'

import PossiblePasswordsContainer from './PossiblePasswordsContainer'

const initialState = {
  length: 12,
  options: {
    Custom: 0,
    Generic: {
      Letters: true,
      'Capital Letters': true,
      Numbers: true,
      Symbols: true
    }
  },
  optionsKey: 'Generic'
}

const getWrapper = state => shallow(<PossiblePasswordsContainer {...state} />)

describe('PossiblePasswordsContainer', () => {
  test('renders generic', () => {
    expect(getWrapper(initialState)).toMatchSnapshot()
  })

  test('renders diceware', () => {
    expect(
      getWrapper({ ...initialState, optionsKey: 'Diceware' })
    ).toMatchSnapshot()
  })

  test('renders custom', () => {
    expect(
      getWrapper({ ...initialState, optionsKey: 'Custom' })
    ).toMatchSnapshot()
  })

  test('renders custom when invalid', () => {
    expect(
      getWrapper({
        ...initialState,
        options: { ...initialState.options, Custom: 0 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with weak possiblePasswords', () => {
    expect(
      getWrapper({
        ...initialState,
        length: 32,
        options: { ...initialState.options, Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with strong possiblePasswords', () => {
    expect(
      getWrapper({
        ...initialState,
        length: 64,
        options: { ...initialState.options, Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with very strong possiblePasswords', () => {
    expect(
      getWrapper({
        ...initialState,
        length: 128,
        options: { ...initialState.options, Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })
})
