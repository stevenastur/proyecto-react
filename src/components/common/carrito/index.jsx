import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/cart-context";
import { Button } from "react-bootstrap";



const Shoppingcart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrecio = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.precio,
   0
   );

  return (
      <>
      <div>Items en el carrito: {quantity}</div>
      <div>Total: ${totalPrecio}</div>
      <div>{cart}</div>
      <Button onClick={() => console.log(cart)}>Checkout</Button>
  </>
)
};

export { Shoppingcart };
