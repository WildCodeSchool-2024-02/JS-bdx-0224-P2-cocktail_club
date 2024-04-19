import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";

function CategoryPage() {
  const { id } = useParams();
  const [cocktails, setCocktails] = useState([]);

  async function fetchCocktailsBySeason(ingredient) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.drinks.slice(0, 10);
  }

  useEffect(() => {
    let ingredient;
    switch (id) {
      case "summer":
        ingredient = "Pineapple juice";
        break;
      case "autumn":
        ingredient = "Blended whiskey";
        break;
      case "winter":
        ingredient = "Kahlua";
        break;
      case "spring":
        ingredient = "Sweet Vermouth";
        break;
      default:
        ingredient = "";
    }

    const getCocktails = async () => {
      const selectedCocktails = await fetchCocktailsBySeason(ingredient);
      setCocktails(selectedCocktails);
    };

    getCocktails();
  }, [id]);

  return (
    <main className="categoryPage">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} drink={cocktail} />
      ))}
    </main>
  );
}

export default CategoryPage;
