import PropTypes from 'prop-types';

const Message = ({ dataPhrase, dataAuthor, animation }) => {
    
    return (
      <div className={`${animation}`}>
        <img src="./cokieimg.png" alt="Imagen de una galleta de la suerte" />
          <div className="card-content">
            <p className="card-title">{dataAuthor}</p>
            <p className="card-description">{dataPhrase}</p>
            {dataAuthor === 'Kelly' ? <img src="./kelly.png" className='kelly' width='200px' alt="kelly" /> : ''}
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
