import './App.scss'
import Nav from './layout/nav/Nav'
import Home from './pages/home/Home'
import { GiHamburgerMenu } from "react-icons/gi";
import RouteController from './routes/RouteController';

function App() {

  return (
    <>
    <Nav/>
    <Home/>
     <div className="feedback-btn">
        <i><GiHamburgerMenu/></i>
        <span>FEEDBACK</span>
      </div>
      <RouteController/>
    </>
  )
}

export default App
