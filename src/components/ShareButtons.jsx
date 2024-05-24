import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import PropTypes from 'prop-types';

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