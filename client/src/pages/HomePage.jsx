import "../styles/HomePage.css";
import SeasonCard from "../components/SeasonCard";
import AllCocktails from "../components/AllCocktails";
import CocktailsSection from "../components/CocktailsSection";

function HomePage() {
  return (
    <main className="homePage">
      <SeasonCard />
      <CocktailsSection />
      <AllCocktails />
    </main>
  );
}

export default HomePage;
