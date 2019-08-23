import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import AddIssueForm from './components/AddIssueForm'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <AppRouter />
      <AddIssueForm />
    </div>
  );
}

export default App;
