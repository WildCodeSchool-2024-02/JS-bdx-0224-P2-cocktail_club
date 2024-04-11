import "../styles/CategoryPage.css";
import CocktailCard from "./CocktailCard";

const cocktails = [
  {
    name: "margarita",
    img: "./src/assets/images/image 1.webp",
    description: "c'est bueno",
  },
  {
    name: "Ti-punch",
    img: "./src/assets/images/image 2.webp",
    description: "Ya bon",
  },
  {
    name: "long island",
    img: "./src/assets/images/image 1.webp",
    description: "arsouille",
  },
  {
    name: "whisky",
    img: "./src/assets/images/image 4.webp",
    description: "slante",
  },
];

function CategoryPage() {
  return (
    <main>
      {cocktails.map((cocktail) => (
        <CocktailCard 
        key={cocktail.name}
        cocktail={cocktail} />
      ))}
    </main>
  );
}

export default CategoryPage;
