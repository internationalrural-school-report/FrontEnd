import React from 'react'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'


const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function form({values, errors, touched}) {
  return (
    <Form>
      <div>Please enter your information below</div>
      <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type='email' name='email' placeholder='Email'/>
      </div>
      <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type='text' name='username' placeholder='Username'/>
      </div>
      <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password'/>
      </div>
      <div>
          {touched.phone && errors.phone && <p>{errors.phone}</p>}
          <Field type='tel' name='phone' placeholder='Phone Number'/>
      </div>
      <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Organization Name'/>
      </div>
      <div>Are you a Board Member or School Administrator?</div>
      <select name='regDropdown' />
      {/*use map for options from axios call*/}
    </Form>
  )
}

const RegistrationForm = withFormik({
  mapPropsToValues({email, username, password , phone}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      phone: phone || "",
  }
},

validationSchema: Yup.object().shape({
  username: Yup.string()
  .required("First name is required"),
  email: Yup.string()
  .email('Email is not valid')
  .required('Email is required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .required('Password is required'),
  phone: Yup.string()
  .matches(phoneValidation, 'That is not a valid number')
  .required('Phone number is required')
})

})(form)

export default RegistrationForm
