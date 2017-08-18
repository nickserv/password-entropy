import PasswordEntropy from './app/PasswordEntropy'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.css'

render(
  <Provider store={createStore(reducers)}>
    <PasswordEntropy/>
  </Provider>,
  document.getElementById('root')
)
