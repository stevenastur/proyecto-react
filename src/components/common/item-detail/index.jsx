import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../../context/cart-context";


const ItemDetail = ({product}) => {

  const [cart, setCart] = useContext(CartContext);

  
  const addToCart = () => {
    setCart((currItems) => {
      const enCarrito = currItems.find((item) => item.id === product.id);
      if (enCarrito) {
        return currItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id: product.id, quantity: 1, precio: product.precio }];
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

  const quantityPerItem = getQuantityById(product.id);


  return (
    <Card key={product.id}>
      <Card.Body>
        <Card.Title>Bodega: {product.bodega}</Card.Title>
        <Card.Text>Marca: {product.marca}</Card.Text>
        <Card.Text>Cepa: {product.cepa}</Card.Text>
        <Card.Text>$ {product.precio}</Card.Text>
        <Card.Text>Año: {product.año}</Card.Text>
        <Card.Text>Corte: {product.corte}</Card.Text>

        {quantityPerItem === 0 ? (
            <Button onClick={addToCart}>Agregar al Carrito</Button>
          ) : (
            <Button onClick={addToCart}>+</Button>
          )}
          {quantityPerItem > 0 && <div>Cantidad: {quantityPerItem}</div>}

          {quantityPerItem > 0 && (
            <Button onClick={() => removerItem(product.id)}>-</Button>
          )}

      </Card.Body>
    </Card>
  );
};

export { ItemDetail }

