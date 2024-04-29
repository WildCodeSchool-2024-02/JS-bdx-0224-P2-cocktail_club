import "../styles/SectionAllCocktails.css";
import { Link } from "react-router-dom";
import OrangeLink from "./OrangeLink";
import "../styles/OrangeLink.css";

function SectionAllCocktails() {
  return (
    <section className="allCocktailsSection" id="allCocktails">
      <Link to="/allCocktails" className="allCocktailImg">
        <img
          src="./src/assets/images/allcocktails.svg"
          alt="A plate with many cocktails of different colors"
          className="allCocktailImg"
        />
      </Link>
      <h2>All of Cocktail Club</h2>
      <p>Discovered all beverages from Cocktail Club</p>
      <OrangeLink
        name="Check all Cocktails"
        path="allCocktails"
        className="orangeButton"
      />
    </section>
  );
}

export default SectionAllCocktails;
