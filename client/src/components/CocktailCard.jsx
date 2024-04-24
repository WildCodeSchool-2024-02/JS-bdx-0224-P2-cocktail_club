import PropTypes from "prop-types";
import OrangeLink from "./OrangeLink";
import "../styles/CocktailCard.css";
import "../styles/SeasonCard.css";
import styles from "../styles/OrangeLink.module.css";

function CocktailCard({ drink }) {
  const { strDrink, strDrinkThumb, idDrink } = drink;

  return (
    <article className="cocktailCard">
      <img src={strDrinkThumb} alt={strDrink} />
      <h2 className="cocktailTitle">{strDrink}</h2>
      <OrangeLink
        name="Show Recipes"
        path={`/cocktails/${idDrink}`}
        classname={styles.orangeButton}
      />
    </article>
  );
}

CocktailCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    idDrink: PropTypes.number.isRequired,
  }).isRequired,
};

export default CocktailCard;
