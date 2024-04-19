import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";

function CategoryPage() {
  const { id } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [seasonTitle, setSeasonTitle] = useState("");

  async function fetchCocktailsBySeason(ingredient) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.drinks.slice(0, 10);
  }

  useEffect(() => {
    let ingredient;
    let title;
    switch (id) {
      case "summer":
        ingredient = "Pineapple juice";
        title = "Summer Cocktails";
        break;
      case "autumn":
        ingredient = "Blended whiskey";
        title = "Autumn Cocktails";
        break;
      case "winter":
        ingredient = "Kahlua";
        title = "Winter Cocktails";
        break;
      case "spring":
        ingredient = "Sweet Vermouth";
        title = "Spring Cocktails";
        break;
      default:
        ingredient = "";
        title = "";
    }

    setSeasonTitle(title);

    const getCocktails = async () => {
      const selectedCocktails = await fetchCocktailsBySeason(ingredient);
      setCocktails(selectedCocktails);
    };

    getCocktails();
  }, [id]);

  return (
    <main className="categoryPage">
      {cocktails.length > 0 && <h2>{seasonTitle}</h2>}
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} drink={cocktail} />
      ))}
    </main>
  );
}

export default CategoryPage;
