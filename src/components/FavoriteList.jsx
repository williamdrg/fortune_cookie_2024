import PropTypes from 'prop-types';

/**
 * Componente que muestra una lista de frases favoritas con la opción de eliminar cada una.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {Array<{phrase: string, author: string}>} props.favorites - Lista de frases favoritas
 * @param {function} props.removeFavorite - Función para eliminar una frase de la lista de favoritas
 * @returns {JSX.Element} Elemento JSX que representa la lista de frases favoritas
 */
const FavoriteList = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorite-list">
      <h2>Mis Frases Favoritas</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <p>{favorite.phrase}</p>
            <p>{favorite.author}</p>
            <button onClick={() => removeFavorite(favorite.phrase)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FavoriteList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    phrase: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired,
  removeFavorite: PropTypes.func.isRequired
};

export default FavoriteList;