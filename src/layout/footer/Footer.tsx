import "./Footer.scss"
import { SiPuma } from "react-icons/si";
import { Container } from '../../styled-component/Styled'
const Footer = () => {
  return (
    <footer>
        <Container>
            <div className="footer__content-wrapper">
                <ul className='footer__menu'>
                    <li className='item-title'>SUPPORT</li>
                    <li>Contact Us</li>
                    <li>Shipping and Delivery</li>
                    <li>Terms & Conditions</li>
                    <li>Transparency in Supply Chain</li>
                    <li>Store Locator</li>
                    <li>Buy a Gift Card</li>
                    <li>Service Discount</li>
                    <li>Refer a Friend</li>
                    <li>Cookie Settings</li>
                </ul>
                <ul className='footer__menu'>
                    <li className="item-title">FAQ</li>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Do Not Sell or Share My Information</li>
                    <li>PUMA NYC Flagship Store</li>
                    <li>Gift Card Balance</li>
                    <li>Student Discount</li>
                    <li>Promotion Exclusions</li>
                </ul>
                <ul className='footer__menu'>
                    <li className='item-title'>ABOUT</li>
                    <li>Company</li>
                    <li>Corporate News</li>
                    <li>Press Center</li>
                    <li>#REFORM</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                    <li>Careers</li>
                </ul>
                <div className="footer__action">
                    <h3>STAY UP TO DATE</h3>
                    <button>Sign Up for Email</button>
                    <h3>EXPLORE</h3>
                    <div className="action__social">
                        <div className="social-card">
                            <i><SiPuma/></i>
                            <strong>APP</strong>
                        </div>
                        <div className="social-card">
                            <i><SiPuma/></i>
                            <strong>TRAC</strong>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer