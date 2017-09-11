import path from 'ramda/src/path'

import createReducer from './createReducer'

export default createReducer('SET_CUSTOM', 0)

export function setCustom({ target: { value } }) {
  return {
    type: 'SET_CUSTOM',
    payload: parseInt(value, 10)
  }
}

export const selector = state => ({
  possibleItems: path(['options', 'custom'], state)
})
