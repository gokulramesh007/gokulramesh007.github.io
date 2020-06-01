import React from "react";
import PropTypes from "prop-types";
import { ProductCounter } from "../../../components";
import { Strings } from "../../../constants";
import "./OrderTile.scss";

const OrderTile = props => {
  const { name, image, price, count } = props.data;
  return (
    <div className="order-tile">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="product-description">
        <div className="description">
          {name}
        </div>
        <div className="price">
          {price}
        </div>
      </div>
      {props.disabled
        ? <div>
            ({props.data.count || 1})
          </div>
        : <div className="cart-actions">
            <ProductCounter
              count={count}
              addToCart={() => {
                props.addToCart(props.data);
              }}
              removeItemFromCart={() => {
                props.removeItemFromCart(
                  props.data,
                  Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REDUCE
                );
              }}
            />
            <div
              className="remove-button"
              onClick={() => {
                props.removeItemFromCart(
                  props.data,
                  Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REMOVE_ALL
                );
              }}
            >
              REMOVE
            </div>
          </div>}
    </div>
  );
};

OrderTile.defaultProps = {
  data: {},
  disabled: false
};

OrderTile.propTypes = {
  data: PropTypes.object,
  disabled: PropTypes.bool
};

export default OrderTile;
