import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../../../context/cart-context";

const BarraNavegadora = () => {
  const { cart } = useContext(CartContext);

  const quantity = Array.isArray(cart) ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tienda</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Vinos</Nav.Link>
            <Nav.Link href="/carrito">
              Carrito: <span>{quantity}</span>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { BarraNavegadora };