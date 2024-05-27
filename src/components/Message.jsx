import PropTypes from 'prop-types';

/**
 * Componente que muestra un mensaje con una frase y su autor, junto con una animación.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {string} props.dataPhrase - La frase que se va a mostrar
 * @param {string} props.dataAuthor - El autor de la frase
 * @param {string} props.animation - Clase CSS para aplicar la animación al mensaje
 * @returns {JSX.Element} Elemento JSX que representa el mensaje con la frase y su autor
 */
const Message = ({ dataPhrase, dataAuthor, animation }) => {
    
    return (
      <div className={`${animation}`}>
        <img src="./cokieimg.png" alt="Imagen de una galleta de la suerte" />
          <div className="card-content">
            <p className="card-title">{dataAuthor}</p>
            <p className="card-description">{dataPhrase}</p>
          </div>
      </div>

    );
};

Message.propTypes = {
  dataPhrase: PropTypes.string.isRequired,
  dataAuthor: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired
};

export default Message;
