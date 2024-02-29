import "./SingleProduct.scss"
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CgDanger } from "react-icons/cg";
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from "../../helpers/hooks/useFetch";
import { useDispatch, useSelector } from 'react-redux'
import { ProductTypes, ProductVariant } from '../../types';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';  
import { AppDispatch, RootState } from '../../redux/store/store';
import { NavigationBnts, SmallContainer } from "../../utils/Utils";
import { addToCart, removeFromCart } from '../../redux/slices/cart-slice';


const SingleShoes = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const {cart} = useSelector((state: RootState) => state.productCart)
  
  console.log(cart);
  
  
  // ----- HOOKS -----
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showWarningText, setShowWarningText] = useState<boolean>(false)
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>();
  console.log(currentVariant);
  
  
  useEffect(() => {setIsLiked(false)}, [])
  
  const {data} = useFetch(`/product/${id}?liked=${isLiked}`)
  
  
  const productData: ProductTypes = data[0];

  const handleAddToCart = (product: ProductTypes) : void =>  {
    if(currentVariant){
      setShowWarningText(false)
      let p = {...product};
      p = {...p, count: 1, selectedVariant: currentVariant};
      dispatch(addToCart(p))
    }
    else{
      setShowWarningText(true)
      console.log("Please select the variant");
    }
  }

  const handleRemoveFromCart = (product: ProductTypes) : void =>  {
    if(currentVariant){
      let p = {...product};
      p = {...p, selectedVariant: currentVariant};
      dispatch(removeFromCart(p))
    }
    else{
      console.log("Please select the variant");
    }
  }

  

  return (
    <div className="single-wrapper">
      <SmallContainer>
        {
          productData &&
         <div className="single-carousel">
          <Swiper
        onSwiper={setThumbsSwiper as any } 
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
                    productData?.product_images.slice(0,4).map((img, index) =>
                    <SwiperSlide  key={index}>
                          <img src={img} alt="Carousel Image" />
                        </SwiperSlide>
                    )
                }
          </Swiper>
           <div className="single-carousel__main">
            <Swiper 
            slidesPerView={1}
                  spaceBetween={0}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper2  navigation-swiper"
              >
                  <NavigationBnts/>
                  {
                      productData?.product_images?.map((img, index) =>
                          <SwiperSlide   key={index}>
                              <img className="swiper-main-image" src={img && img}  />
                          </SwiperSlide>
                      )
                  }
              </Swiper>
           </div>
           <div className="product-actions">
            <h1>{productData.product_name}</h1>
            <p>{productData.description}</p>
            <div className="variants"> 
            <h5>{productData?.variants[0].variant_type}</h5>
              <div className="variants__wrapper">
              {
                productData?.variants.map((variant, index) => 
                  <div onClick={() => setCurrentVariant(variant)} className={`product-variant product-variant${currentVariant?.variant_value === variant.variant_value ? "-active" : ""}`} key={index}>{variant.variant_value}</div>  
                )
              }
              </div>
            </div>
            <div style={showWarningText ? {display: "flex"} : {display: "none"}} className="warning__size-text">
            <p> Please select a size</p>
              <i><CgDanger/></i>
            </div>
            {
              cart?.findIndex((product) => product?._id === productData._id && product.selectedVariant?.variant_value === currentVariant?.variant_value) === -1 ? 
              <button className="link" disabled={!productData} onClick={() => handleAddToCart(productData)}>Add To Cart</button>
              :
              <div className="add-to-cart-wrapper">
                <button onClick={() => handleRemoveFromCart(productData)} className="link">-</button>
                <p>
                {cart?.find((product) => product?._id === productData?._id && product?.selectedVariant?.variant_value === currentVariant?.variant_value)?.count}
                </p>
                <button className="link" onClick={() => handleAddToCart(productData)}>+</button>
              </div> 
            }
            {/* <div>
            <div className="likedby-wrapper">
              {productData.likes > 0 && "Liked by "}
            <Avatar.Group
              maxCount={2}
              size="small"
            >
              {
                [...productData.likedby].reverse().map(likedUser => {
                  if(likedUser !== validation.decoded?.user.email){
                    return <Avatar key={likedUser} style={{ backgroundColor: '#f56a00' }}>{likedUser[0].toUpperCase()}</Avatar>
                  }
                }
                )
              }        
            </Avatar.Group>
            {productData.likedby.includes(validation.decoded?.user.email) && ` ${productData.likes === 1 && productData.likedby.includes(validation.decoded?.user.email) ? "" : "and"} you`}
            </div>
             {productData.likedby.includes(validation.decoded?.user.email) ? <button disabled={isLoading}  onClick={() => removeFromWishlist(productData._id)} className="link link--light">Remove from wishlist</button>  : <button disabled={isLoading}  onClick={() => addToWishlist(productData._id)} className="link link--light">Add to wishlist</button> }
            </div> */}
           </div>
        </div> 
        }
      </SmallContainer>
    </div>
  )
}

export default SingleShoes