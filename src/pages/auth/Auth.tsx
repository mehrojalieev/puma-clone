import React from 'react'
import "./Auth.scss"
import { Link, Outlet } from 'react-router-dom'
import { Container } from '../../styled-component/Styled'

const Auth = () => {
    return (
        <Container>
                <h1 className='auth__account-title'>My account</h1>
        <div className='auth'>
            <div className="auth__form-wrapper">
                <div className="form__header">
                    <Link className='item-link' to="/auth/login" >Login</Link>
                    <Link className='item-link' to="/auth/register" >Create Account</Link>
                </div>
                <Outlet />
            </div>
        </div>
        </Container>
    )
}

export default Auth