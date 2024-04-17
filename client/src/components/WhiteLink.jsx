import PropTypes from "prop-types";

function WhiteLink({ text }) {
  return (
    <button type="button" className="white-button">
      {text}
    </button>
  );
}

WhiteLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteLink;
