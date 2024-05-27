import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Contexto para el manejo del tema (claro u oscuro) de la aplicación.
 */
export const ThemeContext = createContext();

/**
 * Proveedor del contexto de tema que permite alternar entre temas claros y oscuros.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Elementos secundarios que serán envueltos por el proveedor
 * @returns {JSX.Element} Elemento JSX que representa el proveedor del contexto de tema
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};