import React from "react";
import PropTypes from "prop-types";
import "./OrderTile.scss";

const OrderTile = props => {
  const { name, image, price } = props.data;
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
      <div className="cart-actions">
        <div
          className="remove-button"
          onClick={() => {
            props.removeItemFromCart();
          }}
        >
          REMOVE
        </div>
      </div>
    </div>
  );
};

OrderTile.defaultProps = {
  data: {}
};

OrderTile.propTypes = {
  data: PropTypes.object
};

export default OrderTile;
