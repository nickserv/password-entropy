import { shallow } from 'enzyme'
import React from 'react'

import ResultsContainer from './ResultsContainer'

const initialState = {
  length: 12,
  options: {
    Custom: 0,
    Generic: {
      'Lowercase Letters': true,
      'Uppercase Letters': true,
      Numbers: true,
      Symbols: true
    }
  },
  optionsKey: 'Generic'
}

const getWrapper = state => shallow(<ResultsContainer {...state} />)

describe('ResultsContainer', () => {
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
