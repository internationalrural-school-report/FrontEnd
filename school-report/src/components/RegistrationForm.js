import React, {useState, useEffect} from 'react'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import './RegistrationForm.css'

{/* header: {Authorization: token}, set local storage ('token', 'username', 'userid') */}

const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function FormRegister({values, errors, touched}) {

  const [adminDrop, setAdminDrop] = useState();
  const [boardDrop, setBoardDrop] = useState();
  const [orgDrop, setOrgDrop] = useState([]);

  useEffect (() => {
    Axios.get('https://irsr-be-dev.herokuapp.com/public/roles')
    .then( res => {
      setAdminDrop(res.data[0].id);
      setBoardDrop(res.data[1].id);
    })
    .catch( err => console.log(err))
  }, [])

  useEffect(() => {
    Axios.get('https://irsr-be-dev.herokuapp.com/public/orgs')
    .then( res => {
      setOrgDrop(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const orgDropdown = orgDrop.map((org) => {
    return (
      <option key={org.name} value={org.id}>{org.name}</option>
    )
  })

  return (
    <Form className='pure-form pure-form-aligned register-form'>
      <div>Please enter your information below</div>
      <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type='text' name='username' placeholder='Username'/>
      </div>
      <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password'/>
      </div>
      <div>
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field type='text' name='name' placeholder='Name'/>
      </div>
      <div>What is your role?</div>
      <Field component='select' name='role_id'> 
        <option>Select role</option>
        <option value={adminDrop}>School Administrator</option>
        <option value={boardDrop}>Board Member</option>
      </Field>
      <div>Which organization are you associated with?</div>
      <Field component='select' name='org_id'>
      <option>Select organization</option>
      {orgDropdown}
      </Field>
      <div>
      <button className='pure-button' type='submit'>Submit!</button>
      </div>
    </Form>
  )
}

const RegistrationForm = withFormik({
  mapPropsToValues({username, name, password, org_id, role_id}) {

    return {
      username: username || "",
      name: name || "",
      password: password || "",
      org_id: org_id || "",
      role_id: role_id || ""
  };
},

  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("First name is required"),
    name: Yup.string()
    .required("First name is required"),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  }),

  handleSubmit(values, {resetForm}) {
    Axios.post('https://irsr-be-dev.herokuapp.com/auth/register', (values))
      .then(res => {
        console.log(res);
        resetForm();
      })
      .catch(res => console.log(res))
  }

})(FormRegister)

export default RegistrationForm
