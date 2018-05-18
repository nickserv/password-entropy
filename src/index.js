import { CssBaseline } from '@material-ui/core'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import AppContainer from './AppContainer'
import registerServiceWorker from './registerServiceWorker'

render(
  <Fragment>
    <CssBaseline />
    <AppContainer />
  </Fragment>,
  document.getElementById('root')
)
registerServiceWorker()
