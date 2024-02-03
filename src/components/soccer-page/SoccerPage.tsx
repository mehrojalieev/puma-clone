import "./SoccerPage.scss"
import { Container } from '../../styled-component/Styled'
const SoccerPage = () => {
    return (
        <Container>
            <div className="soccerpage">
                <h1>SHOP SOCCER MUST-HAVES</h1>
                <div className="soccer__card-container">
                        <div className="soccer-card">
                            <img src="https://cdn.sanity.io/images/qa41whrn/staging/e79ee7d0c4b5a868ef51dca5662268e6d817b6aa-2000x2000.jpg" />
                            <div className="card-info">
                                <h2>CLEATS</h2>
                                <p>FT. KING</p>
                            </div>
                        </div>
                        <div className="soccer-card">
                            <img src="https://cdn.sanity.io/images/qa41whrn/staging/d75dafcd491d9840685d8aa97d0f4671c81805e9-1536x1536.jpg" />
                            <div className="card-info">
                                <h2>JERSEYS</h2>
                                <p>FT. MANCHESTER CITY YEAR OF THE DRAGON</p>
                            </div>
                        </div>
                </div>
            </div>

        </Container>
    )
}

export default SoccerPage