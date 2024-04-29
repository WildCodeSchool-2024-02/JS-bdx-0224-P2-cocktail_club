import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer>
      <HashLink to="/#seasonClass">
        <img src="./src/assets/images/logo.svg" alt="Logo Cocktail Club" />
      </HashLink>
      <Link to="/contact" className="contact">
        Contact
      </Link>
      <p className="copyright">©CocktailClub - Made with ❤ by Wilders</p>
      <ul>
        <li>
          <Link to="/season/spring">Spring</Link>
        </li>
        <li>
          <Link to="/season/summer">Summer</Link>
        </li>
        <li>
          <Link to="/season/autumn">Autumn</Link>
        </li>
        <li>
          <Link to="/season/winter">Winter</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
