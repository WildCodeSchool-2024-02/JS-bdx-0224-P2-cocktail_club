import PropTypes from "prop-types";
import "../styles/SeasonCard.css";
import OrangeLink from "./OrangeLink";

function SeasonCard({ season }) {
  const seasonClassNames = {
    spring: "spring",
    summer: "summer",
    autumn: "autumn",
    winter: "winter",
  };

  const normalizedSeason = season.toLowerCase();
  const seasonClassName = seasonClassNames[normalizedSeason];

  return (
    <article className={`card ${seasonClassName}`} id="seasonClass">
      <OrangeLink
        name={season.toLowerCase()}
        path={`season/${season.toLowerCase()}`}
        className="orange-button"
      />
    </article>
  );
}

SeasonCard.propTypes = {
  season: PropTypes.string.isRequired,
};

export default SeasonCard;
