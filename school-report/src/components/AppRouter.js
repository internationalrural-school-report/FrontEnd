import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import FormikLoginForm from './LoginForm';
import Axios from 'axios';
import IssuesGrid from './IssuesGrid';
import AddIssueForm from './AddIssueForm'

const AppRouter = () => {
  return (
    <div>
      <Route exact path='/' component={IssuesGrid} />
      <Route path='/register' component={RegistrationForm} />
      <Route path='/login' component={FormikLoginForm} />
      <Route path='/issues' component={AddIssueForm} />
    </div>
  );
};

export default AppRouter;
