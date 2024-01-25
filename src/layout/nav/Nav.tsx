import "./Nav.scss"
import React, { useEffect, useRef, useState } from "react"
import { Container } from "../../styled-component/Styled"
import Data from "../../db/data.json"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { SiPuma } from "react-icons/si";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { CategoryMenuTypes, Route } from "../../types"



const Nav = () => {
  

  const [searchDronDown, setSearchDropDown] = useState<boolean>(false)
  const [clearBtn, setClearBtn] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState("")
  // console.log(inputValue);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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

  // useEffect(() => {
  //   let f = setInterval(() => {
  //     setDd(!dd)
  //   }, 3000)

  //   return () => clearInterval(f)
  // }, [dd])

  useEffect(() => {
    if (inputValue) {
      setClearBtn(true)
    } else {
      setClearBtn(false)
    }
  }, [inputValue])

  const FormBox: any = useRef()
  const [formFocus, setFormFocus] = useState<boolean>(false)

  useEffect(() => {
    if (formFocus) {
      FormBox.current.style = "box-shadow: 0 0 3px 3px gray"
    }
 
  }, [formFocus])

  const [categoryData, setCategoryData] = useState<Route[]>([])
  console.log(categoryData);
  const [showDropdown, setShowDropDown] = useState(false)

const {pathname} = useLocation()

  return pathname.includes("/dashboard") ? null : (
    <>
      <div className="nav__navigation">
        {
          dd ? <>v 
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
              <li><Link className="nav-logo" to={"/"}><SiPuma /></Link></li>
              {
                Data.map((link, index) =>
                  <div key={index}>
                    <li onMouseLeave={() => setShowDropDown(false)} onMouseEnter={() => { setCategoryData(link.subcategory), setShowDropDown(true) }}>
                      <NavLink className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/"}>{link.title}</NavLink>
                    </li>
                    <div style={showDropdown ? { display: "block" } : { display: "none" }} className="dropdown-wrapper">
                      <div className="dropdown__content-container">
                        {
                          categoryData.map((title, index) =>
                            <div className="dropdown-content">
                              <h2 key={index}>{title.title}</h2>
                              <ul >
                                {
                                  title.subcategory.map(names =>
                                    <li><Link className="subcategory__item-link" to={names.link}>{names.name}</Link></li>
                                  )
                                }
                              </ul>
                            </div>
                          )
                        }
                      </div>
                      <div className="menu-content">
                        {/* {
                        categoryData.subcategory.map(item => 
                          item.category.map(items =>
                            <span>{items.title}</span>
                            )
                          )
                      } */}
                      </div>
                    </div>
                  </div>
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
                <Link to={"/cart"} className="action-link"><PiShoppingCartSimpleBold /></Link>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ mr: 1, cursor: "pointer" }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32, background: "transparent" }}><FaRegUser /></Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 2,
                      width: "300px",
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 2,
                        overflowY: "auto",
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <MenuItem className="menu__item-list" style={{ marginTop: "10px" }}> <Link className="menu__item-list" to="/dashboard"> My Account</Link></MenuItem>
                  <Divider />
                  <MenuItem className="menu__item-list">  Initiate Return</MenuItem>
                  <Divider />
                  <MenuItem className="menu__item-list">  Order Status</MenuItem>
                  <Divider />
                  <MenuItem className="menu__item-list">  Contact Us</MenuItem>
                  <Divider />
                  <MenuItem className="menu__item-list">  Wishlist</MenuItem>
                  <Divider />
                  <MenuItem className="menu__item-list">  Language</MenuItem>
                  <MenuItem className="login-item"><Link to={"/auth/login"} className="profile__menu-login">LOGIN</Link></MenuItem>
                  <MenuItem className="login__item"><Link to={"/auth/register"} className=" profile__menu-register">REGISTER HERE</Link></MenuItem>
                </Menu>
              </div>
            </div>
            {/*HOVER NAV CATERGORY  */}


          </div>

        </Container>
        <div style={searchDronDown ? { transform: "scaleY(1)", transition: "0.3s" } : { transform: "scaleY(0)" }} className="search__content-wrapper">
          <div className="dropdown__search-navigation">
            <Container>
              <div className="form-wrapper">
                <form ref={FormBox} className="search-form">
                  <input onMouseLeave={() => setFormFocus(false)} onMouseEnter={() => setFormFocus(true)} value={inputValue} onChange={(e) => { setInputValue(e.target.value), setFormFocus(true) }} type="text" placeholder="SEARCH PUMA.COM" />
                  <button onClick={() => setInputValue("")} type="button" style={clearBtn ? { display: "block" } : { display: 'none' }} className="clear-btn">Clear</button>
                  <button type="button" className="dropdown__search-btn"><IoIosSearch /></button>
                </form>
                <button onClick={() => setSearchDropDown(false)} className="close-btn"><IoMdClose /></button>
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
                    <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/378916/01/sv01/fnd/PNA/fmt/png/PUMA-x-LAMELO-BALL-MB.03-Toxic-Men's-Basketball-Shoes" alt="" />
                    <div className="content">
                      <p>MELO x DEXTER'S LAB MB.03 Men's Basketball Shoes</p>
                      <strong>$ 135.00</strong>
                    </div>
                  </div>
                  <div className="card">
                    <img width={100} height={100} src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379331/01/sv01/fnd/PNA/fmt/png/MELO-x-DEXTER'S-LAB-MB.03-Big-Kids'-Basketball-Shoes" alt="" />
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