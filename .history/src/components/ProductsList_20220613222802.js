// import React from 'react'
// import data from '../components/products'
// import Cards from '../components/Cards'
// import "../components/css/ProductList.css";

// const ProductsList = ( handleClick) => {
//   return (
//     <section>
//       {data!=null&& data.map((item) => (
//           <Cards key={item.id} name={item.name} price={item.price} availability={item.availability} image={item.image} handleClick={handleClick} />
//       ))}
//     </section>
//   )
// }

// export default ProductsList

import React, { useState } from "react";
import list from "../products";
import Cards from "../components/Cards";
import "../components/css/ProductList.css";

const ProductsList = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductsList;
