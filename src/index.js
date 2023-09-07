import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Home from './view/pages/Home.js'

axios.defaults.baseURL = 'http://localhost:3001';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
