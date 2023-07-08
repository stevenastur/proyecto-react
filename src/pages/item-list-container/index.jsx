import { Container } from "react-bootstrap";
import { ItemList } from "../../components/common";
import { useEffect, useState } from "react";
import { getVinos, getCategorias } from "../../service/firebase";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ItemListContainter = () => {
  const { nombreBodega } = useParams();
  const navigate = useNavigate();

  const [vinos, setVinos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getVinos(nombreBodega).then((data) => {
      setVinos(data);
    });
  }, [nombreBodega]);

  useEffect(() => {
    getCategorias().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <>
      <Container>
        {nombreBodega}
        <div>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`}>
                  {category.nombre}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <ItemList
          items={vinos.map((vino) => ({
            ...vino,
            verProducto: () => navigate(`/item-detail/${vino.id}`),
            textButton: "Ver producto",
          }))}
        />
      </Container>
    </>
  );
};

export { ItemListContainter };
