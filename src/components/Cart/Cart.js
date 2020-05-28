import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { OrderList, Button } from "../../components";
import { Strings } from "../../constants";
import "./Cart.scss";

const Cart = props => {
  const _renderRoute = () => {
    let route = {
      pathname: Strings.APPLICATION.ROUTES.ORDER_SCREEN,
      state: { cartItems: JSON.stringify(props.data) }
    };
    return route;
  };

  return (
    <div className="rw-cart-wrapper">
      <div className="rw-cart">
        <div className="cart-title">
          MY CART ({props.data.length})
        </div>
        <OrderList
          data={props.data}
          removeItemFromCart={response => {
            props.removeItemFromCart(response);
          }}
        />
      </div>
      <Button size="large" text="PLACE ORDER" route={_renderRoute()} />
    </div>
  );
};

Cart.defaultProps = {
  data: []
};

Cart.propTypes = {
  data: PropTypes.array
};

export default withRouter(Cart);
