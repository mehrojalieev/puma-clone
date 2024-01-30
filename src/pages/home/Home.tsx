import "./Home.scss"
import TrendingCategory from "../../components/trending-category/TrendingCategory"
import FeatureCategory from "../../components/feature-category/FeatureCategory"
import SoccerPage from "../../components/soccer-page/SoccerPage"
import MainHero from "../../components/main-hero/MainHero"
import Hero from "../../components/hero/Hero"

const Home = () => {
  return (
    <div>
        <MainHero/>
        <FeatureCategory/>
        <TrendingCategory/>
        <Hero/> 
        <SoccerPage/>
    </div>
  )
}

export default Home