import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Auth from '../pages/auth/Auth'
import Register from './register/Register'
import Login from './login/Login'
import Shoes from './shoes/Shoes'
import SingleShoes from './single-shoes/SingleShoes'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='shoes' element={<Shoes />} />
      <Route path='shoes/:id' element={<SingleShoes />} />
    </Routes>
  )
}

export default RouteController