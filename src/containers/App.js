import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './Home'
import CartContainer from './CartContainer'
import DetailContainer from './DetailContainer'
import 'normalize.css'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>  
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/cart" component={CartContainer} />
      <Route path="/detail/:productId" component={DetailContainer} />
    </Router>
  </MuiThemeProvider>
)

export default App