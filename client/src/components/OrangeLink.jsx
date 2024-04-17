import PropTypes from "prop-types";

function OrangeLink({ season }) {
  return (
    <a href={`${season.toLowerCase()}`} className="orange-button">
      {season}
    </a>
  );
}

OrangeLink.propTypes = {
  season: PropTypes.string.isRequired,
};

export default OrangeLink;
