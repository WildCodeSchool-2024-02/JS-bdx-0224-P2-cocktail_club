import "../styles/CategoryPage.css";
import CocktailCard from "../components/CocktailCard";

const cocktails = [
  {
    name: "margarita",
    img: "./src/assets/images/image 1.webp",
    description: "c'est bueno",
    id: 1,
  },
  {
    name: "Ti-punch",
    img: "./src/assets/images/image 2.webp",
    description: "Ya bon",
    id: 2,
  },
  {
    name: "long island",
    img: "./src/assets/images/image 1.webp",
    description: "arsouille",
    id: 3,
  },
  {
    name: "whisky",
    img: "./src/assets/images/image 4.webp",
    description: "slante",
    id: 4,
  },
];

function CategoryPage() {
  return (
    <main className="categoryPage">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </main>
  );
}

export default CategoryPage;
