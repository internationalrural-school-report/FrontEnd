import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

function LoginForm({ errors, touched }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <label htmlFor='username'>Username</label>
        <Field type='text' name='username' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label htmlFor='password'>Password</label>
        <Field type='password' name='password' />
      </div>
      <button type='submit'>Login Now</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required')
  }),

  handleSubmit(values, { resetForm }) {
    Axios.post('https://irsr-be-dev.herokuapp.com/auth/login', values)
      .then(res => {
        // console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        resetForm();
      })
      .catch(res => console.log(res));
  }
})(LoginForm);

export default FormikLoginForm;
