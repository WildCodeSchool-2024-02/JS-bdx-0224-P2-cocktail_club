import "../styles/SectionAllCocktails.css";
import OrangeLink from "./OrangeLink";

function SectionAllCocktails() {
  return (
    <section className="allCocktailsSection">
      <img
        src="./src/assets/images/allcocktails.svg"
        alt="A plate with many cocktails of different colors"
      />
      <h2>All of Cocktail Club</h2>
      <p>erbtrngyfgvshtrgvj,ngfnbfdhnf,ghfgvghdg,fgnhfa</p>
      <OrangeLink name="Check all Cocktails" path="allCocktails" />
    </section>
  );
}

export default SectionAllCocktails;
