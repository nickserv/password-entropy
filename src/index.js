import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import 'bootstrap/dist/css/bootstrap.css'

import PasswordEntropy from './components/PasswordEntropy'
import reducers from './reducers'

render(
  <Provider store={createStore(reducers, devToolsEnhancer())}>
    <PasswordEntropy />
  </Provider>,
  document.getElementById('root')
)
