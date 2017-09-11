import pick from 'ramda/src/pick'

import createReducer from './createReducer'

export default createReducer('SET_OPTIONS_KEY', 'generic')

export function setOptionsKey(key) {
  return {
    type: 'SET_OPTIONS_KEY',
    payload: key
  }
}

export const selector = pick(['optionsKey'])
