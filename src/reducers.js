import GenericOptions from './options/GenericOptions'
import { assoc, identity, map, T } from 'ramda'
import { combineReducers } from 'redux'

function createReducer(actionType, initialState, { callback = identity, validator } = {}) {
  return (state = initialState, { payload, type }) => {
    const matchesAction = type === actionType
    const isValid = !validator || validator(payload)

    return matchesAction && isValid ? callback(payload, state) : state
  }
}

export default combineReducers({
  length: createReducer('SET_LENGTH', 6, { validator: n => n >= 1 }),
  options: combineReducers({
    custom: createReducer('SET_CUSTOM', 1, { validator: n => n >= 0 }),
    generic: createReducer ('TOGGLE_GENERIC', map(T, GenericOptions.toggles), {
      callback: ({ checked, name }, state) => assoc(name, checked, state)
    })
  }),
  optionsKey: createReducer('SET_OPTIONS_KEY', 'diceware')
})
