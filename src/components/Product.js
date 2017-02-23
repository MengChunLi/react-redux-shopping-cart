import React, { PropTypes } from 'react'
import './Product.css'

const Product = ({ price, quantity, title, inventory, img, ImgStyle }) => (
  <div className="Product">
    <div className="prodImg" style={{backgroundImage: `url(${img})`, ...ImgStyle}} />
    <div className="btmBox">
      <h2 className="prodTitle">{title}</h2>
      <div className="priceBox">
        <span className="inventory">only {inventory} left</span>
        <span className="price">{`\$ ${price}`}</span>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  ImgStyle: PropTypes.object
}

export default Product