import React from 'react'

import "./Products.css"

interface productsProps {
  name:string,
  imgsrc:string,
  description:string
}

const Products = (props:productsProps) => {
  return (
    <div className="products-container">
      <div className="product">
        <div className="product-img-container">
          <img className="product-img" src={props.imgsrc} alt={props.name}/>
        </div>
        <div className="product-button-description">
          <div className="product-description comfortaafont">
            {props.description}
          </div>
          <div className="product-button comfortaafont">
            <a href="https://wa.me/+5491151395768" target="_blank" rel="noreferrer">
              Consultanos!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products