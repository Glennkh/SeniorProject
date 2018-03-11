import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Sidebar from './Sidebar.js';

ReactDOM.render(<Sidebar />, document.getElementById('root'));
registerServiceWorker();
