import { useEffect, useState } from 'react'
import "./Shoes.scss"
import { useDispatch, useSelector } from 'react-redux'
import ApiInstance from '../../api'
import { Container } from '../../styled-component/Styled'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom';
import { ProductTypes } from '../../types';
import shoesFetch from "../../redux/features/product-slice"
const Shoes = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data);



    const [shoesData, setShoesData] = useState([])

    useEffect(() => {
        async function loadData() {
            const response = await ApiInstance("/product/all")
            console.log(response.data.payload.products);
            setShoesData(response.data.payload.products)
        }
        loadData()
    }, [])  

    const handleAddCart: any = (shoes: ProductTypes) => {
        (shoesFetch(shoes))
    }

    return (
        <div className='shoes'>
            <Container>
                <div className="shoes__product-header">
                    <h2>1445 PRODUCTS</h2>
                </div>
                <Divider />
                <div className="shoes__product-wrapper">
                    {
                        shoesData.map((shoes: ProductTypes, index) =>
                            <div key={index} className="shoes-card">
                                <Link className='shoes__image-link' to={`/shoes/${shoes._id}`}>
                                    <img src={shoes.product_images[0]} className='shoes-image' />
                                </Link>
                                <div className="shoes-info">
                                    <h5>{shoes.product_name}</h5>
                                    <strong>${shoes.variants[0].variant_original_price}</strong>
                                </div>
                                <button>BEST SELLER</button>
                                <Stack spacing={1}>
                                    <Rating className='rating-star' name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </Stack>
                                <button onClick={() => handleAddCart(shoes)}>Add to Cart</button>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Shoes