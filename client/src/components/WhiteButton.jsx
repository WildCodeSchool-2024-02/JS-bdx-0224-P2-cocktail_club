import PropTypes from 'prop-types';

function WhiteButton({ text }) {
  return (
    <button type="button" className="white-button">
      {text}
    </button>
  );
}

WhiteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteButton;
