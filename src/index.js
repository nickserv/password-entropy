import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import 'roboto-fontface'

import PasswordEntropy from './components/PasswordEntropy'
import reducers from './reducers'

render(
  <Provider store={createStore(reducers, devToolsEnhancer())}>
    <MuiThemeProvider>
      <PasswordEntropy />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
