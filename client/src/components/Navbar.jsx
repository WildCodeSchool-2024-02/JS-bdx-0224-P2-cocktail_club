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
        <li>
          <HashLink to="/#randomCocktail">Surprise Cocktails</HashLink>
        </li>
        <li className="home-link">
          <HashLink to="/#mocktails">Mocktails</HashLink>
        </li>
        <li>
          <HashLink to="/#allCocktails">All Cocktails</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
