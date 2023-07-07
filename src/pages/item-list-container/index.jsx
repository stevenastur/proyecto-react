import { Container } from "react-bootstrap";
import { ItemList } from "../../components/common";
import { useEffect, useState } from "react";
import { getPersonajes, getCategorias } from "../../service/firebase";
import { NavLink } from "react-router-dom";

const ItemListContainter = () => {

  const [personajes, setPersonajes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPersonajes().then((data) => {
      console.log(data);
      setPersonajes(data);
    });
  }, []);

  useEffect(() => {
    getCategorias().then((data) => {
      console.log(data)
      setCategories(data);
    });
  }, []);

  return (
    <>
      <Container>
        <div>
          <ul>
            {categories.map((category) => (
              <li key={category.id} >
                <NavLink to={`/category/${category.id}`}>
                  {category.nombre}
                </NavLink>  
              </li>
            ))}
          </ul>
        </div>
        <ItemList items={personajes} />
      </Container>
    </>
  );
};

export { ItemListContainter };
