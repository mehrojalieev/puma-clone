import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from '../../styled-component/Styled';
import ApiInstance from '../../api';
import { ProductTypes } from '../../types';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { addToCart } from '../../redux/slices/cart-slice';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/store';
import "./SingleShoes.scss"
import { TbTruckDelivery } from "react-icons/tb";
import { IoReloadOutline } from "react-icons/io5";
import { Divider } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";


const SingleShoes = () => {
  const { id } = useParams()
  const [singleData, setSingleData] = useState([])
  const dispatch = useDispatch<AppDispatch>()

  const [addCartLoading, setAddCartLoading] = useState<boolean>(false)
  const handleAddToCart = (product: ProductTypes): void => {
    setAddCartLoading(true)
    console.log(product);

    dispatch(addToCart(product))
  }

  useEffect(() => {
    async function loadData() {
      try {
        const response = await ApiInstance(`/product/${id}`)
        setSingleData(response.data.payload)
        console.log(response.data.payload);
      }
      catch (error) {
        console.log(error);
      }
    }
    loadData()
  }, [])


  useEffect(() => {
     setTimeout(() => {
      setAddCartLoading(false)
    }, 3500)
  }, [])

  return (
    <div className="single-wrapper">
      <Container>
        {
          singleData.map((data: ProductTypes) =>
            <div key={data._id} className="single__data-container">
              <div className="product__grid-image">
                <img src={data.product_images[0]} alt={data.product_name} />
                <img src={data.product_images[1]} alt={data.product_name} />
                <img src={data.product_images[2]} alt={data.product_name} />
              </div>
              <div className="product__content">
                <h2>{data.product_name}</h2>
                <p>{data.description}</p>
                <Stack spacing={1}>
                  <Rating className='rating-star' name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                </Stack>
                <button>BEST SELLER</button>
                <strong>${data.variants[0].variant_original_price}</strong>
                <button className="explore-btn">EXPLORE THIS COLLECTION</button>
                <p className='delivery-text'> <i><TbTruckDelivery /> </i>This item qualifies for free shipping!</p>
                <p className='reload-text'><i><IoReloadOutline /></i> Free returns on all qualifying orders.</p>
                <Divider />
                <div className="card__btn-actions">
                  
                  <button onClick={() => handleAddToCart(data)} style={addCartLoading ? {background: "#9a9c9e", cursor: "not-allowed"} : {background: "#000", cursor: "auto"}} className='addcart-btn'>
                    {
                      !addCartLoading ? "Add To Cart" : <div className="loader"></div>

                    }
                  </button>
                  <button className='addwishlist-btn'>
                    <i><FaRegHeart /></i>
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default SingleShoes