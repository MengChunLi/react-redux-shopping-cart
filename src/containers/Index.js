import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import TopBarContainer from './TopBarContainer'

const Index = () => (
  <div>
    <TopBarContainer />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default Index