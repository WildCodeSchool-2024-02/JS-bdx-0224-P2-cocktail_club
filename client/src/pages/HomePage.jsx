import SeasonCard from "../components/SeasonCard";
import SectionAllCocktails from "../components/SectionAllCocktails";

function HomePage() {
  return (
    <main className="homePage">
      <section className="season-section">
        <SeasonCard season="Spring" />
        <SeasonCard season="Summer" />
        <SeasonCard season="Autumn" />
        <SeasonCard season="Winter" />
      </section>
      <SectionAllCocktails />
    </main>
  );
}

export default HomePage;
