import React, { PropTypes } from 'react'
import './ProductContent.css'

const ProductContent = ({ content }) => {
  console.log(content)
  return (
    <div className="prodContent">
      <div className="col">
        <h3 className="title">PRODUCT DETAILS</h3>
        <ul className="desc">
          {content.details.map((item, idx)=><li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div className="col">
        <h3 className="title">BRAND</h3>
        <div className="desc">
          {content.brand}
        </div>
      </div>
    </div>
  )
}

ProductContent.propTypes = {
  content: PropTypes.shape({
    details: PropTypes.array.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired
}

export default ProductContent