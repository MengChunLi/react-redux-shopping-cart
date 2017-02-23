import React, { PropTypes } from 'react'
// import SvgIcon from 'material-ui/SvgIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Checkbox from 'material-ui/Checkbox'
import Product from './Product'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked, onAddToFavoriteClicked, ImgStyle }) => {
  return (
    <div className="prodBox">
      <Product
        img={product.img}
        ImgStyle={ImgStyle}
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <FloatingActionButton
        mini
        className="addToCart"
        backgroundColor={product.inventory > 0 ? '#fff' : '#666'}
        iconStyle={{color: "#333"}}
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? false : true}>
        {product.inventory > 0 ?<i className="material-icons md-light">add_shopping_cart</i>:
        <div>
          <div className="sold">SOLD</div>
          <div className="out">OUT</div>
        </div>}
      </FloatingActionButton>
      <div className="addFavorite" onClick={e => e.preventDefault()}>
        <Checkbox onCheck={(e, checked) => onAddToFavoriteClicked(e, checked)}/>
      </div>
  </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onAddToFavoriteClicked: PropTypes.func.isRequired,
  ImgStyle: PropTypes.object
}

export default ProductItem