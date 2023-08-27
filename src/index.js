import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './view/pages/Home.js';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
