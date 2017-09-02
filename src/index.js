import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import 'font-awesome/css/font-awesome.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import PasswordEntropy from './app/PasswordEntropy'
import reducers from './reducers'
import './index.css'

render(
  <Provider store={createStore(reducers, devToolsEnhancer())}>
    <MuiThemeProvider>
      <PasswordEntropy />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
