// Componente que muestra una lista de productos relacionados al ecommerce 

import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Silla de ruedas' },
  { id: 2, name: 'Muletas' },
  { id: 3, name: 'Andadores' },
  { id: 4, name: 'Nebulizadores' },
  { id: 5, name: 'Tobilleras' },
  { id: 6, name: 'Sillas para baño' },
  { id: 6, name: 'Calzado ortopédico' },
];

const ProductList = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);  // Importa addToCart del CartContext

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#555' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      padding: '20px',
    }}>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} 
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;