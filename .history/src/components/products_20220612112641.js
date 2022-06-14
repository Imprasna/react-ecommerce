import React from 'react';
import Products from '../products.json'

function products() {
  return (
      <h1>products</h1>
      Products.map(product =>
      {
          return (
              <div>
                 <h1> key={ product.name}</h1>
              </div>
          )
      })
  )
}

export default products