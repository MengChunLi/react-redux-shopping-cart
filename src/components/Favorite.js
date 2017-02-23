import React, { PropTypes } from 'react'
import ProductFavorite from './ProductFavorite'

const Favorite = ({ products, removeFromFavorite }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductFavorite
        img={product.img}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
        key={product.id}
        onRemoveFromFavoriteClicked={()=>removeFromFavorite(product.id)}
      />
    )
  ) : (
    <em>Please add some products to favorite.</em>
  )
  return (
    <div className="favorite">
      <h3>Your Favorite</h3>
      <div>{nodes}</div>
    </div>
  )
}

Favorite.propTypes = {
  products: PropTypes.array,
  removeFromFavorite: PropTypes.func.isRequired
}

export default Favorite