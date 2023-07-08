import { Row } from "react-bootstrap";
import { ItemDetailContainter } from "../../../pages";

const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => {
        return <ItemDetailContainter key={item.id} {...item}/>
      })}
    </Row>
  );
};

export { ItemList };
