import React from "react";
import { Images, Strings } from "../../constants";
import { withRouter } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  /**** HELPER FUNCTIONS START ****/

  _redirectUser = () => {
    this.props.history.push("/");
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    return (
      <div className="header-container">
        <div className="image-wrapper" onClick={this._redirectUser}>
          <img alt={Strings.APPLICATION.RED_AND_WHITE} src={Images.LOGO} />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
