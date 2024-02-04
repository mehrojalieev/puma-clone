import { Container } from "../../styled-component/Styled"
import { Link } from "react-router-dom"
import "./FeatureCategory.scss"
import useFetch from "../../helpers/hooks/useFetch"
import { ProductTypes } from "../../types"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeatureCategory = () => {
   const {data} = useFetch("/product/most-popular")
   const productCarouselData: ProductTypes[] = data;
   console.log(productCarouselData);
   
   
  return (
    <Container> 
        <div className="feature-category">
       <h2>FEATURED STYLES</h2>
       <div className="feature__category-container">
       <Swiper
            pagination={{
            type: 'fraction',
            }}
            loop={true}
            spaceBetween={25}
            centeredSlides={true}
            slidesPerView={3}
            modules={[ Navigation]}
            className="mySwiper"
        >
        {
          productCarouselData &&  productCarouselData.slice(2, 6).map((product, index) => 
                <SwiperSlide key={product._id}>
                    <div className='current-slide-index'>{index + 1 + "/" + data.length}</div>
                    <Link to={`/single-product/${product._id}`}>
                      <img src={product.product_images[0]} alt="" />
                    </Link>
                </SwiperSlide>    
            )
        }
      </Swiper>
        </div>
        </div>
    </Container>
  )
}

export default FeatureCategory