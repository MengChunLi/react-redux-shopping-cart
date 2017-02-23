import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { addToCart, addToFavorite, seeDetail } from '../../actions'
import { getVisibleProducts } from '../../reducers/products'
import ProductItem from '../../components/ProductItem'
import ProductsList from '../../components/ProductsList'

const ProductsContainer = ({ products, addToCart, addToFavorite, seeDetail }) => (
  <ProductsList title="Products">
      {products.map(product =>
        <div key={product.id}>
        <Link to={`/detail/${product.id}`} onClick={() => seeDetail(product.id)}>
        <ProductItem
          product={product}
          onAddToFavoriteClicked={(e, checked) => addToFavorite(e, checked, product.id)}
          onAddToCartClicked={(e) => addToCart(e, product.id)} />
        </Link>
        </div>
      )}
    </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  seeDetail: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps, { addToCart, seeDetail, addToFavorite }
)(ProductsContainer)