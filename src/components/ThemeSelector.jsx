import useTheme from '../useTeme';

/**
 * Componente que permite al usuario alternar entre temas claros y oscuros.
 * 
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el selector de tema
 */
const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="theme-selector">
      <input type="checkbox" name="checkbox" className="switch" checked={theme === 'light'} onChange={handleThemeChange}/>
    </div>
  );
};

export default ThemeSelector;
