

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
  )
}

export { ItemDetailContainter };



