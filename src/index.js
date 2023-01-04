import 'bootstrap/dist/css/bootstrap.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PasswordEntropyContainer from './PasswordEntropyContainer'
import registerServiceWorker from './registerServiceWorker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordEntropyContainer />
  </StrictMode>
)
registerServiceWorker()
if (import.meta.webpackHot) import.meta.webpackHot.accept()
