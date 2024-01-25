import "./Dashboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Sidebar/>
        <div className="dashboard-content">
        <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard