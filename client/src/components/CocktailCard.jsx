import PropTypes from "prop-types";
import OrangeLink from "./OrangeLink";
import "../styles/CocktailCard.css";
import "../styles/SeasonCard.css";
import styles from "../styles/OrangeLink.module.css";

function CocktailCard({ cocktail }) {
  const { name, img, description, id } = cocktail;

  return (
    <article className="cocktailCard">
      <img src={img} alt={name} />
      <h2 className="cocktailTitle">{name}</h2>
      <p>{description}</p>
      <OrangeLink name={name} path={`cocktails/${id}`} class={styles.orangeButton} />
    </article>
  );
}

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CocktailCard;
