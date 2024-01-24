import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Auth from '../pages/auth/Auth'
import Register from './register/Register'
import Login from './login/Login'
import Shoes from './shoes/Shoes'
import SingleShoes from './single-shoes/SingleShoes'
import Cart from './cart/Cart'
import Dashboard from './dashboard/Dashboard'
import UserAccount from './dashboard/user-account/UserAccount'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='dashboard' element={<Dashboard />}>
        <Route index path='account' element={<UserAccount />} />
      </Route>
      <Route path='shoes' element={<Shoes />} />
      <Route path='shoes/:id' element={<SingleShoes />} />
    </Routes>
  )
}

export default RouteController