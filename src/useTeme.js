import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
