import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = props => {
  return (
    <Link
      to={{
        pathname: props.path,
        state: { data: props.data }
      }}
      className={`category ${props.active}`}
    >
      {props.text}
    </Link>
  );
};

MenuItem.defaultProps = {
  text: "",
  path: "",
  data: [],
  active: ""
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  data: PropTypes.array,
  active: PropTypes.string
};

export default MenuItem;
