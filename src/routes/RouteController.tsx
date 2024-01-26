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
// import Settings from './dashboard/settings/settings'
import validateToken from '../helpers/validation/validation'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import ManageProducts from './dashboard/manage-products/ManageProducts'
import ManageAdmins from './dashboard/manage-admins/ManageAdmins'

const RouteController = () => {
  const auth = useSelector((state:RootState) => state.auth)
  const validation = validateToken(auth.token)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='auth' element={<Auth />}>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='dashboard' element={<Dashboard />}>
        <Route index  element={validation.decoded && validation.decoded.user.role === "admin" ? <ManageProducts/> : <Profile />} />
        <Route path='manage-admin' element={validation.decoded && validation.decoded.user.role === "admin" && <ManageAdmins/>}/>
        <Route  path='orders' element={<Orders />} />
        {/* <Route  path='settings' element={<Settings />} /> */}
      </Route>
      <Route path='shoes' element={<Shoes />} />
      <Route path='shoes/:id' element={<SingleShoes />} />
    </Routes>
  )
}

export default RouteController