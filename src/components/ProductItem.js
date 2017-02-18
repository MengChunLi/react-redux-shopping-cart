import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Product from './Product'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="prodBox">
    <Product
      img={product.img}
      title={product.title}
      price={product.price}
      inventory={product.inventory}
      onAddToCartClicked={onAddToCartClicked} />
      <RaisedButton
      className="addToCart"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </RaisedButton>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem