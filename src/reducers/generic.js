import assoc from 'ramda/src/assoc'
import map from 'ramda/src/map'
import path from 'ramda/src/path'
import T from 'ramda/src/T'

import createReducer from './createReducer'

export const toggles = {
  letters: {
    example: 'a-z',
    possibleItems: 26
  },
  capitalLetters: {
    example: 'A-Z',
    possibleItems: 26
  },
  numbers: {
    example: '0-9',
    possibleItems: 10
  },
  symbols: {
    example: '!@#$%^&*',
    possibleItems: 8
  }
}

export const defaultToggles = map(T, toggles)

export function toggleGenericCallback({ checked, name }, state) {
  return assoc(name, checked, state)
}

export default createReducer(
  'TOGGLE_GENERIC',
  defaultToggles,
  toggleGenericCallback
)

export function toggleGeneric({ target: { checked, name } }) {
  return {
    type: 'TOGGLE_GENERIC',
    payload: {
      checked,
      name
    }
  }
}

export const selector = path(['options', 'generic'])
