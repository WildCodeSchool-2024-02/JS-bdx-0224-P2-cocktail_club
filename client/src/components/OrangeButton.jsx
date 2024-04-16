import PropTypes from "prop-types";

function OrangeButton({ season }) {
  return (
    <a href={`${season.toLowerCase()}`} className="orange-button">
      {season}
    </a>
  );
}

OrangeButton.propTypes = {
  season: PropTypes.string.isRequired,
};

export default OrangeButton;
