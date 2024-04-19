import SeasonCard from "../components/SeasonCard";

function HomePage() {
  return (
    <main className="homePage">
      <section className="season-section">
        <SeasonCard season="Spring" />
        <SeasonCard season="Summer" />
        <SeasonCard season="Autumn" />
        <SeasonCard season="Winter" />
      </section>
    </main>
  );
}

export default HomePage;
