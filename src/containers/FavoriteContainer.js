import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeFromFavorite } from '../actions'
import { getFavoriteProducts } from '../reducers'
import Wrapper from './partial/Wrapper'
import Favorite from '../components/Favorite'

const FavoriteContainer = ({ products }) => (
  <Wrapper selectedIndex={2}>
    <div style={{padding: '15px'}}>
      <Favorite
        products={products}
        removeFromFavorite={(productId) =>removeFromFavorite(productId)} />
      </div>
  </Wrapper>
)

FavoriteContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
}

const mapStateToProps = (state) => ({
  products: getFavoriteProducts(state)
})

export default connect(
  mapStateToProps, { removeFromFavorite }
)(FavoriteContainer)