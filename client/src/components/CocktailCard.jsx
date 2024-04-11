import "../styles/CocktailCard.css";
import PropTypes from "prop-types";

// import OrangeButton from './OrangeButton'

function CocktailCard({ cocktail }) {
    const { name, img, description } = cocktail;

    return (
        <article className="cocktailCard">
            <img src={img} alt={name} />
            <h2 className="cocktailTitle">{name}</h2>
            <p>{description}</p>
            {/* button */}
        </article>
    );
}

CocktailCard.propTypes = {
    cocktail: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}

export default CocktailCard;
