import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const ItemDetail = ({
  id,
  bodega,
  marca,
  cepa,
  precio,
  año,
  corte,
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
          variant="primary"
          onClick={() => navigate(`/vinos/${params.id}`)}
        >
          Ver Vinos
        </Button>
      </Card.Body>
    </Card>
  );
};

export { ItemDetail }

