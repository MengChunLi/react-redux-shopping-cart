import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout, removeFromCart, changeQty } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Wrapper from './partial/Wrapper'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, removeFromCart, changeQty }) => (
  <Wrapper selectedIndex={1}>
    <div style={{padding: '15px'}}>
      <Cart
        products={products}
        total={total}
        changeQty={(productId, val) => changeQty(productId, val)}
        removeFromCart={(productId) =>removeFromCart(productId)}
        onCheckoutClicked={() => checkout(products)} />
      </div>
  </Wrapper>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps, { checkout, removeFromCart, changeQty }
)(CartContainer)