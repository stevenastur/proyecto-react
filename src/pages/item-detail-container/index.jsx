import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainter = ({
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
        <Card.Title>{bodega}</Card.Title>
        <Card.Text>{marca}</Card.Text>
        <Card.Text>{cepa}</Card.Text>
        <Card.Text>{precio}</Card.Text>
        <Card.Text>{año}</Card.Text>
        <Card.Text>{corte}</Card.Text>

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

export { ItemDetailContainter };
