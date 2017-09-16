import { createStore } from 'redux'

import { selector, setOptionsKey } from './optionsKey'
import reducers from '.'

test('setOptionsKey', () => {
  expect(setOptionsKey(undefined, 'Generic')).toEqual({
    type: 'SET_OPTIONS_KEY',
    payload: 'Generic'
  })
})

test('selector', () => {
  const state = createStore(reducers).getState()
  expect(selector(state)).toEqual({ optionsKey: 'Generic' })
})
