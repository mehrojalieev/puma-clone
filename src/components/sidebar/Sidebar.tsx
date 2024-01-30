import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
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
  console.log(validation);

  return (
    <div className='sidebar'>
      <h1> <i><RxDashboard /></i>Dashboard</h1>
      <ul className='sidebar-menu'>
        {
          validation.decoded && validation.decoded.user.role === "admin" ?
            <>
              <li><Link to={"/dashboard"}>Manage Products</Link></li>
              <li><Link to={"/dashboard/manage-admin"}>Manage Admins</Link></li>
            </>
            :
            <>
              <li>
                <i><CgProfile /></i><Link className='item-link' to={"/dashboard"}>Profile</Link>
              </li>
              {/* <li>
                <i><FiShoppingBag /></i><Link className='item-link' to={"/dashboard/products"}>Products</Link>
              </li>
              <li>
                <i><FaUsers /></i><Link className='item-link' to={"/dashboard/manage-users"}>Manage-user</Link>
              </li>
              <li>
                <i><FaBorderNone /></i><Link className='item-link' to={"/dashboard/orders"}>Orders</Link>
              </li>
              <li>
                <i><IoMdSettings /></i><Link className='item-link' to={"/dashboard/settings"}>Settings</Link>
              </li> */}
            </>
        }
      </ul>
    </div>
  )
}

export default Sidebar