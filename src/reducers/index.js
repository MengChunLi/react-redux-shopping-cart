import { combineReducers } from 'redux'
import sort from './sort'
import detail from './detail'
import favorite, * as fromFavorite from './favorite'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  sort,
  cart,
  favorite,
  products,
  detail
})

const getFavoriteIds = state => fromFavorite.getAddedIds(state.favorite)
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
export const getChecked = (state, id) => fromFavorite.getChecked(state.favorite, id)

export const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
  .reduce((total, id) =>
    total + getProduct(state, id).price * getQuantity(state, id),
    0
  )
  .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))


export const getFavoriteProducts = state =>
  getFavoriteIds(state).map(id => ({
    ...getProduct(state, id)
  }))

export const getAddedIdsLen = state => getAddedIds(state).length