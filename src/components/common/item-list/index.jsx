import { Col, Row } from "react-bootstrap";
import { Item } from "../item";


const ItemList = ({ items }) => {

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <Item {...item} />
        </Col>
      ))}
    </Row>
  );
};

export { ItemList };
