

const data = [
	

	{    "id":1,
		"name": "Product 1",
		"price": 877,
		"availability": 3,
		"image": "https://picsum.photos/200/300",
		"amount":1
	},
	{
		"id":2,
		"name": "Product 2",
		"price": 500,
		"availability": 1,
		"image": "https://picsum.photos/200/300",
		"amount":1

	},
	{
		"id":3,
		"name": "Product 3",
		"price": 990,
		"availability": 2,
		"image": "https://picsum.photos/200/300",
		"amount":1

	},
	{
		"id":4,
		"name": "Product 4",
		"price": 1500,
		"availability": 0,
		"image": "https://picsum.photos/200/300",
		"amount":1
	}
]

export default data

















// import React, {useState} from 'react';
// import Products from '../products'

// function Product()
// {
//     const [cart, setCart] = useState([{}]);

//     const handleClick = (items) =>
//     {
//         cart.push(items);
//         // setCart(...cart, items);
//         console.log(cart);
//     }

//   return (
//     //   <h1>products</h1>
//       Products.map(Data =>
//       {
//           return (
//               <section>
//                   <div>
//                       <img  src={Data.image} alt="product-image"/>
//                   </div>
//                   <h1> {Data.name}</h1>
//                   <div>
//                       {Data.price}
//                   </div>
//                   <h5>{Data.availability}</h5>
//                   <button onClick={() => handleClick(Data)}>Add to cart</button>
//               </section>
//           )
//       })
//   )
// }

// export default Product