import { useLoaderData } from "react-router-dom";
import CocktailDetails from "../components/CocktailDetails";
import "../styles/CocktailPage.css";

function CocktailPage() {
  const cocktail = useLoaderData();

  return (
    <main className="cocktailPage">
      <CocktailDetails cocktail={cocktail} key={cocktail.idDrink} />
    </main>
  );
}

export default CocktailPage;
