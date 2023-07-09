import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CarritoCompras = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={[carrito, setCarrito]}>
      {children}
    </CartContext.Provider>
  );
};

export { CarritoCompras };
