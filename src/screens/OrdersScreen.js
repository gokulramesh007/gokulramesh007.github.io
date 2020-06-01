import React from "react";
import {
  Header,
  Container,
  FeaturesList,
  Button,
  OrderList,
  Loader
} from "../components";
import { Strings } from "../constants";
import { fetchFeatures } from "../Services";
import "./OrdersScreen.scss";

export default class OrdersScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      cartItems: []
    };
  }

  /**** LIFECYCLE METHODS START ****/

  componentDidMount = () => {
    let params =
        this.props.location &&
        this.props.location.state &&
        this.props.location.state.cartItems,
      cartItems = [];
    if (params) {
      cartItems = JSON.parse(params);
    }
    this.setState({
      cartItems: cartItems
    });
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
      <div className="orders-container" key={0}>
        <div className="order-info-wrapper">
          <Container size="large">
            {this._renderOrderDetails()}
          </Container>
        </div>
        <FeaturesList data={this.state.data} />
        <Button
          size="small"
          text={Strings.APPLICATION.ORDERS_SCREEN.BUTTON.CONTINUE_SHOPPING}
          route={Strings.APPLICATION.ROUTES.HOME_SCREEN}
        />
      </div>
    );
    return content;
  };

  _addToCart = response => {
    let cartItems = this.state.cartItems,
      newItem = true;

    for (let i = 0; i < cartItems.length; i++) {
      console.log(cartItems[i].id + " " + response.id);
      if (cartItems[i].id === response.id) {
        let count = cartItems[i].count || 1;
        console.log(count);
        if (count < 9) {
          cartItems[i]["count"] = count + 1;
          this.setState({
            cartItems: cartItems
          });
        } else {
          alert(
            "Can't add more than 9 items of the same product! Kindly place a new order."
          );
        }
        newItem = false;
        break;
      }
    }
    if (newItem) {
      this.setState({
        cartItems: cartItems.concat(response)
      });
    }
    console.log("cartItems : ", cartItems);
  };

  _removeItemFromCart = (response, type) => {
    let cartItems = this.state.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === response.id) {
        if (
          type === Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REMOVE_ALL
        ) {
          cartItems.splice(i, 1);
          this.setState({
            cartItems: cartItems
          });
        } else {
          let count = cartItems[i].count || 1;
          cartItems[i].count = count > 1 ? cartItems[i].count - 1 : count;
          if (count - 1 <= 0) {
            cartItems.splice(i, 1);
          }
          this.setState({
            cartItems: cartItems
          });
        }
        break;
      }
    }
  };

  _renderOrderDetails = () => {
    return this.state.cartItems.length > 0
      ? <div className="order-info">
          <div className="details">
            <h1>Order Placed</h1>
            <p>Your Order has been successfully placed.</p>
            <div>
              You can track your orders online through the Invoice Number.
            </div>
            <div>Thank you for shopping with us.</div>
          </div>
          <OrderList
            data={this.state.cartItems}
            type="row"
            removeItemFromCart={(item, type) => {
              type =
                type ||
                Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REMOVE_ALL;
              this._removeItemFromCart(item, type);
            }}
            addToCart={response => {
              this._addToCart(response);
            }}
            disabled={true}
          />
        </div>
      : <div className="order-info">
          <div className="details">
            <h3>Kindly purchase some items to check out!</h3>
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
