import './App.scss'
import Nav from './layout/nav/Nav'
import Home from './pages/home/Home'
import { GiHamburgerMenu } from "react-icons/gi";

function App() {

  return (
    <>
    <Nav/>
    <Home/>
     <div className="feedback-btn">
        <i><GiHamburgerMenu/></i>
        <span>FEEDBACK</span>
      </div>
    </>
  )
}

export default App
