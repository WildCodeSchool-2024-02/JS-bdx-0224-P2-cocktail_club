import "../styles/HomePage.css";
import SeasonCard from "./SeasonCard";
import AllCocktails from "./AllCocktails";
import CocktailsSection from "./CocktailsSection";

function HomePage() {
  return (
    <main>
      <SeasonCard />
      <CocktailsSection />
      <AllCocktails />
    </main>
  );
}

export default HomePage;
