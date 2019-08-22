import React from 'react'
import {Route} from 'react-router-dom'
import RegistrationForm from './RegistrationForm'

const AppRouter = () => {
    return (
    <Route path="/register" component={RegistrationForm} />
    )
}

export default AppRouter