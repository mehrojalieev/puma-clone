import "./Register.scss"
import { FormEvent, useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { createUser } from "../../redux/slices/auth-slice";
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../redux/store/store";


const Register = () => {

  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector((state: RootState) => state.auth)

  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setFLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [userPhoto, setUserPhoto] = useState("https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")
  const [isEmailError, setIsEmailError] = useState<string | null>(null)
  const [isPasswordError, setIsPasswordError] = useState<string | null>(null)
  const [isValidBtn, setIsValidBtn] = useState<boolean>(false)
  const toggleInputType = () => {
    setShowPassword(!showPassword)
    const changeType = passwordInputType === "text" ? "password" : "text"
    setPasswordInputType(changeType)
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



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

  interface UserDataType {
    first_name: string | null,
    photo_url: string,
    email: string,
  }
  const userData: UserDataType = {
    first_name: firstname,
    photo_url: userPhoto,
    email: email,
  }

  const handleRegisterUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(createUser(userData))
    if (auth.token) {
      setTimeout(() => {
        window.location.pathname = "/auth/login"
      }, 3500)
    }

  }


  function ValidRegisterForm(params:type) {
    
  }


  return (
    <GoogleOAuthProvider clientId={import.meta.env.BASE_URL}>

      <div>
        <form onSubmit={handleRegisterUser} className="register-form">
          <div className="label-item">
            <label htmlFor="firstname">FIRST NAME <code>*</code></label>
            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} autoComplete='off' type="text" id='firstname' placeholder='First Name' />
          </div>
          <div className="label-item">
            <label htmlFor="email">LAST NAME <code>*</code></label>
            <input value={lastname} onChange={(e) => setFLastName(e.target.value)} autoComplete='off' type="text" id='lastname' placeholder='Last Name' />
          </div>
          <div className="label-item">
            <label htmlFor="email">EMAIL <code>*</code></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' type="text" id='email' placeholder='Email' />
          </div>
          <div  className="label-item">
            <label htmlFor="password">PASSWORD <code>*</code></label>
            <div style={isPasswordError ? { border: "2px solid #b62906" } : {}} className="password-input">
              <input value={password} onChange={(e) => handlePasswordChange(e)} type={passwordInputType} id='password' placeholder='Password' />
              <i onClick={toggleInputType}>{showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}</i>
            </div>
            {isPasswordError && <p className="check__password-text">Your password must contain at least 8 characters</p>}
            <div className="checkbox-item">
              <Checkbox {...label} />
              Add me to the PUMA mailing list
            </div>
            <button type="submit" className={isValidBtn ? "valid-btn register-btn" : "register-btn"}>REGISTER</button>
            <p className='privacy-text'>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>
            <button disabled={false} className="forget-btn" type='button'>FORGOTTEN YOUR PASSWORD?</button>
          </div>
        </form>

        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />

      </div>
    </GoogleOAuthProvider>
  )
}

export default Register

// 617896106948-fncnrakj6bigf7u0kig605jifcfll205.apps.googleusercontent.com