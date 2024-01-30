import './App.scss'
// import { GiHamburgerMenu } from "react-icons/gi";
import RouteController from './routes/RouteController';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <>
      {/* <div className="feedback-btn">
        <i><GiHamburgerMenu /></i>
        <span>FEEDBACK</span>
      </div> */}
      <RouteController />
      <Footer/>
    </>
  )
}

export default App
