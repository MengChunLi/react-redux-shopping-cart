import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import { MenuItem, SelectField } from 'material-ui'
import './ProductCart.css'

const ProductCart = ({ price, quantity, title, inventory, img, onRemoveFromCartClicked, onQtySelected }) => (
  <div className="ProductCart">
    <div className="prodImg" style={{backgroundImage: `url(${img})`}} />
    <div className="rightBox">
      <IconButton
        style={{position: 'absolute'}}
        className="removeFromCart"
        iconClassName="material-icons md-light"
        iconStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
        onTouchTap={onRemoveFromCartClicked}>
        delete_forever
      </IconButton>
      <h2 className="prodTitle">{title}</h2>
      <span className="price">{`\$${price}`}</span>
      <SelectField
        fullWidth
        style={{marginTop: '-10px'}}
        labelStyle={{fontSize: '13px'}}
        floatingLabelText="Qty"
        value={quantity}
        onChange={(e, key, val) => onQtySelected(val)}>
        {[...Array(inventory+quantity).keys()].map(num => <MenuItem key={num+1} value={num+1} primaryText={num+1} label={num+1} />)}
      </SelectField>
    </div>
  </div>
)

ProductCart.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  inventory: PropTypes.number,
  img: PropTypes.string,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onQtySelected: PropTypes.func.isRequired,
}

export default ProductCart