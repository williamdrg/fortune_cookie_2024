import PropTypes from 'prop-types';

/**
 * Componente de modal para mostrar un mensaje cuando una frase es añadida a favoritos.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {boolean} props.isOpen - Indica si el modal está abierto
 * @param {function} props.onClose - Función para cerrar el modal
 * @param {string} props.message - Mensaje a mostrar en el modal
 * @returns {JSX.Element|null} Elemento JSX que representa el modal o `null` si no está abierto
 */
const AddFavoriteModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

AddFavoriteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default AddFavoriteModal;
