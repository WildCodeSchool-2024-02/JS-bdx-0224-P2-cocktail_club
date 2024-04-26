import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav id="navbar">
      <Link to="/">
        <img src="./src/assets/images/logo.svg" alt="Logo Cocktail Club" />
      </Link>
      <h1>COCKTAIL CLUB</h1>
      <button type="button" onClick={() => setMenuState(!menuState)}>
        {menuState ? "x" : "≡"}
      </button>
      <ul className={`burger-menu${menuState ? " active" : ""}`}>
        <li className="mocktail-link">
          <Link to="/mocktail">Mocktail</Link>
        </li>
        <li className="random-link">
          <Link to="/randomCocktail">Surprise cocktail</Link>
        </li>
        <li>
          <HashLink to="/#allCocktails">All our club cocktails</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
