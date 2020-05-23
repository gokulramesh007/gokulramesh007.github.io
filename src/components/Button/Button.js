import React from "react";
import { Strings } from "../../constants";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./Button.scss";

const Button = props => {
  const _buttonClick = () => {
    props.history.push(Strings.APPLICATION.DETAILS_PAGE_ROUTE + props.params);
  };
  return (
    <button className={`button ${props.theme} ${props.size}`} onClick={_buttonClick}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Shop Now",
  theme: "dark",
  size: ""
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string
};

export default withRouter(Button);
