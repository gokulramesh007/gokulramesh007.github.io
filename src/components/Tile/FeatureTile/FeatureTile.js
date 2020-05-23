import React from "react";
import "./FeatureTile.scss";

const FeatureTile = props => {
  return (
    <div className="feature-tile">
      <div className="feature-title">
        {props.title}
      </div>
      <div className="feature-description">
        {props.desc}
      </div>
    </div>
  );
};

export default FeatureTile;
