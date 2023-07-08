import { Col, Row } from "react-bootstrap";
import { ItemDetailContainter } from "../../../pages";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <ItemDetailContainter {...item} />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
