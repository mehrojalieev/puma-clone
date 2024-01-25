import { useEffect, useState } from 'react'
import "./Shoes.scss"
import ApiInstance from '../../api'
import { Container } from '../../styled-component/Styled'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom';
import { ProductTypes } from '../../types';
import useFetch from '../../helpers/hooks/useFetch';

const Shoes = () => {
    const [shoesData, setShoesData] = useState([])

    useEffect(() => {
        async function loadData() {
            const response = await ApiInstance("/product/all")
            // console.log(response.data.payload.products);
            setShoesData(response.data.payload.products)
        }
        loadData()
    }, [])  

    const data = useFetch("/product/all")
    console.log(data.data.products);
    


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
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Shoes