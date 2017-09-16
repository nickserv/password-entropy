import assoc from 'ramda/src/assoc'
import map from 'ramda/src/map'
import path from 'ramda/src/path'
import T from 'ramda/src/T'

import createReducer from './createReducer'

export const toggles = {
  Letters: {
    example: 'a-z',
    possibleItems: 26
  },
  'Capital Letters': {
    example: 'A-Z',
    possibleItems: 26
  },
  Numbers: {
    example: '0-9',
    possibleItems: 10
  },
  Symbols: {
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

export function toggleGeneric({ target: { name } }, checked) {
  return {
    type: 'TOGGLE_GENERIC',
    payload: {
      checked,
      name
    }
  }
}

export const selector = path(['options', 'Generic'])
