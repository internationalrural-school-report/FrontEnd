import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {position: positions.MIDDLE}

ReactDOM.render(
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Router>,
  document.getElementById('root')
);
