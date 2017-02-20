import React, { PropTypes } from 'react'
import './Product.css'

const Product = ({ price, quantity, title, inventory, img }) => (
  <div className="Product">
    <div className="prodImg" style={{backgroundImage: `url(${img})`}} />
    <div className="btmBox">
      <h2 className="prodTitle">{title}</h2>
      <span className="price">{price}</span>
      <span className="quantity">{quantity ? ` x ${quantity}` : null}</span>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string
}

export default Product