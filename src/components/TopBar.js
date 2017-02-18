import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import './TopBar.css'

const TopBar = ({ cartItemLen }) => {
  const badgeStyle = {
    'background-color': '#fb5769',
    'color': 'white',
    'width': '20px',
    'height': '20px',
    'z-index': 2
      // top: '10px',
      // right: '10px',
  }
  const badgeContent = cartItemLen > 0 ? cartItemLen : null;
  return (
    <AppBar className="appBar" title="Shopping go">
      {badgeContent ? <Badge style={{'padding': '0'}} className="badge" badgeStyle={badgeStyle} badgeContent={badgeContent}>
        <Icon />
      </Badge> : <Icon />}
    </AppBar>
  )
}

const Icon = () => (
  <IconButton>
    <i className="material-icons md-light">shopping_cart</i>
  </IconButton>
)

export default TopBar