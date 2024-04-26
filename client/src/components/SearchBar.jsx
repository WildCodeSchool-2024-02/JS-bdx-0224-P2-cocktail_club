import PropTypes from "prop-types";
import "../styles/SearchBar.css";

function SearchBar({ initialCocktailList, setCocktails }) {
  const handleSubmit = (event) => event.preventDefault();
  function handleChange(event) {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue === "") {
      return setCocktails(initialCocktailList);
    }

    const filteredCocktails = initialCocktailList.filter((cocktail) =>
      cocktail.strDrink.toLowerCase().includes(searchValue)
    );
    setCocktails(filteredCocktails);

    if (filteredCocktails.length === 0) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCocktails(data.drinks ? data.drinks : []);
        });
    }
    return true;
  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <label htmlFor="searchCocktail" className="SearchBar-label">
        Search cocktail :
      </label>
      <input
        id="searchCocktail"
        name="searchCocktail"
        type="search"
        placeholder="   Find your cocktail...      🔎"
        onChange={handleChange}
        className="SearchBar-input"
      />
    </form>
  );
}

SearchBar.propTypes = {
  initialCocktailList: PropTypes.arrayOf.isRequired,
  setCocktails: PropTypes.func.isRequired,
};

export default SearchBar;
