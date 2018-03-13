import { mergeDeepRight } from 'ramda'
import { createStore } from 'redux'

import selector from './possibleItemsSelector'
import reducers from '.'

describe('selector', () => {
  function mergedSelector(state = {}) {
    return selector(mergeDeepRight(createStore(reducers).getState(), state))
  }

  test('generic', () => {
    expect(mergedSelector()).toMatchSnapshot()
  })

  test('diceware', () => {
    expect(mergedSelector({ optionsKey: 'diceware' })).toMatchSnapshot()
  })

  test('custom', () => {
    expect(mergedSelector({ optionsKey: 'custom' })).toMatchSnapshot()
  })

  test('custom with invalid possibleItems', () => {
    expect(
      mergedSelector({ options: { custom: 0 }, optionsKey: 'custom' })
    ).toMatchSnapshot()
  })

  test('custom with weak possiblePasswords', () => {
    expect(
      mergedSelector({
        length: 32,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })

  test('custom with strong possiblePasswords', () => {
    expect(
      mergedSelector({
        length: 64,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })

  test('custom with very strong possiblePasswords', () => {
    expect(
      mergedSelector({
        length: 128,
        options: { custom: 2 },
        optionsKey: 'custom'
      })
    ).toMatchSnapshot()
  })
})
