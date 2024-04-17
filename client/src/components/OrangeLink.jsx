import PropTypes from "prop-types";

function OrangeLink({ season, cocktailName, id }) {
  return (
    <a
      href={season ? `/${season}` : `/cocktail/${id}`}
      className="orange-button"
    >
      {season ? `${season}` : `${cocktailName}`}
    </a>
  );
}

OrangeLink.propTypes = {
  season: PropTypes.string,
  cocktailName: PropTypes.string,
  id: PropTypes.number,
};

OrangeLink.defaultProps = {
  season: "",
  cocktailName: "Default Cocktail",
  id: 0,
};

export default OrangeLink;
