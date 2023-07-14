import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../../context/cart-context";

const ItemDetail = ({ product }) => {
  const { addToCart, removerItem, quantityPerItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (value) => {
    setQuantity(value);
    addToCart(product);
  };

  const onLess = (value) => {
    setQuantity(value);
    removerItem(product);
  };

  return (
    <Card key={product.id}>
      <Card.Body>
        <Card.Title>Bodega: {product.bodega}</Card.Title>
        <Card.Text>Marca: {product.marca}</Card.Text>
        <Card.Text>Cepa: {product.cepa}</Card.Text>
        <Card.Text>$ {product.precio}</Card.Text>
        <Card.Text>Año: {product.año}</Card.Text>
        <Card.Text>Corte: {product.corte}</Card.Text>

        {quantity === 0 ? (
          <Button onClick={() => onAdd(1)}>Agregar al Carrito</Button>
        ) : (
          <>
            <Button onClick={() => onLess(quantity - 1)}>-</Button>
            {quantity}
            <Button onClick={() => onAdd(quantity + 1)}>+</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export { ItemDetail };



