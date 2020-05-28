import React from "react";
import { Strings } from "../../constants";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./Button.scss";

const Button = props => {
  const _buttonClick = () => {
    if (
      props.action ===
      Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.ADD_TO_CART
    ) {
      props.addToCart();
    } else if (
      props.action ===
      Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.WISHLIST
    ) {
      props.addToWishList();
    } else {
      props.history.push(props.route);
    }
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
  size: "",
  action: "",
  route: ""
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.string
};

export default withRouter(Button);
