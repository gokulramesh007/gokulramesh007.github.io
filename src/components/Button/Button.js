import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = props => {
  const _buttonClick = () => {
   props.onClick();
  };
  return (
    <button
      className={`button ${props.theme} ${props.size}`}
      onClick={_buttonClick}
    >
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

export default Button;
