import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li><Link to={"/dashboard/account"}>Account</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar