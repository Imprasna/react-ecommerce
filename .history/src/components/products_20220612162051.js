import React, {useState} from 'react';
import Products from '../products.json'

function products()
{
    const [cart, setCart] = useState([]);

    const handleClick = (product) =>
    {
        console.log(product);
    }

  return (
    //   <h1>products</h1>
      Products.map(product =>
      {
          return (
              <section>
                  <div>
                      <img src={product.image} />
                  </div>
                  <h1> {product.name}</h1>
                  <div>
                      {product.price}
                  </div>
                  <h5>{product.availability}</h5>
                  <button>Add to cart</button>
              </section>
          )
      })
  )
}

export default products