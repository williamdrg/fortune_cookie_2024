import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import PropTypes from 'prop-types';

/**
 * Componente que proporciona botones para compartir una frase en Facebook y Twitter.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {string} props.phrase - La frase que se va a compartir
 * @returns {JSX.Element} Elemento JSX que representa los botones de compartir
 */
const ShareButtons = ({ phrase }) => {
  const shareUrl = window.location.href;

  return (
    <div className="share-buttons">
      <TwitterShareButton url={shareUrl} title={phrase}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} quote={phrase}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </div>
  );
};

ShareButtons.propTypes = {
  phrase: PropTypes.string.isRequired
}

export default ShareButtons;