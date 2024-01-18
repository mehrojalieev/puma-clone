import React from 'react'
import { useParams } from 'react-router-dom'
const SingleShoes = () => {
    const {id} = useParams()
    console.log(id);
    
  return (
    <div>SingleShoes</div>
  )
}

export default SingleShoes