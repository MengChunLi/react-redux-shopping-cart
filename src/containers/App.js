import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { getAllProducts, seeDetail } from '../actions'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Home from './Home'
import CartContainer from './CartContainer'
import DetailContainer from './DetailContainer'
import FavoriteContainer from './FavoriteContainer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'normalize.css'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

store.dispatch(getAllProducts())

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#000',
    accent1Color: '#00AA5B',
    textColor: "#333",
  },
  appBar: {
    height: 50,
  }
})

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>  
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/favorite" component={FavoriteContainer} />
        <Route path="/detail/:productId" component={DetailContainer} onEnter={nextState => store.dispatch(seeDetail(nextState.params.productId))}/>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default App