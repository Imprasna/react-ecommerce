import React, { useState, useEffect } from "react";
import "../components/css/cart.css";
import Pincode from '../pincodes.json';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    console.log(cart.map((item) => (item.amount * item.price)))
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>  

          <div>
            <button type="button" onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button type="button" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button type="button" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

      <input type="text" placeholder="Search Pincode" onChange={e => setSearchTerm(e.target.value)} /> 

      <div>
        {Pincode.filter((value) =>
        {
          if (searchTerm === " ") {
            return value;
          } else if (value.code.toString().includes(searchTerm.toString())) {
            
            <p>(value.charge + price) </p>}            return value;
          }
        })
          .map((pin) =>
            (
            <p onClick={() => handlePrice(setPrice(pin.charge))}> {pin.code} </p>
            
      ))}
          </div>
    </article>
  );
};

export default Cart;
