import PropTypes from 'prop-types';

const Message = ({ dataPhrase, dataAuthor, animation }) => {
    
    return (
      <div className={`${animation}`}>
        <img src="./cokieimg.png" alt="Imagen de una galleta de la suerte" />
          <div className="card-content ">
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

  {/* <div className='container__paper'>
        <div className={animation} >
            <p>{dataPhrase}</p>
        </div>
            <p>{dataAuthor}</p>
        </div> */}