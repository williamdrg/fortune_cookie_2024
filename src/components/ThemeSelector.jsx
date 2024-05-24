import useTheme from '../useTeme';

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
