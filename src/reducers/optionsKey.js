import pick from 'ramda/src/pick'

import createReducer from './createReducer'

export default createReducer('SET_OPTIONS_KEY', 'Generic')

export function setOptionsKey(event, key) {
  return {
    type: 'SET_OPTIONS_KEY',
    payload: key
  }
}

export const selector = pick(['optionsKey'])
