import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Index from './Index'
import CartContainer from './CartContainer'
import DetailContainer from './DetailContainer'
import 'normalize.css'

const App = () => (
  <MuiThemeProvider>  
    <Router history={browserHistory}>
      <Route path="/" component={Index} />
      <Route path="/cart" component={CartContainer} />
      <Route path="/detail/:productId" component={DetailContainer} />
    </Router>
  </MuiThemeProvider>
)

export default App