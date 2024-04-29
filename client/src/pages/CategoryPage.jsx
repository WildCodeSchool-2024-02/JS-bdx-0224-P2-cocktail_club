import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";
import SearchBar from "../components/SearchBar";

function CategoryPage() {
  const initialCocktailList = useLoaderData();
  const [cocktails, setCocktails] = useState(initialCocktailList);

  useEffect(() => {
    setCocktails(initialCocktailList);
  }, [initialCocktailList]);

  return (
    <main className="categoryPage">
      <SearchBar
        setCocktails={setCocktails}
        initialCocktailList={initialCocktailList}
      />
      {cocktails.length > 0 ? (
        cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} drink={cocktail} />
        ))
      ) : (
        <h2> Sorry... No cocktail found</h2>
      )}
    </main>
  );
}

export default CategoryPage;
