import { Card, Button } from "react-bootstrap";

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
  img,
}) => {



  return (
    <>
      <Card key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{bodega}</Card.Title>
          <Card.Text> {marca}</Card.Text>
          <Card.Text>{cepa}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>
          <Card.Text>Año: {año}</Card.Text>
          <Card.Text>{corte}</Card.Text>
          

          <Button variant="secondary" onClick={verProducto}>
            {textButton}
          </Button>
          
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
