import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrangeLink({ name, path, className }) {
  return (
    <Link to={path} className={className}>
      {name}
    </Link>
  );
}

OrangeLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default OrangeLink;
