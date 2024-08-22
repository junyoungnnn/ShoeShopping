import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
