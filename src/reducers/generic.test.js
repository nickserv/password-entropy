import { createStore } from 'redux'

import {
  defaultToggles,
  selector,
  toggleGeneric,
  toggleGenericCallback
} from './generic'
import reducers from '.'

test('toggleGeneric', () => {
  const target = { checked: false, name: 'letters' }
  expect(toggleGeneric({ target })).toEqual({
    type: 'TOGGLE_GENERIC',
    payload: target
  })
})

test('toggleGenericCallback', () => {
  expect(
    toggleGenericCallback({ name: 'letters', checked: false }, defaultToggles)
  ).toEqual({
    capitalLetters: true,
    letters: false,
    numbers: true,
    symbols: true
  })
})

test('selector', () => {
  const state = createStore(reducers).getState()
  expect(selector(state)).toEqual(defaultToggles)
})
