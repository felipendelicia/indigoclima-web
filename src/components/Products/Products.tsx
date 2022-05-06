import React from 'react'

import "./Products.css"

interface productsProps {
  name:string,
  imgsrc:string
}

const Products = (props:productsProps) => {
  return (
    <div className="products-container">
      <div className="product">
        <div className="product-img-container">
          <img className="product-img" src={props.imgsrc} alt={props.name}/>
        </div>
        <div className="product-button-description">
          <div className="product-description">
          </div>
          <div className="product-button">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products