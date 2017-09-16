import mergeDeepRight from 'ramda/src/mergeDeepRight'
import { createStore } from 'redux'

import selector from './possibleItemsSelector'
import reducers from '.'

describe('selector', () => {
  function mergedSelector(state = {}) {
    return selector(mergeDeepRight(
      createStore(reducers).getState(),
      state
    ))
  }

  test('Generic', () => {
    expect(mergedSelector()).toMatchSnapshot()
  })

  test('Diceware', () => {
    expect(mergedSelector({ optionsKey: 'Diceware' })).toMatchSnapshot()
  })

  test('Custom', () => {
    expect(mergedSelector({ optionsKey: 'Custom' })).toMatchSnapshot()
  })

  test('Custom with invalid possibleItems', () => {
    expect(mergedSelector({
      options: { Custom: 0 },
      optionsKey: 'Custom'
    })).toMatchSnapshot()
  })

  test('Custom with weak possiblePasswords', () => {
    expect(mergedSelector({
      length: 32,
      options: { Custom: 2 },
      optionsKey: 'Custom'
    })).toMatchSnapshot()
  })

  test('Custom with strong possiblePasswords', () => {
    expect(mergedSelector({
      length: 64,
      options: { Custom: 2 },
      optionsKey: 'Custom'
    })).toMatchSnapshot()
  })

  test('Custom with very strong possiblePasswords', () => {
    expect(mergedSelector({
      length: 128,
      options: { Custom: 2 },
      optionsKey: 'Custom'
    })).toMatchSnapshot()
  })
})
