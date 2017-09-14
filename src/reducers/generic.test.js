import { createStore } from 'redux'

import { defaultToggles, selector, toggleGeneric, toggleGenericCallback } from './generic'
import reducers from '.'

test('toggleGeneric', () => {
  expect(toggleGeneric({ target: { name: 'letters' } }, false)).toEqual({
    type: 'TOGGLE_GENERIC',
    payload: {
      checked: false,
      name: 'letters'
    }
  })
})

test('toggleGenericCallback', () => {
  expect(toggleGenericCallback({ name: 'letters', checked: false }, defaultToggles)).toEqual({
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
