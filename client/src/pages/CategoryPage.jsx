import { useLoaderData } from "react-router-dom";
import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";

function CategoryPage() {
  const cocktails = useLoaderData();

  return (
    <main className="categoryPage">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} drink={cocktail} />
      ))}
    </main>
  );
}

export default CategoryPage;
