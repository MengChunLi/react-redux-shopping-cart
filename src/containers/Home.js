import React from 'react'
import ProductsContainer from './partial/ProductsContainer'
import Wrapper from './partial/Wrapper'
import ProdToolbarContainer from './partial/ProdToolbarContainer'


const Home = () => (
	<div>
    <Wrapper selectedIndex={0}>
      <ProdToolbarContainer />
      <ProductsContainer />
    </Wrapper>
  </div>
)

export default Home