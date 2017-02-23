import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, addToFavorite } from '../actions'
import ProductItem from '../components/ProductItem'
import ProductContent from '../components/ProductContent'
import Wrapper from './partial/Wrapper'

const DetailContainer = ({ product, addToCart, addToFavorite }) => (
  <Wrapper selectedIndex={0}>
    <ProductItem
      ImgStyle={{ height: '300px' }}
      product={product}
      onAddToFavoriteClicked={(e, checked) => addToFavorite(e, checked, product.id)}
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
  addToCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { product: state.detail }
}

export default connect(
  mapStateToProps, { addToCart, addToFavorite }
)(DetailContainer)