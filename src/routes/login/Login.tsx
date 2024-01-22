import Checkbox from '@mui/material/Checkbox';
import './Login.scss'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")

  const toggleInputType = () => {
    setShowPassword(!showPassword)
    const changeType = passwordInputType === "text" ? "password" : "text"
    setPasswordInputType(changeType)
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <form className="login-form">
        <div className="label-item">
          <label htmlFor="email">EMAIL <code>*</code></label>
          <input autoComplete='off' type="text" id='email' placeholder='Email' />
        </div>
        <div className="label-item">
          <label htmlFor="password">PASSWORD <code>*</code></label>
          <div className="password-input">
            <input type={passwordInputType} id='password' placeholder='Password' />
            <i onClick={toggleInputType}>{showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}</i>
          </div>
          <div className="checkbox-item">
            <Checkbox {...label} />
            Remember me on this computer
          </div>
          <button className='login-btn'>LOGIN</button>
          <p className='privacy-text'>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>
          <button className='forget-btn' type='button'>FORGOTTEN YOUR PASSWORD?</button>
        </div>
        <GoogleOAuthProvider  clientId="617896106948-fncnrakj6bigf7u0kig605jifcfll205.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
      }}
    />
    </GoogleOAuthProvider>
      </form>
    </div>
  )
}

export default Login