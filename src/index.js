import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/Main/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainLayout />, document.getElementById('root'));
registerServiceWorker();
