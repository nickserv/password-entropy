import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import 'typeface-roboto'

import PasswordEntropy from './components/PasswordEntropy'
import reducers from './reducers'

render(
  <Provider store={createStore(reducers, devToolsEnhancer())}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <PasswordEntropy />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
