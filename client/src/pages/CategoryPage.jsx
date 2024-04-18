import { useEffect, useState } from "react";
import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";


// const cocktails = [
//   {
//     name: "margarita",
//     img: "./src/assets/images/image 1.webp",
//     description: "c'est bueno",
//     id: 1,
//   },
//   {
//     name: "Ti-punch",
//     img: "./src/assets/images/image 2.webp",
//     description: "Ya bon",
//     id: 2,
//   },
//   {
//     name: "long island",
//     img: "./src/assets/images/image 1.webp",
//     description: "arsouille",
//     id: 3,
//   },
//   {
//     name: "whisky",
//     img: "./src/assets/images/image 4.webp",
//     description: "slante",
//     id: 4,
//   },
// ];

function CategoryPage() {
  const [drinks, setDrinks] = useState([])

    useEffect(
        () => {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                .then(response => response.json())
                .then(data => setDrinks(data.drinks))
                .catch(err => console.error(err))
        },
        []
    )

  return (
    <main className="categoryPage">
      {drinks.map((drink) => (
        <CocktailCard key={drink.idDrink} drink={drink} />
      ))}
    </main>
  );
}

export default CategoryPage;
