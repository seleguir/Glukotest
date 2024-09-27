import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import Contact from './components/Contact'; 
import './App.css';

function App() {
  return (
    <ThemeProvider>  
      <CartProvider>
        <div>
          <Header />  
          <ProductList />
          <Cart />  
          <Contact />  
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
