import { createStore } from 'redux'

import { selector, setLength } from './length'
import reducers from '.'

test('setLength', () => {
  expect(setLength({ target: { value: '12' } })).toEqual({
    type: 'SET_LENGTH',
    payload: 12
  })
})

test('selector', () => {
  const state = createStore(reducers).getState()
  expect(selector(state)).toEqual({ length: 12 })
})
