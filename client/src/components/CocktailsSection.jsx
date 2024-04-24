import OrangeLink from "./OrangeLink";
import styles from "../styles/OrangeLink.module.css";
import "../styles/CocktailsSection.css";

function CocktailsSection() {
  return (
    <main>
      <section className="popularCocktailSection">
        <article>
          <img
            src="./src/assets/images/popular coktail.webp"
            alt="Popular cocktails"
          />
          <h2>
            POPULAR <br />
            COCKTAILS
          </h2>
        </article>
        <p>Discover popular cocktails </p>
        <OrangeLink
          name="Cocktail me!"
          path="popularcocktails"
          classname={styles.orangeButton}
        />
      </section>
      <section className="randomCocktailSection">
        <article>
          <img
            src="./src/assets/images/random coktail.webp"
            alt="Surprise cocktail"
          />
          <h2>
            RANDOM <br />
            COCKTAIL
          </h2>
        </article>
        <p>Discover a surprise cocktail </p>
        <OrangeLink
          name="Cocktail me!"
          path="randomcocktail"
          classname={styles.orangeButton}
        />
      </section>
      <section className="nonAlcoholicSection">
        <article>
          <img
            src="./src/assets/images/mocktail.webp"
            alt="A plate with many cocktails of different colors"
          />
          <h2>MOCKTAIL</h2>
        </article>
        <p>Be proud to taste the future </p>
        <OrangeLink
          name="Cocktail me!"
          path="mocktails"
          classname={styles.orangeButton}
        />
      </section>
    </main>
  );
}

export default CocktailsSection;
