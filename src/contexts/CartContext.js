import { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Estado para almacenar los productos en el carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para remover un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    // Proveer el estado del carrito y las funciones para modificarlo
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};