import React, { useContext } from "react";
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
    <div className="cart-container">
      <div>Items en el carrito: {quantity}</div>
      <div>Total: ${totalPrecio}</div>
      <Button onClick={() => console.log(cart)}>Checkout</Button>
    </div>
  </>
)
};

export { Shoppingcart };
