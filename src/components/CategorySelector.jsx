import PropTypes from 'prop-types';

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