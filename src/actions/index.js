import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = (e, productId) => (dispatch, getState) => {
  e.preventDefault()
    // e.stopPropagation()
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const removeFromCartAction = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const removeFromCart = (productId) => (dispatch) => {
  dispatch(removeFromCartAction(productId))
}

const seeDetailProduct = detail => ({
  type: types.SEE_DETAIL,
  detail
})

export const seeDetail = productId => (dispatch, getState) => {
  shop.getDetail(productId, (detail) => {
    console.log(detail);
    dispatch(seeDetailProduct(detail))
  })
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}