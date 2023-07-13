import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import { Button } from "react-bootstrap";

const ShoppingCart = () => {
  const { carrito, removerItem } = useContext(CartContext);

  const quantity = carrito
    ? carrito.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalPrecio = carrito
    ? carrito.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)
    : 0;

  return (
    <>
      <div>Items en el carrito: {quantity}</div>
      <div>Total: ${totalPrecio}</div>
      <div>
        {carrito &&
          carrito.map((item) => (
            <div key={item.id}>
              <span>{item.nombre}</span> - <span>{item.precio}</span>
            </div>
          ))}
      </div>
      <Button onClick={() => console.log(carrito)}>Finalizar compra</Button>

      {quantity > 0 && (
        <Button onClick={() => removerItem(carrito[0].id)}>-</Button>
      )}
    </>
  );
};

export { ShoppingCart };
