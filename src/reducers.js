import GenericOptions from './options/GenericOptions'
import { assoc, identity, map, T } from 'ramda'
import { combineReducers } from 'redux'

function createReducer(actionType, initialState, callback = identity) {
  return (state = initialState, { payload, type }) => {
    return type === actionType ? callback(payload, state) : state
  }
}

export default combineReducers({
  length: createReducer('SET_LENGTH', 6),
  options: combineReducers({
    custom: createReducer('SET_CUSTOM_POSSIBLE_ITEMS', 1),
    generic: createReducer ('TOGGLE_GENERIC',
                            map(T, GenericOptions.toggles),
                            ({ checked, name }, state) => assoc(name, checked, state))
  }),
  optionsIndex: createReducer('SET_OPTIONS_INDEX', 0)
})
