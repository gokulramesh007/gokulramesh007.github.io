import React from "react";
import { Strings, Images } from "../../constants";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = props => {
  return (
    <div className="menu-wrapper">
      <div className="logo">
        <img src={Images.LOGO} alt="logo" />
      </div>
      <div className="categories">
        <Link to={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.SHOPPING_CATEGORY.MEN} className="category">Men</Link>
        <Link to={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.SHOPPING_CATEGORY.WOMEN} className="category">Women</Link>
        <Link to={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.SHOPPING_CATEGORY.KIDS} className="category">Kids</Link>
      </div>
      <div className="about-us-wrapper">
        <Link to={Strings.APPLICATION.SHOPPING_SCREEN.MENU.NAVIGATION.ABOUT_US} className="about-us">About us</Link>
      </div>
    </div>
  );
};

export default Menu;
