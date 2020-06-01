import React from "react";
import { Header, Container, FeaturesList, Button, Loader } from "../components";
import { Images, Strings } from "../constants";
import { fetchFeatures } from "../Services";
import "./AboutUsScreen.scss";

export default class AboutUsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    };
  }

  /**** LIFECYCLE METHODS START ****/

  componentDidMount = () => {
    this._fetchFeatures();
  };

  /**** LIFECYCLE METHODS END ****/

  /**** SERVICE CALLS START ****/

  _fetchFeatures = () => {
    fetchFeatures()
      .then(response => {
        this.setState({
          isLoading: false
        });
        if (response && response.status === 200) {
          this.setState({
            data: response.data
          });
        } else {
          console.log(response.statusText);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**** SERVICE CALLS END ****/

  /**** HELPER FUNCTIONS START ****/

  _renderContent = () => {
    let content = [];
    content.push(
      <div className="about-us-container" key={0}>
        <img
          src={Images.TOP_BANNER}
          alt={Strings.APPLICATION.ABOUT_US_SCREEN.IMAGES.TOP_IMAGE_ALT_TEXT}
        />
        <img
          src={Images.MIDDLE_BANNER}
          alt={Strings.APPLICATION.ABOUT_US_SCREEN.IMAGES.MIDDLE_IMAGE_ALT_TEXT}
        />
        <FeaturesList data={this.state.data} />
        <Button size="small" route={Strings.APPLICATION.DETAILS_PAGE_ROUTE} />
      </div>
    );
    return content;
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Header />
        <Container size="large" padding="padding-large">
          {this._renderContent()}
        </Container>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}
