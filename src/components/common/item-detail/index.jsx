import { Card } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";


const ItemDetail = ({product}) => {
  // const params = useParams();
  // const navigate = useNavigate();

  return (
    <Card key={product.id}>
      <Card.Body>
        <Card.Title>Bodega: {product.bodega}</Card.Title>
        <Card.Text>Marca: {product.marca}</Card.Text>
        <Card.Text>Cepa: {product.cepa}</Card.Text>
        <Card.Text>$ {product.precio}</Card.Text>
        <Card.Text>Año: {product.año}</Card.Text>
        <Card.Text>Corte: {product.corte}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { ItemDetail }

