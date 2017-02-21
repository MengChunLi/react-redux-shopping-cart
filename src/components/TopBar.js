import React, { PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import BadgeCart from './BadgeCart'
import './TopBar.css'

const TopBar = ({ cartItemLen }) => {
  return (
    <AppBar style={{cursor: 'pointer'}} className="appBar" title="Shopping go" onTitleTouchTap={() => browserHistory.push('/')}>
      <Link to='/cart'>
        <BadgeCart cartItemLen={cartItemLen} />
      </Link>
    </AppBar>
  )
}

export default TopBar