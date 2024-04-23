import "../styles/SectionAllCocktails.css";
import OrangeLink from "./OrangeLink";
import styles from "../styles/OrangeLink.module.css";

function SectionAllCocktails() {
  return (
    <section className="allCocktailsSection">
      <img
        src="./src/assets/images/allcocktails.svg"
        alt="A plate with many cocktails of different colors"
      />
      <h2>All of Cocktail Club</h2>
      <p>Discover all the beverages from Cocktail Club</p>
      <OrangeLink
        name="Check all Cocktails"
        path="allCocktails"
        classname={styles.orangeButton}
      />
    </section>
  );
}

export default SectionAllCocktails;
