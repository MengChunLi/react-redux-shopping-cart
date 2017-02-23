import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductItem from '../components/ProductItem'
import ProductContent from '../components/ProductContent'
import Wrapper from './partial/Wrapper'

const DetailContainer = ({ product, addToCart }) => (
  <Wrapper selectedIndex={0}>
    <ProductItem
      ImgStyle={{ height: '300px' }}
      product={product}
      onAddToCartClicked={(e) => addToCart(e, product.id)} />
      <ProductContent content={product.content}/>
    </Wrapper>
)

DetailContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    content: PropTypes.shape({
      details: PropTypes.array.isRequired,
      brand: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { product: state.detail }
}

export default connect(
  mapStateToProps, { addToCart }
)(DetailContainer)