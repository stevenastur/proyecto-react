import { Col, Row } from "react-bootstrap";
import { ItemDetail } from "../../../pages";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <ItemDetail {...item} />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
