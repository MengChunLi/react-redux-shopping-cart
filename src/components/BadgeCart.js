import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'

const badgeStyle = {
  'backgroundColor': '#fb5769',
  'color': 'white',
  'width': '20px',
  'height': '20px',
  'zIndex': 2
    // top: '10px',
    // right: '10px',
}

const BadgeCart = ({ cartItemLen }) => {
  const badgeContent = cartItemLen > 0 ? cartItemLen : null;
  return (<div>
    {badgeContent ? <Badge style={{'padding': '0'}} className="badge" badgeStyle={badgeStyle} badgeContent={badgeContent}>
        <Icon />
      </Badge> : <Icon />}
  </div>)
}

const Icon = () => (
  <IconButton>
    <i className="material-icons md-light">shopping_cart</i>
  </IconButton>
)

BadgeCart.PropTypes = {
  cartItemLen: PropTypes.number
}

export default BadgeCart