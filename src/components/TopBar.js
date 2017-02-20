import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import BadgeCart from './BadgeCart'
import './TopBar.css'

const TopBar = ({ cartItemLen }) => {
  return (
    <AppBar className="appBar" title="Shopping go">
      <BadgeCart cartItemLen={cartItemLen} />
    </AppBar>
  )
}

export default TopBar