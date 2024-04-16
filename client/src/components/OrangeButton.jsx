import PropTypes from "prop-types";

function OrangeButton({ season }) {
  return (
    <a href={`${season.toLowerCase()}`} className="orange-button">
      <p className="season">{season}</p>
    </a>
  );
}

OrangeButton.propTypes = {
  season: PropTypes.string.isRequired,
};

export default OrangeButton;
