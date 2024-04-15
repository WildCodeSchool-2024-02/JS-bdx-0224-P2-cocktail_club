import PropTypes from 'prop-types';
import "../styles/SeasonCard.css";
import OrangeButton from "./OrangeButton"; 

function SeasonCard({ season }) {
  let seasonClassName;

  switch (season.toLowerCase()) {
    case "spring":
      seasonClassName = "spring";
      break;
    case "summer":
      seasonClassName = "summer";
      break;
    case "autumn":
      seasonClassName = "autumn";
      break;
    case "winter":
      seasonClassName = "winter";
      break;
    default:
      seasonClassName = "";
  }

  return (
    <article className={`card ${seasonClassName}`}>
      <OrangeButton season={season} />
    </article>
  );  
}

SeasonCard.propTypes = {
  season: PropTypes.string.isRequired
};

export default SeasonCard;
