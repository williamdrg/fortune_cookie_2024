import PropTypes from 'prop-types';
import './AddFavoriteModal.css';

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
