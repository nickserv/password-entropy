import { createStore } from 'redux'

import reducers from '.'
import { selector, setCustom } from './custom'

test('setCustom', () => {
  expect(setCustom({ target: { value: '0' } })).toEqual({
    type: 'SET_CUSTOM',
    payload: 0
  })
})

test('selector', () => {
  const state = createStore(reducers).getState()
  expect(selector(state)).toEqual({ possibleItems: 0 })
})
