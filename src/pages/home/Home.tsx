import Hero from "../../components/hero/Hero"
import MainHero from "../../components/main-hero/MainHero"
import SoccerPage from "../../components/soccer-page/SoccerPage"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <MainHero/>
        <Hero/> 
        <SoccerPage/>
    </div>
  )
}

export default Home