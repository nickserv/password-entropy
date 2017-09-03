import { assoc, map, path, T } from 'ramda'

import createReducer from './createReducer'

export const toggles = {
  letters: {
    label: 'Letters',
    example: 'a-z',
    possibleItems: 26
  },
  capitalLetters: {
    label: 'Capital Letters',
    example: 'A-Z',
    possibleItems: 26
  },
  numbers: {
    label: 'Numbers',
    example: '0-9',
    possibleItems: 10
  },
  symbols: {
    label: 'Symbols',
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
