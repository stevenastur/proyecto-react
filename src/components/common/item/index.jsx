import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


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

  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>Bodega: {bodega}</Card.Title>
        <Card.Text>Marca: {marca}</Card.Text>
        <Card.Text>Cepa: {cepa}</Card.Text>
        <Card.Text>$ {precio}</Card.Text>
        <Card.Text>Año: {año}</Card.Text>
        <Card.Text>Corte: {corte}</Card.Text>

        <Button
          variant="primary" onClick={verProducto}>
          {textButton}
        </Button>
      </Card.Body>
    </Card>
  );
};

export { Item }

