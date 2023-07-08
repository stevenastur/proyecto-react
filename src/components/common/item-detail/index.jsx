import { Card } from 'react-bootstrap'


const ItemDetail = ({id, nombre, historia, genero, estado, ocupacion}) => {

  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{historia}</Card.Text>
        <Card.Text>{genero}</Card.Text>
        <Card.Text>{estado}</Card.Text>
        <Card.Text>{ocupacion}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export { ItemDetail }

