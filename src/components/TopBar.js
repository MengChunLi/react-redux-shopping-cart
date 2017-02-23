import React, { PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar'
import BadgeCart from './BadgeCart'
import './TopBar.css'

const TopBar = ({ cartItemLen, muiTheme }) => {
  return (
    <AppBar style={{cursor: 'pointer', backgroundColor: muiTheme.palette.primary1Color}}
      iconElementLeft={<i></i>}
      className="appBar"
      title="Rufina"
      titleStyle={{fontWeight: 'bold'}}
      onTitleTouchTap={() => browserHistory.push('/')}>
      <Link to='/cart'>
        <BadgeCart cartItemLen={cartItemLen} />
      </Link>
    </AppBar>
  )
}

TopBar.PropTypes = {
  cartItemLen: PropTypes.number,
  muiTheme: PropTypes.shape({
    palette: PropTypes.object
  })
}

export default muiThemeable()(TopBar)