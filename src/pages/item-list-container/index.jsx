import { Button, ButtonGroup, Container } from "react-bootstrap";
import { ItemList } from "../../components/common";
import { useEffect, useState } from "react";
import { getVinos, getCategorias } from "../../service/firebase";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './style.css';


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
        <h5>Filtros:</h5>
        <div className="categoria">
          <ButtonGroup aria-label="Basic example" >
            {categories.map((category) => (
              <div key={category.id}>
                <NavLink to={`/category/${category.id}`}>
                  <Button>{category.nombre}</Button>
                </NavLink>
              </div >
            ))}
          </ButtonGroup >
        </div>
          {nombreBodega} 
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
