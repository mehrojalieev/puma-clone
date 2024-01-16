import "./Nav.scss"
import { Container } from "../../styled-component/Styled"
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import { IoIosSearch, IoMdClose  } from "react-icons/io";
import { ProductData } from "../../db/data.json"
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { SiPuma } from "react-icons/si";


const Nav = () => {
  const [searchDronDown, setSearchDropDown] = useState<boolean>(false)
  const [clearBtn, setClearBtn] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState("")
  console.log(inputValue);
  

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



  useEffect(() => {
    if(inputValue){
        setClearBtn(true)
    } else{
      setClearBtn(false)
    }
  }, [inputValue])


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
              <li><Link className="nav-logo" to={"/"}><SiPuma/></Link></li>
              {
                ProductData[0].category.map(link =>
                  <li><NavLink className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/"}>{link.title}</NavLink></li>
                )
              }
            </ul>

            <div className="nav__action-container">
              <div onClick={() => setSearchDropDown(true)} className="search-btn">
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
        <div style={searchDronDown ? {display: "block" } : {display: "none"}} className="search__content-wrapper">
                <div className="dropdown__search-navigation">
              <Container>
                <div className="form-wrapper">
                <form className="search-form">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="SEARCH PUMA.COM" />
                    <button onClick={() => setInputValue("")} type="button" style={clearBtn ? {display: "block"} : {display: 'none'}} className="clear-btn">Clear</button>
                    <button type="button" className="dropdown__search-btn"><IoIosSearch/></button>
                  </form>
                  <button onClick={() => setSearchDropDown(false)} className="close-btn"><IoMdClose/></button>
                </div>
              </Container>
             
                </div>
                <Container>
                <div className="shoes-wrapper">
                    <ul className="shoes__menu">
                      <li>TRENDING SEARCHES</li>
                      <li>Lamelo Basketball Shoes</li>
                      <li>Bmw</li>
                      <li>Ferrari</li>
                      <li>Morocco</li>
                      <li>Palermo</li>
                      <li>Chivas</li>
                    </ul>
                    <div className="shoes__card-wrapper">
                        <h3>SUGGESTED PRODUCTS</h3>
                        <div className="card-container">
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                          <div className="card">
                            <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379330/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Men's-Basketball-Shoes" alt="" />
                            <div className="content">
                              <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                              <strong>$ 135.00</strong>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                </Container>
                
        </div>
      </nav>
    </>
  )
}

export default Nav