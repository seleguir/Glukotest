// Componente para el encabezado de la página

import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      backgroundColor: isDarkMode ? '#333' : '#f4f4f4',
      color: isDarkMode ? '#fff' : '#000',
      padding: '10px',
      textAlign: 'center'
    }}>
      <h1>Ortopedia GlukoTest</h1>
      <h3>Venta de insumos médicos, productos de ortopedia y rehabilitación.</h3>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
};

export default Header;

