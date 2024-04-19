import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <Link to="/season/summer">Summer</Link>
      <Link to="/season/winter">Winter</Link>
      <Link to="/season/autumn">Autumn</Link>
      <Link to="/season/spring">Spring</Link>
    </footer>
  );
}

export default Footer;
