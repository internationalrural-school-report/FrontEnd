import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import RegistrationForm from './components/RegistrationForm';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
