import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import FontIcon from 'material-ui/FontIcon'

const badgeStyle = {
  'backgroundColor': '#fb5769',
  'color': 'white',
  'width': '16px',
  'height': '16px',
  'zIndex': 2,
  top: '-5px',
  right: '-10px',
  fontSize: '12px'
}

const BadgeCartTab = ({ cartItemLen, color }) => {
  const badgeContent = cartItemLen > 0 ? cartItemLen : null;
  return (
    <div>
    {badgeContent ? <Badge style={{'padding': '0'}} className="badge" badgeStyle={badgeStyle} badgeContent={badgeContent}>
        <Icon color={color} />
      </Badge> : <Icon color={color} />}
    </div>
  )
}

const Icon = ({ color }) => (
  <FontIcon className="material-icons" color={color}>shopping_cart</FontIcon>
)

export default BadgeCartTab