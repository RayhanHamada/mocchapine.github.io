import ReactDOM from 'react-dom';
import App from './App.jsx';
import React from 'react';
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import './index.css';

AOS.init();

ReactDOM.render(<App />, document.getElementById('root'));
