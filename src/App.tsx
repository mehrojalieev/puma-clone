import './App.scss'
import Nav from './layout/nav/Nav'
import Home from './pages/home/Home'
import { GiHamburgerMenu } from "react-icons/gi";
import RouteController from './routes/RouteController';
import Footer from './layout/footer/Footer';
import { useEffect } from 'react';
import ApiInstance from './api';

function App() {

  return (
    <>
    <Nav/>
     <div className="feedback-btn">
        <i><GiHamburgerMenu/></i>
        <span>FEEDBACK</span>
      </div>
      <RouteController/>
      <Footer/>
    </>
  )
}

export default App
