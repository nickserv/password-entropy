import { createStore } from 'redux'

import { defaultToggles, selector, toggleGeneric, toggleGenericCallback } from './generic'
import reducers from '.'

test('toggleGeneric', () => {
  expect(toggleGeneric({ target: { name: 'Letters' } }, false)).toEqual({
    type: 'TOGGLE_GENERIC',
    payload: {
      checked: false,
      name: 'Letters'
    }
  })
})

test('toggleGenericCallback', () => {
  expect(toggleGenericCallback({ name: 'Letters', checked: false }, defaultToggles)).toEqual({
    'Capital Letters': true,
    Letters: false,
    Numbers: true,
    Symbols: true
  })
})

test('selector', () => {
  const state = createStore(reducers).getState()
  expect(selector(state)).toEqual(defaultToggles)
})
