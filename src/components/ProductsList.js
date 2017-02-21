import React, { PropTypes } from 'react'
import GridList from 'material-ui/GridList'

const ProductsList = ({ title, children }) => (
  <div style={{marginTop: 8}}>
    <GridList>{children}</GridList>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList