import { defaultToggles } from './options/GenericOptions'
import { assoc, identity } from 'ramda'
import { combineReducers } from 'redux'

export function createReducer (actionType, initialState, callback = identity) {
  return (state = initialState, { payload, type }) => {
    const matchesAction = type === actionType
    const isValid = typeof payload !== 'number' || payload >= 0

    return matchesAction && isValid ? callback(payload, state) : state
  }
}

export function toggleGenericCallback ({ checked, name }, state) {
  return assoc(name, checked, state)
}

const length = createReducer('SET_LENGTH', 12)
const custom = createReducer('SET_CUSTOM', 0)
const generic = createReducer(
  'TOGGLE_GENERIC',
  defaultToggles,
  toggleGenericCallback
)
const optionsKey = createReducer('SET_OPTIONS_KEY', 'generic')

export default combineReducers({
  length,
  options: combineReducers({
    custom,
    generic
  }),
  optionsKey
})
