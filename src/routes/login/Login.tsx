import Checkbox from '@mui/material/Checkbox';
import './Login.scss'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FormEvent, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PiWarningCircleFill } from "react-icons/pi";
import { AppDispatch, RootState } from '../../redux/store/store';
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from '../../redux/slices/auth-slice';

const Login = () => {
  const loginData = useSelector((state: RootState) => state.auth)
  console.log(loginData);
  
  const dispatch = useDispatch<AppDispatch>()
  const [showPassword, setShowPassword] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmailError, setIsEmailError] = useState<string | null>(null)
  const [isPasswordError, setIsPasswordError] = useState<string | null>(null)


  const toggleInputType = () => {
    setShowPassword(!showPassword)
    const changeType = passwordInputType === "text" ? "password" : "text"
    setPasswordInputType(changeType)
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isChecked, setIsChecked] = useState<boolean>(false)


  // Validation Functions

  function isValidPassword(password: string) {
    return /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/.test(password)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidPassword(e.target.value)) {
      setIsPasswordError("Password is invalid")
    }
    else {
      setIsPasswordError(null)
    }
    setPassword(e.target.value)
  }
  function isValidEmail(email: string) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/.test(email)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(e.target.value)) {
      setIsEmailError('Email is invalid');
    }
    else {
      setIsEmailError(null)
    }
    setEmail(e.target.value)
  }


  interface UserTypes {
    email: string |any
  }

  const UserData: UserTypes = {
    email: email 
  }

  const handleLoginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(UserData);    
    dispatch(loginUser())
  }



  return (
    <div>
      <form onSubmit={handleLoginUser} className="login-form">
        <div className="label-item">
          <label htmlFor="email">EMAIL <code>*</code></label>
          <input style={isEmailError ? { border: "2px solid #b62906" } : {}} value={email} onChange={handleEmailChange} autoComplete='off' type="text" id='email' placeholder='Email' />
          {
            isEmailError && <i className='email__warn-icon'><PiWarningCircleFill /></i>
          }
        </div>
        {
          isEmailError ? <p className='regex-text'>Please fill out this field.</p> : null
        }
        <div className="label-item">
          <label htmlFor="password">PASSWORD <code>*</code></label>
          <div style={isPasswordError ? { border: "2px solid #b62906" } : {}} className="password-input">
            <input value={password} onChange={handlePasswordChange} type={passwordInputType} id='password' placeholder='Password' />
            {
              isPasswordError && <i className='password__warn-icon'><PiWarningCircleFill /></i>
            }
            <i onClick={toggleInputType}>{showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}</i>
          </div>
          {
            isPasswordError && <p className='regex-text'>Please fill out this field.</p>
          }

          <div className="checkbox-item">
            <Checkbox onClick={() => setIsChecked(!isChecked)} {...label} checked={isChecked ? true : false} />
            Remember me on this computer
          </div>
          <button style={isChecked ? { background: "#000", color: "#fff" } : {}} className='login-btn'>LOGIN</button>
          <p className='privacy-text'>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>
          <button className='forget-btn' type='button'>FORGOTTEN YOUR PASSWORD?</button>
        </div>
        <GoogleOAuthProvider clientId="617896106948-fncnrakj6bigf7u0kig605jifcfll205.apps.googleusercontent.com">
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