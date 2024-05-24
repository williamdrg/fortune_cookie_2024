import PropTypes from 'prop-types';

const FavoriteList = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorite-list">
      <h2>Frases Favoritas</h2>
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