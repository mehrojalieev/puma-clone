import "./Cart.scss"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { Container } from "../../styled-component/Styled"
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { IoReloadOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Divider } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ApiInstance from "../../api"
import { ProductTypes } from "../../types"
import { MdOutlineLock } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbMessage } from "react-icons/tb";
const Cart = () => {
    const [arrowOpen, setArrowOpen] = useState<boolean>(true)
    const [productPrice, setProductPrice] = useState<string | number>("")

    const [inputCode, setInputCode] = useState<string>("")
    const [getCartData, setGetCartData] = useState<boolean>(false)
    // console.log(getCartData);

    const data = useSelector((state: RootState) => state.productCart)
    // console.log(data);

    useEffect(() => {
        if (data.cart.length > 0) {
            setProductPrice(data.total)
            setGetCartData(true)
        } else {
            setProductPrice("")
            setGetCartData(false)
        }
    }, [getCartData])


    const [trandingProduct, setTrandingProduct] = useState([])
    console.log(trandingProduct);


    useEffect(() => {
        async function loadTranding() {
            try {
                const response = await ApiInstance("/product/reel")
                setTrandingProduct(response.data.payload)
            }
            catch (error) {
                console.log(error);
            }
        }
        loadTranding()
    }, [])



    return (
        <Container>
            <h1 className="shopping__cart-title">MY SHOPPING CART {data ? <strong>({data.cart.length})</strong> : null} </h1>
            <div className="cart">
                <div className="cart-container">
                    {
                        getCartData &&
                        data.cart.map(i =>
                            <div key={i._id} className="cart-box">
                                <img src={i.product_images[0]} alt={i.description} />
                                <div className="cart-info">
                                    <h3>{i.product_name}</h3>
                                    <p><span>Description: </span>{i.description.slice(0, 50)} </p>
                                    <p><span>Size: </span>{i.variants[0].variant_value}</p>
                                    <p><span>Style Number: </span>{i.created_at}</p>
                                </div>
                                <div className="manage-action">
                                    <strong className="cart-price">${i.variants[0].variant_sale_price}</strong>
                                    <div className="control-action">
                                        <button><BiEditAlt /></button>
                                        <button><GoTrash /></button>
                                    </div>
                                </div>

                            </div>

                        )
                    }
                </div>


                {
                    getCartData &&
                    < div className="cart__info-wrapper">
                        <p className="delivery-text"> <i><TbTruckDelivery /></i> YOU’VE EARNED FREE SHIPPING</p>
                        <p className="return-text"><IoReloadOutline />FREE RETURNS ON ALL QUALIFYING ORDERS.</p>
                        <div className="promocode-action">
                            <div onClick={() => setArrowOpen(!arrowOpen)} className="open-form">
                                <h4>APPLY A PROMO CODE</h4>
                                <i>{arrowOpen ? <FaArrowUp /> : <FaArrowDown />}</i>
                            </div>
                            <form style={arrowOpen ? { display: "flex" } : { display: "none" }} className="entercode-form">
                                <input value={inputCode} onChange={(e) => setInputCode(e.target.value)} type="text" placeholder="Enter a promo code" />
                                <button style={inputCode.length > 0 ? { background: "#000", color: "#fff" } : {}}>APPLY</button>
                            </form>
                        </div>

                        <Divider className="divider" />
                        <div className="product-count">
                            <div className="count-item">
                                <p>SUBTOTAL</p>
                                <strong>${productPrice}</strong>
                            </div>
                            <div className="count-item">
                                <p>SHIPPING COSTS</p>
                                <strong>FREE</strong>
                            </div>
                            <div className="count-item">
                                <p>ESTIMATED SALES TAX</p>
                                <strong>-</strong>
                            </div>
                        </div>
                        <Divider className="divider" />
                        <div className="estimate-total">
                            <h4>ESTIMATED TOTAL</h4>
                            {/* <strong>${i.variants[0].variant_sale_price}</strong> */}
                        </div>
                        <button className="checkout-btn">CHECKOUT</button>
                    </div>

                }

            </div>

            {
                getCartData &&
                <div className="cart__featured-wrapper">

                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        spaceBetween={30}
                        pagination={{
                            type: 'progressbar',
                        }}
                        // navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            trandingProduct.map((tranding: ProductTypes) =>

                                <SwiperSlide className="tranding-slide" key={tranding._id}>
                                    <Link to={`/shoes/${tranding._id}`}><img src={tranding.product_images[0]} alt={tranding.description} /></Link>
                                    <div className="tranding-info">
                                        <h3>{tranding.product_name}</h3>
                                        <strong>${tranding.variants[0].variant_sale_price}</strong>
                                    </div>
                                </SwiperSlide>
                            )
                        }


                    </Swiper>
                    <div className="cart-features">
                        <div className="feature">
                            <i><MdOutlineLock /></i>
                            <h3>SECURE PAYMENTS</h3>
                            <p>SSL ENCRYPTION ON ALL TRANSACTIONS</p>
                        </div>
                        <div className="feature">
                            <i><TbTruckDelivery /></i>
                            <h3>FREE & FAST RETURNS</h3>
                            <p>FREE RETURN ON ALL QUALIFYING ORDERS</p>
                        </div>
                        <div className="feature">
                            <i><TbMessage /></i>
                            <h3>ACTIVE SUPPORT</h3>
                            <p>GET IN TOUCH IF YOU HAVE A PROBLEM</p>
                        </div>
                    </div>
                </div>
            }

            {/* NOT CART PAGE */}
            {
                !getCartData &&
                <div className="notcard-container">
                    <h2><IoCartOutline /></h2>
                    <h3>Your Shopping Cart is Empty</h3>
                    <p>Please  <Link to={"/auth/login"}>SIGN IN </Link> to view your saved Cart</p>
                </div>
            }
        </Container>
    )
}

export default Cart