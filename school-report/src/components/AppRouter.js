import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import FormikLoginForm from './LoginForm';
import Axios from 'axios';

const AppRouter = () => {

  return (
    <div>
      <Route path='/register' component={RegistrationForm} />
      <Route path='/login' component={FormikLoginForm} />
    </div>
  );
};

export default AppRouter;
