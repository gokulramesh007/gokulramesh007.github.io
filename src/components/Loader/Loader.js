import React from "react";
import { Images } from "../../constants";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <img src={Images.LOADER} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
