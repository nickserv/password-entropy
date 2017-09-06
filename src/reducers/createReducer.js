import { identity } from 'ramda'

export default function createReducer(actionType, initialState, callback = identity) {
  return (state = initialState, { payload, type }) => {
    const matchesAction = type === actionType
    const isValid = typeof payload !== 'number' || payload >= 0

    return matchesAction && isValid ? callback(payload, state) : state
  }
}
