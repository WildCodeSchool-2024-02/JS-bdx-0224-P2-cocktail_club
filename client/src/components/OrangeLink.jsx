import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrangeLink({ name, path, classname }) {
  return (
    <Link
      to={path}
      className={classname}
    >
      {name}
    </Link>
  );
}

OrangeLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};

export default OrangeLink;
