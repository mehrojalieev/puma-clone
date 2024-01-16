import "./Nav.scss"
import { Container } from "../../styled-component/Styled"
import { Link, NavLink } from 'react-router-dom'
import { useState } from "react"
import { IoIosSearch } from "react-icons/io";
import { ProductData } from "../../db/data.json"
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi"

const Nav = () => {
  console.log(ProductData[0]);
  const [dd, setDd] = useState<boolean>(false)
  const ChangingText: any = [
    {
      title: "FREE AND EASY RETURNS ",
      link: "SEE DETAILS"
    },
    {
      title: "FREE SHIPPING ON ORDERS OVER $60",
      link: "LEARN MORE"
    }
  ]


  // setInterval(() => {
  //   setDd(!dd)
  // }, 3000)
  return (
    <>
      <div className="nav__navigation">
        {
          dd ? <>
            <h3>{ChangingText[0].title}</h3>
            <Link className="navigation-link" to={"/"}>{ChangingText[0].link}</Link>
          </>
            : <>
              <h3>{ChangingText[1].title}</h3>
              <Link className="navigation-link" to={"/"}>{ChangingText[1].link}</Link>
            </>
        }
      </div>
      <nav>
        <Container>
          <div className="nav-wrapper">
            <ul className="nav__menu">
              {
                ProductData[0].category.map(link =>
                  <li><NavLink className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/"}>{link.title}</NavLink></li>
                )
              }
            </ul>

            <div className="nav__action-container">
              <div className="search-btn">
                <i><IoIosSearch /></i>
                Search
              </div>
              <div className="action-card">
                <Link to={"/"} className="action-link"><FaRegHeart /></Link>
                <Link to={"/"} className="action-link"><PiShoppingCartSimpleBold /></Link>
                <Link to={"/"} className="action-link"><FaRegUser /></Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Nav