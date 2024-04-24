import { useLoaderData } from "react-router-dom";

function CocktailPage() {
  const cocktail = useLoaderData();

  return (
    <main>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt="random cocktail" />
      <p>{cocktail.strInstructions}</p>
      <ul>
      <li>Ingredients 1:{cocktail.strIngredient1}</li>
      <li>Ingredients 2:{cocktail.strIngredient2}</li>
      <li>Ingredients 3:{cocktail.strIngredient3}</li>
      <li>Ingredients 4:{cocktail.strIngredient4}</li>
      </ul>
      </main>
    
  );
}

export default CocktailPage