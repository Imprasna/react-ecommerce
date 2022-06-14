import React from 'react';
import Products from '../products.json'

function products() {
  return (
    //   <h1>products</h1>
      Products.map(product =>
      {
          return (
              <div>
                  <div>
                      <img src={product.image} />
                  </div>
                  <h1> {product.name}</h1>
                  <div>
                      {product.price}
                  </div>
                  <h5>{product.availability}</h5>
                  <button
              </div>
          )
      })
  )
}

export default products