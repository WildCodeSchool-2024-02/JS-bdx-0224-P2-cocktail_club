import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(false);
  };

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
          <HashLink to="/#popularcocktails" onClick={closeMenu}>
            Popular
          </HashLink>
        </li>
        <li>
          <HashLink to="/#surpriseCocktail" onClick={closeMenu}>
            Surprise
          </HashLink>
        </li>
        <li>
          <HashLink to="/#mocktails" onClick={closeMenu}>
            Mocktails
          </HashLink>
        </li>
        <li>
          <HashLink to="/#allCocktails" onClick={closeMenu}>
            Cocktails
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
