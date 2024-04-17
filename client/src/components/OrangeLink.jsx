import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/OrangeLink.module.css";

function OrangeLink({ name, path }) {
  return (
    <Link
      to={path}
      className={
        path.includes("season") ? "orange-button" : styles.orangeButton
      }
    >
      {name}
    </Link>
  );
}

OrangeLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default OrangeLink;
