import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ProductCart from './ProductCart'

const Cart = ({ products, total, onCheckoutClicked, removeFromCart, changeQty }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductCart
        img={product.img}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        inventory={product.inventory}
        key={product.id}
        onQtySelected={(val) => changeQty(product.id, val)}
        onRemoveFromCartClicked={()=>removeFromCart(product.id)}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <RaisedButton
        secondary
        style={{width: '180px'}}
        label="Checkout"
        labelColor="#FFF"
        onTouchTap={onCheckoutClicked}
        disabled={hasProducts ? false : true} />
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  removeFromCart: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
}

export default Cart