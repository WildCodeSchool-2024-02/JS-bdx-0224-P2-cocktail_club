import "../styles/HomePage.css";
import SeasonCard from "./SeasonCard";
import SectionAllCocktails from "./SectionAllCocktails";
import CocktailsSection from "./CocktailsSection";

function HomePage() {
  return (
    <main>
      <SeasonCard />
      <CocktailsSection />
      <SectionAllCocktails />
    </main>
  );
}

export default HomePage;
