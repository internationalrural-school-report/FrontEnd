import React from 'react'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'


const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function form({values, errors, touched}) {
    return (
        <Form>
            <div>Please enter your information below</div>
            <div>
                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                <Field type='email' name='email' placeholder='Email'/>
            </div>
            <div>
                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                <Field type='username' name='username' placeholder='Username'/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='password' name='password' placeholder='Password'/>
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='phone' name='phone' placeholder='Phone Number'/>
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' placeholder='Organization Name'/>
            </div>
            <div>Are you a Board Member or a School Administrator?</div>
            <label>
            <Field type='checkbox' name='board' checked={values.tos} /> Board Member
            </label>
            <label>
            <Field type='checkbox' name='admin' checked={values.tos} /> School Administrator
            </label>
            <button>Submit!</button>
        </Form>
    )
}

const RegistrationForm = withFormik({
    mapPropsToValues({email, username, password , phone, board, admin}) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            phone: phone || "",
            board: board || false,
            admin: admin || false
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
    })

})(form)

export default RegistrationForm
