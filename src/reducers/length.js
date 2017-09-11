import pick from 'ramda/src/pick'

import createReducer from './createReducer'

export default createReducer('SET_LENGTH', 12)

export function setLength({ target: { value } }) {
  return {
    type: 'SET_LENGTH',
    payload: parseInt(value, 10)
  }
}

export const selector = pick(['length'])
