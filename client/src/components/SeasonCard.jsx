import PropTypes from 'prop-types';

import "../styles/SeasonCard.css";
import OrangeButton from "./OrangeButton"; 

function SeasonCard({ image, season }) {
  return (
    <article className="card">
      <img src={image} alt={season} /> {/* Use the image and season props */}
      <h2>{season}</h2>
      <OrangeButton text={season} />
    </article>
  );
}

SeasonCard.propTypes = {
  image: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired
};

export default SeasonCard;

