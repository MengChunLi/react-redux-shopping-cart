import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import './ProductFavorite.css'

const ProductFavorite = ({ price, title, inventory, img, onRemoveFromFavoriteClicked }) => (
  <div className="ProductFavorite">
    <div className="prodImg" style={{backgroundImage: `url(${img})`}} />
    <div className="rightBox">
      <IconButton
        style={{position: 'absolute'}}
        className="removeFromCart"
        iconClassName="material-icons md-light"
        iconStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
        onTouchTap={onRemoveFromFavoriteClicked}>
        delete_forever
      </IconButton>
      <h2 className="prodTitle">{title}</h2>
      <span className="price">{`\$${price}`}</span>
    </div>
  </div>
)

ProductFavorite.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  inventory: PropTypes.number,
  img: PropTypes.string,
  onRemoveFromFavoriteClicked: PropTypes.func.isRequired,
}

export default ProductFavorite