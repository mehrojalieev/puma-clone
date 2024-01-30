import { Container } from "../../styled-component/Styled"
import "./MainHero.scss"

const MainHero = () => {
    return (
      <>
          <div className='main-hero'>
            <img className="main__hero-banner" src="https://cdn.sanity.io/images/qa41whrn/staging/ad7aa86cb6896bbfe2b97282a88dd45b23c8ba30-1440x500.jpg?w=2160&q=80&auto=format" alt="Main-Hero-Banner" />
            <Container>
                <div className="main__hero-content">
                    <h2>VELOCITY NITRO™ 3 THE WAY RUNNING SHOULD FEEL</h2>
                    <p>
                        COMFORT IN EVERY SPEED, EVERY STEP AND EVERY DISTANCE
                        WITH THE ENHANCED CUSHIONING, ELEVATED STACK HEIGHT
                        AND NITROGEN-INFUSED FOAM OF THE IDEAL DO-IT-ALL TRAINER.
                    </p>
                    <button className="shop-btn"> SHOP NOW </button>
                </div>
            </Container>
        </div>
          <div className="main__hero-bottom__content">
            <Container>
                <div className="bottom__content">
                        <h2>SAVE BIG WHILE YOU CAN – UP TO 50% OFF</h2>
                        <p>TAKE AN EXTRA 20% OFF SALE WITH CODE: COOL20</p>
                        <span>EXCLUSIONS APPLY</span>
                        <button>SHOP NOW</button>
                </div>

            </Container>
          </div>
      </>
    )
}

export default MainHero