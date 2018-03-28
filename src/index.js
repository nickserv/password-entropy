import CssBaseline from 'material-ui/CssBaseline'
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

import PasswordEntropyContainer from './components/PasswordEntropyContainer'

render(
  <Fragment>
    <CssBaseline />
    <PasswordEntropyContainer />
  </Fragment>,
  document.getElementById('root')
)
