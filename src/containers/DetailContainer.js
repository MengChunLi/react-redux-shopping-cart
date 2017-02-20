import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getProduct } from '../reducers/products'
import ProductItem from '../components/ProductItem'

const DetailContainer = ({ product }) => (
  <ProductItem
    product={product}
    onAddToCartClicked={() => addToCart(product.id)} />
)

DetailContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

const mapStateToProps = (state, ownProps) => ({ product: getProduct(state.products, ownProps.params.productId) })

export default connect(
  mapStateToProps
)(DetailContainer)