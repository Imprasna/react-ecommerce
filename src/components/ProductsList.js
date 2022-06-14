import React from "react";
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
