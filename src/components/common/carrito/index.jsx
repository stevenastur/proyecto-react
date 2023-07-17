import { useContext, useState } from "react";
import { CartContext } from "../../../context/cart-context";
import { Button, Container, Modal } from "react-bootstrap";
import "./style.css"

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const quantity = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalPrecio = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)
    : 0;

  const finalizarCompra = () => {
    setCart([]);
    setShowModal(true);

    console.log(cart);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="general">
        <div className="letra" >Items en el carrito: {quantity}</div>
        <div className="letra" >Total: ${totalPrecio}</div>
          <span className="letra" >...</span>
        <div>
          {cart &&
            cart.map((item) => (
              <div key={item.id}>
                <span className="letra">
                  {item.bodega}-{item.marca}
                </span>{" "}
                - <span className="letra" >${item.precio}</span>
              </div>
            ))}
        </div>
        <Button onClick={finalizarCompra}>Finalizar compra</Button>

        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Compra exitosa!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Muchas gracias por su compra, vuelva pronto!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export { ShoppingCart };
