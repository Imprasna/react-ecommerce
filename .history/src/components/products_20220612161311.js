import React from 'react';
import Products from '../products.json'

function products() {
  return (
    //   <h1>products</h1>
      Products.map(product =>
      {
          return (
              <s>
                  <div>
                      <img src={product.image} />
                  </div>
                  <h1> {product.name}</h1>
                  <div>
                      {product.price}
                  </div>
                  <h5>{product.availability}</h5>
                  <button>Add to cart</button>
              </s>
          )
      })
  )
}

export default products