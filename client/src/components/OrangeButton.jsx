import PropTypes from 'prop-types';

function OrangeButton({ text }) {
  const handleClick = () => {
  };
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

OrangeButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OrangeButton;
