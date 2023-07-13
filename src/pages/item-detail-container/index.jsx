import { useEffect, useState } from "react";
import { ItemDetail } from "../../components/common";
import { useParams } from "react-router";
import { getVino } from "../../service/firebase/vinos";

const ItemDetailContainter = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getVino(id).then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export { ItemDetailContainter };
