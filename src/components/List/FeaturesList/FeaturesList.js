import React from "react";

import PropTypes from "prop-types";
import { Container, FeatureTile } from "../../../components";
import "./FeaturesList.scss";

const FeaturesList = props => {
  const _renderFeatureTiles = () => {
    let featureList = [],
      i = 0;
    props.data.forEach(item => {
      featureList.push(
        <div className="tiles" key={i}>
          <Container size="large">
            {_createFeatureTile(item)}
          </Container>
        </div>
      );
      i++;
    });
    return featureList;
  };

  const _createFeatureTile = feature => {
    let featureList = [];
    featureList.push(
      <div key={0}>
        <FeatureTile title={feature.title} desc={feature.desc} />
      </div>
    );
    return featureList;
  };

  return (
    <div className={`features-list-wrapper ${props.column}`}>
      {_renderFeatureTiles()}
    </div>
  );
};

FeaturesList.defaultProps = {
  data: [],
  column: "four"
};

FeaturesList.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.string
};

export default FeaturesList;
