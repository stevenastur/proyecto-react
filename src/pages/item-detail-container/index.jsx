import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainter = ({
  id,
  nombre,
  historia,
  genero,
  estado,
  ocupacion,
}) => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{historia}</Card.Text>
        <Card.Text>{genero}</Card.Text>
        <Card.Text>{estado}</Card.Text>
        <Card.Text>{ocupacion}</Card.Text>

        <Button
          variant="primary" onClick={() => navigate(`/personajes/id${params.id}`)}
        >
          Ver personaje
        </Button>
      </Card.Body>
    </Card>
  );
};

export { ItemDetailContainter };
