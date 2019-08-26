import React, {useState, useEffect} from 'react'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'

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
      <option key={org.name} value={org}>{org.name}</option>
    )
  })

  return (
    <Form>
      <div>Please enter your information below</div>
      <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type='text' name='username' placeholder='Username'/>
      </div>
      <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password'/>
      </div>
      <div>What is your role?</div>
      <select name='roleID'> 
      <option value={adminDrop}>School Administrator</option>
      <option value={boardDrop}>Board Member</option>
      </select>
      <div>Which organization are you associated with?</div>
      <select name='orgID'>{orgDropdown}</select>
      
      <button>Submit!</button>
    </Form>
  )
}

const RegistrationForm = withFormik({
  mapPropsToValues({email, username, password}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
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
}),

handleSubmit(values) {
  console.log(values)
  Axios.post('https://irsr-be-dev.herokuapp.com/auth/register', values)
    .then(res => console.log(res))

    .catch(err => console.log(err))
}

})(FormRegister)

export default RegistrationForm
