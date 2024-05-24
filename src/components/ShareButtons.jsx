import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import PropTypes from 'prop-types';

const ShareButtons = ({ phrase }) => {
  
  return ( 
    <div className="share-buttons">
      <TwitterShareButton url={window.location.href} title={phrase}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={window.location.href} quote={phrase}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
  </div>
  );
}; 

ShareButtons.propTypes = {
  phrase: PropTypes.string.isRequired
}

export default ShareButtons;