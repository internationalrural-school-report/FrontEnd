import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

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
      <button>Complete Sign Up</button>
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
  })
})(LoginForm);

export default FormikLoginForm;
