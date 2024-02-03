import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { FaBorderNone } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import validateToken from '../../helpers/validation/validation';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';


const Sidebar = () => {
  const validation = validateToken(useSelector((state: RootState) => state.auth.token))

  return (
    <div className='sidebar'>
      <Link to={"/"} className="sidebar-logo">
       <img width={120} height={50} src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Puma_logo.svg/2560px-Puma_logo.svg.png" alt="Puma Logo" />
      </Link>
      <ul className='sidebar-menu'>
        {
          validation.decoded && validation.decoded.user.role === "admin" ?
            <>
              <li><NavLink end className={({isActive}) => isActive ? "item-link item-link--active" : "item-link" } to={"/dashboard"}>Manage Products</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "item-link item-link--active" : "item-link" } to={"/dashboard/manage-admin"}>Manage Admins</NavLink></li>
            </>
            :
            <>
              <li className='menu-item'>
                <NavLink end className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={"/dashboard"}>  <i><CgProfile /></i >Profile</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={"/dashboard/products"}><i><FiShoppingBag /></i> Manage Products</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={"/dashboard/manage-users"}><i><FaUsers /></i> Manage-user</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={"/dashboard/orders"}> <i><FaBorderNone /></i> Orders</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={"/dashboard/settings"}> <i><IoMdSettings /></i> Settings</NavLink>
              </li>
            </>
        }
      </ul>
    </div>
  )
}

export default Sidebar