import React, {useEffect, useState} from 'react'
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth';


function IssueForm({values, errors, touched}) {

  const [statusList, setStatusList] = useState([]);
  const [orgDrop, setOrgDrop] = useState([]);

  useEffect(() => {
    axios.get('https://irsr-be-dev.herokuapp.com/public/issue-status')
      .then( res => setStatusList(res.data))
      .catch( err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('https://irsr-be-dev.herokuapp.com/public/orgs')
    .then( res => {
      setOrgDrop(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const statusDrop = statusList.map( (status) => {
    return (
      <option key={status.name} value={status.id}>{status.name}</option>
    )
  })

  const orgDropdown = orgDrop.map((org) => {
    return (
      <option key={org.name} value={org.id}>{org.name}</option>
    )
  })

  return (
    <Form className='pure-form pure-form-aligned add-issue-form'>
      <div>Please enter information about the issue</div>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='Issue name'/>
      </div>
      <div>
        <Field component='select' name='status_id'>
          <option>Select Status</option>
          {statusDrop}
        </Field>
      </div>
      <div>
        <Field component='select' name='org_id'>
          <option>Select organization</option>
          {orgDropdown}
      </Field>
      </div>
      <div>
        {touched.comments && errors.comments && <p>{errors.comments}</p>}
        <Field component='textarea' type='text' name='comments' placeholder='Describe the issue'/>
      </div>
      <button type='submit'>Submit</button>
    </Form>
  )
}

const AddIssueForm = withFormik({
  mapPropsToValues({name, status_id, comments, org_id}) {
    return {
      name: name || "",
      comments: comments || "",
      org_id: org_id || "",
      status_id: status_id || "",
    }
},

validationSchema: Yup.object().shape({
  name: Yup.string()
  .required("Issue name is required"),
  comments: Yup.string()
  .required('Issue description is required'),
  org_id: Yup.number()
  .required('The organization is required'),
  status_id: Yup.number()
  .required('The status is required')
}),

handleSubmit(values, {resetForm}) {
  axiosWithAuth()
  .post('https://irsr-be-dev.herokuapp.com/issues', (values))
    .then(res => {
      console.log(res);
      resetForm();
      alert('Your issue has been submitted.')
    })
    .catch(res => console.log(res))
}

})(IssueForm)

export default AddIssueForm