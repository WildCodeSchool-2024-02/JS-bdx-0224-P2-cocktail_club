import PropTypes from "prop-types";
import OrangeLink from "./OrangeLink";
import "../styles/OrangeLink.css";
import "../styles/CocktailsSection.css";

function CocktailsSection({ idName, source, title, content, path, isReverse }) {
  return (
    <section className="cocktailSection" id={idName}>
      <img
        src={source}
        alt={`${title} cocktail`}
        className={isReverse ? "isReverse" : null}
      />
      <h2>{title}</h2>
      <p>{content} </p>
      <OrangeLink name="Cocktail me!" path={path} className="orangeButton" />
    </section>
  );
}

CocktailsSection.propTypes = {
  idName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isReverse: PropTypes.bool,
};

CocktailsSection.defaultProps = {
  isReverse: null,
};

export default CocktailsSection;
