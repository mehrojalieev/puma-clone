import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Auth from '../pages/auth/Auth'
import Register from './register/Register'
import Login from './login/Login'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default RouteController