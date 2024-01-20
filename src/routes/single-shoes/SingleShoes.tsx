import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from '../../styled-component/Styled';
import ApiInstance from '../../api';
import { ProductTypes } from '../../types';


const SingleShoes = () => {
    const {id} = useParams()
    const [singleData, setSingleData] = useState([])

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
    
  return (
    <div>
      <Container>
        <div className="single-wrapper">
            {
              singleData.map((data: ProductTypes) =>
                  <img src={data.product_images[0]} alt="" />
                )
            }
        </div>
      </Container>
    </div>
  )
}

export default SingleShoes