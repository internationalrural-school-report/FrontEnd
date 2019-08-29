import React from 'react'
import { axiosWithAuth } from './axiosWithAuth';


const DeleteButton = (props) => {
    axiosWithAuth()
    .delete(`https://irsr-be-dev.herokuapp.com/issues/${props.props.obj.id}`)
        .then( (res) => console.log(res))
        .catch( (err) => {
            alert('You do not have the proper permissions for this task.');
            console.log(err)
        })
}

export default DeleteButton