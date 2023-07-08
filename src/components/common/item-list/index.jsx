import { Col, Row } from "react-bootstrap";
import { ItemDetail } from "../item-detail";


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
