import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Wrapper from './Wrapper'

const Home = () => (
  <div>
    <Wrapper selectedIndex={0}>
      <ProductsContainer />
    </Wrapper>
  </div>
)

export default Home