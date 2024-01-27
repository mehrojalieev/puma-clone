import React from 'react'
import "./TrendingCategory.scss"
import { Container } from '../../styled-component/Styled'
const TrendingCategory = () => {
  return (
    <Container>
        <div className="trending-category">
            <h2 className="category-title">NEW IN CLOTHING</h2>
            <div className="trending__category-banner">
                <div className="category-banner">
                    <img src="https://cdn.sanity.io/images/qa41whrn/staging/a060aa4734d6e939f4a31b8474518ac5f6402378-2000x2000.jpg" alt="Trending Image For Men" />
                    <div className='category-info'>
                    <h3 >MEN'S CLOTHING</h3>
                    </div>
                </div>
                <div className="category-banner">
                    <img src="https://cdn.sanity.io/images/qa41whrn/staging/4605ea8be702fbc637c4c409fe729911739e8e65-2000x2000.jpg" alt="Trending Image For Men" />
                    <div className='category-info'>
                    <h3 >WOMEN'S CLOTHING</h3>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default TrendingCategory