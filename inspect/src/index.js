import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {CreateAccount} from './App.js';
import  Home from './Home.js';
import registerServiceWorker from './registerServiceWorker';
import {Login} from './Login.js';
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
