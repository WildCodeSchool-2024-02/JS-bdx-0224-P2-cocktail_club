import PropTypes from "prop-types";

function CocktailDetails({ cocktail }) {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = cocktail;

  return (
    <section className="cocktailDetails">
      <img src={strDrinkThumb} alt={strDrink} />
      <article>
        <h2 className="cocktailTitle">{strDrink}</h2>
        <h3>Ingredients :</h3>
        <ul>
          <li>{`- ${strIngredient1}`}</li>
          <li>{`- ${strIngredient2}`}</li>
          <li>{`- ${strIngredient3}`}</li>
        </ul>
        <h3>Instructions :</h3>
        <p>{strInstructions}</p>
      </article>
    </section>
  );
}

CocktailDetails.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strIngredient1: PropTypes.string.isRequired,
    strIngredient2: PropTypes.string.isRequired,
    strIngredient3: PropTypes.string.isRequired,
  }).isRequired,
};

export default CocktailDetails;
