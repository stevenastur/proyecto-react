import { Col, Row } from "react-bootstrap";
import { Item } from "../item";
import './style.css';


const ItemList = ({ items }) => {

  return (
    <Row className="tarjetaGrande">
      {items.map((item) => (
        <Col key={item.id} className="tarjeta">
          <Item {...item} />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
