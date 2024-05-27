import PropTypes from 'prop-types';

/**
 * Componente que permite seleccionar una categoría de una lista desplegable.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {string} props.category - Categoría seleccionada actualmente
 * @param {function} props.changeCategory - Función para cambiar la categoría
 * @param {string[]} props.categories - Lista de categorías disponibles
 * @returns {JSX.Element} Elemento JSX que representa el selector de categoría
 */
const CategorySelector = ({ category, changeCategory, categories }) => {

  return (
    <div className="category-selector">
      <label htmlFor="category">Selecciona una categoría: </label>
      <select id="category" value={category} onChange={(e) => changeCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
    </div>
  );
};

CategorySelector.propTypes = {
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategorySelector;