
const ItemDetailContainter = ({  id,
  bodega,
  marca,
  cepa,
  precio,
  año,
  corte,
}) => {

  return (
    <>
    <h1>{id}</h1>
    <h1>{bodega}</h1>
    <h1>{marca}</h1>
    <h1>{cepa}</h1>
    <h1>{precio}</h1>
    <h1>{año}</h1>
    <h1>{corte}</h1>
    </>

    // <Card key={id}>
    //   <Card.Body>
    //     <Card.Title>{nombre}</Card.Title>
    //     <Card.Text>{historia}</Card.Text>
    //     <Card.Text>{genero}</Card.Text>
    //     <Card.Text>{estado}</Card.Text>
    //     <Card.Text>{ocupacion}</Card.Text>
    //   </Card.Body>
    // </Card>
  )
}

export { ItemDetailContainter };



