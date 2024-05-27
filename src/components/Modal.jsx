import PropTypes from 'prop-types';

/**
 * Componente de modal que muestra contenido pasado como children cuando está abierto.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {boolean} props.isOpen - Indica si el modal está abierto
 * @param {function} props.onClose - Función para cerrar el modal
 * @param {React.ReactNode} props.children - Contenido a mostrar dentro del modal
 * @returns {JSX.Element|null} Elemento JSX que representa el modal o `null` si no está abierto
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button color-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
