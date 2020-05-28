import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../components";
import { Strings } from "../../../constants";
import "./ProductTile.scss";

const ProductTile = props => {
  const { name, image, price } = props.data;
  return (
    <div className="product-tile">
      <div>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="product-description">
          {name}
        </div>
      </div>
      <div>
        <div className="product-details">
          <span className="price">
            {price}
          </span>
          <span>S, M, L</span>
        </div>
        <div className="action-wrapper">
          <Button
            theme="light"
            text="WISHLIST"
            action={Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.WISHLIST}
            addToWishList={() => {
              props.addToWishList(props.data);
            }}
            size="medium"
          />
          <Button
            text="ADD TO BAG"
            action={
              Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.ADD_TO_CART
            }
            addToCart={() => {
              props.addToCart(props.data);
            }}
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

ProductTile.defaultProps = {
  data: {}
};

ProductTile.propTypes = {
  data: PropTypes.object
};

export default ProductTile;
