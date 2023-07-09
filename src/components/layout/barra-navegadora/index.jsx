import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../../../context/cart-context";

const BarraNavegadora = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/vinos">Vinos</Nav.Link>
            <Nav.Link href="/carrito">Carrito
              <li className="text-white">
                Cantidad total: <span className="cart-count">{quantity}</span>
              </li>
            </Nav.Link>


          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { BarraNavegadora };
