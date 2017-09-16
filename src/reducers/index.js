import { combineReducers } from 'redux'

import Custom from './custom'
import Generic from './generic'
import length from './length'
import optionsKey from './optionsKey'

export default combineReducers({
  length,
  options: combineReducers({
    Custom,
    Generic
  }),
  optionsKey
})
