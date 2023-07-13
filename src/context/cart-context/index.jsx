import { createContext, useState } from "react";

const CartContext = createContext([]);

const CarritoCompras = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const newCart = [...currentCart, { ...product, quantity: 1 }];
      return newCart;
    });
  };
  

  const removerItem = (id) => {
    setCart((currentCart) => {
      const itemIndex = currentCart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedCart = [...currentCart];
        updatedCart.splice(itemIndex, 1);
        return updatedCart;
      }
      return currentCart;
    });
  };
  

  const getQuantityById = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const contextValue = {
    cart,
    addToCart,
    removerItem,
    getQuantityById,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CarritoCompras };

