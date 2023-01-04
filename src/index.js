import 'bootstrap/dist/css/bootstrap.css'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import PasswordEntropyContainer from './components/PasswordEntropyContainer'
import registerServiceWorker from './registerServiceWorker'

render(
  <StrictMode>
    <PasswordEntropyContainer />
  </StrictMode>,
  document.getElementById('root')
)
registerServiceWorker()
if (import.meta.webpackHot) import.meta.webpackHot.accept()
