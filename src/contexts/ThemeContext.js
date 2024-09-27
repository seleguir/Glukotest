// Tema de la aplicación (modo oscuro y claro)
import React, { createContext, useState } from 'react';

// Crear el contexto del tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);  // Estado para el modo oscuro

  // Función para alternar entre modo oscuro y claro
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  );
};