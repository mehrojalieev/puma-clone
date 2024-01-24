import "./Footer.scss"

import { SiPuma } from "react-icons/si";
import { Container } from '../../styled-component/Styled'

// Icons 
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const Footer = () => {
    const {pathname} = useLocation()

    return pathname.includes("/dashboard") ? null : (
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
                                <i><SiPuma /></i>
                                <strong>APP</strong>
                            </div>
                            <div className="social-card">
                                <i><SiPuma /></i>
                                <strong>TRAC</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__social-container">
                    <div className="social-action">
                        <i><FaYoutube /></i>
                        <i><FaTwitter /></i>
                        <i><FaPinterest /></i>
                        <i><FaInstagram /></i>
                        <i><FaFacebook /></i>
                    </div>

                    <div className="copyright-text">
                        <p>
                            © PUMA NORTH AMERICA, INC <br />
                            <strong>IMPRINT AND LEGAL DATA</strong> <br />
                            WEB ID: 783 243 389
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer