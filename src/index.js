import { MuiThemeProvider } from 'material-ui'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import PasswordEntropy from './components/PasswordEntropy'
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
