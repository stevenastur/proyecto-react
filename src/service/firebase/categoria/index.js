import { categorias } from "../../data";

const getCategorias = async () => {
  return new Promise((resolve, reject) => {
    resolve(categorias);
  });
};

const getCategoria = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(categorias.find((categories) => categories.id === id));
  });
};

export { getCategorias, getCategoria };
