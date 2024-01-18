import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from '../../styled-component/Styled';
import ApiInstance from '../../api';
const SingleShoes = () => {
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
    async function loadData() {
      try {
        const response = await ApiInstance(`/${id}`)
        console.log(response);
        
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
          
        </div>
      </Container>
    </div>
  )
}

export default SingleShoes