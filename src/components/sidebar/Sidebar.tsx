import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { FaBorderNone } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1> <i><RxDashboard /></i>Dashboard</h1>
      <ul className='sidebar-menu'>
        <li>
          <i><CgProfile /></i><Link className='item-link' to={"/dashboard/profile"}>Profile</Link>
        </li>
        <li>
          <i><FaBorderNone /></i><Link className='item-link' to={"/dashboard/orders"}>Orders</Link>
        </li>
        <li>
          <i><IoMdSettings /></i><Link className='item-link' to={"/dashboard/settings"}>Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar