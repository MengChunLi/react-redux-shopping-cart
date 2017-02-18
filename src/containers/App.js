import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import TopBarContainer from './TopBarContainer'
import 'normalize.css'

const App = () => (
  <MuiThemeProvider>  
    <div>
      <TopBarContainer />
      <ProductsContainer />
      <CartContainer />
    </div>
  </MuiThemeProvider>
)

export default App