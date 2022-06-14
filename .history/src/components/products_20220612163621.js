import React, {useState} from 'react';
import Products from '../products.json'

function Product()
{
    const [cart, setCart] = useState([]);

    const handleClick = (items) =>
    {
        setCart(items)
        console.log(items);
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
                  <button onClick={() => handleClick(product)}>Add to cart</button>
              </section>
          )
      })
  )
}

export default Product