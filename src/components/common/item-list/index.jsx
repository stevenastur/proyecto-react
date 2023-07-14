import { Col, Row } from "react-bootstrap";
import { Item } from "../item";
import './style.css';


const ItemList = ({ items }) => {

  // const mosquitaMuerta = "gs://vinos-705de.appspot.com/mosquita-muerta.jpeg";
  // const Rutini = "gs://vinos-705de.appspot.com/Rutini.jpeg";
  // const cuvelierLosAndes  = "gs://vinos-705de.appspot.com/Cuvelier Los Andes Colección Blend.jpeg";
  // const mythic = "gs://vinos-705de.appspot.com/Mythic Barrel.jpeg";
  // const Trumpeter  = "gs://vinos-705de.appspot.com/Trumpeter.jpeg";

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id} className="tarjeta">
          <Item imageUrl={item.imageUrl} {...item} />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
