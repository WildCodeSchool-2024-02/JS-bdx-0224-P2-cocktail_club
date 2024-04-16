import SeasonCard from "./SeasonCard";
import AllCocktails from "./AllCocktails";
import CocktailsSection from "./CocktailsSection";
import Api from "./Api";

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
      <Api />
    </main>
  );
}

export default HomePage;
