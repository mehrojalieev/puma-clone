import { Container } from "../../styled-component/Styled"
import "./FeatureCategory.scss"
import useFetch from "../../helpers/hooks/useFetch"
import { ProductTypes } from "../../types"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const FeatureCategory = () => {
   const {data} = useFetch("/product/all")
   console.log(data);
   
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
        spaceBetween={40}
        centeredSlides={true}
        // slidesPerView={3.50}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="feature-swiper mySwiper"
      >
        {
          data?.products?.map((feature: ProductTypes) =>
              <SwiperSlide className="feature__product-slide" key={feature._id}>
                  <img  src={feature?.product_images[1]} alt={feature.product_name} />
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