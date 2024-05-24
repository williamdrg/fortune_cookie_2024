import PropTypes from 'prop-types';

const Button = ({ change, pp, addFavorite, toggleShowFavorites, isVisible, createFhrase}) => {
        
  return (
      <div>
          <button className={pp} onClick={ change }>Ver otro</button>
          <button className={pp} onClick={addFavorite}>Guardar Favorito</button>
          <button className={pp} onClick={toggleShowFavorites}>Ver Favoritos</button>
          <button className={isVisible} onClick={createFhrase}>Añadir Frase</button>
      </div>
  );
};

Button.propTypes = {
  change: PropTypes.func.isRequired,
  pp: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  toggleShowFavorites: PropTypes.func.isRequired,
  isVisible: PropTypes.string.isRequired,
  createFhrase: PropTypes.func.isRequired,
};

export default Button;