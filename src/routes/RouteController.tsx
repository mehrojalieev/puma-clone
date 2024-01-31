import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Auth from '../pages/auth/Auth'
import Register from './register/Register'
import Login from './login/Login'
import SingleShoes from './single-shoes/SingleShoes'
import Cart from './cart/Cart'
import Dashboard from './dashboard/Dashboard'
import Profile from './dashboard/profile/Profile'
import Orders from './dashboard/orders/Orders'
import Settings from './dashboard/settings/Settings'
import validateToken from '../helpers/validation/validation'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import ManageProducts from './dashboard/manage-products/ManageProducts'
import ManageAdmins from './dashboard/manage-admins/ManageAdmins'
import Products from './dashboard/products/Products'
import ManageUsers from './dashboard/manage-users/ManageUsers'
import Nav from '../layout/nav/Nav'
import Private from '../pages/private/Private'
import AllProducts from './all-products/AllProducts'

const RouteController = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const validation = validateToken(auth.token)
  const { pathname } = useLocation()
  return (

    <>
      {
        pathname.includes('/dashboard') || pathname.includes("/profile") ? null : (
          <Nav />
        )
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='auth' element={<Auth />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='allproducts' element={<AllProducts />} />

        <Route path='shoes/:id' element={<SingleShoes />} />

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='products' element={<Products/>}/>
          
          <Route path='manage-users' element={<ManageUsers/>}/>
          <Route path='/dashboard/manage-admin' element={<ManageAdmins/>}/>
          <Route path='manage-products' element={<ManageProducts/>}/>
          </Route>
        {/* {
          validation.decoded && validation.decoded.user.role === "admin" &&
          <Route path='/dashboard' element={<Private />}>
            <Route index element={<ManageProducts />} />
            <Route path='manage-admin' element={<ManageAdmins />} />
          </Route>
        }
        {
          validation.decoded && validation.decoded.user.role === "user" &&
          <Route path='/profile' element={<Private />}>
            <Route index element={<Profile />} />
          </Route>
        } */}

      </Routes>
    </>
  )
}

export default RouteController