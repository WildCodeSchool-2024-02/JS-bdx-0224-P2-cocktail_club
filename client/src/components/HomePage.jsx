import SeasonCard from "./SeasonCard";
import AllCocktails from "./AllCocktails";
import CocktailsSection from "./CocktailsSection";

function HomePage() {
  return (
    <main>
      <section className="season-section">
      <SeasonCard season="Spring" />
      <SeasonCard season="Summer" />
      <SeasonCard season="Autumn" />
      <SeasonCard season="Winter" />
      </section>
      <CocktailsSection />
      <AllCocktails />
    </main>
  );
}

export default HomePage;
