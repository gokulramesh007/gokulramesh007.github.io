import React from "react";
import { MenuItem } from "../../components";
import { Strings, Images } from "../../constants";
import PropTypes from "prop-types";
import "./Menu.scss";

const Menu = props => {
  return (
    <div className="menu-wrapper">
      <div className="logo">
        <img src={Images.LOGO} alt="logo" />
      </div>
      <div className="categories">
        <MenuItem
          text="Men"
          data={props.cartItems}
          path={
            Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION
              .SHOPPING_CATEGORY.MEN
          }
          active={props.category === "men" ? "active" : ""}
        />
        <MenuItem
          text="Women"
          data={props.cartItems}
          path={
            Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION
              .SHOPPING_CATEGORY.WOMEN
          }
          active={props.category === "women" ? "active" : ""}
        />
        <MenuItem
          text="Kids"
          data={props.cartItems}
          path={
            Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION
              .SHOPPING_CATEGORY.KIDS
          }
          active={props.category === "kids" ? "active" : ""}
        />
      </div>
      <div className="about-us-wrapper">
        <MenuItem
          text="About us"
          path={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.ABOUT_US}
        />
        <MenuItem
          text="Wishlist"
          data={props.wishList}
          path={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.WISHLIST}
        />
      </div>
    </div>
  );
};

Menu.defaultProps = {
  cartItems: [],
  wishList: [],
  category: ""
};

Menu.propTypes = {
  cartItems: PropTypes.array,
  wishList: PropTypes.array,
  category: PropTypes.string
};

export default Menu;
