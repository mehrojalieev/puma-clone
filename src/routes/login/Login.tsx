import Checkbox from '@mui/material/Checkbox';
import './Login.scss'
const Login = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <form action="" className="login-form">
        <div className="label-item">
          <label htmlFor="email">EMAIL <code>*</code></label>
          <input autoComplete='off' type="text" id='email' placeholder='Email' />
        </div>
        <div className="label-item">
          <label htmlFor="password">PASSWORD <code>*</code></label>
          <input type="password" id='password' placeholder='Password' />
          <div className="checkbox-item">
          <Checkbox {...label}  />
          Remember me on this computer
          </div>
          <button className='login-btn'>LOGIN</button>
          <p className='privacy-text'>By continuing, I confirm that I have read and accept the Terms and Conditions. and the Privacy Policy.</p>
          <button className='forget-btn' type='button'>FORGOTTEN YOUR PASSWORD?</button>
        </div>
      </form>
    </div>
  )
}

export default Login