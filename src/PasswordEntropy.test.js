import React from 'react';
import ReactDOM from 'react-dom';
import PasswordEntropy from './PasswordEntropy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordEntropy />, div);
});
