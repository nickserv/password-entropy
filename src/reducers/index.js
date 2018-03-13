import { combineReducers } from 'redux'

import custom from './custom'
import generic from './generic'
import length from './length'
import optionsKey from './optionsKey'

export default combineReducers({
  length,
  options: combineReducers({ custom, generic }),
  optionsKey
})
