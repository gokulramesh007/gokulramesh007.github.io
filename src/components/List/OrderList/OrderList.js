import React from "react";

import PropTypes from "prop-types";
import { OrderTile } from "../../../components";
import { Strings } from "../../../constants";
import "./OrderList.scss";

const OrderList = props => {
  const _renderCartTiles = () => {
    let cartList = [];
    if (props.data.length === 0) {
      cartList.push(
        <div className="no-cart-items" key={0}>
          {Strings.APPLICATION.SHOPPING_SCREEN.NO_CART_ITEMS}
        </div>
      );
    } else {
      props.data.forEach((item, index) => {
        cartList.push(
          <div className="tiles" key={item.id}>
            <OrderTile
              data={item}
              removeItemFromCart={(item, type) => {
                type = type || Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REMOVE_ALL;
                props.removeItemFromCart(item, type);
              }}
              addToCart={response => {
                props.addToCart(response);
              }}
              disabled={props.disabled}
            />
          </div>
        );
      });
    }
    return cartList;
  };

  return (
    <div className={`rw-order-list-wrapper ${props.type}`}>
      {_renderCartTiles()}
    </div>
  );
};

OrderList.defaultProps = {
  data: [],
  type: "",
  disabled: false
};

OrderList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default OrderList;
