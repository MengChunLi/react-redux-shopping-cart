import React from 'react'
import ProductsContainer from './ProductsContainer'
import Wrapper from './Wrapper'
import ProdToolbarContainer from './ProdToolbarContainer'


const Home = () => (
  <div>
    <Wrapper selectedIndex={0}>
      <ProdToolbarContainer />
      <ProductsContainer />
    </Wrapper>
  </div>
)

export default Home