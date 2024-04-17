import PropTypes from "prop-types";

function OrangeButton({ season, cocktailName, id }) {
  return (
    <a
      href={season ? `/${season}` : `/cocktail/${id}`}
      className="orange-button"
    >
      {cocktailName ? `${cocktailName}` : `${season}`}
    </a>
  );
}

OrangeButton.propTypes = {
  season: PropTypes.string,
  cocktailName: PropTypes.string,
  id: PropTypes.number,
};

OrangeButton.defaultProps = {
  season: PropTypes.string,
  cocktailName: PropTypes.string,
  id: PropTypes.number,
};

export default OrangeButton;
