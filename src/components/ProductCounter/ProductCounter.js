import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components";
import { Strings } from "../../constants";
import "./ProductCounter.scss";

const ProductCounter = props => {
  return (
    <div className="rw-product-counter-wrapper">
      <Button
        text="-"
        size="tiny"
        action={
          Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REDUCE_ITEM_COUNT
        }
        removeItemFromCart={() => {
          if (props.count < 10) {
            props.removeItemFromCart(Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REDUCE);
          }
        }}
      />
      <span>
        {props.count}
      </span>
      <Button
        text="+"
        size="tiny"
        action={
          Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.INCREASE_ITEM_COUNT
        }
        addToCart={() => {
          if (props.count < 10) {
            props.addToCart();
          }
        }}
      />
    </div>
  );
};

ProductCounter.defaultProps = {
  count: 1
};

ProductCounter.propTypes = {
  count: PropTypes.number
};

export default ProductCounter;
