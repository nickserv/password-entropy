import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PasswordEntropy from './PasswordEntropy';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PasswordEntropy />, document.getElementById('root'));
registerServiceWorker();
