import useTheme from '../useTeme';

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="wrapper">
      <input type="checkbox" name="checkbox" className="switch" checked={theme === 'light'} onChange={handleThemeChange}/>
    </div>
  );
};

export default ThemeSelector;

{/* <div className="theme-selector">
      <label htmlFor="theme">Selecciona un tema: </label>
      <select id="theme" value={theme} onChange={handleThemeChange}>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </div> */}