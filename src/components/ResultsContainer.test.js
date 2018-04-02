import { shallow } from 'enzyme'
import { mergeDeepRight } from 'ramda'
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

const getWrapper = (state = {}) =>
  shallow(<ResultsContainer {...mergeDeepRight(initialState, state)} />)

describe('ResultsContainer', () => {
  test('renders generic', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  test('renders diceware', () => {
    expect(getWrapper({ optionsKey: 'Diceware' })).toMatchSnapshot()
  })

  test('renders custom', () => {
    expect(getWrapper({ optionsKey: 'Custom' })).toMatchSnapshot()
  })

  test('renders custom when invalid', () => {
    expect(
      getWrapper({ options: { Custom: 0 }, optionsKey: 'Custom' })
    ).toMatchSnapshot()
  })

  test('renders custom with weak possiblePasswords', () => {
    expect(
      getWrapper({
        length: 32,
        options: { Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with strong possiblePasswords', () => {
    expect(
      getWrapper({
        length: 64,
        options: { Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })

  test('renders custom with very strong possiblePasswords', () => {
    expect(
      getWrapper({
        length: 128,
        options: { Custom: 2 },
        optionsKey: 'Custom'
      })
    ).toMatchSnapshot()
  })
})
