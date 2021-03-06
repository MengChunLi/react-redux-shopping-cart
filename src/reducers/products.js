import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, SELECT_SORT_DEFAULT, SELECT_SORT_BY_VALUE_INC, SELECT_SORT_BY_VALUE_DEC } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + action.qty //刪除購物車內的商品，把庫存數量加回去
      }
    case CHANGE_QTY:
      return {
        ...state,
        inventory: state.inventory - action.qtyDiff //改變購物車商品數量，要修改庫存
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case SELECT_SORT_DEFAULT:
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    case SELECT_SORT_BY_VALUE_INC:
      {
        let products = [...action.products]; // 避免sort()改變了原本action.products的值
        return products.sort((a, b) => a.price - b.price).map(product => product.id)
      }
    case SELECT_SORT_BY_VALUE_DEC:
      {
        let products = [...action.products]; // 避免sort()改變了原本action.products的值
        return products.sort((a, b) => b.price - a.price).map(product => product.id)
      }
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) => {
  return state.byId[id]
}

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))