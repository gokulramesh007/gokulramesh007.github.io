import React from "react";
import { HashRouter, Route } from "react-router-dom";
import OrdersScreen from "../screens/OrdersScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import WishlistScreen from "../screens/WishlistScreen";
import { Strings } from "../constants";

const Routes = () => {
  return (
    <HashRouter>
      <Route
        path={[Strings.APPLICATION.ROUTES.HOME_SCREEN, Strings.APPLICATION.ROUTES.SHOP]}
        exact
        component={ShoppingScreen}
      />
      {/* <Route
        path={Strings.APPLICATION.ROUTES.SHOP}
        component={ShoppingScreen}
      /> */}
      <Route
        path={Strings.APPLICATION.ROUTES.ORDER_SCREEN}
        component={OrdersScreen}
      />
      <Route
        path={Strings.APPLICATION.ROUTES.ABOUT_US_SCREEN}
        component={AboutUsScreen}
      />
      <Route
        path={Strings.APPLICATION.ROUTES.WISHLIST_SCREEN}
        component={WishlistScreen}
      />
    </HashRouter>
  );
};

export default Routes;
