import { Row } from "react-bootstrap";
import { ItemDetailContainter } from "../../../pages";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => {
        return <ItemDetailContainter key={item.id} {...item}/>
        // <Col>
        //   <ItemDetailContainter
        //     id={item.id}
        //     nombre={item.nombre}
        //     historia={item.historia}
        //     imagen={item.imagen}
        //     genero={item.genero}
        //     estado={item.estado}
        //     ocupacion={item.ocupacion}
        //   />
        // </Col>;
      })}
    </Row>
  );
};

export { ItemList };
