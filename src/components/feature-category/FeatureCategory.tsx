import { useSelector } from "react-redux"
import { Container } from "../../styled-component/Styled"
import "./FeatureCategory.scss"
import { RootState } from "../../redux/store/store"
import useFetch from "../../helpers/hooks/useFetch"
import { ProductTypes } from "../../types"
const FeatureCategory = () => {
   const {data} = useFetch("/product/reel")
   console.log(data);
   
    
  return (
    <Container>
       <div className="feature-category">
       <h2>FEATURED STYLES</h2>
       <div className="feature__category-container">
        {
            data.slice(0,4).map((i: ProductTypes) => 
                <div key={i._id} className="feature-card">
                    <img src={i.product_images[0]} alt={i.description} />
                    <div className="feature-title"><h2>{i.product_name}</h2></div>
                </div>
                )
        }
       </div>
       </div>
    </Container>
  )
}

export default FeatureCategory