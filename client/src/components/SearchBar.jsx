import { useState } from "react";

function SearchBar(cocktails) {
  // 0 - créer un usteSTate
  // 1 - créer l'input
  // 2 - on évoute le "onchange" sur l'input
  // 3 - quand la valeur de mon input change : mettre à jorla valeur useState
  // 4 - Je créé un useEffect
  // 5- dans ce useeffect : j'envoie un fetch avec le endpoint "Search cocktail by name"
  // 6- mon useEffect a comme dépendance : le useState

  // const [cocktailName, setCocktailName] = useState("");
  const [cocktailList, setCocktailList] = useState([]);

  const handleChange = (event) => {
    console.info("change");
    console.info(cocktailList);
    const { value } = event.target;
    if (value === "") {
      setCocktailList(cocktails);
    } else {
      // eslint-disable-next-line react/destructuring-assignment
      const filteredCocktail = cocktails.filter((cocktail) =>
        cocktail.strDrink.toLowerCase().includes(value.toLowerCase())
      );
      setCocktailList(filteredCocktail);
    }
  };

  return (
    <form>
      <label htmlFor="searchCocktail" className="SearchBar-label">
        Search cocktail :
      </label>{" "}
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

export default SearchBar;

// import PropTypes from "prop-types";
// import "../styles/SearchBar.css"

// function SearchBar({ displayedCocktail, setDisplayedCocktail, cocktails }) {

//   const handleSubmit = (event) => event.preventDefault();

//   const handleChange = (event) => {
//     const { value } = event.target;
//     if (value === "") {
//       setDisplayedCocktail(cocktails);
//     } else {
//       const filteredCocktail = displayedCocktail.filter((cocktail) =>
//         cocktail.strDrink.toLowerCase().includes(value.toLowerCase())
//       );
//       setDisplayedCocktail(filteredCocktail);
//     }
//   };

//   return (
//     <form className="SearchBar" onSubmit={handleSubmit}>
//       <label htmlFor="searchCocktail" className="SearchBar-label">Search cocktail :</label>
//       <input
//         id="searchCocktail"
//         name="searchCocktail"
//         type="search"
//         placeholder="   Find your cocktail...      🔎"
//         onChange={handleChange}
//         className="SearchBar-input"
//         />
//     </form>
//   );
// }

// SearchBar.propTypes = {
//   displayedCocktail: PropTypes.arrayOf.isRequired,
//   setDisplayedCocktail: PropTypes.func.isRequired,
//   cocktails: PropTypes.arrayOf.isRequired,
// };

// export default SearchBar;
