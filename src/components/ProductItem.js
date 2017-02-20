import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'
import Product from './Product'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="prodBox">
    <Link to={`/detail/${product.id}`}>
      <Product
        img={product.img}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
        onAddToCartClicked={onAddToCartClicked} />
        <RaisedButton
          className="addToCart"
          backgroundColor="#fb5769"
          icon={<i className="material-icons md-light">shopping_cart</i>}
          label={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
          labelStyle={{color: 'white'}}
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
      </RaisedButton>
    </Link>
  </div>
)

const Icon = () => (
  <i className="material-icons md-light">shopping_cart</i>
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