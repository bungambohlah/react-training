import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import App from './App'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Content />, document.getElementById('content'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker();
