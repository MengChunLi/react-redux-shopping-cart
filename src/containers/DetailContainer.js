import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getProduct } from '../reducers'
import ProductItem from '../components/ProductItem'
import Wrapper from './Wrapper'

const DetailContainer = ({ product }) => (
  <Wrapper selectedIndex={0}>
  <ProductItem
    product={product}
    onAddToCartClicked={() => addToCart(product.id)} />
    </Wrapper>
)

DetailContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { product: state.detail }
}

export default connect(
  mapStateToProps
)(DetailContainer)