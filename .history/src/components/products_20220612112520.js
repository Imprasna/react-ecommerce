import React from 'react';
import Products from '../products.json'

function products() {
  return (
      <h1>products</h1>
      Products && Products.map(product =>
      {
          return (
              <div>
                  key={}
              </div>
          )
      })
  )
}

export default products