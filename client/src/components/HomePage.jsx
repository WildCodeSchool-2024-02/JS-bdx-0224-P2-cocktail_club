import "../styles/HomePage.css";
import SeasonCard from "./SeasonCard";
import AllCocktails from "./AllCocktails";
import CocktailsSection from "./CocktailsSection";
import Api from "./Api";

function HomePage() {
  return (
    <main className="homePage">
      <SeasonCard />
      <CocktailsSection />
      <AllCocktails />
      <Api />
    </main>
  );
}

export default HomePage;
