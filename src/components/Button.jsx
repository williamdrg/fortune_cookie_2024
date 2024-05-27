import PropTypes from 'prop-types';

/**
 * Componente de botón que proporciona varias acciones para cambiar frases, 
 * añadir a favoritos, mostrar favoritos y añadir nuevas frases.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {function} props.change - Función que cambia la frase actual
 * @param {function} props.addFavorite - Función que añade la frase actual a favoritos
 * @param {function} props.toggleShowFavorites - Función que muestra u oculta los favoritos
 * @param {string} props.isVisible - Clase CSS para controlar la visibilidad del botón
 * @param {function} props.createFhrase - Función que abre el modal para añadir una nueva frase
 * @returns {JSX.Element} Elemento JSX que representa los botones de acción
 */
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