import React from 'react';
import './App.css';
import './components/RegistrationForm.css'
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
