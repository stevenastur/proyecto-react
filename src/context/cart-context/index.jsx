import { createContext, useState } from "react";

const CartContext = createContext(null);

const CarritoCompras = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={[carrito, setCarrito]}>
      {children}
    </CartContext.Provider>
  );
};

export { CarritoCompras , CartContext };
