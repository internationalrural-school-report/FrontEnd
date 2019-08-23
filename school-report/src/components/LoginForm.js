import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

function LoginForm({ errors, touched }) {
  return (
    <Form>
      <div>
        {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
        <label htmlFor='firstname'>First Name</label>
        <Field type='text' name='firstname' />
      </div>
      <div>
        {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
        <label htmlFor='lastname'>Last Name</label>
        <Field type='text' name='lastname' />
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
  mapPropsToValues({ firstname, lastname, password }) {
    return {
      firstname: firstname || '',
      lastname: lastname || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required')
  })
})(LoginForm);

export default FormikLoginForm;
