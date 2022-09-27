import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function handleAddRemoveFromCartClick() {
    setIsInCart((isInCart) => !isInCart)
  }

  const inCart = isInCart ? "in-cart" : "" 
  const addToCart = isInCart ? "Remove From" : "Add To"
  const colour = addToCart ? "yellow" : "grey" 

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} style={{background: colour}} onClick={handleAddRemoveFromCartClick}>{addToCart} Cart</button>
    </li>
  );
}

export default Item;
