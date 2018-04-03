import { CssBaseline } from 'material-ui'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

import AppContainer from './AppContainer'

render(
  <Fragment>
    <CssBaseline />
    <AppContainer />
  </Fragment>,
  document.getElementById('root')
)
