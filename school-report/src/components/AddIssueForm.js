import React from 'react'
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup'


function form({values, errors, touched}) {
  return (
    <Form>
      <div>Please enter information about the issue</div>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='Issue name'/>
      </div>
      <div>
        THIS IS GOING TO BE A POPULATED DROPDOWN FOR ISSUE ID  {/*use map for options from axios call*/}
      </div>
      <div>
        {touched.comments && errors.comments && <p>{errors.comments}</p>}
        <Field component='textarea' type='text' name='comments' placeholder='Describe the issue'/>
      </div>
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
  .required('Issue description is required')
})

})(form)

export default AddIssueForm