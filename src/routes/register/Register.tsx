import "./Register.scss"
import { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
const Register = () => {
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
      <form action="" className="register-form">
        <div className="label-item">
          <label htmlFor="firstname">FIRST NAME <code>*</code></label>
          <input autoComplete='off' type="text" id='firstname' placeholder='First Name' />
        </div>
        <div className="label-item">
          <label htmlFor="email">LAST NAME <code>*</code></label>
          <input autoComplete='off' type="text" id='lastname' placeholder='Last Name' />
        </div>
        <div className="label-item">
          <label htmlFor="email">EMAIL <code>*</code></label>
          <input autoComplete='off' type="text" id='email' placeholder='Email' />
        </div>
        <div className="label-item">
          <label htmlFor="password">PASSWORD <code>*</code></label>
          <div className="password-input">
          <input  type={passwordInputType} id='password' placeholder='Password' />
          <i onClick={toggleInputType}>{showPassword ? <FaRegEyeSlash/> : <MdOutlineRemoveRedEye/>}</i>
          </div>
          <div className="checkbox-item">
            <Checkbox {...label} />
            Add me to the PUMA mailing list
          </div>
          <button className='register-btn'>REGISTER</button>
          <p className='privacy-text'>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>
          <button className='forget-btn' type='button'>FORGOTTEN YOUR PASSWORD?</button>
        </div>
      </form>
    </div>
  )
}

export default Register