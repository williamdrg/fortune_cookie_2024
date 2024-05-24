import PropTypes from 'prop-types';

const Button = ({ change, addFavorite, toggleShowFavorites, isVisible, createFhrase}) => {
        
  return (
      <div>
          <button className={isVisible} onClick={ change }>¡Descubre otra frase!</button>
          <button className={isVisible} onClick={addFavorite}>Guardar en Favoritos</button>
          <button className={isVisible} onClick={toggleShowFavorites}>Ver Favoritos</button>
          <button className={isVisible} onClick={createFhrase}>Añadir Nueva Frase</button>
      </div>
  );
};

Button.propTypes = {
  change: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired,
  isVisible: PropTypes.string.isRequired,
  createFhrase: PropTypes.func.isRequired,
};

export default Button;