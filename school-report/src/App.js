import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import AddIssueForm from './components/AddIssueForm';
import SingleIssuePage from './components/SingleIssuePage'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <AppRouter />
      <AddIssueForm />
      <SingleIssuePage />
    </div>
  );
}

export default App;
