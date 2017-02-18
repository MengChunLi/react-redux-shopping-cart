import React, { PropTypes } from 'react'
import GridList from 'material-ui/GridList'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <GridList>{children}</GridList>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList