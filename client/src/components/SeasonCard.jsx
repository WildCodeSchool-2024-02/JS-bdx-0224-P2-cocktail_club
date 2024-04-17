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
    <article className={`card ${seasonClassName}`}>
      <OrangeLink
        name={season.toLowerCase()}
        path={`season/${season.toLowerCase()}`}
      />
    </article>
  );
}

SeasonCard.propTypes = {
  season: PropTypes.string.isRequired,
};

export default SeasonCard;
