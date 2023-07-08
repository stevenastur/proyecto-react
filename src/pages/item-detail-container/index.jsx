

const ItemDetailContainter = ({
  bodega,
  marca,
  cepa,
  precio,
  año,
  corte,
}) => {



  return (
    <>
    <h1>Bodega:{bodega}</h1>
    <h1>Marca: {marca}</h1>
    <h1>Cepa: {cepa}</h1>
    <h1>$ {precio}</h1>
    <h1>Año: {año}</h1>
    <h1>Corte: {corte}</h1>
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



