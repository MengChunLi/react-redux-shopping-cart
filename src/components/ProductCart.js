import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import './ProductCart.css'

const ProductCart = ({ price, quantity, title, inventory, img, onRemoveFromCartClicked }) => (
  <div className="ProductCart">
    <div className="prodImg" style={{backgroundImage: `url(${img})`}} />
    <div className="rightBox">
      <IconButton
        // mini
        style={{position: 'absolute'}}
        className="removeFromCart"
        iconClassName = "material-icons md-light"
        // onClick={onAddToCartClicked}
        iconStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
        onTouchTap={onRemoveFromCartClicked}
        >
        delete_forever
      </IconButton>
      <h2 className="prodTitle">{title}</h2>
      <div className="rightBtmBox">
        <span className="price">{price}</span>
        <span className="quantity">{quantity ? ` x ${quantity}` : null}</span>
      </div>
    </div>
  </div>
)

ProductCart.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default ProductCart