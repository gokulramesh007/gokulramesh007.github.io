import React from "react";
import { Header, Container, Button, OrderList, Loader } from "../components";
import { Strings } from "../constants";
import "./OrdersScreen.scss";

export default class WishlistScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      wishList: []
    };
  }

  /**** LIFECYCLE METHODS START ****/

  componentDidMount = () => {
    let params =
        this.props.location &&
        this.props.location.state &&
        this.props.location.state.data,
      wishList = [];
    if (params) {
      wishList = params;
    }
    this.setState({
      wishList: wishList,
      isLoading: false
    });
  };

  /**** LIFECYCLE METHODS END ****/

  /**** HELPER FUNCTIONS START ****/

  _renderContent = () => {
    let content = [];
    content.push(
      <div className="orders-container" key={0}>
        <div className="order-info-wrapper">
          <Container size="large">
            {this._renderOrderDetails()}
          </Container>
        </div>
        <Button
          size="small"
          text={Strings.APPLICATION.ORDERS_SCREEN.BUTTON.CONTINUE_SHOPPING}
          onClick={() => {
            this.props.history.push(Strings.APPLICATION.ROUTES.HOME_SCREEN);
          }}
        />
      </div>
    );
    return content;
  };

  _renderOrderDetails = () => {
    return this.state.wishList.length > 0
      ? <div className="order-info">
          <div className="details">
            <h1>WISHLIST</h1>
          </div>
          <OrderList data={this.state.wishList} type="row" disabled={true} />
        </div>
      : <div className="order-info">
          <div className="details">
            <h3>No Items in Wishlist!</h3>
          </div>
        </div>;
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
