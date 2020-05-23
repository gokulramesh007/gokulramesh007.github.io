import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OrdersScreen from "../screens/OrdersScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import { Strings } from "../constants";
import ShoppingScreen from "../screens/ShoppingScreen";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route
        path={Strings.APPLICATION.ROUTES.HOME_SCREEN}
        exact
        component={ShoppingScreen}
      />
      <Route
        path={Strings.APPLICATION.ROUTES.SHOP}
        component={ShoppingScreen}
      />
      <Route
        path={Strings.APPLICATION.ROUTES.ORDER_SCREEN}
        component={OrdersScreen}
      />
      <Route
        path={Strings.APPLICATION.ROUTES.ABOUT_US_SCREEN}
        component={AboutUsScreen}
      />
    </BrowserRouter>
  );
};

export default Routes;
