import React from "react";

import PropTypes from "prop-types";
import { ProductTile } from "../../../components";
import "./ProductList.scss";

const ProductList = props => {
  const _renderProductTiles = () => {
    let productList = [];
    props.data.forEach(item => {
      productList.push(
        <div className="tiles" key={item.id}>
          <ProductTile
            data={item}
            addToWishList={() => {
              props.addToWishList(item);
            }}
            addToCart={() => {
              props.addToCart(item);
            }}
          />
        </div>
      );
    });
    return productList;
  };

  return (
    <div className={`product-list-wrapper ${props.column}`}>
      {_renderProductTiles()}
    </div>
  );
};

ProductList.defaultProps = {
  data: [],
  column: "four"
};

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.string
};

export default ProductList;
