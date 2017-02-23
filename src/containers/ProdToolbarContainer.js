import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { onSelectSort } from '../actions'
import ProdToolbar from '../components/ProdToolbar'

const ProdToolbarContainer = ({ options, selected, onSelectSort }) => (
  <ProdToolbar options={options} selected={selected} onSelectSort={onSelectSort}/>
)

ProdToolbarContainer.PropTypes = {
  options: PropTypes.shape({
    val: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  selected: PropTypes.number.isRequired,
  onSelectSort: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  options: state.sort.options,
  selected: state.sort.selected
})

export default connect(mapStateToProps, { onSelectSort })(ProdToolbarContainer)