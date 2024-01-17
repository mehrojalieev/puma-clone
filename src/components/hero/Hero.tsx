import "./Hero.scss"
import HeroBanner from "../../assets/images/hero_banner.png"
import { ShopButton } from "../../styled-component/Styled"
import { useLocation } from "react-router-dom"

const Hero = () => {
  const {pathname} = useLocation()
  return pathname.includes('/auth') ? null : (
    <div className="hero" >
        <img className="banner__image" src={HeroBanner} alt="Banner" />
        <div className="hero-content">
            <h3>YEAR OF THE DRAGON</h3>
            <p>MB.03 CHINESE NEW YEAR</p>
            <ShopButton>SHOP NOW</ShopButton>
        </div>
    </div>
  )
}

export default Hero