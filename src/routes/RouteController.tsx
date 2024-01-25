import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Auth from '../pages/auth/Auth'
import Register from './register/Register'
import Login from './login/Login'
import Shoes from './shoes/Shoes'
import SingleShoes from './single-shoes/SingleShoes'
import Cart from './cart/Cart'
import Dashboard from './dashboard/Dashboard'
import Profile from './dashboard/profile/Profile'
import Orders from './dashboard/orders/Orders'
import Settings from './dashboard/settings/settings'

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
        <Route index path='profile' element={<Profile />} />
        <Route  path='orders' element={<Orders />} />
        <Route  path='settings' element={<Settings />} />
      </Route>
      <Route path='shoes' element={<Shoes />} />
      <Route path='shoes/:id' element={<SingleShoes />} />
    </Routes>
  )
}

export default RouteController