import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getAddedIdsLen } from '../reducers'
import TopBar from '../components/TopBar'

const TopBarContainer = ({ cartItemLen }) => (
  <TopBar cartItemLen={cartItemLen}/>
)

TopBarContainer.PropTypes = {
  cartItemLen: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  cartItemLen: getAddedIdsLen(state)
})

export default connect(mapStateToProps)(TopBarContainer)