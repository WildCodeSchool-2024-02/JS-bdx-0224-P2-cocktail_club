import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrangeLink({ name, id }) {
  return (
    <Link to={id ? `cocktails/${id}` : `season/${name}`}className="orange-button" >
      {name}
    </Link>
  );
}

OrangeLink.propTypes = {
  name: PropTypes.string.isRequired, 
  id: PropTypes.number, 
};

OrangeLink.defaultProps = {
  id: 0,
};

export default OrangeLink;

