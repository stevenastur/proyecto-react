import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";

const Item = ({
  id,
  bodega,
  marca,
  cepa,
  precio,
  año,
  corte,
  verProducto,
  textButton,
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const enCarrito = currItems.find((item) => item.id === id);
      if (enCarrito) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, precio }];
      }
    });
  };

  const removerItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <>
      <Card key={id}>
        <Card.Body>
          <Card.Title>Bodega: {bodega}</Card.Title>
          <Card.Text>Marca: {marca}</Card.Text>
          <Card.Text>Cepa: {cepa}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>
          <Card.Text>Año: {año}</Card.Text>
          <Card.Text>Corte: {corte}</Card.Text>

          <Button variant="primary" onClick={verProducto}>
            {textButton}
          </Button>
          {quantityPerItem === 0 ? (
            <Button onClick={addToCart}>Agregar al Carrito</Button>
          ) : (
            <Button onClick={addToCart}>+</Button>
          )}
          {quantityPerItem > 0 && <div>Cantidad: {quantityPerItem}</div>}

          {quantityPerItem > 0 && (
            <Button onClick={() => removerItem(id)}>-</Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
