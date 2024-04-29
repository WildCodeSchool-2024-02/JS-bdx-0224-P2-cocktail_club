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

  const ingredients = [strIngredient1, strIngredient2, strIngredient3].filter(
    (ingredient) => ingredient !== null && ingredient.trim() !== ""
  );

  return (
    <section className="cocktailDetails">
      <img src={strDrinkThumb} alt={strDrink} />
      <article>
        <h2 className="cocktailTitle">{strDrink}</h2>
        <h3>Ingredients :</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{`- ${ingredient}`}</li>
          ))}
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
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
  }).isRequired,
};

export default CocktailDetails;
